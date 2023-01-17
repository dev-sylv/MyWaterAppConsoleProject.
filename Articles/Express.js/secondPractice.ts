import expressTS, {Application, Response, Request} from "express";

const PORT: number = 2023;

const server: Application = expressTS();

server.use(expressTS.json());

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

server.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "My server is up and running",
    })
});

// Get:
server.get("/accessCompRecords", (req: Request, res: Response) =>{
    try {
        return res.status(200).json({
            message: "Got The company Records Successfully",
            data: CompanyRecords,
        })
    } catch (error) {
        return res.status(400).json({
            message: "Bad request",
            data: error,
        })
    }
});

// Single Get:
server.get("/accessCompRecords/:companyID", (req: Request, res: Response) =>{
    try {
        const companyIDs = parseInt(req.params.companyID);
        const companyData = CompanyRecords.find((comp) => comp.id === companyIDs);

        if (companyData) {
           return res.status(200).json({
            message: `Successfully got records of company with ID: ${companyIDs}`,
            data: companyData,
           }) 
        } else {
            return res.status(400).json({
                message: `User Not found`
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: `An error occured: ${error}`
        });
    }
});

// POST:
server.post("/addedNewCompany", (req: Request, res: Response) =>{
    try {
        const NewCompany = {
            id: CompanyRecords.length + 1,
            company: req.body.company,
            mission: req.body.mission,
            stack: req.body.stack,
        };
        CompanyRecords.push(NewCompany);
        res.status(201).json({
            message: `New company has been added to the Company Records`,
            data: CompanyRecords,
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured while posting",
            data: error.message,
        })
    }
});

// patch method:
server.patch("/updateCompanyRecords/:companyID", (req: Request, res: Response) =>{
    try {
        const companyIDs = parseInt(req.params.companyID);
        const company: any = CompanyRecords.find((comp) => comp.id === companyIDs);
        company.id = company.id,
        company.company = req.body.company,
        company.section = req.body.section,
        company.stack = req.body.stack

        return res.status(200).json({
            message: "Company records updated successfully",
            data: company
        });
    } catch (error) {
        return res.status(400).json({
            message: `An error occured while updating company records.`,
            data: error.message,
        })
    }
});

server.delete("/deleteACompanyRecord/:companyID", (req: Request, res: Response) =>{
    try {
        const companyIDs = parseInt(req.params.companyID);
        const company: any = CompanyRecords.find((comp) => comp.id === companyIDs);

        const position = CompanyRecords.indexOf(company);
        CompanyRecords.splice(position, 1);

        return res.status(200).json({
            message: `Deleted company with ID OF ${company} from CompanyRecords`,
            data: CompanyRecords,
        })
    } catch (error) {
        return res.status(400).json({
            message: "Error occured while deleting from company DB",
            data: error.message,
        })
    }
})

server.listen(PORT, () =>{
    console.log(`LISTENING TO MY SERVER PORT: ${PORT}`);
})