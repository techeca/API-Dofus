import { Harness } from '../models/harness.js';

export async function getHarness(req, res){
    const resp = await Harness.find({});
    return res.status(200).send(resp);
};

export async function getHarnessById(req, res){
    const resp = await Harness.find({ ankamaId: req.params.id });
  return res.status(200).send(resp);
}
