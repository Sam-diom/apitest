import { runInNewContext } from "vm";
import { addNewContact, getContact} from '../controllers/crmControllers.js';

const routes = (app) => {
    app
      .route("/contact")

      .get((req, res, next) => {
        console.log(`Request de : ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      }, getContact)

      .post(addNewContact);
    
     app.route("/contact/:id")

       .put((req, res) => res.send('demande PUT avec succès'))
       .delete((req, res) => res.send('demande DELETE avec succès'));
    
}
export default routes;