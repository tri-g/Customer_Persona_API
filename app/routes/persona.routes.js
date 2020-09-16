module.exports = app => {
  const cust_persona = require("../controllers/dcp.controllers.js");

  var router = require("express").Router();
  router.get("/persona", cust_persona.listall);
  router.get("/persona/:client_id", cust_persona.listbyid);
  router.get('/login',cust_persona.login);
  router.get("/ids/",cust_persona.listcid);
  router.get("/ids/:client_id",cust_persona.cid);
  router.get("/getmapdetails/",cust_persona.getmapdetails);



 /* router.get("/published", tutorials.findAllPublished);

  router.get("/:id", tutorials.findOne);

  router.put("/:id", tutorials.update);

  router.delete("/:id", tutorials.delete);

  router.delete("/", tutorials.deleteAll);*/

  app.use('/api/dcp', router);
};