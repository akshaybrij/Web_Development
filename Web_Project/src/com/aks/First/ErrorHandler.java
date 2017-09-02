package com.brij;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.*;
class ErrorHandler extends HttpServlet {
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException {
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		out.println("<h1>Error</h1>");
		out.println("<h2>Internal Error...</h2>");
	}
}