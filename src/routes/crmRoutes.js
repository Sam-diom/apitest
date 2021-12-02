import { runInNewContext } from "vm";
import { addNewContact, deleteContact, getContact, getContactWithId, updateContact} from '../controllers/crmControllers.js';

const routes = (app) => {
    app
      .route("/contact")

      .get((req, res, next) => {
        console.log(`Request de : ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      }, getContact)

      .post(addNewContact);
    
  app.route("/contact/:contactId")
    .get(getContactWithId)
       
    .put(updateContact)
    .delete(deleteContact);
}
export default routes;