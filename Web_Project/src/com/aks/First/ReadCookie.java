package com.brij;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.*;
public class ReadCookie extends HttpServlet{
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
	response.setContentType("text/html");
	PrintWriter out=response.getWriter();
	Cookie cookie=null;
	Cookie[] cookies=null;
	cookies=request.getCookies();
	for(int i=0;i<cookies.length;i++) {
		cookie=cookies[i];
		out.println("Name"+cookie.getName());
		out.println("Value"+cookie.getValue());
	}
}
}
