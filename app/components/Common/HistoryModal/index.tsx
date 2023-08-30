import { Modal, Button } from 'antd';

interface SearchHistoryModalProps {
    searchHistory: string[];
    visible: boolean;
    onClose: () => void;
}

const SearchHistoryModal: React.FC<SearchHistoryModalProps> = ({
    searchHistory,
    visible,
    onClose,
}) => {
    return (
        <Modal
            title="Search History"
            visible={visible}
            onCancel={onClose}
            footer={[
                <Button key="close" onClick={onClose}>
                    Close
                </Button>,
            ]}
        >
            <ul>
                {searchHistory.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </Modal>
    );
};

export default SearchHistoryModal;
