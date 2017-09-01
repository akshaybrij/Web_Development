package com.aks.First;
import javax.servlet.http.*;
import java.io.*;
import java.util.Enumeration;

import javax.servlet.*;
public class Second extends HttpServlet{
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
		response.setContentType("text/html");
		response.sendError(403,"Forbidden");
		PrintWriter out=response.getWriter();
		Enumeration<String> paramnames=request.getParameterNames();
		while(paramnames.hasMoreElements()) {
			String pname=paramnames.nextElement();
			String[] pvalue=request.getParameterValues(pname);
			if(pvalue.length==1) {
				out.print(pname);
				out.print(" ");
				out.println(pvalue[0]);
			}
			else {
				for(int i=0;i<pvalue.length;i++) {
					out.print(pvalue[i]);
				}
			}
		}
	}
}