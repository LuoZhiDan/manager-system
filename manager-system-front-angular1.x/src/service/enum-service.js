import errorObj from '../common/config/errorcode.config';
import enumObj from '../common/config/enum.config';

export default function(){
    this.get = (name) => {
        return enumObj[name] || errorObj[name];
    }
}