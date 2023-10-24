export default function RouterHelper(server,router){
    server.post('/landlord/login',async (req, res) => {
         const landlordData = await router.db.get('authLogin'); // [{}][0]
        res.status(201).json(landlordData);
      });
      server.post('/tenant/login', (req, res) => {
 
        res.status(201).json(router.db.get('tenant'));
      });
      server.post('/caretaker/login', (req, res) => {
 
        res.status(201).json(router.db.get('caretaker'));
      });
      server.post('/agent/login', (req, res) => {
 
        res.status(201).json(router.db.get('agent'));
      });
}