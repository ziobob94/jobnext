import { sha256 } from "js-sha256";
import { check } from "express-validator";

import {
    PASSWORD_IS_EMPTY,
    PASSWORD_LENGTH_MUST_BE_MORE_THAN_8,
    EMAIL_IS_EMPTY,
    EMAIL_IS_IN_WRONG_FORMAT,
} from "./constants.js";

export const generateHashedPassword = ( pass: any): any => sha256(pass);

export function generateServerErrorCode( res: any,
                                         code: any,
                                         fullError: any,
                                         msg: any,
                                         location: string = "server"): any
{
    const errors: any = {};
    errors[location] = {
        fullError,
        msg,
    };
    return res.status(code).json({
        code,
        fullError,
        errors,
    });
}
// ================================
// Validation:
// Handle all validation check for the server
// ================================

export const registerValidation: any = [
    check("email")
        .exists()
        .withMessage(EMAIL_IS_EMPTY)
        .isEmail()
        .withMessage(EMAIL_IS_IN_WRONG_FORMAT),
    check("password")
        .exists()
        .withMessage(PASSWORD_IS_EMPTY)
        //TODO modify min to 8
        .isLength({ min: 1 })
        .withMessage(PASSWORD_LENGTH_MUST_BE_MORE_THAN_8),
];
export const loginValidation: any = [
    check("email")
        .exists()
        .withMessage(EMAIL_IS_EMPTY)
        .isEmail()
        .withMessage(EMAIL_IS_IN_WRONG_FORMAT),
    check("password")
        .exists()
        .withMessage(PASSWORD_IS_EMPTY)
        //TODO modify min to 8
        .isLength({ min: 1 })
        .withMessage(PASSWORD_LENGTH_MUST_BE_MORE_THAN_8),
];
