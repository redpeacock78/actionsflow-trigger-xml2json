const { resolve } = require("path");
const Trigger = require("../index");
const { getTriggerConstructorParams } = require("actionsflow-core");
test("test trigger run", async () => {
  const triggerConstructorParams = await getTriggerConstructorParams({
    name: "xml2json",
    cwd: resolve(__dirname, "fixtures"),
    workflowPath: resolve(__dirname, "fixtures/workflows/workflow.yml"),
  });
  const trigger = new Trigger(triggerConstructorParams);
  const result = await trigger.run();
  expect(result);
});
