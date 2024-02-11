import { Form, Button, Container } from 'react-bootstrap'

export default function JobForm ({ job, handleChange, handleSubmit, heading }) {

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control 
                        placeholder="What is your job's name?"
                        id="name"
                        name="name"
                        value={ job.name }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Type: </Form.Label>
                    <Form.Control 
                        placeholder="What is your job's type?"
                        id="type"
                        name="type"
                        value={ job.type }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Age: </Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="How old is your job?"
                        id="age"
                        name="age"
                        value={ job.age }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Check 
                        label="Is this job adoptable?"
                        name="adoptable"
                        defaultChecked={ job.adoptable }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}