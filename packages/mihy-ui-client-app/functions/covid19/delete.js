const { Router } = require("express");

const remove= ({ covid19Ref }) => {
  let api = Router();
  const set = require("lodash/set");
  const omit=require("lodash/omit");
  const isEmpty = require("lodash/isEmpty");
  const {getMdmsData} =require("./utils");

  api.post("/_delete", ({ body }, res) => {
    try {
      const { mdmsData = {} } = body;
      if (!isEmpty(mdmsData)) {
        const pathRef = covid19Ref.child(mdmsData.path);
        const { moduleName, masterName, data=[] } = mdmsData;
        console.log(moduleName);
        if (moduleName) {
          const moduleRef = pathRef.child(moduleName);
          if (masterName) {
            console.log(masterName);
            const masterRef = moduleRef.child(masterName);
            if (data.length > 0) {
              for (var l = 0; l < data.length; l++) {
                  masterRef.child(data[l].value).remove();
              }
            } else {
              return res.status(400).send("Please send master data");
            }
          } else {
            return res.status(400).send("Please send master name");
          }
        } else {
          return res.status(400).send("Please send module name");
        }
        return res.status(200).send("Remove successfully");
      } else {
        return res.status(400).send("Please send mdms data");
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  });

  return api;
};

module.exports=remove;
