import { Modal, Form, Select, Button } from "antd";

const { Option } = Select;

interface EditModalProps {
    isModalVisible: boolean;
    handleCancel: () => void;
    handleok: () => void
}

function EditModal({ isModalVisible, handleCancel, handleok }: EditModalProps) {

    return (
        <Modal
            title="Edit Dosage" visible={isModalVisible}
            onOk={handleok} onCancel={handleCancel}
            footer={[
                <Button key="submit" type="primary" onClick={handleok} block>Save</Button>
            ]}
        >
            <Form layout="vertical">
                <Form.Item label="Form">
                    <Select placeholder="Select Form">
                        <Option value="form1">Form 1</Option>
                        <Option value="form2">Form 2</Option>
                        <Option value="form3">Form 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Dosage">
                    <Select placeholder="Select Dosage">
                        <Option value="dosage1">Dosage 1</Option>
                        <Option value="dosage2">Dosage 2</Option>
                        <Option value="dosage3">Dosage 3</Option>
                    </Select>

                </Form.Item>
                <Form.Item label="Quantity">
                    <Select placeholder="Select Quantity">
                        <Option value="quantity1">Quantity 1</Option>
                        <Option value="quantity2">Quantity 2</Option>
                        <Option value="quantity3">Quantity 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Type">
                    <Select placeholder="Select Type">
                        <Option value="type1">Type 1</Option>
                        <Option value="type2">Type 2</Option>
                        <Option value="type3">Type 3</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default EditModal;
