# Independent author final review — interior waterborne wall painting service

## Method and identity review

Scope is contractor brush/roller waterborne coating of installed gypsum/plaster interior walls, including normal minor preparation and actual primer/coats/drying/cleanup through acceptance. Functional output is measured accepted net area, counted once across coats and rework. The parent wall is a starting state, not a new manufactured wall exchange. Reference row is finish / outputs / product / accepted_painting_service, amount 1 m2. EN and ZH names link exactly to their own service card.

16 cards belong to two actual nodes. Every card links to its own node protocol. cp_prepare references the independently signed cp_finish accepted-area survey without claiming to produce final service. Wet-preparation wastewater has its own prepare output. Both collection protocols have node-specific raw fields and methods. Net accepted area, stock reconciliation, actual coat count, drying, waste handovers and rework remain foreground facts.

All cards carry Range role, numeric lower/upper, unit, reference basis and evidence. Fifteen provisional broad intervals explicitly use reasoned_estimate, without invented sources; they cannot replace measurements. Reference 1..1 m2 is calculated_from_collection using cp_finish, with no false UFGS numeric attribution. Source references support process/method rules only. Wet supplied mass, dry solids, content basis and emissions remain distinct.

Fixed flow identities: 0. Explicit unresolved identities: 16, registered by actual row id with specific reasons. Fifteen nonreference initial lookups and four bounded refinements succeeded. Reference used main reviewer's separate one initial and one refinement; no author reference search occurred. Detail reads confirmed three ambiguous Mass-only water candidates and CN-specific low-voltage supply; these were rejected for universal binding. Umbrella paint, material, residue and emission cards are not assigned one convenient UUID. VOC remains actual species plus receiving medium; particle releases require size/composition/air evidence. Full counts and decisions: 54730-identity-audit.json.

Area reference property/group/m2 and transport mass*distance property/group/t*km were read from live official support rows. Transport group 838aaa21 has reference t*km factor1 and kg*km factor0.001. UUID dataset versions remain outside canonical content. No new Flow Set, parameterized binding or invented UUID is present.

## Manual module obligation closure

| Module | Obligation | Authored answer |
| --- | --- | --- |
| surface-finishing-node | parent state | section5 installed gypsum/plaster wall ready for minor preparation, excluding manufacture/installation |
| surface-finishing-node | finished output and handoff | section3 and accepted_painting_service at drying/cleanup/defect-closed acceptance |
| surface-finishing-node | finishing inputs and service roles | prepare and finish material/water/electricity/transport cards and process roles |
| surface-finishing-node | residues/emissions/rejects | distinct solid/wastewater and species/particle cards; off-spec retained as rework, excluded from accepted area |
| batch-continuous-production | mode | section6 room/colour/coating-system campaign |
| batch-continuous-production | event linkage | campaign/node/event ids for all issues, layers, cleanup and colour change in section6 and node protocols |
| batch-continuous-production | attribution/yield | campaign_attribution, cp_finish measured net area, stock and rejected-area reconciliation |
| batch-continuous-production | duplicate burden prevention | owned shared-event total and one accepted-area count in allocation/validation |
| rework-reject-routing | rejected state | off-spec coating prior to accepted defect closure |
| rework-reject-routing | destination | same finish rework loop; discarded material exits producing-node waste; real downgrade/recovery destination required |
| rework-reject-routing | graph linkage | section6 node/campaign loop and waste-gate cards |
| rework-reject-routing | accepted output exclusion | reference_conformance rejects unresolved or duplicate coat area |
| shared-infrastructure-attribution | asset | task lighting, ventilation, electricity supply and reusable tools |
| shared-infrastructure-attribution | consumers and period | prepare and finish nodes, campaign period and explicit consumer shares |
| shared-infrastructure-attribution | attribution evidence | direct meters/power-time, load-distance and documented usage/replacement; homogeneous area allocation requires evidence |
| shared-infrastructure-attribution | duplicate burden prevention | one event owner, reconciled shares and campaign_completeness check |

Advisory module checklist retains four selected modules, zero unresolved modules. Manual closure answers obligations; it does not assert actual project facts or upgrade candidate module status.

## Bilingual, generated projection and checks

All sixteen cards, source ids, quantitative constants, protocol ids and process boundaries align between EN/ZH. Normative boundary/allocation/validation rule-id sequences are equal. Canonical projection was initialized using official parsePcrMarkdownToStructured and structuredProjectionYaml, then regenerated through official sync; it was not hand-edited.

Final target check and repeated-sync digest evidence: 54730-final-readback.json and 54730-check-final.json. Repository-wide validate/tests were intentionally not run under the user's target-only instruction. No mapping/catalog/alias/index edits, branch changes, commit, publication, or active/reviewed lifecycle promotion were made. CPC decision remains docs/adr/cpc-54730.md draft for main semantic review.
