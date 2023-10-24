export default function RouterHelper(server,router){
    server.post('/landlord/login', (req, res) => {
         const landlordData =JSON.parse(router.db.get('authLogin'));
        res.status(201).json({
          data:landlordData,
          test:landlordData[0]
        });
      });
      server.post('/tenant/login', (req, res) => {
 
        res.status(201).json(router.db.get('tenant')[0]);
      });
      server.post('/caretaker/login', (req, res) => {
 
        res.status(201).json(router.db.get('caretaker')[0]);
      });
      server.post('/agent/login', (req, res) => {
 
        res.status(201).json(router.db.get('agent')[0]);
      });
}