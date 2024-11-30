import Form from 'react-bootstrap/Form';

const DiaryEntry = () => {
    return (
      <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Entry Title</Form.Label>
        <Form.Control  placeholder="Enter your title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="mainEntry">
        <Form.Label>Entry Body</Form.Label>
        <Form.Control  placeholder="Write whatever you feel you want too..." />
      </Form.Group>
    </Form>
    );


  };
  
  export default DiaryEntry;