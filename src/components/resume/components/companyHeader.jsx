import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CompanyHeader = ({ company }) => {
  return (
    <>
      <h3 class="job-title job-titles">{company.designation}</h3>
      <div class="job-meta">
        <span>
          <a rel="noreferrer" target="_blank" href={company.url}>
            {company.name}
          </a>
        </span>
        <span style={{display:'flex', alignItems: "center" }} ><CalendarMonthIcon />&nbsp;{company.date}</span>
      </div>
    </>
  );
};

export default CompanyHeader;
