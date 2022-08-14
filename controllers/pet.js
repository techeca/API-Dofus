import { Pet } from '../models/pet.js';

//Obtener todas las pets
export async function getPets(req, res){
    const resp = await Pet.find({});
    //console.log(req)
  return res.status(200).send(resp);
}

//Obtener pet por id
export async function getPetById(req, res){
    const petId = req.params.id;
    //if(req.params.id)
    const resp = await Pet.find({ ankamaId: req.params.id });
      if(isNaN(req.params.id)) return res.status(500).send({message:'Error en la petición'});
      //if(!pets) return res.status(404).send({message:'La mascota no existe'});
      return res.status(200).send(resp)
}
