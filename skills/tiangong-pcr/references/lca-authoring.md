# Guide LCA data authoring

Understand the requested product, intended use, geography, time, reference amount
and declared gate. Ask only for missing choices that materially change the work;
continue with useful collection guidance while those choices remain unresolved.
When a broad product has several plausible gates, make the provisional selection
visible and explain how another selection would change the requirements.

Read the selected PCR's overview, reference-flow and boundary topics. Identify
applicable processes and inventory roles, then consult collection, calculation,
allocation and quality topics as the task needs them. A PCR's representative
reference amount is a modeling basis, not permission to copy example quantities
as measured data or to force a different gate onto the user's task.

The deliverable may be a table, CSV, calculation workbook or JSON suited to the
user. Include quantities with units and basis, source evidence, calculations,
assumptions and outstanding collection needs. A collection template is useful
when measurements are missing; label it as a template/draft. Use null or an
explicit missing marker for unprovided quantities, preserving legitimate zeros.
Do not manufacture primary observations, supporting flow identities or an LCIA
result when the required data and method are absent.

Use the CLI's calculation request format for reproducible normalization or
conversion after establishing physical equivalence. Keep the original amount and
calculation evidence. A numerical residual needs a declared boundary, unit/basis,
accumulation term, uncertainty and appropriate tolerance before interpretation.

Before handoff, explain what is supported, provisional and still missing. Review
the applicable methodology in context; the optional legacy validate-dataset
diagnostic does not replace that review. Add TIDAS mapping only when requested.
