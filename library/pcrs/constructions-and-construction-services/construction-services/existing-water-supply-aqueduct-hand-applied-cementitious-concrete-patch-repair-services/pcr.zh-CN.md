---
schema_version: 1
pcr_id: pcr.existing-water-supply-aqueduct-hand-applied-cementitious-concrete-patch-repair-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 既有供水渡槽手工水泥基混凝土局部修补服务

## 1. 范围与适用性

本类别适用于既有钢筋混凝土供水渡槽或明渠局部剥落混凝土的一次有界修复，不包括管道。实际批准的单组分水泥基聚合物改性修补砂浆与清洁水拌合后，由人工压实在保留的坚实混凝土及经评定的保留钢筋周围。服务包括交付验收安装修补几何所需的增量隔离、通行、准备、养护和试验；其他承包商购买或负责这些作业并不将其排除出边界。

服务终点为完整规定养护、几何及粘结检验、缺陷关闭和业主要求的涉水卫生放行后签署的修补交接。不包括新建渡槽、灌溉、排水、防洪或通航渠道、供水管道、交通隧道、整体喷涂衬里、活动接缝重密封、环氧裂缝灌注、重大加固、钢筋更换或后续供水运行。产品可接触饮用水的声明本身不足以证明实际场址批准。不得声称通用修补寿命、渗漏降低、强度结果或养护时长。来源：`sika-4100-protect-2025`；`sika-concrete-repair-handbook`；`un-cpc-3-2025`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-water-supply-aqueduct-hand-applied-cementitious-concrete-patch-repair-services |
| classification_refs | CPC 3.0 54231；较窄的方法子集 |
| covered_products | 既有非管道供水混凝土渡槽或渠道的单组分水泥基局部剥落手工修补最终验收服务 |
| excluded_products | 新建输水构筑物；灌溉、防洪或通航工程；管道；整体喷衬；裂缝灌注；接缝密封；新建或更换钢筋及重大结构加固 |
| representative_product | 在准备后的保留坚实混凝土上，围绕经评定的保留钢筋压实的批准涉水水泥基砂浆修补 |
| production_route | 评定、隔离和通行 → 局部移除及清洁 → 有条件的批准钢筋防护或底涂 → 实测干粉及水批次 → 手工刮浆、压实和成形 → 保护养护 → 检验、返工及签署卫生交接 |
| market_state | 业主验收时已完成的安装修补服务；不是干粉砂浆销售或新拌砂浆供应 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 既有供水渡槽局部混凝土修补验收服务 |
| how_much | 1 m3唯一最终验收安装修补几何体积 |
| how_well | 实际批准的涉水砂浆或体系；经评定的保留坚实基层及钢筋；完成规定养护；几何、粘结及业主卫生关口验收 |
| how_long_or_cycle | 一次有界工单，覆盖全部尝试、准备、养护、试验和签署交接前缺陷关闭；关联库存结转及共用资产在全部相关期间的制造、运行、维护更换和终止报废阶段；不假定使用寿命 |
| reference_flow_link | `accepted_patch_repair` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有供水渡槽手工水泥基混凝土局部修补验收服务 |
| 参考流属性 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必要限定条件 | 供水功能与非管道主体；工单及修补ID；保留主体和钢筋评定；实际砂浆SKU、版本及批准；净修补面积、深度分布、V测量和不确定性；基层与暴露环境；批次、层、环境与养护记录；实际底涂及防护；涉水卫生要求、粘结和几何结果、缺陷关闭及签署验收 |

V > 0为实际前后几何测量所得互不重叠最终验收安装修补体积之和。重叠区域仅计一次，排除空隙、拒收材料、已移除失败尝试及未验收修补。新拌砂浆产量、供应砂浆、整个渠道长度或输水量均不是V。前景数据包须列明全部必要限定条件；关口或几何未知时不能产生验收输出。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_geometry` | `accepted_patch_repair` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按互不重叠修补ID和实测深度分布测量验收几何，采用cp_accepted_patch_repair确定V；拒绝缺失或非正V，排除未验收、重叠和空隙体积。 |
| `state_conversion` | `repair_powder`; `mix_water`; `atom_req_patch_repair_material_waste`; `atom_req_patch_repair_aqueous_waste` | 实际实测状态特定属性 | 实际兼容单位 | 分别记录干粉、计量水、全部新拌材料及固化保留材料。质量与体积换算须有匹配配方、含水率、温度和状态的实测可追溯密度证据；新拌密度永不定义验收固化几何。 |
| `native_units` | 所有清单行 | 实际核实的原生属性 | 实际兼容原生单位 | 计数、长度、面积、质量、体积、能量及运输单位保持独立兼容账目，记录实际SKU、组分、供方及单位换算支持。不得由价格或工时推定件数，也不得用燃料热值属性替代电力。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经调查、局部剥落的既有供水混凝土渡槽，具有保留坚实基层及可能暴露的保留钢筋；业主批准修补范围与实际运行或隔离状态 |
| starting_condition_role | 保留主体的状态接口，不是新制造渡槽或采购输入交换 |
| product_classification_scope | CPC 3.0 54231中供水非管道构筑物施工服务子集 |
| recursive_input_rule | 采购同类别分包服务时，须声明精确范围、资源和成果的有界上游服务；不得递归采购整个渡槽或重复计算同一修补输出 |
| upstream_dataset_requirement | 实际干粉及配方、其他供应物资、公用工程、燃料、运输、供方及完整寿命归属工具和通行资产须有兼容上游数据集与边界；覆盖缺失须标为不完整 |
| disclosure | 声明通行、运行状态、隔离导流排水、承包范围、保留主体、实际材料、所排除相邻施工及全部条件角色的实际缺席证据 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本类别适用于既有钢筋混凝土供水渡槽或明渠局部剥落混凝土的一次有界修复，不包括管道。实际批准的单组分水泥基聚合物改性修补砂浆与清洁水拌合后，由人工压实在保留的坚实混凝土及经评定的保留钢筋周围。服务包括交付验收安装修补几何所需的增量隔离、通行、准备、养护和试验；其他承包商购买或负责这些作业并不将其排除出边界。 服务终点为完整规定养护、几何及粘结检验、缺陷关闭和业主要求的涉水卫生放行后签署的修补交接。不包括新建渡槽、灌溉、排水、防洪或通航渠道、供水管道、交通隧道、整体喷涂衬里、活动接缝重密封、环氧裂缝灌注、重大加固、钢筋更换或后续供水运行。产品可接触饮用水的声明本身不足以证明实际场址批准。不得声称通用修补寿命、渗漏降低、强度结果或养护时长。来源：`sika-4100-protect-2025`；`sika-concrete-repair-handbook`；`un-cpc-3-2025`。 | `sika-4100-protect-2025`; `sika-concrete-repair-handbook`; `un-cpc-3-2025` |
| `host_gate` | `patch_repair` | 标记缺陷并仅移除批准材料，不损害结构完整性。评定稳定、清洁、粗糙坚实基层及保留钢筋；重大钢筋损伤或结构重建超出本子集，须转交处理。记录实际指导与批准。 | `sika-4100-protect-2025`; `sika-concrete-repair-handbook` |
| `route_gate` | `patch_repair` | 采用4100英国版2025年4月v02.03时，每25 kg干粉使用4.4–4.5 L水，至少搅拌3分钟并逐批检验稠度；每层4–60 mm及空气与基层+5至+30 °C限值仅适用于该产品指导。预湿后清除积水，刮浆并牢固压实避免空隙，不得追加抹面水或形成羽状薄边。记录实际批准的分层方案；在采用该4100指导且保留钢筋暴露时，须按实际批准方法核实Sa 2（ISO 8501-1）准备要求。 | `sika-4100-protect-2025` |
| `conditional_coatings` | `patch_repair` | 准备充分且粗糙的基层通常无需粘结底涂；实际需要时须拥有兼容湿碰湿底涂及保留钢筋防护的投入，包括每个供应组分与完整暴露周向覆盖。不得假定其缺席或编造配比。 | `sika-4100-protect-2025`; `sika-concrete-repair-handbook` |
| `cure_and_handover` | `patch_repair` | 立即采用实际兼容方法保护新修补体免于过早干燥。保留养护资源和天气记录，在签署验收前满足实际产品、现行指导及业主的养护、几何、粘结与涉水卫生条件。宣传册实验室强度或计时结束不代表现场验收。 | `sika-4100-protect-2025`; `sika-concrete-repair-handbook` |
| `complete_job` | 所有清单行 | 包括实际增量隔离、导流、排水、通行、清洁、预湿、围护、消毒或试验用水、养护及缺陷关闭，也包括供方支付的资源。记录超供、不合格拌料、工具冲洗、包装、废物运输处理、公用工程及排放。未知不是零；有证据的实际缺席可成立。 |  |
| `one_owner` | `atom_req_patch_repair_providers`; `atom_req_patch_repair_assets`; `atom_req_patch_repair_freight`; `electricity`; `atom_req_patch_repair_fuel` | 在直接作业、供方组合、租赁和资产之间，以事件及资源ID维持唯一负担所有者。排除既有主体制造和假想避免更换或水处理抵扣。工厂干粉预混料仅购入一次，不另购其水泥、骨料或聚合物；工单内拌合砂浆为不可加总的活动视图。 |  |
| `period_phase_boundary` | 所有清单行 | 列举实际工单和报告期间、期初期末结转库存阶段，以及可重复使用资产的制造、运行、维护更换和终止报废阶段。将每个输入、资产、输出及事件关联期间、阶段ID和原负担所有者，不得任意年化或每期重新购入整个资产。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `patch_repair` | 既有渡槽局部修补一体化服务 | required | 经评定的有界手工供水修补；仅最终签署验收产生输出 | 受损保留主体 → 准备后的主体 → 实测手工铺设砂浆 → 固化验收修补；移除、拌合、成形与养护是嵌入操作，无独立产品交接 | 1 m3 reference flow |

### 过程：既有渡槽局部修补一体化服务（`patch_repair`）

本服务按批次执行。工单、修补、批次、层、事件及尝试ID关联准备、干粉水拌合、手工铺设、清洁、养护、试验及缺陷关闭。保留主体和钢筋及安装固化砂浆是状态接口，不是额外采购。批次新拌砂浆、已施用砂浆和固化保留质量是不可加总的核对视图。拒收拌料和缺陷修补回到同一节点的准备、拌合和铺设，或送至明确的废物处理；失败尝试已有负担保留在最终唯一V上。

#### 输入

##### 产品流

###### 批准的单组分干粉修补砂浆（`repair_powder`）

按干粉净质量记录实际涉水预拌材料，称量各批并保留配方、SKU及包装皮重；不得再计购入湿砂浆或其中组分。

- 选定流：批准的单组分干粉修补砂浆
- 流属性/单位：Mass / kg
- 数量规则：powder_supply / V；实际原生kg数量除以验收安装V（m3）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_repair_powder`
- 来源：`sika-4100-protect-2025`

范围证据需求：需要实际工单及SKU干粉供应量和不确定性；理论耗量不等于实测产率。

###### 计量清洁拌合水（`mix_water`）

计量进入各干粉批次的清洁水，分列拌合、弃置、固化保留和蒸发水，不得通过购入湿砂浆再次计算。

- 选定流：计量清洁拌合水
- 流属性/单位：Volume / m3
- 数量规则：mix_water_supply / V；实际原生m3数量除以验收安装V（m3）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_mix_water`
- 来源：`sika-4100-protect-2025`

范围证据需求：需要实际每验收V拌合水供应、批次配水变异、密度状态及仪表不确定性的前景证据。采用产品的水粉指导是条件方法要求，不是每输出数量范围。

###### 获批完整修复底涂配方 (`aux_mass_primer`)

本卡仅表示独立供应的获批完整修复底涂配方，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_mass承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的kg收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 获批完整修复底涂配方
- 流属性/单位: Mass / kg
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的kg供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_mass_primer`

###### 获批完整钢筋涂层配方 (`aux_mass_rebar_coating`)

本卡仅表示独立供应的获批完整钢筋涂层配方，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_mass承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的kg收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 获批完整钢筋涂层配方
- 流属性/单位: Mass / kg
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的kg供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_mass_rebar_coating`

###### 获批完整养护剂配方 (`aux_mass_curing_compound`)

本卡仅表示独立供应的获批完整养护剂配方，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_mass承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的kg收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 获批完整养护剂配方
- 流属性/单位: Mass / kg
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的kg供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_mass_curing_compound`

###### 独立供应的清洁配方 (`aux_mass_cleaner`)

本卡仅表示独立供应的独立供应的清洁配方，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_mass承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的kg收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 独立供应的清洁配方
- 流属性/单位: Mass / kg
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的kg供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_mass_cleaner`

###### 独立供应的准备磨料 (`aux_mass_abrasive`)

本卡仅表示独立供应的独立供应的准备磨料，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_mass承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的kg收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 独立供应的准备磨料
- 流属性/单位: Mass / kg
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的kg供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_mass_abrasive`

###### 独立供应的一次性容器 (`aux_count_disposable_container`)

本卡仅表示独立供应的独立供应的一次性容器，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_count承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的Item(s)收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 独立供应的一次性容器
- 流属性/单位: Number of items / Item(s)
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的Item(s)供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_count_disposable_container`

###### 按长度供应的临时密封产品 (`aux_length_temporary_seal`)

本卡仅表示独立供应的按长度供应的临时密封产品，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_length承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的m收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 按长度供应的临时密封产品
- 流属性/单位: Length / m
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的m供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_length_temporary_seal`

###### 按长度供应的临时胶带 (`aux_length_tape`)

本卡仅表示独立供应的按长度供应的临时胶带，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_length承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的m收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 按长度供应的临时胶带
- 流属性/单位: Length / m
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的m供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_length_tape`

###### 按面积供应的聚乙烯养护或围护片材 (`aux_area_polythene`)

本卡仅表示独立供应的按面积供应的聚乙烯养护或围护片材，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_area承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的m2收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 按面积供应的聚乙烯养护或围护片材
- 流属性/单位: Area / m2
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的m2供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_area_polythene`

###### 按面积供应的养护或围护土工布 (`aux_area_geotextile`)

本卡仅表示独立供应的按面积供应的养护或围护土工布，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_area承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的m2收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 按面积供应的养护或围护土工布
- 流属性/单位: Area / m2
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的m2供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_area_geotextile`

###### 其他独立供应的养护或围护膜材 (`aux_area_other_membrane`)

本卡仅表示独立供应的其他独立供应的养护或围护膜材，保留实际SKU、材料／完整配方、物态及供应交接。仅在实际发生且不被完整组件或供应商范围包含时启用。组成、尺寸或件数只作限定或不可相加辅测，不另购相同对象。原集合的其他对象继续由atom_req_patch_repair_aux_area承担必须分别细化的义务。不得将父集合总量或数值Range赋给本子流。范围证据需求：在实际事件和保管点独立采集本对象的m2收货、归属期初期末、可用退回、最终安装／使用、废物／损失及计量不确定性。 同一实际SKU／状态／供应交接即使服务多个用途，也只能有一个采购归属；实物供应记录只合并计一次，其他用途作为不可相加活动，不得在多个子卡重复同一收货。

- 选定流: 其他独立供应的养护或围护膜材
- 流属性/单位: Area / m2
- 数量规则: 使用本子流SKU／状态独立测得、库存调整后的m2供应量，不使用父总量：归属期初＋扣皮外部收货－结转期末。未退回废物／损失保留上游；严格采用原声明的毛投入带出口或净耗用匹配退回约定。仅按第3–4节及验收协议定义的实际合格参考分母归一一次。内部交接子流使用同SKU独立实测发出／接收，不形成另一外部采购。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_aux_area_other_membrane`

###### 实际准备、清洗、养护和试验用水（`aux_water`）

包括实际预湿与积水清除、工具冲洗、养护、消毒或试验及增量隔离排水用水，区分购水和原有水转移并确定去向。原有水导流是物理状态转移，不是另一购水输入；须将实际增量物资、用电、供方服务及废物和排放去向计入本维修边界。

- 选定流：实际准备、清洗、养护和试验用水
- 流属性/单位：Volume / m3
- 数量规则：aux_water_supply / V；实际原生m3数量除以验收安装V（m3）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_aux_water`
- 来源：`sika-4100-protect-2025`; `sika-concrete-repair-handbook`

范围证据需求：需要分用途实际水量、来源与去向及仪表不确定性。

###### 实际直接电力（`electricity`）

一次记录搅拌、准备、抽水、通行、照明、养护或测试用电，包括不合格作业；分开供方已含电力，最终数据集前须核实Energy支持身份。

- 选定流：实际直接电力
- 流属性/单位：Energy / kWh
- 数量规则：electricity_attributed / V；实际原生kWh数量除以验收安装V（m3）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_electricity`

范围证据需求：需要按工单及期间计量的实际电量及分摊不确定性。

#### 输出

##### 产品流

###### 验收的安装修补服务（`accepted_patch_repair`）

只有完整养护、几何和粘结及实际涉水卫生关口签署通过后才有输出；V来自实际验收几何，排除重叠、空隙和失败尝试。

- 选定流：既有供水渡槽手工水泥基混凝土局部修补验收服务
- 流属性/单位：Volume / m3
- 数量规则：1 m3
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_accepted_patch_repair`
- 来源：`sika-4100-protect-2025`; `sika-concrete-repair-handbook`

范围证据需求：精确1 m3仅为归一化；需要实际修补体积、不确定性和关口证据，不代表实测产率。

###### 可用未用获批完整修复底涂配方对外退回 (`return_mass_return_aux_mass_primer`)

本卡仅记录可用未用获批完整修复底涂配方对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的kg数量、状态与接收证据。

- 选定流: 可用未用获批完整修复底涂配方对外退回
- 流属性/单位: Mass / kg
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退kg数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_mass_return_aux_mass_primer`

###### 可用未用获批完整钢筋涂层配方对外退回 (`return_mass_return_aux_mass_rebar_coating`)

本卡仅记录可用未用获批完整钢筋涂层配方对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的kg数量、状态与接收证据。

- 选定流: 可用未用获批完整钢筋涂层配方对外退回
- 流属性/单位: Mass / kg
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退kg数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_mass_return_aux_mass_rebar_coating`

###### 可用未用获批完整养护剂配方对外退回 (`return_mass_return_aux_mass_curing_compound`)

本卡仅记录可用未用获批完整养护剂配方对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的kg数量、状态与接收证据。

- 选定流: 可用未用获批完整养护剂配方对外退回
- 流属性/单位: Mass / kg
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退kg数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_mass_return_aux_mass_curing_compound`

###### 可用未用独立供应的清洁配方对外退回 (`return_mass_return_aux_mass_cleaner`)

本卡仅记录可用未用独立供应的清洁配方对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的kg数量、状态与接收证据。

- 选定流: 可用未用独立供应的清洁配方对外退回
- 流属性/单位: Mass / kg
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退kg数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_mass_return_aux_mass_cleaner`

###### 可用未用独立供应的准备磨料对外退回 (`return_mass_return_aux_mass_abrasive`)

本卡仅记录可用未用独立供应的准备磨料对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的kg数量、状态与接收证据。

- 选定流: 可用未用独立供应的准备磨料对外退回
- 流属性/单位: Mass / kg
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退kg数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_mass_return_aux_mass_abrasive`

###### 可用未用批准的单组分干粉修补砂浆对外退回 (`return_mass_return_repair_powder`)

本卡仅记录可用未用批准的单组分干粉修补砂浆对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的kg数量、状态与接收证据。

- 选定流: 可用未用批准的单组分干粉修补砂浆对外退回
- 流属性/单位: Mass / kg
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退kg数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_mass_return_repair_powder`

###### 可用未用独立供应的一次性容器对外退回 (`return_count_return_aux_count_disposable_container`)

本卡仅记录可用未用独立供应的一次性容器对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的Item(s)数量、状态与接收证据。

- 选定流: 可用未用独立供应的一次性容器对外退回
- 流属性/单位: Number of items / Item(s)
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退Item(s)数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_count_return_aux_count_disposable_container`

###### 可用未用按长度供应的临时密封产品对外退回 (`return_length_return_aux_length_temporary_seal`)

本卡仅记录可用未用按长度供应的临时密封产品对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的m数量、状态与接收证据。

- 选定流: 可用未用按长度供应的临时密封产品对外退回
- 流属性/单位: Length / m
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退m数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_length_return_aux_length_temporary_seal`

###### 可用未用按长度供应的临时胶带对外退回 (`return_length_return_aux_length_tape`)

本卡仅记录可用未用按长度供应的临时胶带对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的m数量、状态与接收证据。

- 选定流: 可用未用按长度供应的临时胶带对外退回
- 流属性/单位: Length / m
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退m数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_length_return_aux_length_tape`

###### 可用未用按面积供应的聚乙烯养护或围护片材对外退回 (`return_area_return_aux_area_polythene`)

本卡仅记录可用未用按面积供应的聚乙烯养护或围护片材对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的m2数量、状态与接收证据。

- 选定流: 可用未用按面积供应的聚乙烯养护或围护片材对外退回
- 流属性/单位: Area / m2
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退m2数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_area_return_aux_area_polythene`

###### 可用未用按面积供应的养护或围护土工布对外退回 (`return_area_return_aux_area_geotextile`)

本卡仅记录可用未用按面积供应的养护或围护土工布对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的m2数量、状态与接收证据。

- 选定流: 可用未用按面积供应的养护或围护土工布对外退回
- 流属性/单位: Area / m2
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退m2数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_area_return_aux_area_geotextile`

###### 可用未用其他独立供应的养护或围护膜材对外退回 (`return_area_return_aux_area_other_membrane`)

本卡仅记录可用未用其他独立供应的养护或围护膜材对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的m2数量、状态与接收证据。

- 选定流: 可用未用其他独立供应的养护或围护膜材对外退回
- 流属性/单位: Area / m2
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退m2数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_area_return_aux_area_other_membrane`

###### 可用未用计量清洁拌合水对外退回 (`return_volume_return_mix_water`)

本卡仅记录可用未用计量清洁拌合水对外退回的真实可用对外退回，SKU及状态未变并匹配原供应；不是另一外部采购。记录真实可用性、接收方及保管回执。期末库存和内部回收不是外退。原毛投入带出口或净消耗口径只执行一次；不生成避免生产抵扣，不复制父总量或集合Range。净消耗口径下保留物理退回为不可相加审计，不再次扣负担。范围证据需求：独立采集本退回对象的m3数量、状态与接收证据。

- 选定流: 可用未用计量清洁拌合水对外退回
- 流属性/单位: Volume / m3
- 数量规则: 本匹配SKU／状态独立实测的真实可用外退m3数量，仅除以实际合格参考分母一次；不得把供应量或集合总量当退回量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_return_volume_return_mix_water`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `supply_stock` | 全部供应材料燃料及可用外退行 | 对每个实际SKU及原生单位，归属毛供应量 = 期初归属库存 + 外部扣皮重毛收货 - 期末结转库存；内部领用不是采购。毛量带出口法保留可用外退交换；消耗量法仅一次从归属供应中扣除匹配可用外退，且不再给予退回抵扣。声明方法，绝不扣除未退回废物或损失。期末库存不是外退。 |  |
| `single_repair_output` | `accepted_patch_repair`; `atom_req_patch_repair_material_waste`; `atom_req_patch_repair_aqueous_waste` | 不预设预期副产品。全部准备、布置换批清洁、失败拌料、移除、复试及再次养护归属唯一最终正V。拒收拌料或修补进入同节点返工环或有证据的废物回收出口，永不成为验收输出。声明实际回收去向及负担处理，不设避免资产或假想回收抵扣。 |  |
| `batch_attribution` | `patch_repair` | 以实际干粉和水、已施用新拌料及残余为每批及全部使用方修补建立索引。以实测兼容因果驱动分配共用准备、清洁及试验资源，保留全部使用方并使份额之和为一，每个事件仅归属一次。不得按批次、层或尝试数倍增V，也不得将中间拌料计作第二产品。 |  |
| `asset_life` | `atom_req_patch_repair_assets` | 每个资产归属当量 = 实际工单兼容驱动 / 完整寿命全部使用方驱动。覆盖全部工单、节点及期间和完整制造、维护、更换及报废。采用完整实测寿命，或实测历史加有证据的剩余寿命、更换、终止和报废情景，并进行不确定性、敏感性及触发更新。短期活动分母或租赁工时本身不能证明完整寿命覆盖；缺少分母或覆盖阻止最终数据集。 |  |
| `provider_exclusivity` | `atom_req_patch_repair_providers`; `atom_req_patch_repair_assets`; `atom_req_patch_repair_freight`; `electricity`; `atom_req_patch_repair_fuel` | 真实供方原生单位须匹配完成资源成果范围及披露的完整上游覆盖。每项直接公用工程、材料、运输、租赁、资产、备件及处理负担仅有一个所有者。排除已覆盖直接重复量，并显式包括未覆盖资源；价格或工时不能编造服务件数。 |  |
| `phase_attribution` | 所有清单行 | 将实际期间特定资源使用和库存负担结转仅归属接收工单一次；原材料负担随结转库存保留，直到归属使用或外出。依据有证据的完整寿命全部使用方驱动分配制造、更换和报废资产负担，实际期间运行维护则具有明确覆盖和唯一所有者。关联阶段份额与全部使用方，防止另一期间再次计入整个资产或结转供应。未知更换或终止假设阻止最终完成。 |  |
| atom_grouped_ledgers | 所有实际子流记录 | 所有既有库存、分配、排放及闭合公式必须分别按具体子流身份／材料、状态、唯一交换属性单位、受纳介质和归属／事件范围应用。原生与换算视图不可相加。集合诊断总量不是流身份或各子流分子；不完整部分明确保留。完整配方、组件及真实有界单功能服务按整体保留，所含组分／资源不得再次采购。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_repair_powder` | `patch_repair` | `repair_powder` | 前景实测记录 |job_id; patch_id; event_id; period_id; phase_id; sku; dry_mass; opening_stock; receipts_net_tare; closing_stock; batch_id; powder_dosed; returns; waste; loss; powder_supply; adopted_instruction_id; mixing_start_time; mixing_end_time; mixing_duration_min; consistency_check_method; consistency_result; batch_operator; batch_check_time |采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 对每个实际批次及重拌批次，将干粉/用水投加关联到同一 batch_id 和采用的产品指导；记录搅拌起止时间及经过分钟数，按采用指导在每次搅拌后立即检查实际稠度，并保留方法、结果、操作人、时间和整改。搅拌分钟数和稠度为过程观察，不是额外 kg 交换。 | kg | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_mix_water` | `patch_repair` | `mix_water` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; source; batch_id; water_meter_start; water_meter_end; water_volume; powder_dosed; discarded_water; retained_water; evaporated_water; water_mass_weighed; water_density; density_unit; water_state; water_temperature; density_source; mix_water_supply | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | m3 | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_aux_mass` | `patch_repair` | `atom_req_patch_repair_aux_mass` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; role; component_id; opening_stock; receipts_net_tare; closing_stock; used; returns; waste; loss; aux_mass_supply | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | kg | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_aux_count` | `patch_repair` | `atom_req_patch_repair_aux_count` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; count_unit; opening_stock; receipts; closing_stock; used; returns; waste; aux_count_supply | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | Item(s) | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_aux_length` | `patch_repair` | `atom_req_patch_repair_aux_length` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; opening_stock; receipts; closing_stock; used_length; returned_length; waste_length; aux_length_supply | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | m | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_aux_area` | `patch_repair` | `atom_req_patch_repair_aux_area` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; opening_stock; receipts; closing_stock; used_area; returned_area; waste_area; aux_area_supply | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | m2 | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_aux_water` | `patch_repair` | `aux_water` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; source; purpose; supplied_water; host_water_transfer; recovered_water; discharge; retained_water; loss; aux_water_supply | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | m3 | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_fuel` | `patch_repair` | `atom_req_patch_repair_fuel` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; fuel_sku; opening_stock; receipts_net_tare; closing_stock; burned; returned; waste; uncontained_loss; recovered_spill_in_closing; total_spill_audit; fuel_supply | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | kg | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_electricity` | `patch_repair` | `electricity` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; meter_id; opening_reading; closing_reading; electricity; provider_coverage; allocation_driver; electricity_attributed | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | kWh | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_freight` | `patch_repair` | `atom_req_patch_repair_freight` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; trip_id; cargo_id; payload_kg; distance_km; route; empty_leg_share; provider_coverage; freight_work | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | kg*km | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_providers` | `patch_repair` | `atom_req_patch_repair_providers` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; provider_id; scope; result_id; native_property; native_unit; quantity; utility_asset_material_transport_coverage; exclusions; provider_quantity | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | actual native unit | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_assets` | `patch_repair` | `atom_req_patch_repair_assets` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; asset_id; all_consumer_ids; period_ids; job_driver; whole_life_driver; manufacture; maintenance; replacements; end_of_life; observed_history; evidenced_remainder; termination; uncertainty; driver_unit; remainder_source; sensitivity; update_trigger; asset_equivalents | 读取完整寿命资产登记及实际工单驱动，列举全部使用方、历史、剩余寿命、更换、终止与报废证据及不确定性。 分母V为唯一最终验收安装几何体积，单位m3。 | Item(s) | 每批、事件、转移及最终核对 | 完整资产生命周期覆盖：制造/购置、全部贡献服务/报告期间、维护/更换及终止/寿命末端；观测历史与有证据的未来剩余情景分开保留，包含本作业及全部失败/重复尝试。 | 声明作业/节点/现场，以及同一资产完整寿命分母代表的全部使用节点、作业、提供方及报告期间，包含本现场以外使用者。 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_accepted_patch_repair` | `patch_repair` | `accepted_patch_repair` | 前景实测记录 |job_id; patch_id; event_id; period_id; phase_id; before_geometry; after_geometry; net_area; depth_distribution; V; survey_uncertainty; cure_evidence; bond_result; hygiene_approval; defects_closed; signed_acceptance; adopted_instruction_id; approved_layer_strategy; layer_id; layer_batch_id; layer_thickness_mm; layer_measurement_method; application_time; air_temperature_degC; substrate_temperature_degC; temperature_measurement_time; temperature_instrument_id; retained_rebar_exposed; rebar_preparation_method; rebar_preparation_grade; rebar_preparation_inspection_time; rebar_preparation_result; standing_water_removed; scratch_coat_result; compaction_result; finishing_water_absence; feather_edge_absence; deviation_approval; gate_evidence_ref |采用经校准可追溯方法测量互不重叠修补前后几何及深度分布，核对养护、粘结、卫生及缺陷关闭签署验收；排除空隙、重叠和未验收体积。 分母V为唯一最终验收安装几何体积，单位m3。 在实际事件发生时保留准备和施工作业观察：在涂覆/铺放前检查暴露保留钢筋的准备状态，记录达到的等级和是否符合采用指导（该指导适用时含 Sa 2）；钢筋未暴露须有明确未发生证据。逐层记录批准方案、关联拌料批次、实际厚度（mm）和测量方法；铺放前及每个工作时段或条件变化时按采用指导测量空气与基层温度（°C），保留时间、仪器和结果。在相应操作记录预湿/清除积水、刮浆、压实及未追加抹面水、未形成羽状薄边的检查。最终验收前关联每项失败、整改/复查或有资质人员的书面偏差批准；不得以最终修补体积、经过的养护时间或缺失观察推定合规。这些 mm/°C/分类字段为交付门槛观察，不进入 m3 分子。 | m3 | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_return_mass` | `patch_repair` | `atom_req_patch_repair_return_mass` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; destination; transfer_id; returned_mass; original_supply_owner; accounting_convention; usable_mass_returns | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | kg | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_return_count` | `patch_repair` | `atom_req_patch_repair_return_count` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; transfer_id; destination; count_unit; returned_count; original_supply_owner; usable_count_returns | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | Item(s) | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_return_length` | `patch_repair` | `atom_req_patch_repair_return_length` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; transfer_id; destination; returned_length; original_supply_owner; usable_length_returns | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | m | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_return_area` | `patch_repair` | `atom_req_patch_repair_return_area` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; transfer_id; destination; returned_area; original_supply_owner; usable_area_returns | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | m2 | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_return_volume` | `patch_repair` | `atom_req_patch_repair_return_volume` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; sku; transfer_id; destination; returned_volume; original_supply_owner; source_state; usable_volume_returns | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | m3 | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_material_waste` | `patch_repair` | `atom_req_patch_repair_material_waste` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; waste_id; origin_event; composition; moisture_state; gross_mass; tare; destination; treatment_receipt; supply_link; waste_mass | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | kg | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_aqueous_waste` | `patch_repair` | `atom_req_patch_repair_aqueous_waste` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; source_water; volume; solids_separated; contaminants; capture; destination; treatment_receipt; wastewater_volume | 采集可追溯实际工单、批次、事件测量，库存收货去向或已完成服务原生单位记录，核对原SKU、供方及唯一负担所有者。 分母V为唯一最终验收安装几何体积，单位m3。 | m3 | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| `cp_releases` | `patch_repair` | `atom_req_patch_repair_releases` | 前景实测记录 | job_id; patch_id; event_id; period_id; phase_id; routine_or_incident; substance; medium; particle_class; measurement; activity; factor; composition; fate; capture; stock; return; waste_exclusion; uncertainty; species_release_mass | 采用实际事件物种介质测量或兼容且有记录的活动因子、组成去向模型，分开捕集、库存、退回及废物。 分母V为唯一最终验收安装几何体积，单位m3。 | kg | 每批、事件、转移及最终核对 | 完整工单含准备、全部尝试、养护和签署交接 | 实际修补场址及全部归属供方、共用资源记录 | 每参考流 | 校准、皮重、来源及SKU；事件所有权；不确定性；验收或处理证据 |
| cp_atom_aux_mass_primer | patch_repair | 获批完整修复底涂配方 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_mass按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量kg，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_aux_mass_rebar_coating | patch_repair | 获批完整钢筋涂层配方 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_mass按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量kg，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_aux_mass_curing_compound | patch_repair | 获批完整养护剂配方 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_mass按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量kg，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_aux_mass_cleaner | patch_repair | 独立供应的清洁配方 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_mass按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量kg，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_aux_mass_abrasive | patch_repair | 独立供应的准备磨料 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_mass按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量kg，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_aux_mass | patch_repair | atom_req_patch_repair_aux_mass | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_aux_mass原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_aux_count_disposable_container | patch_repair | 独立供应的一次性容器 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; count_items; receipt_or_transfer_id; opening_count_items; external_receipts_net_count_items; closing_carried_count_items; usable_return_count_items; waste_count_items; uncontained_loss_count_items; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_count按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量Item(s)，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | Item(s) | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_aux_count | patch_repair | atom_req_patch_repair_aux_count | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_aux_count原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_aux_length_temporary_seal | patch_repair | 按长度供应的临时密封产品 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; length_m; receipt_or_transfer_id; opening_length_m; external_receipts_net_length_m; closing_carried_length_m; usable_return_length_m; waste_length_m; uncontained_loss_length_m; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_length按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量m，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | m | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_aux_length_tape | patch_repair | 按长度供应的临时胶带 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; length_m; receipt_or_transfer_id; opening_length_m; external_receipts_net_length_m; closing_carried_length_m; usable_return_length_m; waste_length_m; uncontained_loss_length_m; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_length按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量m，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | m | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_aux_length | patch_repair | atom_req_patch_repair_aux_length | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_aux_length原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_aux_area_polythene | patch_repair | 按面积供应的聚乙烯养护或围护片材 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; area_m2; receipt_or_transfer_id; opening_area_m2; external_receipts_net_area_m2; closing_carried_area_m2; usable_return_area_m2; waste_area_m2; uncontained_loss_area_m2; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_area按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量m2，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | m2 | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_aux_area_geotextile | patch_repair | 按面积供应的养护或围护土工布 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; area_m2; receipt_or_transfer_id; opening_area_m2; external_receipts_net_area_m2; closing_carried_area_m2; usable_return_area_m2; waste_area_m2; uncontained_loss_area_m2; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_area按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量m2，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | m2 | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_aux_area_other_membrane | patch_repair | 其他独立供应的养护或围护膜材 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; area_m2; receipt_or_transfer_id; opening_area_m2; external_receipts_net_area_m2; closing_carried_area_m2; usable_return_area_m2; waste_area_m2; uncontained_loss_area_m2; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 仅采集本子对象，并从cp_aux_area按实际SKU／事件选择其记录。在收货／盘存／退回或真实内部交接点独立测量m2，保留实际净／皮重、兼容状态及全部去向。辅单位换算必须有实际同SKU质量或密度／状态／温度证据。父总量仅审计，不能复制为本子量；原归属、毛／净口径和最终参考归一规则仅执行一次。 | m2 | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_aux_area | patch_repair | atom_req_patch_repair_aux_area | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_aux_area原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_patch_repair_fuel | patch_repair | atom_req_patch_repair_fuel | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_fuel原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_patch_repair_freight | patch_repair | atom_req_patch_repair_freight | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_freight原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_patch_repair_providers | patch_repair | atom_req_patch_repair_providers | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_providers原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_patch_repair_assets | patch_repair | atom_req_patch_repair_assets | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_assets原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_return_mass_return_aux_mass_primer | patch_repair | 可用未用获批完整修复底涂配方对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_mass原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_return_mass_return_aux_mass_rebar_coating | patch_repair | 可用未用获批完整钢筋涂层配方对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_mass原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_return_mass_return_aux_mass_curing_compound | patch_repair | 可用未用获批完整养护剂配方对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_mass原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_return_mass_return_aux_mass_cleaner | patch_repair | 可用未用独立供应的清洁配方对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_mass原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_return_mass_return_aux_mass_abrasive | patch_repair | 可用未用独立供应的准备磨料对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_mass原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_return_mass_return_repair_powder | patch_repair | 可用未用批准的单组分干粉修补砂浆对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_mass原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_return_mass | patch_repair | atom_req_patch_repair_return_mass | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_return_mass原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_return_count_return_aux_count_disposable_container | patch_repair | 可用未用独立供应的一次性容器对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; count_items; receipt_or_transfer_id; opening_count_items; external_receipts_net_count_items; closing_carried_count_items; usable_return_count_items; waste_count_items; uncontained_loss_count_items; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的Item(s)数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_count原适用去向／归属方法，再归一化一次。 | Item(s) | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_return_count | patch_repair | atom_req_patch_repair_return_count | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_return_count原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_return_length_return_aux_length_temporary_seal | patch_repair | 可用未用按长度供应的临时密封产品对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; length_m; receipt_or_transfer_id; opening_length_m; external_receipts_net_length_m; closing_carried_length_m; usable_return_length_m; waste_length_m; uncontained_loss_length_m; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的m数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_length原适用去向／归属方法，再归一化一次。 | m | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_return_length_return_aux_length_tape | patch_repair | 可用未用按长度供应的临时胶带对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; length_m; receipt_or_transfer_id; opening_length_m; external_receipts_net_length_m; closing_carried_length_m; usable_return_length_m; waste_length_m; uncontained_loss_length_m; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的m数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_length原适用去向／归属方法，再归一化一次。 | m | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_return_length | patch_repair | atom_req_patch_repair_return_length | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_return_length原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_return_area_return_aux_area_polythene | patch_repair | 可用未用按面积供应的聚乙烯养护或围护片材对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; area_m2; receipt_or_transfer_id; opening_area_m2; external_receipts_net_area_m2; closing_carried_area_m2; usable_return_area_m2; waste_area_m2; uncontained_loss_area_m2; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的m2数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_area原适用去向／归属方法，再归一化一次。 | m2 | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_return_area_return_aux_area_geotextile | patch_repair | 可用未用按面积供应的养护或围护土工布对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; area_m2; receipt_or_transfer_id; opening_area_m2; external_receipts_net_area_m2; closing_carried_area_m2; usable_return_area_m2; waste_area_m2; uncontained_loss_area_m2; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的m2数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_area原适用去向／归属方法，再归一化一次。 | m2 | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_return_area_return_aux_area_other_membrane | patch_repair | 可用未用其他独立供应的养护或围护膜材对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; area_m2; receipt_or_transfer_id; opening_area_m2; external_receipts_net_area_m2; closing_carried_area_m2; usable_return_area_m2; waste_area_m2; uncontained_loss_area_m2; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的m2数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_area原适用去向／归属方法，再归一化一次。 | m2 | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_return_area | patch_repair | atom_req_patch_repair_return_area | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_return_area原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_return_volume_return_mix_water | patch_repair | 可用未用计量清洁拌合水对外退回 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; volume_m3; receipt_or_transfer_id; opening_volume_m3; external_receipts_net_volume_m3; closing_carried_volume_m3; usable_return_volume_m3; waste_volume_m3; uncontained_loss_volume_m3; provider_or_assembly_coverage_exclusion; source_record; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的m3数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_return_volume原适用去向／归属方法，再归一化一次。 | m3 | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | patch_repair | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_patch_repair_return_volume | patch_repair | atom_req_patch_repair_return_volume | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_return_volume原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_patch_repair_material_waste | patch_repair | atom_req_patch_repair_material_waste | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_material_waste原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_patch_repair_aqueous_waste | patch_repair | atom_req_patch_repair_aqueous_waste | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_aqueous_waste原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_patch_repair_releases | patch_repair | atom_req_patch_repair_releases | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_releases原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | patch_repair | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |


### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_repair_powder` | `repair_powder` | Amount = powder_supply / V；保留实际分子单位kg，每验收安装m3。 | `cp_repair_powder`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_mix_water` | `mix_water` | Amount = mix_water_supply / V；保留实际分子单位m3，每验收安装m3。 | `cp_mix_water`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_aux_mass` | `atom_req_patch_repair_aux_mass` | Amount = aux_mass_supply / V；保留实际分子单位kg，每验收安装m3。 | `cp_aux_mass`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_aux_count` | `atom_req_patch_repair_aux_count` | Amount = aux_count_supply / V；保留实际分子单位Item(s)，每验收安装m3。 | `cp_aux_count`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_aux_length` | `atom_req_patch_repair_aux_length` | Amount = aux_length_supply / V；保留实际分子单位m，每验收安装m3。 | `cp_aux_length`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_aux_area` | `atom_req_patch_repair_aux_area` | Amount = aux_area_supply / V；保留实际分子单位m2，每验收安装m3。 | `cp_aux_area`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_aux_water` | `aux_water` | Amount = aux_water_supply / V；保留实际分子单位m3，每验收安装m3。 | `cp_aux_water`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_fuel` | `atom_req_patch_repair_fuel` | Amount = fuel_supply / V；保留实际分子单位kg，每验收安装m3。 | `cp_fuel`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_electricity` | `electricity` | Amount = electricity_attributed / V；保留实际分子单位kWh，每验收安装m3。 | `cp_electricity`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_freight` | `atom_req_patch_repair_freight` | Amount = freight_work / V；保留实际分子单位kg*km，每验收安装m3。 | `cp_freight`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_providers` | `atom_req_patch_repair_providers` | Amount = provider_quantity / V；保留实际分子单位actual native unit，每验收安装m3。 | `cp_providers`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_assets` | `atom_req_patch_repair_assets` | Amount = asset_equivalents / V；保留实际分子单位Item(s)，每验收安装m3。 | `cp_assets`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_accepted_patch_repair` | `accepted_patch_repair` | 1 m3验收参考输出仅在V > 0且全部规定签署关口通过后成立。 | `cp_accepted_patch_repair`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_return_mass` | `atom_req_patch_repair_return_mass` | Amount = usable_mass_returns / V；保留实际分子单位kg，每验收安装m3。 | `cp_return_mass`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_return_count` | `atom_req_patch_repair_return_count` | Amount = usable_count_returns / V；保留实际分子单位Item(s)，每验收安装m3。 | `cp_return_count`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_return_length` | `atom_req_patch_repair_return_length` | Amount = usable_length_returns / V；保留实际分子单位m，每验收安装m3。 | `cp_return_length`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_return_area` | `atom_req_patch_repair_return_area` | Amount = usable_area_returns / V；保留实际分子单位m2，每验收安装m3。 | `cp_return_area`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_return_volume` | `atom_req_patch_repair_return_volume` | Amount = usable_volume_returns / V；保留实际分子单位m3，每验收安装m3。 | `cp_return_volume`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_material_waste` | `atom_req_patch_repair_material_waste` | Amount = waste_mass / V；保留实际分子单位kg，每验收安装m3。 | `cp_material_waste`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_aqueous_waste` | `atom_req_patch_repair_aqueous_waste` | Amount = wastewater_volume / V；保留实际分子单位m3，每验收安装m3。 | `cp_aqueous_waste`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_releases` | `atom_req_patch_repair_releases` | Amount = species_release_mass / V；保留实际分子单位kg，每验收安装m3。 | `cp_releases`; V; 实际工单账目 | 每参考流的原生交换 |  |
| `calc_supply` | `repair_powder`; `atom_req_patch_repair_aux_mass`; `atom_req_patch_repair_aux_count`; `atom_req_patch_repair_aux_length`; `atom_req_patch_repair_aux_area`; `aux_water`; `mix_water`; `atom_req_patch_repair_fuel` | 对每个SKU原生单位：supply = 期初归属库存 + 外部扣皮重毛收货 - 期末结转库存。采用声明的毛量带出口或消耗量方法，对可用外退仅处理一次；保留全部未退回废物损失的上游负担。 | SKU库存、收货及退回账；声明方法 | 归属上游供应 |  |
| `calc_fuel_balance` | `atom_req_patch_repair_fuel`; `atom_req_patch_repair_return_mass`; `atom_req_patch_repair_material_waste`; `atom_req_patch_repair_releases` | 期初 + 收货 = 期末 + 燃烧 + 可用外退 + 未燃废物 + 未围控损失；最终出口互不重叠。回收保留的泄漏属于期末，全部泄漏仅用于审计，不是第二最终出口。仅燃烧活动进入燃烧因子；上游供应包含未退回的未燃废物损失。 | 燃料原生库存、燃烧、事件及去向账 | 分开供应和燃烧 |  |
| `calc_mortar_state` | `repair_powder`; `mix_water`; `atom_req_patch_repair_material_waste`; `atom_req_patch_repair_aqueous_waste`; `accepted_patch_repair`; `atom_req_patch_repair_releases` | 干粉 + 实际批次水 = 新拌批次质量；必要时使用兼容实测水密度。分列实际施用新拌料、准备残余、不合格拌料和冲洗物，不得重复。固化保留材料及保留水须有实际水化、蒸发与状态证据，不得由新拌密度推断固化质量或验收V。实际几何独立定义V。 | 实测干粉及水；批次去向记录；匹配状态证据；几何 | 不可加总的干粉、新拌和固化物理核对 |  |
| `calc_fluid_release` | `aux_water`; `mix_water`; `atom_req_patch_repair_return_volume`; `atom_req_patch_repair_aqueous_waste`; `atom_req_patch_repair_releases` | 供应、原有及回收流体来源与最终保留、退回、收集废物及未捕集去向保持互不重叠。整体流体平衡与物种介质排放是不可加总视图。物种排放来自测量或有效活动因子、组成去向；捕集、库存、退回及废物仅排除一次。日常和事故事件所有者分开，绝不把无法解释的残差变成污染物。 | 来源去向及实际物种事件证据 | 区分物理平衡与基本流清单 |  |
| `calc_shared_asset` | `atom_req_patch_repair_assets` | asset_equivalents = 实际兼容工单驱动 / 有证据的完整寿命全部使用方驱动；完整制造、维护、更换及报废覆盖与该份额仅匹配一次。 | cp_assets; 完整寿命及全部使用方 | 归属原生资产当量 |  |
| `calc_freight_work` | `atom_req_patch_repair_freight` | freight_work = sum actual payload_kg * actual distance_km * documented job attribution；包括分配的实际空驶，排除其他所有者已含配送。 | cp_freight; 运输范围 | kg*km运输工作量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| `dq_identity` | 全部实际交换 | 最终TIDAS交换前，核实每个实际SKU、组分、服务、废物、物质及受纳介质的具体流、属性和单位，不得把未知角色展开为猜测身份。 | 详情及支持身份确认；实际SKU和范围证据 |
| `dq_gate` | `accepted_patch_repair` | 要求现行业主及产品指导，实际保留主体评定、前后测量、完整规定养护、几何、粘结和卫生结果及签署缺陷关闭；不得采用实验室宣传值验收。 | 实际批准指导、校准测量及签署工单证据 |
| `dq_range` | 所有清单行 | 对无可靠数值范围的行采集实际工单SKU数量变异及计量不确定性。采用的4100配水比仅为条件配方校核，不是每V实测耗量，也不允许借用理论产量。 | 前景采集协议；采用来源版本；实际不确定性 |
| `dq_complete` | `patch_repair` | 核对完整准备、清洁、养护、试验、返工事件登记及全部供方支付资源。实际缺席须有证据；输入、去向、供方覆盖或资产完整寿命分母缺失阻止最终数据集。 | 资源、事件、合同及资产账目与有界完整性评估 |
| `dq_coverage` | 全部记录 | 声明场址、时间、产品版本、实测与建模份额、单位状态、不确定性和来源代表性；方法、材料、验收或实际寿命证据变化后更新。 | 随数据集保留可追溯原始记录、不确定性与更新日志 |
| atom_req_patch_repair_aux_mass | patch_repair | patch_repair/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：仅展开实际按质量独立计量的SKU及组分，包括所需底涂、钢筋防护、养护剂、清洗剂、磨料及卫生或试验耗材；包括准备和清洗投入。 范围证据需求：需要实际批准SKU及用途的库存和损失分布；无通用涂料配比或用量。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：aux_mass_supply / V；实际原生kg数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_aux_mass；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_aux_mass；独立实际子流名册与证据 |
| atom_req_patch_repair_aux_count | patch_repair | patch_repair/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：实际按件供应的试验件、一次性容器和耗材采用兼容计数账，不得重复计入质量采购或可重复使用资产。 范围证据需求：需要实际计件SKU、包装与件数换算证据及变异范围。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：aux_count_supply / V；实际原生Item(s)数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_aux_count；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_aux_count；独立实际子流名册与证据 |
| atom_req_patch_repair_aux_length | patch_repair | patch_repair/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：仅在实际需要时记录按长度供应的临时密封或胶带等批准耗材；退回长度保持同单位。 范围证据需求：需要实际原生长度、裁切残余及SKU证据。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：aux_length_supply / V；实际原生m数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_aux_length；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_aux_length；独立实际子流名册与证据 |
| atom_req_patch_repair_aux_area | patch_repair | patch_repair/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：记录实际按面积供应用于养护或围护的聚乙烯膜、土工布或膜材；共用可重复使用膜材归入资产。 范围证据需求：需要实际供应面积及裁切、复用和外出记录；不设固定面积与修补体积比。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：aux_area_supply / V；实际原生m2数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_aux_area；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_aux_area；独立实际子流名册与证据 |
| atom_req_patch_repair_fuel | patch_repair | patch_repair/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：实际燃烧设备燃料供应包括未退回泄漏和废料，不仅为燃烧量；分别计量库存、燃烧及非燃烧出口，供方须说明覆盖范围。 范围证据需求：需要实际燃料的库存、燃烧及去向证据，若换算还需匹配密度和状态；无每V默认耗油量。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：fuel_supply / V；实际原生kg数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_fuel；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_fuel；独立实际子流名册与证据 |
| atom_req_patch_repair_freight | patch_repair | patch_repair/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：以载荷、距离、路线及空驶分摊证据记录实际材料、工具和废物运输，避免重复计算已含配送。 范围证据需求：需要实际路线、载荷和分摊记录；无通用距离。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：freight_work / V；实际原生kg*km数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_freight；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_freight；独立实际子流名册与证据 |
| atom_req_patch_repair_providers | patch_repair | patch_repair/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：仅在具备已完成原生单位成果及完整上游资源覆盖时展开实际隔离、导流、排水、通行、准备、检验、卫生或废物处理供方服务；价格或工时不能定义件数。 范围证据需求：需要实际匹配范围的供方数量、单位及完整资源边界。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：provider_quantity / V；实际已完成供方服务的原生数量除以验收安装V（m3），保留其核实后的兼容单位 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_providers；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_providers；独立实际子流名册与证据 |
| atom_req_patch_repair_assets | patch_repair | patch_repair/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：按兼容实测服务份额在全部工单、节点及期间间分摊实际搅拌机、手动或动力工具、泵及通行围护和复用设备；制造、维护、更换和报废各计一次。 范围证据需求：需要实际完整寿命全部使用方分母、更换报废证据及敏感性；缺失覆盖阻止最终数据集。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：asset_equivalents / V；实际原生Item(s)数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_assets；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_assets；独立实际子流名册与证据 |
| atom_req_patch_repair_return_mass | patch_repair | patch_repair/outputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：按原SKU及库存关系追溯实际可用干粉、质量耗材或未燃燃料转交其他所有者；内部领用和期末库存不属外退。 范围证据需求：需要实际可用原生质量及匹配归属证据；不得任意给予退货抵扣。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：usable_mass_returns / V；实际原生kg数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_return_mass；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_return_mass；独立实际子流名册与证据 |
| atom_req_patch_repair_return_count | patch_repair | patch_repair/outputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：可用计件物资外退保留实际SKU及包装单位，不得强制换成质量视图。 范围证据需求：需要实际匹配计件外退证据。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：usable_count_returns / V；实际原生Item(s)数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_return_count；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_return_count；独立实际子流名册与证据 |
| atom_req_patch_repair_return_length | patch_repair | patch_repair/outputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：以实测原生长度记录离开工单的可用物资，与原供应仅匹配一次。 范围证据需求：需要实际兼容长度外退证据。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：usable_length_returns / V；实际原生m数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_return_length；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_return_length；独立实际子流名册与证据 |
| atom_req_patch_repair_return_area | patch_repair | patch_repair/outputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：以实测原生面积记录可用膜材外退，区分期末复用资产库存和废物。 范围证据需求：需要实际兼容面积外退证据。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：usable_area_returns / V；实际原生m2数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_return_area；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_return_area；独立实际子流名册与证据 |
| atom_req_patch_repair_return_volume | patch_repair | patch_repair/outputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：仅记录实际可用供应水或其他体积物资外转，保留来源去向；原有水导流是独立物理状态转移。 范围证据需求：需要实际来源及状态兼容的体积外退证据。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：usable_volume_returns / V；实际原生m3数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_return_volume；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_return_volume；独立实际子流名册与证据 |
| atom_req_patch_repair_material_waste | patch_repair | patch_repair/outputs/waste必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：按实际组成、状态和去向记录移除的原混凝土、钢筋腐蚀残渣、不合格干湿或固化砂浆、不可退余料及包装；保留购入材料上游负担，不设通用回收抵扣。 范围证据需求：需要实际分类废物质量、含水状态、处理与回收证据。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：waste_mass / V；实际原生kg数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_material_waste；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_material_waste；独立实际子流名册与证据 |
| atom_req_patch_repair_aqueous_waste | patch_repair | patch_repair/outputs/waste必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：计量所收集准备、冲洗、养护试验和卫生废水，记录污泥分离和处理去向；收集废水不得同时作为基本流排放，原有水与供应水保持区分。 范围证据需求：需要实际收集水量、组成及处理不确定性。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：wastewater_volume / V；实际原生m3数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_aqueous_waste；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_aqueous_waste；独立实际子流名册与证据 |
| atom_req_patch_repair_releases | patch_repair | patch_repair/outputs/elementary必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：按实际物质和受纳介质展开粉尘物种或粒径、燃烧物种、未捕集污水物质及其他有证据排放；采用测量或有效活动因子、组成去向证据，SDS或平衡残差不足以证明。 范围证据需求：需要实际物种及介质测量或兼容活动因子去向不确定性；未知不等于零。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：species_release_mass / V；实际原生kg数量除以验收安装V（m3） 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_patch_repair_releases；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_releases；独立实际子流名册与证据 |



## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_scope` | `patch_repair` | 核实供水非管道主体及本手工局部剥落路线。未经评定的重大结构钢筋修复、整体喷衬或相邻类别不得静默通过本子集。 | `un-cpc-3-2025`; `sika-4100-protect-2025` |
| `val_method` | `patch_repair` | 按采用的现行指导检验实际基层钢筋及有条件底涂防护、批准配料、层、环境和立即兼容养护。有冲突须由有资质者书面批准解决；不得抹除产品特定条件或通用化手册示例数值。 | `sika-4100-protect-2025`; `sika-concrete-repair-handbook` |
| `val_output` | `accepted_patch_repair` | 要求唯一正V及全部签署关口，排除空隙、重叠、失败尝试和未知状态。数量为1 m3，其余数量均采用实际兼容原生分子 / V。供应新拌砂浆或整个渠道长度不是输出分母。 |  |
| `val_reconciliation` | 所有清单行 | 检查干湿固化及水燃料库存去向、毛量或消耗量方法、未退回废物上游负担、可用原生外退与实际物种介质证据。中间活动及物理物种视图不得加总为采购或排放。 |  |
| `val_batch_rework` | `patch_repair` | 要求关联批次、修补、事件及尝试记录和拒收去向。共用批次份额和为一，事件仅归属一次，失败作业留在最终V分摊，拒收物排除于验收输出。 |  |
| `val_asset_provider` | `atom_req_patch_repair_assets`; `atom_req_patch_repair_providers` | 要求完整寿命全部使用方资产驱动和完整负担覆盖，含剩余寿命及报废敏感性；要求实际有界供方原生结果及公用工程、运输、材料和资产唯一所有权。缺少分母或覆盖为不完整。 |  |
| `val_readiness` | 所有清单行 | 报告实际执行、跳过的检查及缺口。结构检查不能核实具体UUID、场址测量、验收或发布就绪；未解析身份、支持及未采集必要证据阻止最终数据集。 |  |
| `val_period_phase` | 所有清单行 | 检查输入、输出、资产和事件的期间阶段ID、期初期末负担结转、更换及终止报废覆盖、期间份额与完整寿命总量。防止重复制造或库存负担，要求解决更换终止缺口。 |  |
| atom_req_patch_repair_aux_mass_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_aux_mass及atom_req_patch_repair_aux_mass：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_aux_count_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_aux_count及atom_req_patch_repair_aux_count：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_aux_length_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_aux_length及atom_req_patch_repair_aux_length：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_aux_area_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_aux_area及atom_req_patch_repair_aux_area：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_fuel_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_fuel及atom_req_patch_repair_fuel：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_freight_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_freight及atom_req_patch_repair_freight：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_providers_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_providers及atom_req_patch_repair_providers：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_assets_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_assets及atom_req_patch_repair_assets：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_return_mass_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_return_mass及atom_req_patch_repair_return_mass：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_return_count_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_return_count及atom_req_patch_repair_return_count：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_return_length_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_return_length及atom_req_patch_repair_return_length：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_return_area_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_return_area及atom_req_patch_repair_return_area：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_return_volume_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_return_volume及atom_req_patch_repair_return_volume：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_material_waste_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_material_waste及atom_req_patch_repair_material_waste：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_aqueous_waste_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_aqueous_waste及atom_req_patch_repair_aqueous_waste：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_patch_repair_releases_complete | patch_repair | 最终前景包完成前必须执行cp_atom_req_patch_repair_releases及atom_req_patch_repair_releases：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |



## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 供水渡槽安装修补验收服务的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset；下游process和lifecyclemodel投影 |
| allowed_use | 在声明材料、版本、状态和关口下，范围匹配且含完整工单负担的验收手工局部剥落修补 |
| excluded_use | 整个渡槽施工或运行、供应湿砂浆、灌溉管道隧道修补、其他喷涂涂层裂缝接缝路线、通用寿命强度渗漏或避免更换声明 |
| required_metadata | PCR身份版本；实际场址工单修补批次事件；供水主体；材料SKU版本；方法及业主批准；不重叠V、面积深度测量；基层钢筋；养护验收；资源供方资产边界；实际交换身份单位 |
| required_quality_disclosure | 覆盖、未知及缺席证据；实际实测建模份额；状态换算；库存方法去向；供方唯一所有权；完整寿命资产基准；不确定性及范围局限 |
| update_trigger | 批准产品指导、运行基层条件、关口、几何、供方范围、分配驱动、回收去向或实际资产寿命证据变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `sika-4100-protect-2025` | literature | Sika MonoTop-4100 Protect Product Data Sheet，英国，2025年4月v02.03，第1–5页。https://gbr.sika.com/dam/dms/gb01/o/sika-monotop-4100protect.pdf | 实际单组分砂浆身份、可接触饮用水声明、准备、有条件底涂钢筋防护、手工路线、产品特定配水分层环境条件、兼容养护和工具清洁。实验室理论数量不是通用工单产率。 |
| `sika-concrete-repair-handbook` | handbook | Sika Concrete Repair Site Handbook, Hand Placed and Sprayed Applications，印刷第10–19及21页。https://www.sika.com/dam/dms/corporate/2/glo-concrete-repair-site-handbook.pdf | 保留主体完整性、缺陷钢筋转交、手工铺设压实、底涂条件性、养护保护、组分拌合及清洁残余角色；示例几何数值不是通用修补默认值。 |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，CPC Version 3.0 Explanatory Notes，2025年6月30日，54231，印刷第285页。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 供水渡槽非管道分类边界和较窄映射背景；不是原创前景库存、燃料、运输及资产代数的来源。 |
