package command;


import javax.servlet.http.HttpServletRequest;

import enums.Domain;
import service.MemberServiceImpl;

public class ListCommand extends Command {
	public ListCommand(HttpServletRequest request) {
		setRequest(request);
		setDomain(request.getServletPath().substring(1, request.getServletPath().indexOf(".")));
		System.out.println("도메인 : " + domain);
		setAction(request.getParameter("action"));
		setPage(request.getParameter("page"));
		execute();
	}
	@Override
	public void execute() {
		switch (Domain.valueOf(domain.toUpperCase())) {
		case MEMBER :
			System.out.println("리스트 안으로 진입");
			request.setAttribute("list", MemberServiceImpl.getInstance().memberList());
			break;
		default:
			break;
		}
		super.execute();
	}
}
