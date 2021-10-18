import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-primary fw-bold fs-2 py-3'><span className='border-0 border-bottom border-3 border-primary'>FAQs</span></h2>
            <h5 className='fs-5 lh-lg mb-5'>Please review the frequently asked questions below.</h5>
            <Accordion className='text-start'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>My doctor provided a test request form for a different laboratory. My insurance requires I use Comfey Lab. Do I need to go back to my doctor for a Comfey Lab test request form?</Accordion.Header>
                    <Accordion.Body>
                    Test requests can be accepted on non-Comfey Lab forms. Our staff will verify the testing details with the ordering provider. Please bring the test request form your doctor provided, along with your insurance information and identification, to your local Comfey Lab facility. You can use our website to find locations near you and to schedule appointments.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>My doctor ordered tests, but I never had the testing done. I still have the old test order form. Can I come in and be tested or do I need to go back to my doctor for a new form?</Accordion.Header>
                    <Accordion.Body>
                    Most test orders are valid for at least six months (unless your doctor has specified otherwise). If your lab testing order is more than six months old, please contact your doctor for a new form.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>What should I expect when I have a lab test?</Accordion.Header>
                    <Accordion.Body>
                    Your role in the performance of a lab test is to provide a specimen that will be analyzed in a laboratory. The specimen you provide might be a small amount of a body fluid, such as blood, saliva, semen, or urine, or a sample of stool or hair. You can be assured that Comfey Lab staff will make the specimen collection process as safe, quick, and comfortable as possible, while safeguarding your dignity and privacy. For more information about what to expect,
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Do I need to do anything special to prepare for a lab test?</Accordion.Header>
                    <Accordion.Body>
                    Prior to visiting Comfey Lab, you may want to ask your physician specific questions about the testing being performed. Sometimes special preparation is required to improve the accuracy of a test. For more information.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>What items do I need to take to the Comfey Lab patient service center for specimen collection?</Accordion.Header>
                    <Accordion.Body>
                    When visiting a patient service center, you should bring the following information with you:
                    <ul>
                        <li>The Comfey Lab test request form from a health care professional requesting laboratory testing</li>
                        <li>A current insurance identification card (Medicare, private insurance or HMO/PPO)</li>
                        <li>A photo ID (for example, a driver's license or employee identification badge)</li>
                        <li>A health spending account card, credit card, or debit card</li>
                    </ul>
                    Children must be supervised at all times while at our labs. Please plan ahead. Note: You may not bring children inside the collection area during a drug screen procedure.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>Are there special requirements for collecting specimens from minors?</Accordion.Header>
                    <Accordion.Body>
                    Generally, minors must be accompanied by their parent or legal guardian. Comfey Lab is required to obtain authorization for the collection procedure and the billing of tests as ordered by a physician. If you are not the child’s legal guardian, you may need to provide a notarized statement signed by the minor’s parent or legal guardian that authorizes you to provide this permission.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FAQ;