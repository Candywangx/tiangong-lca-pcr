---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.seats-primarily-with-metal-frames
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 完整粉末涂层点焊冲压钢制椅制造

## 1. 范围与适用性

制造全新、无软包、固定四脚完整座椅：板带钢成形椅腿与横撑、冲压钢座面、钢靠背及支撑，采用电阻点焊和热铆连接、热固性环氧粉末涂层并装有橡胶脚垫。从真实外购钢板/钢带、铆钉、整份制剂与供货脚垫开始，包含切割、弯曲、冲孔、冲压、点焊、热铆、实际脱脂/干燥/打磨、喷粉及实际热固化、最终装配与唯一首次质量放行。委外涂装作为具有自身实际记录的前景阶段纳入，不能用采购成品椅替代制造。

排除裸框架、单独销售的座面/靠背、无靠背凳、钢管框架/PP壳体或木座面变型、购买成品椅包装、旋转/脚轮/躺靠/折叠机构、软包、沙发床、车辆座椅、轮椅以及医用或儿童专用安全产品。户外电泳、镀锌、液漆及仅UV固化属于其他路线，须重新判断适用性。安装、使用、寿命期坐用服务和报废不属于本制造参考。

该边界为透明的技术综合。Nicolle提供整椅制造实例，并非强制SKU，也不证明未来场址使用其配方或设备。其两份说明给出不同炉温，均不作为默认值。TIGER提供独立涂料加工语境，不证明Nicolle使用该涂料。不设默认单椅质量、强度、寿命、膜厚、固化周期、配方、成品率、能耗强度、VOC限值或认证。UN分类仅用于范围语境，不批准方法，也不表示覆盖整个子类。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.seats-primarily-with-metal-frames |
| classification_refs | CPC 3.0 38111；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-38111.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 制造全新、无软包、固定四脚完整座椅：板带钢成形椅腿与横撑、冲压钢座面、钢靠背及支撑，采用电阻点焊和热铆连接、热固性环氧粉末涂层并装有橡胶脚垫。从真实外购钢板/钢带、铆钉、整份制剂与供货脚垫开始，包含切割、弯曲、冲孔、冲压、点焊、热铆、实际脱脂/干燥/打磨、喷粉及实际热固化、最终装配与唯一首次质量放行。委外涂装作为具有自身实际记录的前景阶段纳入，不能用采购成品椅替代制造。 |
| excluded_products | 排除裸框架、单独销售的座面/靠背、无靠背凳、钢管框架/PP壳体或木座面变型、购买成品椅包装、旋转/脚轮/躺靠/折叠机构、软包、沙发床、车辆座椅、轮椅以及医用或儿童专用安全产品。户外电泳、镀锌、液漆及仅UV固化属于其他路线，须重新判断适用性。安装、使用、寿命期坐用服务和报废不属于本制造参考。 |
| representative_product | 一件完整验收无软包四脚冲压板带钢椅，钢座面/靠背、点焊、热铆、热固化环氧涂层及橡胶脚垫；Nicolle金属椅仅为实例，不是强制设计。 |
| production_route | 钢材成形与连接; 前处理、喷粉与热固化; 最终装配与唯一首次质量放行; 公用工程、实物资产与维护; 原批次放行后搬运及发运; 逐项包材毛实物事件 |
| market_state | 实际最终装配后唯一首次质量放行的全新完整验收椅；明确净制造产品，真实放行后服务另行核算。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整声明钢椅制造及首次质量放行。 |
| How much | 由经校准真实首次放行批次Q kg得到1千克完整验收椅净制造产出。 |
| How well | 实际配置特定图纸/BOM及适用连接、涂层、脚垫、稳定性及其他验收要求，记录试验及授权。不规定通用强度或认证。 |
| How long or cycle | 一次制造/首次放行周期，不假定坐用服务寿命。 |
| reference_flow_link | `first_release_chair` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 带金属框架的座椅 `2b8511ea-6bd0-4283-b430-29da5bf2f701` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址与期间; 制造商及委外涂装边界; 型号与发布图纸/BOM版本; 完整固定四脚结构; 钢板和钢带牌号/炉号、轧制状态、厚度、实际宽度及部件几何; 座面、靠背/支撑、椅腿、横撑、每种铆钉及已装脚垫规格; 点焊与热铆连接; 实际切割辅助气体及成形润滑; 实际脱脂化学体系及供货浓度/载水; 独立采购的槽液组分; 整份环氧粉末SKU/批次/SDS与自制或外购; 实际回收粉及固化记录; 实际电力、燃料或外购热源及载体状态; 实际水回路; 配置适用符合性/验收规范、接头/涂层/稳定性检查及授权首次放行; 完整成品椅经校准净称重，排除所有包装、独立备件和试验质量; 以kg计的唯一首次放行Q; 件数与独立测得的配置质量; 不采用目录换算; 失败、零产出、启停、待机、清洗、抽样试验及全部实际返工（含未获准、失败或拒收作业）; 期初/期末原料和在制品数量及每种继承交换向量; 已放行成品期初/期末存量、原cohort的Q_c、毛发运/退回标识及观测服务范围h; 真实放行后作业的制造商/规范许可、作业后试验、验收和处置; 每种包材P/I/ER/S/EO/W及空包材/附着/周转库存; 唯一上游负荷所有者; 实际新旧资产及维修件、在装流体与已执行服务归属; 逐物种空气/水/固体平衡、含水及独立换算/不确定性; 原生流限制、具体供应方相容性、上游与处理缺口 |

全部限定信息须在数据包声明。该原生宽泛完整椅族受上述完整实物路线和终端限定；不能据此使用框架、部件、通用家具或固定目录质量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| release_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为声明批次唯一首次放行完整椅实际经校准净kg之和，排除包装、独立备件及试验质量。cp_first_release_chair记录真实称重/验收，不推断单件质量。 |
| rivet_volume | rivet | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 使用铆钉真实实测实体体积m3，并独立保留kg/件数。不能编密度或用原生次级系数作单位换算。 |
| metered_energy | fabrication_electricity; finish_electricity; release_electricity; support_electricity; services_electricity; purchased_heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保持原生广延能量MJ；实测kWh仅乘3.6一次。真实燃料/蒸汽/热水载体质量与实物热状态/焓分别链接核算，上游所有者唯一。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实制造商及声明委外涂装门接收实际钢板/钢带、铆钉、整份制剂、供货脚垫与公用工程。 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:38111中更窄的冲压钢完整椅制造子集，不主张已接受映射或整个子类。 |
| recursive_input_rule | 购买完整椅不是原料。供货物品/制剂已包含的有记录上游材料/工序仅计一次。内部在制品与已放行Q交接须匹配并在合并时抵消。 |
| upstream_dataset_requirement | 相容真实钢材、制剂、部件、公用工程及处理供方须核实形态/路线/状态/单位/边界，不自动完整标为从摇篮到工厂门。 |
| disclosure | 场址与期间; 制造商及委外涂装边界; 型号与发布图纸/BOM版本; 完整固定四脚结构; 钢板和钢带牌号/炉号、轧制状态、厚度、实际宽度及部件几何; 座面、靠背/支撑、椅腿、横撑、每种铆钉及已装脚垫规格; 点焊与热铆连接; 实际切割辅助气体及成形润滑; 实际脱脂化学体系及供货浓度/载水; 独立采购的槽液组分; 整份环氧粉末SKU/批次/SDS与自制或外购; 实际回收粉及固化记录; 实际电力、燃料或外购热源及载体状态; 实际水回路; 配置适用符合性/验收规范、接头/涂层/稳定性检查及授权首次放行; 完整成品椅经校准净称重，排除所有包装、独立备件和试验质量; 以kg计的唯一首次放行Q; 件数与独立测得的配置质量; 不采用目录换算; 失败、零产出、启停、待机、清洗、抽样试验及全部实际返工（含未获准、失败或拒收作业）; 期初/期末原料和在制品数量及每种继承交换向量; 已放行成品期初/期末存量、原cohort的Q_c、毛发运/退回标识及观测服务范围h; 真实放行后作业的制造商/规范许可、作业后试验、验收和处置; 每种包材P/I/ER/S/EO/W及空包材/附着/周转库存; 唯一上游负荷所有者; 实际新旧资产及维修件、在装流体与已执行服务归属; 逐物种空气/水/固体平衡、含水及独立换算/不确定性; 原生流限制、具体供应方相容性、上游与处理缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | all processes | 参考为整椅：座面、靠背/支撑、全部椅腿/横撑、连接及实际脚垫/涂层。自制/外购记录确定供货物品中已包含的原料制造、化学品、粉末及部件上游工序。不能并计外购整份制剂/部件及其内含组分。实际新增且未列入卡的现场组分、公用工程、分子物种、捕集粉尘、润滑剂、磨具、包材或处理交换，须在数据集完成前新增独立原子卡，不能藏在zero/other。 | `nicolle-manufacturing`; `nicolle-secrets` |
| boundary_release | first_release_chair | Q是完整装配/验收后唯一首次质量放行的经校准净kg，不是毛发运或包装质量。唯一序列/批次记录防止交付、复验、全部实际返工（含未获准、失败或拒收作业）重复计产量。同批期末已放行成品已在Q内，绝不进入B_close。保留原Q_c及真实观测h的仓储/包装/搬运/发运服务；不能仅因成品留库扣减已执行服务。 | `nicolle-manufacturing` |
| boundary_finish | finish; services | 保留真实脱脂、干燥、打磨、喷涂/回收、固化及清洗，披露实际供方/槽液、制剂、水相和公用工程。公开炉温实例、粉末可回收与无排放宣传不是设定值、保证回收率或零排放清单。独立户外电泳/液漆路线仍排除。 来源明确的委外涂装操作仍纳入声明制造前景。每项真实承包方物料、公用工程、排放、损失和处理交换只有一个负荷所有者。整份涂装服务/供方清单已含某交换时，其详细实物记录仅作非叠加子账；该交换在此前景单独建模时，必须从服务/供方清单中排除重叠负荷。不能将整份涂装供方负荷与同一前景粉末、槽液、能源或处理负荷并加。真实实物毛记录独立于发票或负荷拆分而完整保留用于闭合；付款本身不是物料或能量交换。 | `nicolle-manufacturing`; `nicolle-secrets`; `tiger-processing-1213` |
| boundary_rework | services | 放行后作业的授权及继续合格状态须有针对真实配置与失效的制造商/规范许可、相关原部件相容性及完整作业后试验/验收；所有真实作业均须采集，并记录真实处置。不假定破损或不安全产品能恢复。新增件/水、移除旧件、能耗、损失与状态变化均保持原子性及原批次归属。退回及当前退回质量不建立新Q，也不假定等于旧发运。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | `tiger-processing-1213` |
| boundary_physical | all processes | 完整实物毛边界与归因负荷向量分开。不能按经济或服务负荷份额缩小物料/包材/资产/维修水/空气物种毛腿。整份湿态P/I与完整期末湿库存同时保留；X_in/X_out仅对已在其他同侧物流项计入的同一实测事件去重，不能与库存、对侧流或仅存在的卡片去重。同产品内部交接在匹配边界合并时抵消，不新增对外采购或Q。 |  |
| packaging_receipt_basis | packaging | 逐实际完整包装制品，P记录有偿采购（单独或随货付费，有无单独发票均可）。I记录首次非采购外部入流，含单独赠与、借用、租赁/周转池领入和未付费供方随附包装；供方随附仅为I的一个子集。ER必须以同一制品或可审计匹配批次关联本场所先前外发记录；仅有他方使用史不属于退回。P/I/ER互斥。已有匹配物理制品卡及原始分账覆盖这些来源，但仍须满足全部原生材料/形态/状态限制；不相容真实制品须另列原子行，不得替用UUID。X_in/X_out仍为独立实测水料变化，不能替代整制品接收。保留完整湿毛量、所有者/保管者、付费/非采购依据、来源、原外发关联、实际状态单位和继承制造/服务向量。无偿接收既非新制造，也不自动零负荷；真实服务及新增运输搬运按正确原批群和分母归属一次，真实未用服务另留，不设默认寿命或抵扣。存量、毛实物流和负荷向量分开。这是声明的守恒前景核算实现，不声称引用原文规定这些变量名。 | jrc-ilcd-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | 钢材成形与连接 | required | 本地板带钢切割、成形、冲孔、冲压、电阻点焊及热铆。供应中间件按所有权和实际已包含工序分开。 | foreground_manufacturing | 每 1 kg 参考流；原批次服务保留Q_c |
| finish | 前处理、喷粉与热固化 | required | 实际脱脂、干燥、打磨、除尘、整份环氧粉末施涂、回收、固化及检查；委外作业仅纳入一次。实际公用工程/化学品变型须明确原子交换。 | foreground_manufacturing | 每 1 kg 参考流；原批次服务保留Q_c |
| release | 最终装配与唯一首次质量放行 | required | 装配实际供货橡胶脚垫；核对完整BOM、连接/涂层、稳定性及其他适用验收、经校准净质量和首次放行授权。失败/抽样件保留负荷而不计合格产出。 | foreground_manufacturing | 每 1 kg 参考流；原批次服务保留Q_c |
| support | 公用工程、实物资产与维护 | required | 计量实际共享辅助服务、新旧机器和工装真实流动、在装流体与维护。实物资产库存与实际可归属服务负荷分开。 | foreground_manufacturing | 每 1 kg 参考流；原批次服务保留Q_c |
| services | 原批次放行后搬运及发运 | required | 仓储、包装/搬运/发运及每项真实后续作业（含未获准、失败或拒收作业），均作为原Q_c及观测h范围内的实际增量服务保留。记录每项真实物料、部件、水、能量、排放、损失、废物和处理交换及已发生负荷。许可和配置适用作业后试验/验收仅控制授权、继续合格状态、留置及最终处置，不能抹去真实作业或暗示恢复。复验、作业、退回或发运不产生新产量。 | postrelease_service | 每 1 kg 参考流；原批次服务保留Q_c |
| packaging | 逐项包材毛实物事件 | required | 每种实际供货包材分别设条件P、I、ER、S、EO、W卡，披露毛实物事件及唯一负荷所有权链接。 | physical_gross_ledger | 每 1 kg 参考流；原批次服务保留Q_c |

下列条件只判断实际交换是否存在，不是默认值。条件交换不发生须有缺席记录；未知数量绝非零。实际选定路线的每种实物流及每份真实处理记录均须保留。清单负荷维度与实物毛维度分开，同一u_i仅使用一次。

### 过程：钢材成形与连接 (`fabrication`)

本地板带钢切割、成形、冲孔、冲压、电阻点焊及热铆。供应中间件按所有权和实际已包含工序分开。

#### 输入

##### 产品流

###### 碳钢板 (`sheet`)

用于冲压座面、靠背和支撑的供货钢板，记录实际牌号/炉号/轧制状态/厚度及实测领退。原生板材族允许热轧/冷轧；其合金钢进一步加工分类与通用低合金钢说明不一致。该孤立分类问题不确定牌号或供应方。仅用于物理相容板材，不能用于钢管或成品座面。

- 选定流: 钢板材 `13082a6a-e820-45ec-89f5-3c2c3650495b`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_sheet；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_sheet`
- 来源: `nicolle-manufacturing`

###### 轧制碳钢带 (`strip`)

真实单独供货的轧制钢带/卷材用于椅腿/横撑，实测宽度/厚度、牌号/炉号及热/冷轧状态。原生金属带材Product正面定义轧制钢带，并明确包含600毫米分界两侧宽带和窄带；开头歧义措辞及英文截断说明不能建立强制600毫米供货或默认厚度。仅用于相容真实轧制带材/供方，不是线材、管材、铂箔或成品椅。

- 选定流: 金属带材 `bae3a6f9-4476-4244-9e2d-c77c60b62728`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_strip；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_strip`
- 来源: `nicolle-manufacturing`

###### 热安装实心钢铆钉 (`rivet`)

仅为一种实际供货实心钢铆钉配置，先冷镦及精加工，后在椅连接处加热安装。原生产品族含实心和抽芯等变型，本卡仅表示单一实心铆钉。其参考属性为体积/m3，须用经校准排液法或可追溯精确图纸几何测量同一零件真实材料体积，并独立保留称重kg和件数用于质量平衡。不得推测密度、使用外包圆柱体积或以kg代替m3。原生行提及的包装/运输须明确唯一上游所有者，不能自动重复计费。

- 选定流: 铆钉 `d1dda16c-6766-4f42-bf41-3a52a5371ae0`
- 流属性/单位: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 读取同一已计算u_i；原始记录采用cp_rivet；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_rivet`
- 来源: `nicolle-manufacturing`

###### 矿物油基成形润滑制剂 (`forming_oil`)

仅在实际使用时记录整份外购成形润滑制剂、SDS、供货载水/溶剂、领退及残留膜，不假定石油热值或再采购添加剂。真实厂内调配须以每种独立外购组分及实测调配/清洗损失替换外购制剂。

- 选定流: 矿物油基成形润滑制剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_forming_oil；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_forming_oil`
- 来源: `nicolle-manufacturing`

###### 氧化铝涂附磨带 (`abrasive`)

仅在实际使用时记录单种供货氧化铝磨带，基材与粘结剂随整件计一次。氧化铝粉不是成品磨带；另保留磨耗和受污染废磨带。  原生为整条砂带Product、中国厂内生产组合、研磨/抛光耗材、Mass/kg。此正面整件砂带族限定为真实氧化铝/基材/结合剂物品，须匹配供方地域/中国供货边界及实际组成。不能用原料氧化铝替代整件，也不设通用砂带寿命。

- 选定流: 砂带 `8240432e-9d1c-43e0-aa76-70e9905b2895`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_abrasive；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_abrasive`
- 来源: `nicolle-manufacturing`

###### 未浸渍棉擦拭布 (`wipe`)

实际未浸渍干棉擦拭布，单一构造；附着油/水和洗涤/复用单独跟踪。不采用限定水处理用途的织物候选。

- 选定流: 未浸渍棉擦拭布
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_wipe；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_wipe`
- 来源: `nicolle-manufacturing`

###### 激光切割用氮气 (`laser_nitrogen`)

仅记录实际外供气态切割辅助氮，保留供货相态、纯度、压力/温度及真实换算。液氮流不能代表气体交付。实际购买液氮时，须另列液态接收及真实气化器/损失记录，不假定气态匹配。

- 选定流: 激光切割用氮气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_laser_nitrogen；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_laser_nitrogen`
- 来源: `nicolle-manufacturing`

###### 激光切割用氧气 (`laser_oxygen`)

仅记录真实外供切割辅助氧，明确相态/纯度/钢瓶或管线状态及气体计量。不默认氮氧同时配方；氧化及生成颗粒须有独立证据。

- 选定流: 激光切割用氧气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_laser_oxygen；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_laser_oxygen`
- 来源: `nicolle-manufacturing`

###### 计量交流电 (`fabrication_electricity`)

计量实际可分别归属电力，含相关待机/启停/清洗及辅助。原生界面为中国1–35kV用户侧电网平均消费组合；仅在真实场址/地域/电压/供方边界匹配时使用本UUID。其他地区/电压须另行核实原生流，不能声称法国实例工厂使用中国电网。保持MJ；实际kWh仅按3.6MJ/kWh换算一次。不并计场址总表及其分表。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 读取同一已计算u_i；原始记录采用cp_fabrication_electricity；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_fabrication_electricity`
- 来源: `nicolle-manufacturing`

###### 热铆用天然气 (`rivet_heating_gas`)

仅在真实铆钉加热使用天然气燃烧器时记录；保留实测燃料量/组成/状态及独立热量/载体质量账。不因热铆工序假定通用热源。该分表须与同供方总表及炉/槽用气分开；实际燃烧物种按真实阶段记入support。

- 选定流: 热铆用天然气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_rivet_heating_gas；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_rivet_heating_gas`
- 来源: `nicolle-manufacturing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 未涂层碳钢制造废料 (`steel_scrap`)

实际同牌号未涂层钢切边/冲屑及失败件，记录真实接收方与处理。厂内可用余料在边界内抵消；废钢销售或外送不扣除制造/处理负荷。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 未涂层碳钢制造废料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_steel_scrap。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_steel_scrap`
- 来源: `nicolle-manufacturing`

###### 废氧化铝涂附磨带 (`spent_abrasive`)

实物磨带及附着钢/油；称量完整出口状态，独立确定污染物，不在其他出口重复计相同质量。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 废氧化铝涂附磨带
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_spent_abrasive。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_spent_abrasive`
- 来源: `nicolle-manufacturing`

###### 沾油棉擦拭布 (`oily_wipe`)

真实污染擦拭布，分别测量游离/残留水和油；不预设处理或处置信用。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 沾油棉擦拭布
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_oily_wipe。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_oily_wipe`
- 来源: `nicolle-manufacturing`

###### 捕集碳钢切割粉尘 (`collected_metal_dust`)

实际单一捕集粉尘流，记录组成、含水和接收方；不将其等同纯金属质量，也不与空气排放颗粒重复。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 捕集碳钢切割粉尘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_collected_metal_dust。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_collected_metal_dust`
- 来源: `nicolle-manufacturing`

##### 基本流

###### 未捕集碳钢切割颗粒 (`metal_dust`)

仅记录真实未捕集的声明钢材切割颗粒，组成与粒径分布独立观测。PM粒径分档/焊烟总量不是单质铁或某种氧化物；有依据才拆分化学物种，并避免重叠分数。捕集粉尘为独立废物流。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 未捕集碳钢切割颗粒
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_metal_dust。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_metal_dust`
- 来源: `nicolle-manufacturing`

### 过程：前处理、喷粉与热固化 (`finish`)

实际脱脂、干燥、打磨、除尘、整份环氧粉末施涂、回收、固化及检查；委外作业仅纳入一次。实际公用工程/化学品变型须明确原子交换。

#### 输入

##### 产品流

###### 碱性水基脱脂制剂 (`alkaline_cleaner`)

条件使用的实际外购单种碱性金属清洗制剂，按供货整份采购；载水/溶剂、活性/固体分析仅作子账。原生碱性洗涤剂产品族为厂内碱性化合物、pH高于中性，不确定氢氧化钠/碳酸盐配方、含量、供货相态或供应方。仅用于实际相容碱性配方；其他化学体系须另建具体卡并复核适用性。这是声明的采集变型，不是对Nicolle槽液化学品的事实主张。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 碱性洗涤剂 `a0f63f93-1a65-4485-a2cf-36adab2762ce`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_alkaline_cleaner；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_alkaline_cleaner`
- 来源: `nicolle-manufacturing`

###### 供货液态工艺水 (`dilution_water`)

实测水质/状态的额外稀释或漂洗水，独立计量；排除已在外购制剂内的水。不假定去离子水。新增水即使留在完整期末槽液存量中，也保留真实入流。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。  原生工艺用水为经处理的工业用液水、Mass/kg。仅采用实际相容处理/水质/获得途径及供方边界，不假去离子/饮用标准/密度或供方，不重复供方已含处理。其他实际水种须另核身份。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_dilution_water；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_dilution_water`
- 来源: `nicolle-manufacturing`

###### 去离子漂洗水 (`di_water`)

仅用于实际独立供货的去离子水，H2O、CAS7732-18-5，离子交换/反渗透须与原生路线相容；宽泛备注提到的蒸馏不能替代命名路线。厂内生产组合，不固定认证纯度或地域。外购DI的上游处理仅计一次；现场制DI须改列真实入水/处理交换。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_di_water；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_di_water`
- 来源: `nicolle-manufacturing`

###### 氢氧化钠 (`caustic`)

仅在真实独立采购该化学品用于有记录的现场配槽时列入。明确溶液/固体供货状态、浓度、载水并按完整采购质量计一次，不能再计含有它的外购成品槽液。不设默认配方或浓度。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 氢氧化钠
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_caustic；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_caustic`
- 来源: `nicolle-manufacturing`

###### 碳酸钠 (`carbonate`)

仅在真实独立采购该化学品用于有记录的现场配槽时列入。明确溶液/固体供货状态、浓度、载水并按完整采购质量计一次，不能再计含有它的外购成品槽液。不设默认配方或浓度。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 碳酸钠
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_carbonate；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_carbonate`
- 来源: `nicolle-manufacturing`

###### 整份环氧粉末涂料制剂 (`powder`)

仅一种真实供货热固性环氧粉末SKU/批次/SDS，树脂、固化剂、颜料、添加剂及实际水分随整份计一次。原生自由流动干粉产品族允许热或UV固化，本路线仅采用实际热固化环氧，不确定配方、膜厚、耐候等级或成品率。回收粉为有实测损失及相容性的内部循环，不是新采购或联产品。真实现场制粉须展开独立配方与真实加工，不能两者并计。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 粉末涂料 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_powder；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_powder`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 供货天然气 (`natural_gas`)

仅在实际干燥/固化炉或槽液加热燃气燃烧时记录。计量真实供货组成/状态和燃料量，热值独立测量；载体质量与热MJ分账。不将整份天然气当纯甲烷，也不按默认配方假定燃烧物种。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 供货天然气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_natural_gas；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_natural_gas`
- 来源: `nicolle-manufacturing`

###### 外购工艺热 (`purchased_heat`)

仅记录测量焓/界面的实际外购热；明确热水、蒸汽或其他真实载体，并另记载体质量接收/返回。唯一供方负荷所有者：不另添上游锅炉或给供方已包含的燃料重复添热输入。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 外购工艺热
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 读取同一已计算u_i；原始记录采用cp_purchased_heat；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_purchased_heat`
- 来源: `nicolle-manufacturing`

###### 外购水蒸汽载体 (`steam_carrier`)

仅用于真实外供蒸汽质量，记录压力、温度、干度及供方热/水所有权。本卡表示载体毛质量V，对应外购焓仅在purchased_heat计一次。不预设蒸汽系统存在。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 外购水蒸汽载体
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_steam_carrier。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_steam_carrier`
- 来源: `nicolle-manufacturing`

###### 外购热液态水载体 (`hotwater_carrier`)

仅用于外购热界面真实热水质量；测量状态/焓、明确供水所有者与独立匹配返回。毛量V，不产生第二次供方负荷。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 外购热液态水载体
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_hotwater_carrier。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_hotwater_carrier`
- 来源: `nicolle-manufacturing`

###### 计量交流电 (`finish_electricity`)

计量实际可分别归属电力，含相关待机/启停/清洗及辅助。原生界面为中国1–35kV用户侧电网平均消费组合；仅在真实场址/地域/电压/供方边界匹配时使用本UUID。其他地区/电压须另行核实原生流，不能声称法国实例工厂使用中国电网。保持MJ；实际kWh仅按3.6MJ/kWh换算一次。不并计场址总表及其分表。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 读取同一已计算u_i；原始记录采用cp_finish_electricity；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_finish_electricity`
- 来源: `nicolle-manufacturing`

###### 喷粉室滤筒 (`new_filter`)

单种真实供货滤筒，滤材/框架/密封随整件计一次；测量真实供货干/湿状态、领用及期末在装库存。捕集粉末为留存物，不是额外新滤筒。不设默认寿命或通用滤筒件数因子。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 喷粉室滤筒
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_new_filter；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_new_filter`
- 来源: `nicolle-manufacturing`

###### 未浸渍棉涂装擦拭布 (`finish_wipe`)

仅在真实打磨后擦拭时记录干布，整份供货布计一次；附着清洗剂/水和额外独立购入液体须保留自身身份及唯一所有者。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 未浸渍棉涂装擦拭布
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_finish_wipe；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_finish_wipe`
- 来源: `nicolle-manufacturing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 返还供热方的蒸汽凝结水 (`condensate_return`)

仅为真实对外Product凝结水返回，测量完整质量、相态、温度和焓，明确供方水/能约定。毛量V；不假定返回、避免用水信用或重复处理。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 返还供热方的蒸汽凝结水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_condensate_return。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_condensate_return`
- 来源: `nicolle-manufacturing`

###### 返还供方的换热液态水 (`hotwater_return`)

仅为匹配hotwater_carrier的真实对外返回，并记录实测热状态；完整毛量V及唯一热/水所有者。留在现场的库存不是对外返回。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 返还供方的换热液态水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_hotwater_return。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_hotwater_return`
- 来源: `nicolle-manufacturing`

##### 废物流

###### 废弃环氧涂料粉末 (`waste_powder`)

单种真实不可再用粉末流，记录完整组成/含水；不假定所有粉末可回收，也不自动扣除其制造/处理负荷。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 废弃环氧涂料粉末
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_waste_powder。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_waste_powder`
- 来源: `nicolle-manufacturing`

###### 废水基碱性脱脂槽液 (`spent_bath`)

整份真实出口槽液，水、清洗剂、夹带油和金属分别测量为子账，不能重复出口交换。不使用固定15%NaOH的废液身份。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 废水基碱性脱脂槽液
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_spent_bath。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_spent_bath`
- 来源: `nicolle-manufacturing`

###### 金属脱脂漂洗废水 (`rinse_wastewater`)

独立实际漂洗废水送至明确处理方，测量湿质量/体积及独立固体/化学组成。COD是指标，不是特定化学物质量。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 金属脱脂漂洗废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_rinse_wastewater。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_rinse_wastewater`
- 来源: `nicolle-manufacturing`

###### 含油金属脱脂污泥 (`degreasing_sludge`)

实际独立移除污泥，记录完整湿态固体/油/水与接收方。仅对已在槽液/废水出口计量的相同质量去重，不能取消留在期末存量中的真实水入流。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 含油金属脱脂污泥
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_degreasing_sludge。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_degreasing_sludge`
- 来源: `nicolle-manufacturing`

###### 载有环氧粉末的废滤筒 (`spent_filter`)

单种真实完整废滤筒及留存粉末/水；除非粉末被独立移除并单独称量，否则不能重复计为另一废物流。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 载有环氧粉末的废滤筒
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_spent_filter。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_spent_filter`
- 来源: `nicolle-manufacturing`

###### 污染棉涂装擦拭布 (`finish_wipe_waste`)

实际废涂装擦拭布，粉末/金属/油/水组成独立确定；按完整湿态出口计一次，记录真实接收方，未物理分离的固体不重复计。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 污染棉涂装擦拭布
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_finish_wipe_waste。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_finish_wipe_waste`
- 来源: `nicolle-manufacturing`

##### 基本流

###### 未捕集环氧涂料粉末颗粒 (`coating_particles`)

仅用于独立测得的逸散涂料颗粒，记录组成/粒径及真实空气去向。不以总VOC、金属焊烟、树脂含量或滤筒捕集量代替。不设默认上粉效率。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 该实际操作若确实发生于放行后，未获准/失败/拒收也完整采集；许可及试验仅控制验收/处置。其独立标识的原始记录和增量负荷归属于原Q_c及观测h，不产生新制造Q；执行cohort_service并保留全部真实输入/损失/处理。

- 选定流: 未捕集环氧涂料粉末颗粒
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_coating_particles。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_coating_particles`
- 来源: `nicolle-manufacturing`

### 过程：最终装配与唯一首次质量放行 (`release`)

装配实际供货橡胶脚垫；核对完整BOM、连接/涂层、稳定性及其他适用验收、经校准净质量和首次放行授权。失败/抽样件保留负荷而不计合格产出。

#### 输入

##### 产品流

###### 模制橡胶椅脚垫 (`rubber_foot`)

实际完整供货椅脚垫，已包含的真实增强件/胶粘剂随整件计；记录弹性体、填料、几何、装配及独立安装净质量。橡胶鞋/树脂不是成品家具脚垫，不能再次采购内含橡胶组分。

- 选定流: 模制橡胶椅脚垫
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_rubber_foot；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_rubber_foot`
- 来源: `nicolle-manufacturing`

###### 计量交流电 (`release_electricity`)

计量实际可分别归属电力，含相关待机/启停/清洗及辅助。原生界面为中国1–35kV用户侧电网平均消费组合；仅在真实场址/地域/电压/供方边界匹配时使用本UUID。其他地区/电压须另行核实原生流，不能声称法国实例工厂使用中国电网。保持MJ；实际kWh仅按3.6MJ/kWh换算一次。不并计场址总表及其分表。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 读取同一已计算u_i；原始记录采用cp_release_electricity；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_release_electricity`
- 来源: `nicolle-manufacturing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整验收冲压钢椅 (`first_release_chair`)

唯一首次质量放行产出Q：真实脚垫安装及配置适用放行检查后的完整椅；以经校准净kg计，排除包装、独立备件和试验质量。原生已制造Product族为厂内生产组合、Mass/kg，不确定牌号、SKU、安全等级、寿命或固定单椅质量。Q已含同批期末已放行成品，不能扣除该库存或在发运时再计产量。完整消费语境：场址与期间; 制造商及委外涂装边界; 型号与发布图纸/BOM版本; 完整固定四脚结构; 钢板和钢带牌号/炉号、轧制状态、厚度、实际宽度及部件几何; 座面、靠背/支撑、椅腿、横撑、每种铆钉及已装脚垫规格; 点焊与热铆连接; 实际切割辅助气体及成形润滑; 实际脱脂化学体系及供货浓度/载水; 独立采购的槽液组分; 整份环氧粉末SKU/批次/SDS与自制或外购; 实际回收粉及固化记录; 实际电力、燃料或外购热源及载体状态; 实际水回路; 配置适用符合性/验收规范、接头/涂层/稳定性检查及授权首次放行; 完整成品椅经校准净称重，排除所有包装、独立备件和试验质量; 以kg计的唯一首次放行Q; 件数与独立测得的配置质量; 不采用目录换算; 失败、零产出、启停、待机、清洗、抽样试验及全部实际返工（含未获准、失败或拒收作业）; 期初/期末原料和在制品数量及每种继承交换向量; 已放行成品期初/期末存量、原cohort的Q_c、毛发运/退回标识及观测服务范围h; 真实放行后作业的制造商/规范许可、作业后试验、验收和处置; 每种包材P/I/ER/S/EO/W及空包材/附着/周转库存; 唯一上游负荷所有者; 实际新旧资产及维修件、在装流体与已执行服务归属; 逐物种空气/水/固体平衡、含水及独立换算/不确定性; 原生流限制、具体供应方相容性、上游与处理缺口.

- 选定流: 带金属框架的座椅 `2b8511ea-6bd0-4283-b430-29da5bf2f701`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_first_release_chair`
- 来源: `nicolle-manufacturing`

##### 废物流

###### 不合格涂层钢椅 (`reject_chair`)

真实整件失败/破坏抽样椅，内含橡胶/涂料只计一次；实际拆除部件才独立测量。保留制造、试验和处理负荷，销售或外送废料不自动转移负荷。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 不合格涂层钢椅
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_reject_chair。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_reject_chair`
- 来源: `nicolle-manufacturing`

###### 不合格模制橡胶椅脚垫 (`pad_reject`)

仅为物理独立不合格脚垫，独立记录材料/含水/接收方；不再计已在整件不合格椅中的橡胶。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 不合格模制橡胶椅脚垫
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pad_reject。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pad_reject`
- 来源: `nicolle-manufacturing`

##### 基本流

### 过程：公用工程、实物资产与维护 (`support`)

计量实际共享辅助服务、新旧机器和工装真实流动、在装流体与维护。实物资产库存与实际可归属服务负荷分开。

#### 输入

##### 产品流

###### 计量交流电 (`support_electricity`)

计量实际可分别归属电力，含相关待机/启停/清洗及辅助。原生界面为中国1–35kV用户侧电网平均消费组合；仅在真实场址/地域/电压/供方边界匹配时使用本UUID。其他地区/电压须另行核实原生流，不能声称法国实例工厂使用中国电网。保持MJ；实际kWh仅按3.6MJ/kWh换算一次。不并计场址总表及其分表。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 读取同一已计算u_i；原始记录采用cp_support_electricity；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_support_electricity`
- 来源: `nicolle-manufacturing`

###### 冲压机 (`new_press`)

仅为该单一实物资产真实对外新/旧购入。测量完整供货kg并设在装流体/部件子账，保留序列号/状态及期初/期末在装库存。毛接收V不表示每kg椅消耗一整机。实际可归属服务负荷、维护及继承收费分开，不设固定寿命或名义寿命分配。

- 选定流: 冲压机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_new_press。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_new_press`
- 来源: `nicolle-manufacturing`

###### 电阻点焊机 (`new_welder`)

仅为该单一实物资产真实对外新/旧购入。测量完整供货kg并设在装流体/部件子账，保留序列号/状态及期初/期末在装库存。毛接收V不表示每kg椅消耗一整机。实际可归属服务负荷、维护及继承收费分开，不设固定寿命或名义寿命分配。

- 选定流: 电阻点焊机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_new_welder。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_new_welder`
- 来源: `nicolle-manufacturing`

###### 粉末固化炉 (`new_oven`)

仅为该单一实物资产真实对外新/旧购入。测量完整供货kg并设在装流体/部件子账，保留序列号/状态及期初/期末在装库存。毛接收V不表示每kg椅消耗一整机。实际可归属服务负荷、维护及继承收费分开，不设固定寿命或名义寿命分配。

- 选定流: 粉末固化炉
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_new_oven。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_new_oven`
- 来源: `nicolle-manufacturing`

###### 空气压缩机 (`new_compressor`)

仅为该单一实物资产真实对外新/旧购入。测量完整供货kg并设在装流体/部件子账，保留序列号/状态及期初/期末在装库存。毛接收V不表示每kg椅消耗一整机。实际可归属服务负荷、维护及继承收费分开，不设固定寿命或名义寿命分配。

- 选定流: 空气压缩机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_new_compressor。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_new_compressor`
- 来源: `nicolle-manufacturing`

###### 钢制冲压模具 (`new_die`)

仅为该单一实物资产真实对外新/旧购入。测量完整供货kg并设在装流体/部件子账，保留序列号/状态及期初/期末在装库存。毛接收V不表示每kg椅消耗一整机。实际可归属服务负荷、维护及继承收费分开，不设固定寿命或名义寿命分配。

- 选定流: 钢制冲压模具
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_new_die。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_new_die`
- 来源: `nicolle-manufacturing`

###### 铜点焊电极头 (`electrode`)

仅为真实独立供货的新/旧维修材料，明确牌号/形态/状态及留存流体。即使留在完整期末湿库存中也记录完整实物X_in。仅与其他已计入口或整机/部件供货去重，不能与期末库存抵消。服务归属另计一次；不默认冷却液/制冷剂回路存在。

- 选定流: 铜点焊电极头
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_electrode。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_electrode`
- 来源: `nicolle-manufacturing`

###### 矿物液压油制剂 (`hydraulic_oil`)

仅为真实独立供货的新/旧维修材料，明确牌号/形态/状态及留存流体。即使留在完整期末湿库存中也记录完整实物X_in。仅与其他已计入口或整机/部件供货去重，不能与期末库存抵消。服务归属另计一次；不默认冷却液/制冷剂回路存在。

- 选定流: 矿物液压油制剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_hydraulic_oil。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_hydraulic_oil`
- 来源: `nicolle-manufacturing`

###### 液态冷却水充入 (`cooling_charge`)

仅为真实独立供货的新/旧维修材料，明确牌号/形态/状态及留存流体。即使留在完整期末湿库存中也记录完整实物X_in。仅与其他已计入口或整机/部件供货去重，不能与期末库存抵消。服务归属另计一次；不默认冷却液/制冷剂回路存在。

- 选定流: 液态冷却水充入
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_cooling_charge。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_cooling_charge`
- 来源: `nicolle-manufacturing`

###### R134a制冷剂 (`refrigerant`)

仅为真实独立供货的新/旧维修材料，明确牌号/形态/状态及留存流体。即使留在完整期末湿库存中也记录完整实物X_in。仅与其他已计入口或整机/部件供货去重，不能与期末库存抵消。服务归属另计一次；不默认冷却液/制冷剂回路存在。

- 选定流: R134a制冷剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_refrigerant。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_refrigerant`
- 来源: `nicolle-manufacturing`

###### 外供压缩空气 (`compressed_air`)

仅为真实购入跨边界压缩空气，测量压力/温度下整份干空气/湿气质量；压缩负荷由供方唯一承担。现场压缩时本外供卡不适用，计实际压缩机电力及环境物种入口。不得并计外购整份空气及其组分气体供货。

- 选定流: 外供压缩空气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_compressed_air。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_compressed_air`
- 来源: `nicolle-manufacturing`

##### 废物流

##### 基本流

###### 来自空气的双原子氮 (`ambient_nitrogen`)

仅为现场压缩、通风或实际燃烧的真实环境物种入口；计量气体状态、积分体积/物种分析及湿度，组成独立确定。毛V与各真实出口平衡，不是额外外购空气汇总、捕集信用或假定消耗在钢中的气体。原生空气资源介质仅用于真实环境摄入。 分子N2、CAS7727-37-9，真实空气资源；不按同义词将其用于液氮钢瓶采购或一氧化二氮。原生Mass/kg。

- 选定流: 二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_ambient_nitrogen。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_ambient_nitrogen`
- 来源: `nicolle-manufacturing`

###### 来自空气的氧气 (`ambient_oxygen`)

仅为现场压缩、通风或实际燃烧的真实环境物种入口；计量气体状态、积分体积/物种分析及湿度，组成独立确定。毛V与各真实出口平衡，不是额外外购空气汇总、捕集信用或假定消耗在钢中的气体。原生空气资源介质仅用于真实环境摄入。 分子O2、CAS7782-44-7，作为真实空气资源。过宽的液态/单重态/离子氧别名不证明这些供货形态。原生Mass/kg，不能代表外购钢瓶氧。

- 选定流: 氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_ambient_oxygen。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_ambient_oxygen`
- 来源: `nicolle-manufacturing`

###### 来自空气的氩气 (`ambient_argon`)

仅为现场压缩、通风或实际燃烧的真实环境物种入口；计量气体状态、积分体积/物种分析及湿度，组成独立确定。毛V与各真实出口平衡，不是额外外购空气汇总、捕集信用或假定消耗在钢中的气体。原生空气资源介质仅用于真实环境摄入。 稳定单质Ar、CAS7440-37-1，原生Mass/kg、空气资源，不是购入液态Product或排放。氩-41同义词不一致，不能用于放射性氩或活度单位。

- 选定流: 氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_ambient_argon。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_ambient_argon`
- 来源: `nicolle-manufacturing`

###### 来自环境空气的水蒸气 (`ambient_humidity`)

仅为现场压缩、通风或实际燃烧的真实环境物种入口；计量气体状态、积分体积/物种分析及湿度，组成独立确定。毛V与各真实出口平衡，不是额外外购空气汇总、捕集信用或假定消耗在钢中的气体。原生空气资源介质仅用于真实环境摄入。

- 选定流: 来自环境空气的水蒸气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_ambient_humidity。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_ambient_humidity`
- 来源: `nicolle-manufacturing`

###### 来自环境空气的二氧化碳 (`ambient_co2`)

仅为现场压缩、通风或实际燃烧的真实环境物种入口；计量气体状态、积分体积/物种分析及湿度，组成独立确定。毛V与各真实出口平衡，不是额外外购空气汇总、捕集信用或假定消耗在钢中的气体。原生空气资源介质仅用于真实环境摄入。

- 选定流: 来自环境空气的二氧化碳
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_ambient_co2。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_ambient_co2`
- 来源: `nicolle-manufacturing`

#### 输出

##### 产品流

###### 返还供方的冷却液态水 (`cooling_return`)

仅为真实对外Product水返回；完整毛V，测量温度/焓、污染及供水/热方约定。内部闭路循环抵消，不是对外供货/返回，也不自动等于废水。

- 选定流: 返还供方的冷却液态水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_cooling_return。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_cooling_return`
- 来源: `nicolle-manufacturing`

##### 废物流

###### 退役冲压机 (`retired_press`)

仅为该资产真实实物退役，记录完整剩余湿态/充液状态并区分实际已拆部件。毛量V；记录真实接收方及后续处理，不自动产生避免制造机器的信用，也不扣除已执行服务。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 退役冲压机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_retired_press。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_retired_press`
- 来源: `nicolle-manufacturing`

###### 退役电阻点焊机 (`retired_welder`)

仅为该资产真实实物退役，记录完整剩余湿态/充液状态并区分实际已拆部件。毛量V；记录真实接收方及后续处理，不自动产生避免制造机器的信用，也不扣除已执行服务。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 退役电阻点焊机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_retired_welder。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_retired_welder`
- 来源: `nicolle-manufacturing`

###### 退役粉末固化炉 (`retired_oven`)

仅为该资产真实实物退役，记录完整剩余湿态/充液状态并区分实际已拆部件。毛量V；记录真实接收方及后续处理，不自动产生避免制造机器的信用，也不扣除已执行服务。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 退役粉末固化炉
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_retired_oven。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_retired_oven`
- 来源: `nicolle-manufacturing`

###### 退役空气压缩机 (`retired_compressor`)

仅为该资产真实实物退役，记录完整剩余湿态/充液状态并区分实际已拆部件。毛量V；记录真实接收方及后续处理，不自动产生避免制造机器的信用，也不扣除已执行服务。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 退役空气压缩机
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_retired_compressor。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_retired_compressor`
- 来源: `nicolle-manufacturing`

###### 退役钢制冲压模具 (`retired_die`)

仅为该资产真实实物退役，记录完整剩余湿态/充液状态并区分实际已拆部件。毛量V；记录真实接收方及后续处理，不自动产生避免制造机器的信用，也不扣除已执行服务。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 退役钢制冲压模具
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_retired_die。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_retired_die`
- 来源: `nicolle-manufacturing`

###### 移除的铜点焊电极头 (`removed_electrode`)

实际移除旧维修材料的完整真实湿态X_out；附着油/水仅作子账，实际分离才另计。对应真实接收方；毛量V不按经济份额缩量。材料仅继续在装时不产生出口。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 移除的铜点焊电极头
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_removed_electrode。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_removed_electrode`
- 来源: `nicolle-manufacturing`

###### 移除的矿物液压油制剂 (`removed_hydraulic_oil`)

实际移除旧维修材料的完整真实湿态X_out；附着油/水仅作子账，实际分离才另计。对应真实接收方；毛量V不按经济份额缩量。材料仅继续在装时不产生出口。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 移除的矿物液压油制剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_removed_hydraulic_oil。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_removed_hydraulic_oil`
- 来源: `nicolle-manufacturing`

###### 移除的液态冷却水充入 (`removed_cooling_charge`)

实际移除旧维修材料的完整真实湿态X_out；附着油/水仅作子账，实际分离才另计。对应真实接收方；毛量V不按经济份额缩量。材料仅继续在装时不产生出口。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 移除的液态冷却水充入
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_removed_cooling_charge。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_removed_cooling_charge`
- 来源: `nicolle-manufacturing`

###### 移除的R134a制冷剂 (`removed_refrigerant`)

实际移除旧维修材料的完整真实湿态X_out；附着油/水仅作子账，实际分离才另计。对应真实接收方；毛量V不按经济份额缩量。材料仅继续在装时不产生出口。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 移除的R134a制冷剂
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_removed_refrigerant。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_removed_refrigerant`
- 来源: `nicolle-manufacturing`

###### 含油维护废水 (`oily_maintenance_water`)

仅为真实独立外排湿废水流，保留实际水/油/固相及身份。X_out与其他油/水出口仅去重一次；新增水留在完整期末流体中仍为X_in。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 含油维护废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_oily_maintenance_water。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_oily_maintenance_water`
- 来源: `nicolle-manufacturing`

##### 基本流

###### 排入空气的1,1,1,2-四氟乙烷 (`refrigerant_leak`)

仅为真实R134a泄漏，CAS811-97-2，与补充/回收/在装存量独立核对。维修充注不等于排放；其他制冷剂须另建卡。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。
 原生普通HFC-134a、CAS811-97-2、Mass/kg、未指定空气排放；不是室内/长期/水体流、Halon-2401、其他制冷剂或整份充注制剂。须有实际实测泄漏及当前介质，不推泄漏比例或额外充注量。

- 选定流: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_refrigerant_leak。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_refrigerant_leak`
- 来源: `nicolle-manufacturing`

###### 排入空气的双原子氮 (`nitrogen_out`)

匹配公用工程/通风过程真实独立测得的物种出口。毛V包含未改变入口物种，不冒充反应产率或另份空气质量。原生未指定空气排放不是资源摄入、长期释放或水/土壤排放。不编比例；对应来源、空气介质及相态，真实转化独立计量。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 分子N2、CAS7727-37-9，原生Mass/kg、未指定空气排放，不是总氮、N2O、NOx或空气资源。同义词不证明液体供货换算。

- 选定流: 二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_nitrogen_out。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_nitrogen_out`
- 来源: `nicolle-manufacturing`

###### 排入空气的氧气 (`oxygen_out`)

匹配公用工程/通风过程真实独立测得的物种出口。毛V包含未改变入口物种，不冒充反应产率或另份空气质量。原生未指定空气排放不是资源摄入、长期释放或水/土壤排放。不编比例；对应来源、空气介质及相态，真实转化独立计量。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 分子O2、CAS7782-44-7，真实气态出口至未指定空气，不是空气资源、液氧采购或水/土壤排放。原生Mass/kg，宽泛离子/液态别名不改变分子身份。

- 选定流: 氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_oxygen_out。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_oxygen_out`
- 来源: `nicolle-manufacturing`

###### 排入空气的氩气 (`argon_out`)

匹配公用工程/通风过程真实独立测得的物种出口。毛V包含未改变入口物种，不冒充反应产率或另份空气质量。原生未指定空气排放不是资源摄入、长期释放或水/土壤排放。不编比例；对应来源、空气介质及相态，真实转化独立计量。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 非放射性单质Ar、CAS7440-37-1，原生Mass/kg、未指定空气排放。氩-41同义词不一致，不能将该稳定氩质量流用于放射性氩/活度。

- 选定流: 氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_argon_out。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_argon_out`
- 来源: `nicolle-manufacturing`

###### 排入空气的未反应大气二氧化碳 (`ambient_co2_out`)

匹配公用工程/通风过程真实独立测得的物种出口。毛V包含未改变入口物种，不冒充反应产率或另份空气质量。原生未指定空气排放不是资源摄入、长期释放或水/土壤排放。不编比例；对应来源、空气介质及相态，真实转化独立计量。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 排入空气的未反应大气二氧化碳
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_ambient_co2_out。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_ambient_co2_out`
- 来源: `nicolle-manufacturing`

###### 排入空气的水蒸气 (`water_vapour`)

仅为独立确认的该真实分子物种生成/向未指定空气释放，排除长期/仅室内/水/土壤身份。原生CAS、分子身份、参考Mass/kg及全部参考属性均有约束力；宽泛同义词不能把H2O变成重水，也不能把NO变成NOx。对应真实来源/相态及命名所需化石碳源。总空气/湿气另行核对：未改变入口与净生成质量不重复，不假定化学反应或蒸汽系统，不从总VOC/COD/NOx或总元素量转换为该物种。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 气相H2O、CAS7732-18-5；虽同义词过宽，不能用于冰/液水/重水/氚水。原生Mass/kg、未指定空气排放，不固定温度/湿度。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_water_vapour。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_water_vapour`
- 来源: `nicolle-manufacturing`

###### 排入空气的化石二氧化碳 (`fossil_co2`)

仅为独立确认的该真实分子物种生成/向未指定空气释放，排除长期/仅室内/水/土壤身份。原生CAS、分子身份、参考Mass/kg及全部参考属性均有约束力；宽泛同义词不能把H2O变成重水，也不能把NO变成NOx。对应真实来源/相态及命名所需化石碳源。总空气/湿气另行核对：未改变入口与净生成质量不重复，不假定化学反应或蒸汽系统，不从总VOC/COD/NOx或总元素量转换为该物种。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 CO2、CAS124-38-9，化石源；虽同义词列有相关项，不能用于大气穿过量、碳酸根离子、干冰或放射性碳示踪。原生Mass/kg、未指定空气排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_fossil_co2。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_fossil_co2`
- 来源: `nicolle-manufacturing`

###### 排入空气的化石一氧化碳 (`fossil_co`)

仅为独立确认的该真实分子物种生成/向未指定空气释放，排除长期/仅室内/水/土壤身份。原生CAS、分子身份、参考Mass/kg及全部参考属性均有约束力；宽泛同义词不能把H2O变成重水，也不能把NO变成NOx。对应真实来源/相态及命名所需化石碳源。总空气/湿气另行核对：未改变入口与净生成质量不重复，不假定化学反应或蒸汽系统，不从总VOC/COD/NOx或总元素量转换为该物种。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 CO、CAS630-08-0、化石源，仅气态分子CO。同义词中的废气/烟气或低温液体不表示整份废气或购入液体可作该排放。原生Mass/kg、未指定空气排放。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_fossil_co。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_fossil_co`
- 来源: `nicolle-manufacturing`

###### 排入空气的一氧化氮 (`nitric_oxide`)

仅为独立确认的该真实分子物种生成/向未指定空气释放，排除长期/仅室内/水/土壤身份。原生CAS、分子身份、参考Mass/kg及全部参考属性均有约束力；宽泛同义词不能把H2O变成重水，也不能把NO变成NOx。对应真实来源/相态及命名所需化石碳源。总空气/湿气另行核对：未改变入口与净生成质量不重复，不假定化学反应或蒸汽系统，不从总VOC/COD/NOx或总元素量转换为该物种。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 NO、CAS10102-43-9；即使别名冲突，也不能用于NOx、HNO、硝酰或NO2。须独立确认真实分子NO。原生Mass/kg、未指定空气排放。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_nitric_oxide。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_nitric_oxide`
- 来源: `nicolle-manufacturing`

###### 排入空气的二氧化氮 (`nitrogen_dioxide`)

仅为独立确认的该真实分子物种生成/向未指定空气释放，排除长期/仅室内/水/土壤身份。原生CAS、分子身份、参考Mass/kg及全部参考属性均有约束力；宽泛同义词不能把H2O变成重水，也不能把NO变成NOx。对应真实来源/相态及命名所需化石碳源。总空气/湿气另行核对：未改变入口与净生成质量不重复，不假定化学反应或蒸汽系统，不从总VOC/COD/NOx或总元素量转换为该物种。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 NO2、CAS10102-44-0。原生同义词错误包含N2O4；该明确别名不一致不允许使用二聚体或总NOx质量。须独立确定真实单体NO2/状态，不将N2O4视为相同。原生Mass/kg、未指定空气排放。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_nitrogen_dioxide。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_nitrogen_dioxide`
- 来源: `nicolle-manufacturing`

###### 排入空气的臭氧 (`ozone`)

仅为独立确认的该真实分子物种生成/向未指定空气释放，排除长期/仅室内/水/土壤身份。原生CAS、分子身份、参考Mass/kg及全部参考属性均有约束力；宽泛同义词不能把H2O变成重水，也不能把NO变成NOx。对应真实来源/相态及命名所需化石碳源。总空气/湿气另行核对：未改变入口与净生成质量不重复，不假定化学反应或蒸汽系统，不从总VOC/COD/NOx或总元素量转换为该物种。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 O3、CAS10028-15-6；即使中文同义词冲突，也不是O2或三氧化二氮。原生Mass/kg、未指定空气排放；不默认电阻点焊生成臭氧。

- 选定流: 臭氧 `08a91e70-3ddc-11dd-9756-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_ozone。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_ozone`
- 来源: `nicolle-manufacturing`

### 过程：原批次放行后搬运及发运 (`services`)

仓储、包装/搬运/发运及每项真实后续作业（含未获准、失败或拒收作业），均作为原Q_c及观测h范围内的实际增量服务保留。记录每项真实物料、部件、水、能量、排放、损失、废物和处理交换及已发生负荷。许可和配置适用作业后试验/验收仅控制授权、继续合格状态、留置及最终处置，不能抹去真实作业或暗示恢复。复验、作业、退回或发运不产生新产量。

#### 输入

##### 产品流

###### 计量交流电 (`services_electricity`)

计量实际可分别归属电力，含相关待机/启停/清洗及辅助。原生界面为中国1–35kV用户侧电网平均消费组合；仅在真实场址/地域/电压/供方边界匹配时使用本UUID。其他地区/电压须另行核实原生流，不能声称法国实例工厂使用中国电网。保持MJ；实际kWh仅按3.6MJ/kWh换算一次。不并计场址总表及其分表。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 读取同一已计算u_i；原始记录采用cp_services_electricity；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_services_electricity`
- 来源: `nicolle-manufacturing`

###### 首次放行完整椅内部接收 (`released_received`)

与first_release_chair匹配的内部接收，继承原制造向量及Q_c。不形成新采购、产量或Q；边界合并时抵消匹配内部Q。原生族为厂内已制造完整金属框架座椅、Mass/kg，不设SKU/寿命/牌号默认。完整消费语境：场址与期间; 制造商及委外涂装边界; 型号与发布图纸/BOM版本; 完整固定四脚结构; 钢板和钢带牌号/炉号、轧制状态、厚度、实际宽度及部件几何; 座面、靠背/支撑、椅腿、横撑、每种铆钉及已装脚垫规格; 点焊与热铆连接; 实际切割辅助气体及成形润滑; 实际脱脂化学体系及供货浓度/载水; 独立采购的槽液组分; 整份环氧粉末SKU/批次/SDS与自制或外购; 实际回收粉及固化记录; 实际电力、燃料或外购热源及载体状态; 实际水回路; 配置适用符合性/验收规范、接头/涂层/稳定性检查及授权首次放行; 完整成品椅经校准净称重，排除所有包装、独立备件和试验质量; 以kg计的唯一首次放行Q; 件数与独立测得的配置质量; 不采用目录换算; 失败、零产出、启停、待机、清洗、抽样试验及全部实际返工（含未获准、失败或拒收作业）; 期初/期末原料和在制品数量及每种继承交换向量; 已放行成品期初/期末存量、原cohort的Q_c、毛发运/退回标识及观测服务范围h; 真实放行后作业的制造商/规范许可、作业后试验、验收和处置; 每种包材P/I/ER/S/EO/W及空包材/附着/周转库存; 唯一上游负荷所有者; 实际新旧资产及维修件、在装流体与已执行服务归属; 逐物种空气/水/固体平衡、含水及独立换算/不确定性; 原生流限制、具体供应方相容性、上游与处理缺口.

- 选定流: 带金属框架的座椅 `2b8511ea-6bd0-4283-b430-29da5bf2f701`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取匹配首次放行交接的同一已计算u_i，不新增Q或外部采购；原始记录采用cp_released_received。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_released_received`
- 来源: `nicolle-manufacturing`

###### 退回的未使用完整钢椅 (`chair_return`)

真实对外退回的同一已放行未使用完整配置，保留原发运/批次标识及独立称量的当前质量/状态。不假定退回质量等于原发运；水、损坏或已拆部件须明确。不完整/破碎残件须使用自身实物/废物身份，不能使用完整椅参考。不新增Q。原生已制造完整Product族为厂内Mass/kg，披露接收/服务地点。完整消费语境：场址与期间; 制造商及委外涂装边界; 型号与发布图纸/BOM版本; 完整固定四脚结构; 钢板和钢带牌号/炉号、轧制状态、厚度、实际宽度及部件几何; 座面、靠背/支撑、椅腿、横撑、每种铆钉及已装脚垫规格; 点焊与热铆连接; 实际切割辅助气体及成形润滑; 实际脱脂化学体系及供货浓度/载水; 独立采购的槽液组分; 整份环氧粉末SKU/批次/SDS与自制或外购; 实际回收粉及固化记录; 实际电力、燃料或外购热源及载体状态; 实际水回路; 配置适用符合性/验收规范、接头/涂层/稳定性检查及授权首次放行; 完整成品椅经校准净称重，排除所有包装、独立备件和试验质量; 以kg计的唯一首次放行Q; 件数与独立测得的配置质量; 不采用目录换算; 失败、零产出、启停、待机、清洗、抽样试验及全部实际返工（含未获准、失败或拒收作业）; 期初/期末原料和在制品数量及每种继承交换向量; 已放行成品期初/期末存量、原cohort的Q_c、毛发运/退回标识及观测服务范围h; 真实放行后作业的制造商/规范许可、作业后试验、验收和处置; 每种包材P/I/ER/S/EO/W及空包材/附着/周转库存; 唯一上游负荷所有者; 实际新旧资产及维修件、在装流体与已执行服务归属; 逐物种空气/水/固体平衡、含水及独立换算/不确定性; 原生流限制、具体供应方相容性、上游与处理缺口.

- 选定流: 带金属框架的座椅 `2b8511ea-6bd0-4283-b430-29da5bf2f701`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_chair_return。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_chair_return`
- 来源: `nicolle-manufacturing`

###### 替换模制橡胶椅脚垫 (`service_pad`)

原放行批次真实更换（含未获准/失败/拒收作业），明确整份供货脚垫及当前在装/拆除部件状态。不假定可修复，不计新椅产出或重复采购内含材料。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 替换模制橡胶椅脚垫
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_service_pad；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_service_pad`
- 来源: `nicolle-manufacturing`

###### 实际放行后作业用液态水 (`service_water`)

仅为原批次真实额外清洗/作业水；即使留在期末成品/服务完整湿库存也保留原始整份X_in。仅与其他入口去重，不能仅因期末存量抵消；不得以水密度代替其他物质密度。  原生工艺用水为经处理的工业用液水、Mass/kg。仅采用实际相容处理/水质/获得途径及供方边界，不假去离子/饮用标准/密度或供方，不重复供方已含处理。其他实际水种须另核身份。 全部真实放行后作业用水均采集，含未获准、失败或拒收作业；许可仅控制授权及合格状态/处置。本卡为独立实测的毛液水入口V_i，单位kg，在真实观测h范围内仅按原Q_c归一化一次，不作负荷库存修正或经济/服务份额缩放。真实供水及已执行作业/处理负荷另以唯一所有者链接一次。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_service_water；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_service_water`
- 来源: `nicolle-manufacturing`

###### 授权重涂的整份环氧粉末 (`service_powder`)

真实放行后重涂（含未获准/失败/拒收作业），须有原部件试验、新固化/检查/作业后试验/验收/处置及实测增量能耗/清洗/损失。遵循powder相同整份干态热固性环氧Product族限制；供货制剂计一次，不重购树脂/颜料，也不假定损坏椅可恢复。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 粉末涂料 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；原始记录采用cp_service_powder；服务使用原Q_c。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_service_powder`
- 来源: `tiger-processing-1213`

##### 废物流

###### 实际对外退回的损坏钢椅废物 (`damaged_chair_return`)

实际以废物状态接收的既往已放行损坏/不完整椅，独立称量当前状态并链接原发运/批次。它不是完整合格Product chair_return，不形成新采购、Q、负荷反转或信用。当前实测kg退回不能在缺少原始事件及正当向量证据时反转原交付负荷；明确实际接收状态和处置。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 实际对外退回的损坏钢椅废物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_damaged_chair_return。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_damaged_chair_return`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

##### 基本流

###### 实际进入留库椅的大气H2O水蒸气 (`service_humidity`)

实际普通储存/搬运或真实作业期间影响已放行椅/退回物的大气普通H2O水蒸气入流，与包装/辅助入口分别测量。完整当前湿态成品/维修保管库存与真实入口同时保留，使用原Q_c及观测h。不假维修、含水比例、密度或捕集信用。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 实际进入留库椅的大气H2O水蒸气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_service_humidity。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_service_humidity`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

#### 输出

##### 产品流

###### 完整椅毛实物发运 (`gross_dispatch`)

声明完整椅真实实测毛发运G，含原批次存量；椅净质量排除另列附着包装。分子为完整真实V_G，绝非制造负荷、库存修正消耗或经济份额。不新增Q、采购、上游负荷或信用；原制造和实际已执行服务保持唯一所有者。原生已制造完整金属框架座椅Product族为厂内Mass/kg；披露实际发运地点与状态。完整消费语境：场址与期间; 制造商及委外涂装边界; 型号与发布图纸/BOM版本; 完整固定四脚结构; 钢板和钢带牌号/炉号、轧制状态、厚度、实际宽度及部件几何; 座面、靠背/支撑、椅腿、横撑、每种铆钉及已装脚垫规格; 点焊与热铆连接; 实际切割辅助气体及成形润滑; 实际脱脂化学体系及供货浓度/载水; 独立采购的槽液组分; 整份环氧粉末SKU/批次/SDS与自制或外购; 实际回收粉及固化记录; 实际电力、燃料或外购热源及载体状态; 实际水回路; 配置适用符合性/验收规范、接头/涂层/稳定性检查及授权首次放行; 完整成品椅经校准净称重，排除所有包装、独立备件和试验质量; 以kg计的唯一首次放行Q; 件数与独立测得的配置质量; 不采用目录换算; 失败、零产出、启停、待机、清洗、抽样试验及全部实际返工（含未获准、失败或拒收作业）; 期初/期末原料和在制品数量及每种继承交换向量; 已放行成品期初/期末存量、原cohort的Q_c、毛发运/退回标识及观测服务范围h; 真实放行后作业的制造商/规范许可、作业后试验、验收和处置; 每种包材P/I/ER/S/EO/W及空包材/附着/周转库存; 唯一上游负荷所有者; 实际新旧资产及维修件、在装流体与已执行服务归属; 逐物种空气/水/固体平衡、含水及独立换算/不确定性; 原生流限制、具体供应方相容性、上游与处理缺口.

- 选定流: 带金属框架的座椅 `2b8511ea-6bd0-4283-b430-29da5bf2f701`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_gross_dispatch。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_gross_dispatch`
- 来源: `nicolle-manufacturing`

##### 废物流

###### 废弃的已放行涂层钢椅 (`service_chair_waste`)

实际储存/搬运/作业后废弃已放行椅，保留完整当前实物状态；原制造保留原批次归属。不能从首次Q扣除，也不假定恢复。真实增量作业/处理仍须归属。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 废弃的已放行涂层钢椅
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_service_chair_waste。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_service_chair_waste`
- 来源: `nicolle-manufacturing`

###### 拆除橡胶椅脚垫 (`service_removed_pad`)

真实单独拆除脚垫及附着水/胶计一次，明确真实去向及原批次；不再计第二份整椅。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 拆除橡胶椅脚垫
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_service_removed_pad。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_service_removed_pad`
- 来源: `nicolle-manufacturing`

###### 放行后椅清洗废水 (`service_wastewater`)

仅为真实独立流出的湿废水，绑定原批次作业及观测范围；保留独立测得组成和接收方，不从COD编造化学物种。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。

- 选定流: 放行后椅清洗废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_service_wastewater。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_service_wastewater`
- 来源: `nicolle-manufacturing`

##### 基本流

###### 放行后作业水蒸气 (`service_vapour`)

仅为原批次真实服务H2O水蒸气，原生CAS7732-18-5、Mass/kg、未指定空气排放，不采用重水身份，也不重复已计湿态水出口。保留真实相变及独立毛湿气入口/出口。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 气相H2O、CAS7732-18-5；虽同义词过宽，不能用于冰/液水/重水/氚水。原生Mass/kg、未指定空气排放，不固定温度/湿度。 包含留库椅普通储存/搬运的真实失水，无需维修；包装水蒸气为互斥独立事件，不重复同一出口。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_service_vapour。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_service_vapour`
- 来源: `nicolle-manufacturing`

### 过程：逐项包材毛实物事件 (`packaging`)

每种实际供货包材分别设条件P、I、ER、S、EO、W卡，披露毛实物事件及唯一负荷所有权链接。

#### 输入

##### 产品流

###### 瓦楞运输纸箱 (`pkg_carton_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。单种真实整件瓦楞运输纸箱，已制造接缝/印刷随整件计一次；原生折叠纸盒候选有相反耐用性表述，不采用。不设固定纤维比例、纯干质量或包装率。 仅在真实P事件发生时适用。分子为完整实测毛实物腿V_carton_P，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_carton_p。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_carton_p`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 瓦楞运输纸箱 (`pkg_carton_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。单种真实整件瓦楞运输纸箱，已制造接缝/印刷随整件计一次；原生折叠纸盒候选有相反耐用性表述，不采用。不设固定纤维比例、纯干质量或包装率。 仅在真实I事件发生时适用。分子为完整实测毛实物腿V_carton_I，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_carton_i。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_carton_i`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 瓦楞运输纸箱 (`pkg_carton_er`)

单种真实整件瓦楞运输纸箱，已制造接缝/印刷随整件计一次；原生折叠纸盒候选有相反耐用性表述，不采用。不设固定纤维比例、纯干质量或包装率。 仅在真实ER事件发生时适用。分子为完整实测毛实物腿V_carton_ER，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_carton_er。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_carton_er`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚乙烯保护薄膜 (`pkg_film_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。单种实际供货PE薄膜，CAS9002-88-4，明确牌号/厚度/印刷/胶层包含及完整湿态。原生Product族为厂内PE膜，行李分类为孤立分类问题，而名称/CAS/说明一致为PE膜，不是PET或树脂。不设再生含量/供方/地域默认。 仅在真实P事件发生时适用。分子为完整实测毛实物腿V_film_P，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_film_p。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_film_p`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚乙烯保护薄膜 (`pkg_film_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。单种实际供货PE薄膜，CAS9002-88-4，明确牌号/厚度/印刷/胶层包含及完整湿态。原生Product族为厂内PE膜，行李分类为孤立分类问题，而名称/CAS/说明一致为PE膜，不是PET或树脂。不设再生含量/供方/地域默认。 仅在真实I事件发生时适用。分子为完整实测毛实物腿V_film_I，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_film_i。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_film_i`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚乙烯保护薄膜 (`pkg_film_er`)

单种实际供货PE薄膜，CAS9002-88-4，明确牌号/厚度/印刷/胶层包含及完整湿态。原生Product族为厂内PE膜，行李分类为孤立分类问题，而名称/CAS/说明一致为PE膜，不是PET或树脂。不设再生含量/供方/地域默认。 仅在真实ER事件发生时适用。分子为完整实测毛实物腿V_film_ER，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_film_er。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_film_er`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 木质运输托盘 (`pkg_pallet_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。单种真实已制造木质运输平台，接头/紧固件、树种、含水、处理和构造均实测；原生宽泛成品木装载平台族为厂内Mass/kg，并非强制欧标尺寸、围板或组合包。不设固定周转次数、承载力、寿命或自动复用信用。 仅在真实P事件发生时适用。分子为完整实测毛实物腿V_pallet_P，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_pallet_p。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_pallet_p`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 木质运输托盘 (`pkg_pallet_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。单种真实已制造木质运输平台，接头/紧固件、树种、含水、处理和构造均实测；原生宽泛成品木装载平台族为厂内Mass/kg，并非强制欧标尺寸、围板或组合包。不设固定周转次数、承载力、寿命或自动复用信用。 仅在真实I事件发生时适用。分子为完整实测毛实物腿V_pallet_I，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_pallet_i。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_pallet_i`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 木质运输托盘 (`pkg_pallet_er`)

单种真实已制造木质运输平台，接头/紧固件、树种、含水、处理和构造均实测；原生宽泛成品木装载平台族为厂内Mass/kg，并非强制欧标尺寸、围板或组合包。不设固定周转次数、承载力、寿命或自动复用信用。 仅在真实ER事件发生时适用。分子为完整实测毛实物腿V_pallet_ER，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_pallet_er。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_pallet_er`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚丙烯基胶粘封箱带 (`pkg_tape_p`)

本P卡记录这一相同合格制品的有偿采购，含单独或随货付费；首次非采购接收和真实退回分别用I及ER。单种真实整份供货胶带，PP基材与胶粘剂随整份计一次；实际离型层/卷芯须识别，物理独立交换时才分列。不得再次采购内含胶粘固体/溶剂。 仅在真实P事件发生时适用。分子为完整实测毛实物腿V_tape_P，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚丙烯基胶粘封箱带
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_tape_p。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_tape_p`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚丙烯基胶粘封箱带 (`pkg_tape_i`)

本I卡记录这一相同合格制品的首次非采购接收，含单独赠与、借用、租赁/周转池领入或未付费供方随附接收。下文随货示例仅为子集，不能限制其他首次非采购来源；排除有偿P及真实ER。单种真实整份供货胶带，PP基材与胶粘剂随整份计一次；实际离型层/卷芯须识别，物理独立交换时才分列。不得再次采购内含胶粘固体/溶剂。 仅在真实I事件发生时适用。分子为完整实测毛实物腿V_tape_I，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚丙烯基胶粘封箱带
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_tape_i。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_tape_i`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚丙烯基胶粘封箱带 (`pkg_tape_er`)

单种真实整份供货胶带，PP基材与胶粘剂随整份计一次；实际离型层/卷芯须识别，物理独立交换时才分列。不得再次采购内含胶粘固体/溶剂。 仅在真实ER事件发生时适用。分子为完整实测毛实物腿V_tape_ER，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚丙烯基胶粘封箱带
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_tape_er。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_tape_er`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 实际托盘维修实木板 (`pack_repair_wood`)

仅为真实单独供货并加装到托盘的实木板，不是整托盘或其已包含木板。记录树种、加工、处理、污染、供货含水及实测整份湿态入流、在装/边角/拆除状态；不假设维修或木材密度。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 实际托盘维修实木板
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_pack_repair_wood。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pack_repair_wood`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 实际包装作业自来水 (`pack_repair_water`)

真实独立加入包装清洗/作业的液态自来水，仅在饮用标准处理、管道供水及供方与完整原生Product族相符时使用。参考Mass/kg；次级Volume系数不是实际密度。整份湿态物品已有载水仅为子账，不是本卡额外入流。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_pack_repair_water。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pack_repair_water`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

##### 废物流

##### 基本流

###### 实际进入包装的大气H2O水蒸气 (`pack_humidity`)

实际包装在普通储存/搬运或真实清洗/作业中的吸湿，无需发生维修。独立测量普通H2O水蒸气相及环境毛入口；不套密度、不用负水排放身份，也不由单残差推量。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 实际进入包装的大气H2O水蒸气
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_pack_humidity。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pack_humidity`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

#### 输出

##### 产品流

###### 瓦楞运输纸箱 (`pkg_carton_s`)

单种真实整件瓦楞运输纸箱，已制造接缝/印刷随整件计一次；原生折叠纸盒候选有相反耐用性表述，不采用。不设固定纤维比例、纯干质量或包装率。 仅在真实S事件发生时适用。分子为完整实测毛实物腿V_carton_S，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_carton_s。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_carton_s`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 瓦楞运输纸箱 (`pkg_carton_eo`)

单种真实整件瓦楞运输纸箱，已制造接缝/印刷随整件计一次；原生折叠纸盒候选有相反耐用性表述，不采用。不设固定纤维比例、纯干质量或包装率。 仅在真实EO事件发生时适用。分子为完整实测毛实物腿V_carton_EO，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_carton_eo。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_carton_eo`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚乙烯保护薄膜 (`pkg_film_s`)

单种实际供货PE薄膜，CAS9002-88-4，明确牌号/厚度/印刷/胶层包含及完整湿态。原生Product族为厂内PE膜，行李分类为孤立分类问题，而名称/CAS/说明一致为PE膜，不是PET或树脂。不设再生含量/供方/地域默认。 仅在真实S事件发生时适用。分子为完整实测毛实物腿V_film_S，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_film_s。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_film_s`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚乙烯保护薄膜 (`pkg_film_eo`)

单种实际供货PE薄膜，CAS9002-88-4，明确牌号/厚度/印刷/胶层包含及完整湿态。原生Product族为厂内PE膜，行李分类为孤立分类问题，而名称/CAS/说明一致为PE膜，不是PET或树脂。不设再生含量/供方/地域默认。 仅在真实EO事件发生时适用。分子为完整实测毛实物腿V_film_EO，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_film_eo。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_film_eo`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 木质运输托盘 (`pkg_pallet_s`)

单种真实已制造木质运输平台，接头/紧固件、树种、含水、处理和构造均实测；原生宽泛成品木装载平台族为厂内Mass/kg，并非强制欧标尺寸、围板或组合包。不设固定周转次数、承载力、寿命或自动复用信用。 仅在真实S事件发生时适用。分子为完整实测毛实物腿V_pallet_S，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_pallet_s。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_pallet_s`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 木质运输托盘 (`pkg_pallet_eo`)

单种真实已制造木质运输平台，接头/紧固件、树种、含水、处理和构造均实测；原生宽泛成品木装载平台族为厂内Mass/kg，并非强制欧标尺寸、围板或组合包。不设固定周转次数、承载力、寿命或自动复用信用。 仅在真实EO事件发生时适用。分子为完整实测毛实物腿V_pallet_EO，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_pallet_eo。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_pallet_eo`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚丙烯基胶粘封箱带 (`pkg_tape_s`)

单种真实整份供货胶带，PP基材与胶粘剂随整份计一次；实际离型层/卷芯须识别，物理独立交换时才分列。不得再次采购内含胶粘固体/溶剂。 仅在真实S事件发生时适用。分子为完整实测毛实物腿V_tape_S，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚丙烯基胶粘封箱带
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_tape_s。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_tape_s`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 聚丙烯基胶粘封箱带 (`pkg_tape_eo`)

单种真实整份供货胶带，PP基材与胶粘剂随整份计一次；实际离型层/卷芯须识别，物理独立交换时才分列。不得再次采购内含胶粘固体/溶剂。 仅在真实EO事件发生时适用。分子为完整实测毛实物腿V_tape_EO，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。

- 选定流: 聚丙烯基胶粘封箱带
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_tape_eo。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_tape_eo`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

##### 废物流

###### 废弃瓦楞运输纸箱 (`pkg_carton_w`)

单种真实整件瓦楞运输纸箱，已制造接缝/印刷随整件计一次；原生折叠纸盒候选有相反耐用性表述，不采用。不设固定纤维比例、纯干质量或包装率。 仅在真实W事件发生时适用。分子为完整实测毛实物腿V_carton_W，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。真实废物去向及完整污染状态独立于原生已制造Product；废物不使用Product UUID。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 若真实收集为一个混合出口，本W仅为pack_mixed_waste下独立实测来源子账，不叠加第二个交换或处理；否则保留本真实独立出口。

- 选定流: 废弃瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_carton_w。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_carton_w`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 废弃聚乙烯保护薄膜 (`pkg_film_w`)

单种实际供货PE薄膜，CAS9002-88-4，明确牌号/厚度/印刷/胶层包含及完整湿态。原生Product族为厂内PE膜，行李分类为孤立分类问题，而名称/CAS/说明一致为PE膜，不是PET或树脂。不设再生含量/供方/地域默认。 仅在真实W事件发生时适用。分子为完整实测毛实物腿V_film_W，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。真实废物去向及完整污染状态独立于原生已制造Product；废物不使用Product UUID。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 若真实收集为一个混合出口，本W仅为pack_mixed_waste下独立实测来源子账，不叠加第二个交换或处理；否则保留本真实独立出口。

- 选定流: 废弃聚乙烯保护薄膜
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_film_w。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_film_w`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 废弃木质运输托盘 (`pkg_pallet_w`)

单种真实已制造木质运输平台，接头/紧固件、树种、含水、处理和构造均实测；原生宽泛成品木装载平台族为厂内Mass/kg，并非强制欧标尺寸、围板或组合包。不设固定周转次数、承载力、寿命或自动复用信用。 仅在真实W事件发生时适用。分子为完整实测毛实物腿V_pallet_W，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。真实废物去向及完整污染状态独立于原生已制造Product；废物不使用Product UUID。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 若真实收集为一个混合出口，本W仅为pack_mixed_waste下独立实测来源子账，不叠加第二个交换或处理；否则保留本真实独立出口。

- 选定流: 废弃木质运输托盘
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_pallet_w。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_pallet_w`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 废弃聚丙烯基胶粘封箱带 (`pkg_tape_w`)

单种真实整份供货胶带，PP基材与胶粘剂随整份计一次；实际离型层/卷芯须识别，物理独立交换时才分列。不得再次采购内含胶粘固体/溶剂。 仅在真实W事件发生时适用。分子为完整实测毛实物腿V_tape_W，绝非A、库存修正消耗、净采购、经济份额或服务向量。P/I/ER/S/EO/W是不同实物事件；同一入口物料仅计P或I一次，不能两者并计。期初/期末含空包材、附着在制品/成品及周转存量；整份湿态新增入流即使留在期末也保留。内部复用抵消。实物卡不新增采购/供方负荷或信用：真实发生的唯一负荷维度另链接并归属一次。真实废物去向及完整污染状态独立于原生已制造Product；废物不使用Product UUID。 本卡披露完整真实出口实物事件V，不作库存修正或负荷份额乘数。真实关联制造、排放与处理负荷维度仍按原正当批次/所有者保留一次；对外出口/销售不自动构成T_out扣除或信用。 若真实收集为一个混合出口，本W仅为pack_mixed_waste下独立实测来源子账，不叠加第二个交换或处理；否则保留本真实独立出口。

- 选定流: 废弃聚丙烯基胶粘封箱带
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 读取同一已计算u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录采用cp_pkg_tape_w。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pkg_tape_w`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 实际独立拆出托盘维修废木料 (`pack_removed_wood`)

仅为真实独立拆出的木板/边角废料，按整份湿态Mass/kg计，明确处理/污染、危险性及真实合格接收方。原生废木料包括木包装残料；团聚木砖分类与宽泛名称/说明不一致，保留为分类缺陷，不能证明压块、回收、木灰或固定废物组成。不能用于整份混合出口，也不能在整托盘W内再次相加。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 废木料 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_pack_removed_wood。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pack_removed_wood`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 实际包装清洗废水 (`pack_wastewater`)

仅为包装作业实际独立流出的液态废水，记录整份湿质量及独立测得组成/接收方。不重复湿木料/包材出口已含水，也不由COD推化学物种。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 实际包装清洗废水
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_pack_wastewater。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pack_wastewater`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

###### 实际收集的混合包装废物 (`pack_mixed_waste`)

仅在纸箱/薄膜/木料/胶带真实作为一个收集混合流外送时，记录一个实际完整湿态Waste交换及一次处理/供方记录。各组件W来源为独立实测、守恒且不叠加的子账，合计核对此真实流，不新增第二个Waste事件。真实分别外送时使用各自W卡，不能虚构分流或混合。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 实际收集的混合包装废物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_pack_mixed_waste。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pack_mixed_waste`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

##### 基本流

###### 实际包装H2O水蒸气出口 (`pack_vapour`)

实际普通包装储存/搬运失水或真实清洗/作业释放的普通H2O水蒸气；自然湿气交换记录无需维修许可。原生CAS7732-18-5、气态Mass/kg、未指定空气排放；虽别名杂乱，不是液水/冰/重水/氚水。分别保留实测毛入口/出口及实际相变，不设固定蒸发率。 按kg记录完整实际毛V，仅以Q或原Q_c归一化一次，不是负荷向量、库存修正耗用或经济份额。真实关联采购/处理/作业负荷有一个独立所有者，不新增采购或信用。所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 使用唯一计算的u_i；本卡分子仅为完整实测毛实物腿V_i；原始记录来自cp_pack_vapour。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: `cp_pack_vapour`
- 来源: `nicolle-manufacturing`; `tiger-processing-1213`

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | 本归因制造方法仅用于正当采用分配解决多功能性情形。不能自动采用替代或避免产品信用。先用独立专属记录，再作真实或虚拟细分；保持每种椅配置、涂装批次、抽样和服务批次可追溯。 | `jrc-ilcd-2010` |
| allocation_causality | remaining common exchanges | 对每种剩余交换识别其与相应功能的决定性物理因果关系，并说明为何决定该交换。共同单位、材料归属、时间或能量可支持不同逐交换关系，但不是可任意选用的统一质量/时间键。 | `jrc-ilcd-2010` |
| allocation_residual | genuinely unresolved common-process residual | 只有真实剩余共同过程残余才使用各真实共同功能在同一过程门、状态和品质下的同期市场价值。从后续价格重建该门价格须剔除下游加工、运输和包装，保留价格、期间、数量、不确定性及敏感性。不将椅子当作QFD多功能家电，也不设固定比例。 | `jrc-ilcd-2010` |
| allocation_failures | manufacturing; treatment; services | 全部真实失败/零产出/启停/待机/清洗/抽样/返工与处理负荷保留正确批次归属。普通废物、不合格品、样品或对外销售不是T_out扣除项。仅对真实独立其他批次/功能且有正当分配/移交决定的向量转移一次，实物毛腿保持完整。Q=0时保留真实负荷，不产生单位结果。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

采集仅保存未归一原始记录。未来工厂数值是采集要求，不是假称已有采集数据。换算/归属在normalize_once之前完成；实物毛事件使用自身完整V分子，不作制造/服务负荷向量修正。每张卡及汇总标签读取同一最终值。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sheet | fabrication | sheet | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_strip | fabrication | strip | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_rivet | fabrication | rivet | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 经校准排液法或可追溯精确图纸几何保留该零件真实实体材料m3、原始件数及独立称量kg；不猜密度或用外包圆柱体积。 | m3 | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_forming_oil | fabrication | forming_oil | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_abrasive | fabrication | abrasive | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_wipe | fabrication | wipe | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_laser_nitrogen | fabrication | laser_nitrogen | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_laser_oxygen | fabrication | laser_oxygen | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_steel_scrap | fabrication | steel_scrap | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_spent_abrasive | fabrication | spent_abrasive | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_oily_wipe | fabrication | oily_wipe | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_metal_dust | fabrication | metal_dust | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_collected_metal_dust | fabrication | collected_metal_dust | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_alkaline_cleaner | finish | alkaline_cleaner | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_dilution_water | finish | dilution_water | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_di_water | finish | di_water | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_caustic | finish | caustic | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_carbonate | finish | carbonate | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_powder | finish | powder | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_natural_gas | finish | natural_gas | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_purchased_heat | finish | purchased_heat | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | MJ | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_steam_carrier | finish | steam_carrier | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_hotwater_carrier | finish | hotwater_carrier | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_waste_powder | finish | waste_powder | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_spent_bath | finish | spent_bath | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_rinse_wastewater | finish | rinse_wastewater | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_degreasing_sludge | finish | degreasing_sludge | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_spent_filter | finish | spent_filter | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_condensate_return | finish | condensate_return | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_hotwater_return | finish | hotwater_return | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_coating_particles | finish | coating_particles | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_rubber_foot | release | rubber_foot | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_first_release_chair | release | first_release_chair | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 每种首次放行完整配置仅登记一次；经校准完整椅净称重及皮重，排除包装/独立备件/试验负荷；核对脚垫、图纸/BOM、验收授权，将真实净kg求和为Q。件数仅核对实测质量，不能推算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_reject_chair | release | reject_chair | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pad_reject | release | pad_reject | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_fabrication_electricity | fabrication | fabrication_electricity | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | MJ | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_finish_electricity | finish | finish_electricity | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | MJ | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_release_electricity | release | release_electricity | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | MJ | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_support_electricity | support | support_electricity | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | MJ | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_services_electricity | services | services_electricity | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | MJ | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_new_press | support | new_press | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_retired_press | support | retired_press | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_new_welder | support | new_welder | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_retired_welder | support | retired_welder | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_new_oven | support | new_oven | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_retired_oven | support | retired_oven | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_new_compressor | support | new_compressor | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_retired_compressor | support | retired_compressor | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_new_die | support | new_die | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_retired_die | support | retired_die | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_electrode | support | electrode | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_removed_electrode | support | removed_electrode | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_hydraulic_oil | support | hydraulic_oil | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_removed_hydraulic_oil | support | removed_hydraulic_oil | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_cooling_charge | support | cooling_charge | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_removed_cooling_charge | support | removed_cooling_charge | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_refrigerant | support | refrigerant | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_removed_refrigerant | support | removed_refrigerant | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_oily_maintenance_water | support | oily_maintenance_water | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_cooling_return | support | cooling_return | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_refrigerant_leak | support | refrigerant_leak | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_compressed_air | support | compressed_air | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_ambient_nitrogen | support | ambient_nitrogen | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_ambient_oxygen | support | ambient_oxygen | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_ambient_argon | support | ambient_argon | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_ambient_humidity | support | ambient_humidity | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_ambient_co2 | support | ambient_co2 | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_nitrogen_out | support | nitrogen_out | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_oxygen_out | support | oxygen_out | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_argon_out | support | argon_out | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_ambient_co2_out | support | ambient_co2_out | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_water_vapour | support | water_vapour | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_fossil_co2 | support | fossil_co2 | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_fossil_co | support | fossil_co | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_nitric_oxide | support | nitric_oxide | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_nitrogen_dioxide | support | nitrogen_dioxide | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_ozone | support | ozone | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_released_received | services | released_received | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_chair_return | services | chair_return | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_service_pad | services | service_pad | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_service_water | services | service_water | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；实际source_process；独立实物入口及同侧重叠；实际已执行服务，含失败/未获准作业 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 全部真实放行后作业用水均采集，含未获准、失败或拒收作业；许可仅控制授权及合格状态/处置。本卡为独立实测的毛液水入口V_i，单位kg，在真实观测h范围内仅按原Q_c归一化一次，不作负荷库存修正或经济/服务份额缩放。真实供水及已执行作业/处理负荷另以唯一所有者链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_service_powder | services | service_powder | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_gross_dispatch | services | gross_dispatch | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_service_chair_waste | services | service_chair_waste | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_service_removed_pad | services | service_removed_pad | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_service_wastewater | services | service_wastewater | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_service_vapour | services | service_vapour | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_carton_p | packaging | pkg_carton_p | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实物品修理材料/水X及普通湿气；仅与同侧其他流项重叠；完整期末湿库存保留 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_carton_i | packaging | pkg_carton_i | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_carton_er | packaging | pkg_carton_er | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_carton_s | packaging | pkg_carton_s | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_carton_eo | packaging | pkg_carton_eo | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_carton_w | packaging | pkg_carton_w | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_film_p | packaging | pkg_film_p | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实物品修理材料/水X及普通湿气；仅与同侧其他流项重叠；完整期末湿库存保留 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_film_i | packaging | pkg_film_i | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_film_er | packaging | pkg_film_er | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_film_s | packaging | pkg_film_s | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_film_eo | packaging | pkg_film_eo | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_film_w | packaging | pkg_film_w | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_pallet_p | packaging | pkg_pallet_p | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实物品修理材料/水X及普通湿气；仅与同侧其他流项重叠；完整期末湿库存保留 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_pallet_i | packaging | pkg_pallet_i | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_pallet_er | packaging | pkg_pallet_er | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_pallet_s | packaging | pkg_pallet_s | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_pallet_eo | packaging | pkg_pallet_eo | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_pallet_w | packaging | pkg_pallet_w | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_tape_p | packaging | pkg_tape_p | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实物品修理材料/水X及普通湿气；仅与同侧其他流项重叠；完整期末湿库存保留 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_tape_i | packaging | pkg_tape_i | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 ；包装接收来源；付费/非采购依据；所有者/保管者；同件原外发ID | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。  仅对包装按packaging_receipt_basis分类，单独非采购接收归I，不得虚构ER或X。| kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_tape_er | packaging | pkg_tape_er | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_tape_s | packaging | pkg_tape_s | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_tape_eo | packaging | pkg_tape_eo | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pkg_tape_w | packaging | pkg_tape_w | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_service_humidity | services | service_humidity | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_damaged_chair_return | services | damaged_chair_return | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pack_mixed_waste | packaging | pack_mixed_waste | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pack_vapour | packaging | pack_vapour | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pack_wastewater | packaging | pack_wastewater | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pack_removed_wood | packaging | pack_removed_wood | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pack_humidity | packaging | pack_humidity | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pack_repair_water | packaging | pack_repair_water | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_pack_repair_wood | packaging | pack_repair_wood | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性；真实source_process及保管/事件标识；实测新增/拆出材料；普通吸湿/蒸发；独立水相/物种；实际许可/结果/处置；混合流标识及独立实测非叠加来源；互斥成品/维修在制品 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_new_filter | finish | new_filter | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_finish_wipe | finish | finish_wipe | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_finish_wipe_waste | finish | finish_wipe_waste | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 按原生广延单位独立记录该精确事件与方向的完整真实V；保留全部真实腿和湿库存。库存修正或负荷份额不得改变V；实际发生负荷另链接一次。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |
| cp_rivet_heating_gas | fabrication | rivet_heating_gas | foreground_record | 场址; 过程; 期间; 供方/接收方; 批次; row_id; 原始单位; 原始读数; 校准/皮重; 整份供货/残留水; 组成/状态; 期初/期末空包材/原料/在制/成品/在装库存; 完整毛V; 逐交换继承向量; 唯一负荷所有者; 实际失败/清洗/试验; Q或原Q_c; 观测h; 不确定性 | 保留该精确原子交换未归一原始称重/表计/接收/分析及状态记录；先核对原始仪器和库存/继承向量，再正当归属；采集不作分母运算。 | kg | 每次真实事件或表计区间 | 完整声明期间，含零产出、启停、待机、清洗、失败和试验 | 实际制造/委外/服务门，唯一匹配批次及观测范围 | 每 1 kg 参考流 | 原始签认记录; 校准/状态/皮重; 实际组成及唯一所有者核对; 缺失值与不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | 先换算原始单位/状态再归属。累计表差已积分时间；仅真实速率按实测区间积分。MJ=3.6*metered_kWh。体积换质量须同一物质实际状态的独立密度；保留气体压力/温度/压缩因子/湿度及独立测量铆钉实体体积/质量。原生次级系数不能建立未测密度、单椅质量或热值。 | raw_units; actual_state; independent_measurements | converted_raw |  |
| manufacture_vector | burden-dimension exchanges | A_i = B_open_i + U_i + T_in_i - B_close_i - T_out_i。为独立归属/细分/正当逐交换分配后的同单位继承向量；U包含实际整份供货及发生服务/失败/试验/清洗/处理一次。B_close仅为未放行原料/在制品或真实未用/未分配供货/服务收费，绝非已放行成品。已库存修正的消耗不能再次修正。T_out须为真实其他批次/功能及正当一次移交，绝非普通废物/销售。 | B_open_i; U_i; T_in_i; B_close_i; T_out_i | A_i | `jrc-ilcd-2010` |
| cohort_service | services | A_service_i_c_h包含原批次c在观测h内实际已执行增量服务/作业/处理及正当继承收费。仅未用/未分配服务收费结转；即使成品留在期末库存也保留已执行服务。保留原制造向量和Q_c。记录真实新增件/水、移除件、损失、许可/作业后试验/验收/处置；退回/作业不产生新产量。 所有真实已发生作业（含未获准、失败或拒收作业）及每项实际物流/负荷均完整采集。许可、配置适用作业后试验和验收仅控制授权、继续合格存量及实际暂存/废弃/处置，不能删除已发生负荷。普通储存/搬运吸湿或蒸发无需虚构维修许可。维修保管互斥：椅/物料仅在已放行/留置成品或维修在制品中计一次；实际新增/拆除部件和水均保留，不假定恢复。 | original_cohort; Q_c; observed_h; performed_service; unused_charges | A_service_i_c_h | `jrc-ilcd-2010`; `tiger-processing-1213` |
| gross_legs | gross-dimension cards | V_i为该精确卡在真实单位/状态换算后按声明单位记录的实际完整实物入/出事件。包材P/I/ER/S/EO/W、资产、X_in/X_out、载体返回、大气物种毛量、对外退椅和毛G直接使用V_i。不能用B_open+U-B_close、分配份额、制造向量或服务向量改变V_i。另链接真实负荷维度并归属一次，不新增采购、供方负荷或信用。 | complete_gross_event; unit_state_conversion; single_load_owner | V_i |  |
| normalize_once | all inventory rows | u_i = N_i / D；u_i为每1kg参考流的交换量。制造负荷N=A_i、D=Q；独立原批次服务N=A_service_i_c_h、D=Q_c；实物毛卡N=实际完整V_i，D=其原批次Q_c（制造批次则为Q）；内部Q交接仅携带匹配数量。D须正值。D=0保留负荷和毛事件，不出单位结果。这是唯一产品分母除法；卡片及汇总标签读取同一u_i。first_release_chair恰为1千克完整合格椅净质量。 | N_i; D; A_i; A_service_i_c_h; V_i; Q; Q_c; cp_first_release_chair | u_i | `jrc-ilcd-2010` |
| manufacture_mass_gate | fabrication; finish; release; support | 期初原料/在制品/供货/资产/在装流体 + 全部真实对外制造/资产入流 + 任何真实作业调入原成品F_to = 完整期末未放行/在装湿库存 + 唯一首次放行净Q + 附着包装交接P_Q + 作业后原物料交回F_back + 全部对外固/液/气出口。各项为实际完整实物质量，不是负荷份额；新增料/水即使留在期末湿库存也保留。内部在制品/回收粉仅抵消一次。 F_to/F_back披露每次真实保管移动，包含未获准/失败作业，维修在制品与成品库存互斥；许可不能抹去真实移交。 | opening_manufacture; external_ingress; F_to; closing_manufacture; Q; P_Q; F_back; exits | manufacture_mass_balance |  |
| fg_service_mass_gate | services; packaging | 期初已放行成品及附着包材 + Q + P_Q + 实际对外退回R + F_back + 全部真实服务材料/水/包材入流 = 完整期末成品/退回/服务湿库存 + 含包装毛G + F_to + 全部真实服务出口。R为当前实测物料，不假定原发运质量。X/P/I仅与另一真实入/出项去重；保留新增入流及完整期末湿质量。 | opening_FG; Q; P_Q; R; F_back; service_ingress; closing_FG; G; F_to; service_exits | service_mass_balance |  |
| combined_mass_gate | all processes | 合并时抵消匹配内部Q/P_Q和F_to/F_back、在制品及内部复用：期初合并湿库存 + 全部真实对外入流 + 实际对外退回 = 完整期末合并湿库存 + 毛发运 + 全部其他对外固/液/气出口。绝不能把Q和期末已放行成品计为两份生产产出。包含真实新旧资产、部件及在装流体；电力/热量仍为独立能量账。 | opening_combined; external_ingress; actual_returns; closing_combined; gross_shipments; other_exits | combined_mass_balance |  |
| packaging_gate | each actual package | 对每种实际整件/材料分别执行Opening + P + I + ER + X_in = Closing + S + EO + W + X_out。包含全部空包材、附着在制品/成品及周转库存；S对应真实毛发运。P/I按供货整份湿态物品计一次；水分/胶层子账与整件仅去重一次。内部复用抵消。期末库存或负荷份额不能取消真实新增入流；采购/随货供方负荷只有一个所有者。 X_in/X_out为实际独立新增/拆除材料及液/汽水事件，仅与同一事件在同侧已测的另一流项去重，不能与库存、反向流或卡片存在本身抵消。真实入流与完整期末湿库存同时保留。一个真实收集混合Waste出口使用pack_mixed_waste；组件W为守恒且不叠加的来源，不是新增出口/处理。 整件湿态包材P/I/ER入账已含完整组分和留存水一次。现场真实新增或拆出组分/水须与这些接收项互斥，或通过实测整件/组分桥接及配对内部移交核对；不能将组装整件质量与同一组分质量重复并加。发生情况或组成未知仍为未解决，不能当零。一个真实混合出口中，独立实测来源W之和须等于独立实测的整份混合湿总量；只报告该唯一总量或其互斥分区，不能将两者作为叠加交换，且仅有一个实际处理/供方所有者。 | Opening; P; I; ER; Closing; S; EO; W; X_in; X_out; actual_mixed_stream_origins | package_balance |  |
| species_phase_energy | all processes | 总实物质量与相关Fe/C/N/O/H/其他真实元素须独立核对；仅按证据区分真实分子/固体物种与游离/相态/结构或反应水。一个平衡残差不能确定两个未知。COD/VOC/NOx/总金属/粒径总量在真实物种证据前仍为分析指标，不假定氧化、反应水或固定气体组成。燃料载体质量与真实热值/热量分账，外购蒸汽/热水质量/焓/返回与唯一供方边界明确。 | independent_mass; element_assays; species; water_phases; gas_state; enthalpy; supplier_boundary | independent_balances |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_configuration | complete chair | 追溯实际完整BOM及发布图纸、净质量、同配置放行授权和相容原生限制，不采用目录质量换算或默认认证。 | 图纸/BOM; 材料证书; 经校准秤/皮重; 验收日志 |
| dq_coverage | all processes | 连续明确期间覆盖全部班次、失败、零产出、启停、待机、清洗、试验及全部阶段/委外实测公用工程。缺失实际数据为未知，不是零或检查通过。 | 原始日志/表计/发票; 分配及不确定性; 阶段/委外范围 |
| dq_stocks | all cohorts and gross events | 保留逐交换继承向量、完整湿库存、真实新增入流及原批次已执行服务。每条实物腿与唯一真实负荷所有者分别可识别。 | 库存/发运/退回账; 包材六腿台账; 资产/部件/流体记录 |
| dq_sources | external evidence | Nicolle页面来自同一制造商且炉温冲突，不默认槽液化学品或回收率/零排放。TIGER语境独立且具产品特定性，排除幕墙/金属效果数值限值、多涂层及维护周期。ILCD仅用于正当归因分配。 | 完整原件/语境; 区分原取得与本次提取/适用性; 测量及方法评审 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| valid_identity | reference product | 确认完整验收固定钢椅、真实制造路线、精确原生身份/属性/单位、全部限定信息和唯一明确first_release_chair链接。框架、钢管、树脂、木座面或不完整总成不属于本终端。核心成品身份未决或主要终端/方法证据缺失阻止可用已编写指引。普通辅料/供方或未来前景测量保留为披露缺口，不自动降draft。 | `nicolle-manufacturing`; `un-cpc3-2025` |
| valid_units | all inventory rows | 逐项检查每种原生广延属性/单位，不把MJ、m3或其他真实分子强制套成Mass/kg；铆钉参考体积须有真实配置特定测量及独立实物kg。保留原始换算、唯一Q>0或原Q_c及唯一normalize_once；Q=0保留真实负荷，不出单位结果。 |  |
| valid_stocks | all processes | 核对完整制造、成品/服务、合并实物门，包材/资产/维修水毛事件、原料/在制继承向量和唯一负荷所有权。期末已放行成品不扣制造，原批次已执行服务保留。普通废物/销售不能伪装T_out。新增入流即使留在期末湿库存也保留。 |  |
| valid_chemistry | all material and emission exchanges | 每个选定流须为一种实际物品/制剂/化学品/物种并有真实状态和去向。对实际用途检查全部原生名称/同义词/备注/CAS/形态/路线/地域/介质/类型/属性；孤立分类问题与真实物理冲突分开。不从总量指派物种、不用一个残差拟合两个未知、不重复制剂组分、不并计空气汇总及物种、不假定水密度适用于其他物质。 |  |
| valid_rework_quality | finish; release; services | 保留实际配置特定验收、抽样/破坏失败及放行后制造商/规范许可/作业后试验/处置。涂料说明针对真实产品/体系适用性；工程检查不自动证明恢复、已批准寿命/强度或认证。 | `tiger-processing-1213`; `nicolle-manufacturing` |
| valid_evidence | all sources and rules | 明确保留原件语境范围与限制、真实来源所有权及未决上游/场址测量。路线/制造商证据不支持LCA分配；ILCD分配不确认工业化学品或工厂数量。待科学评审与中文aligned不等于出版、翻译评审或已接受CPC映射。 | `jrc-ilcd-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 核实供方且单独声明原批次服务观测范围的相容完整冲压钢椅制造输入。 |
| allowed_use | 声明路线/配置及首次放行净质量基准；原制造负荷所有者唯一，真实新增服务另列。 |
| excluded_use | 排除裸框架、单独销售的座面/靠背、无靠背凳、钢管框架/PP壳体或木座面变型、购买成品椅包装、旋转/脚轮/躺靠/折叠机构、软包、沙发床、车辆座椅、轮椅以及医用或儿童专用安全产品。户外电泳、镀锌、液漆及仅UV固化属于其他路线，须重新判断适用性。安装、使用、寿命期坐用服务和报废不属于本制造参考。 |
| required_metadata | 场址与期间; 制造商及委外涂装边界; 型号与发布图纸/BOM版本; 完整固定四脚结构; 钢板和钢带牌号/炉号、轧制状态、厚度、实际宽度及部件几何; 座面、靠背/支撑、椅腿、横撑、每种铆钉及已装脚垫规格; 点焊与热铆连接; 实际切割辅助气体及成形润滑; 实际脱脂化学体系及供货浓度/载水; 独立采购的槽液组分; 整份环氧粉末SKU/批次/SDS与自制或外购; 实际回收粉及固化记录; 实际电力、燃料或外购热源及载体状态; 实际水回路; 配置适用符合性/验收规范、接头/涂层/稳定性检查及授权首次放行; 完整成品椅经校准净称重，排除所有包装、独立备件和试验质量; 以kg计的唯一首次放行Q; 件数与独立测得的配置质量; 不采用目录换算; 失败、零产出、启停、待机、清洗、抽样试验及全部实际返工（含未获准、失败或拒收作业）; 期初/期末原料和在制品数量及每种继承交换向量; 已放行成品期初/期末存量、原cohort的Q_c、毛发运/退回标识及观测服务范围h; 真实放行后作业的制造商/规范许可、作业后试验、验收和处置; 每种包材P/I/ER/S/EO/W及空包材/附着/周转库存; 唯一上游负荷所有者; 实际新旧资产及维修件、在装流体与已执行服务归属; 逐物种空气/水/固体平衡、含水及独立换算/不确定性; 原生流限制、具体供应方相容性、上游与处理缺口 |
| required_quality_disclosure | 全部未知/未决辅料UUID、原生限制、供方/处理缺口、真实数据期间/覆盖/不确定性、分配理由、库存/毛流平衡及待科学/翻译评审。不编数量默认值或已完成评审。 |
| update_trigger | 材料、结构、连接/涂层、自制外购、规范、供方/原生身份、公用工程界面、放行门或证据变化；复用前重判路线。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC3.0解释说明，2025年6月30日，第186–188页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 38111及相邻座椅/其他家具/部件范围；不批准制造路线或方法。 |
| nicolle-manufacturing | handbook | Chaises Nicolle，椅制造完整官方页面；https://chaises-nicolle.com/us/manufacturing/ ；获取于2026-10-20 | 完整钢椅工序/配置实例、脚垫装配、检查及包装；实际供货制剂、化学体系、公用工程须有前景记录。户外电泳为独立排除路线，不设零排放/固化/成品率默认。 |
| nicolle-secrets | handbook | Chaises Nicolle，整椅制造技术说明；https://chaises-nicolle.com/en/the-secrets-of-building-a-chaise-nicolle-chair/ ；获取于2026-10-20 | 同制造商连接与前处理语境补充；不是独立工厂或独立来源。保留炉温差异，不设规定炉温。 |
| tiger-processing-1213 | handbook | TIGER Coatings，加工说明，数据表1213，06-25版，完整4页；https://www.tiger-coatings.com/fileadmin/user_upload/PDS_verarbeitungshinweise_1213_en.pdf ；获取于2026-10-20 | 真实体系固化/相容性、清洗、包装及条件后续作业适用性。不证明Nicolle配方或认证，幕墙膜厚、金属效果回收比例及维护/保护膜时间实例不作为椅默认。 |
| jrc-ilcd-2010 | official_guidance | 欧盟委员会JRC，ILCD手册LCA详细指南，2010年3月第一版，§§7.9.2–7.9.3，印刷页255–272/PDF页275–292；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分/虚拟细分、决定性逐交换物理因果及真实剩余共同过程门市场价值。区分QFD多功能产品，不推断工业化学品或排放因子。 |
