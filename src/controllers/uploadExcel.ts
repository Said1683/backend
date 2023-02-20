import express from 'express';
import { Request, Response } from 'express';
import xlsx from 'xlsx';
import fs from 'fs';

export const uploadExcel = async (req: Request, res: Response) => {

    res.json('cargarexcel')
}

