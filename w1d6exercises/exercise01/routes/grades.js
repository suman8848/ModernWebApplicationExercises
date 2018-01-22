const express = require('express');
const GradeMgr = require('../entity/grades');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

let gradesMgr = new GradeMgr();
let router = express.Router();

let checkOp = [
	check('id').exists(),
	check('name').exists(),
	check('course').exists(),
	check('grade').exists(),
  	check('id', 'Id must be atleast one character').isLength({ min: 1 }),
  	check('name', 'name must be atleast one character').isLength({ min: 1 }),
  	check('course', 'course must be atleast one character').isLength({ min: 1 }),
  	check('grade', 'grade must be atleast one character').isLength({ min: 1 }),
  	sanitize('id').toInt()
];

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.status(200).json(gradesMgr.getGrades());
});

router.post('/', checkOp, function(req, res, next) {

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const gd = matchedData(req);
			let q = gradesMgr.getGradesById(gd.id);

  			if(q != null) {
  				return res.status(422).json({ errors: "id is already present"});
  			}

	  		gradesMgr.add(gd);
	  		res.status(200).json({"message": "done"});
	  	}
});

router.put('/', checkOp, function(req, res, next) {
  	const errors = validationResult(req);
		if (!errors.isEmpty()) {
		    return res.status(422).json({ errors: errors.mapped() });
		}else {
			const gd = matchedData(req);
			let q = gradesMgr.getGradesById(gd.id);

  			if(q == null) {
  				return res.status(422).json({ errors: "id is not present to modify"});
  			}

	  		gradesMgr.modify(gd);
	  		res.status(200).json({"message": "done"});
	  	}
});

router.delete('/:id', function(req, res, next) {
	console.log("**********************************************************************************");
	//console.log(req);
	console.log("*********************************************************************");
	console.log(req.params);
	console.log("************************************************************");
	let id = req.params.id;
	let q = gradesMgr.getGradesById(id);
	
	if(q == null) {
		return res.status(422).json({ errors: "id is not present to delete"});
	}

	gradesMgr.remove(id);
  	res.status(200).json({"message": "done"});
});

module.exports = router;