import express, {Application, Request, Response} from "express";

const PORT: number = 3020;

const myServer: Application = express();

myServer.use(express.json());

interface company{
    id: number,
    company: string,
    mission: string,
    stack: string,
};

const CompanyRecords: company[] =[
    {
        id: 1,
        company: "CodeLab",
        mission: "Redeeming time",
        stack: "Full stack software engineers",
    },
    {
        id: 2,
        company: "Adanian Labs",
        mission: "Revamping innovation power",
        stack: "UI/UX Designers",
    },
    {
        id: 3,
        company: "Andela",
        mission: "Connecting Brilliance with opportunity",
        stack: "Senior Developers",
    },
    {
        id: 4,
        company: "Polygon",
        mission: "Bringing in WEB 3.0",
        stack: "BlockChain Tech",
    },
];

myServer.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "Server is up and running",
    })
});

// GET:
myServer.get("/readCompanyData", (req: Request, res: Response) =>{
    try {
        return res.status(200).json({
            message: "Company records successfully gotten from the DB",
            data: CompanyRecords,
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error.message
        })
    }
});

// Single Get:
myServer.get("/readCompanyData/:companyID", (req: Request, res: Response) =>{
    try {
        const companyIDs = parseInt(req.params.companyID);
        const CompanyData  = CompanyRecords.find((company) => company.id === companyIDs);

       if (CompanyData) {
        return res.status(200).json({
            message: `Company Data with ID OF ${companyIDs} successfully accessed from DB`,
            data: CompanyData,
        })
       } else {
        return res.status(404).json({
            message: `Company Data with ID OF ${companyIDs} NOT FOUND`,
        })
       }
    } catch (error) {
        return res.status(400).json({
            message: "An error occured while trying to access the DB",
            data: error.message,
        })
    }
});

// POST:
myServer.post("/addToCompanyRecords", (req: Request, res: Response) : Response =>{
    try {
        const createStudent = {
            id: CompanyRecords.length + 1,
        company: req.body.company,
        mission: req.body.mission,
        stack: req.body.stack,
        }
        
        
       CompanyRecords.push(createStudent)
        
        return res.status(201).json({
            message: `Successfully wrote to Company Database`,
            data: CompanyRecords,
        });
    } catch (error) {
        return res.status(400).json({
            message: `An error occured: ${error.message}`
        });
    }
});

// UPDATE:
myServer.patch("/updateCompanyRecords/:companyID", (req: Request, res: Response) =>{
    try {
        const companyIDs = parseInt(req.params.companyID);
        const company: any = CompanyRecords.find((comp) => comp.id === companyIDs);

        company.id = company.id;
        company.company = req.body.company;
        company.section = req.body.section;
        company.stack = req.body.stack;

        return res.status(200).json({
            message: `Suucessfully updated the database`,
            data: company,
        })
    } catch (error) {
        return res.status(400).json({
            message: `An error occured while updating a company record`,
            data: error.message,
        })
    }
});

// DELETE:
myServer.delete("/deleteACompanyRecord/", (req: Request, res: Response) =>{
    try {
     
        CompanyRecords.splice(0, CompanyRecords.length);

        return res.status(200).json({
            message: `Company with ID OF  successfully deleted`,
            data: CompanyRecords,
        })
    } catch (error) {
        return res.status(400).json({
            message: `An error occured while ${req.method}ing a company record`,
            data: error.message,
        })
    }
})



myServer.listen(PORT, () =>{
    console.log(`LISTENING TO PORT: ${PORT}`);
})