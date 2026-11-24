---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-non-metal-waste-or-scrap
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 首次散装交接的未粉磨天然白云母加工边角料

## 1. 范围与适用性

本方法仅适用于未粘结天然白云母片材在加工车间裁切、冲切后产生，经干式人工分选、保持未粉磨状态并按实际买方规格验收的清洁边角料，在发生地首次散装交接。它是具有独立回收用途的残余商品；分类为废料不代表上游零负担。要求证明加工来源及首次放行；原矿、矿山废料、可用片材、云母粉、云母纸、粘结或涂层复合料、合成云母、混合拆除废料、灰渣均不适用。纸、塑料、橡胶、皮革、木材废料和金属废料也不适用。工艺依据仅为USGS历史原始研究，不建立当前工厂或来源认证。分类依据见 `unsd-cpc3-2025`、`unsd-cpc3-2026`、`wco-mica-2022`。


MICAMAFCO的原始商品说明将工厂裁切、冲制边料与矿山废料分列；本方法仅采用该来源和工序区别，不采用其中相互矛盾的尺寸换算、等级、包装重量、产量或市场预测，也不推定本数据包由该公司供应（`micamafco-factory-scrap`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-non-metal-waste-or-scrap |
| classification_refs | CPC 3.0 39290，已接受限定范围的较窄映射，见 docs/adr/2026-11-21-accept-cpc-39290-natural-muscovite-sheet-fabrication-trimmings.md |
| covered_products | 未粉磨天然白云母片材加工边角料 |
| excluded_products | 原矿、矿山废料、可用片材、粉末、云母纸、粘结复合料、灰渣及其他材料废料 |
| representative_product | 首次散装交接的未粉磨天然白云母加工边角料 |
| production_route | 片材裁切或冲切—干式分选—验收—首次散装交接 |
| market_state | 未经粉磨的接收态净质量；无包装、无托盘 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供合格加工边角料用于买方后续回收；不声称与原生矿或云母粉功能等同 |
| How much | 1 kg |
| How well | 实际买方约定的天然白云母身份、杂质、无粘结剂、未粉磨状态及水分要求 |
| How long or cycle | 一个首次交接批次，无使用寿命主张 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未粉磨天然白云母加工边角料 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 发生工厂及供方；天然白云母来源和片材加工记录；无粘结或涂层证据；批次及首次放行日期；买方与实际交接点；水分与净质量；粒径状态与杂质验收；分配边界及方法；外包过程与实际运输范围 |

所有必需限定信息须在数据包元数据或等效字段声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | 参考量及全部清单以每1 kg合格首次交接净废料为基准。Q=sum(毛重-容器皮重)，Q>0，排除内部循环、转售、返还和不合格品。 |
| moisture | mass balance | Mass | kg | 接收态与干态分开；按配对样品湿基质量分数w计算Qdry=sum(q_i*(1-w_i))；不得将结晶水当成游离水或用纯云母量代替商品质量。 |
| meter_energy | electricity | Energy | kWh | E=同边界期末读数-期初读数，核查倍率；1 kWh=3.6 MJ为计量换算，具体供方原生属性仍须独立确认，不推定净热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有上游供方记录的未粘结天然白云母片材进入发生车间 |
| starting_condition_role | supplied_intermediate |
| product_classification_scope | CPC 3.0 39290；仅HS2525.30加工边角料；不包含2621灰渣 |
| recursive_input_rule | 内部回流不作为新的采购或产出；外部相同类别废料不符合本首次发生范围，须另行界定 |
| upstream_dataset_requirement | 保留来料片材上游生产与实际运输负担，按审阅的共产品规则分配；缺失不得用零值代替 |
| disclosure | 披露车间、外包供方、时期、交接点及交接条件。废料直接装入买方所有、在边界外提供的接收容器，容器皮重不入Q；本站不持有包装或托盘实物池。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | workshop | 纳入裁切、分选、抽尘、存储、验收和实际装载；粉磨、洗涤、热处理、交接后的运输和再生加工不在本参考门内。片材上游负担仍须纳入。 | `usgs-muscovite-1950` |
| boundary_first_release | handover | 核对发生车间首次放行和买方验收；外包实际加工供方的物料、能耗和运输仅计一次；调拨、交易和转售不产生新参考产出。 |  |
| boundary_packaging | containers | 若本站承担容器、包装或托盘池，须重新评估范围并增加每种原子交换：购买、首次非购买外部接收、同件真实退回，以及所有外发、废弃、期初期末库存；首次非购买接收包括随来料、借入和无偿调拨，不受供方清单覆盖限制。同件退回须追溯先前本站外发。将实际采购、运输、服务负担只归属一次；缺失供方数据明确待查。 |  |
| boundary_completeness | inventory | 证明无湿法或热法工序；所有实际投入、废物、释放和基础设施负担须分别量化或依据研究边界说明排除；未知不等于零。新增物质各设单独卡片。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| workshop | 片材加工与废料首次供应 | required | 本限定路线 | foreground | 1 kg accepted scrap |

清单卡片保留未分配物理总量X用于质量闭合；仅在Q>0时计算审计比值X/Q。这些审计比值不是边角料产品模型的交换。模型仅采用calc_burden定义的放行批次负担向量H_release/Q，每项交换只除一次Q。分配仅作用于负担，不改变实测物理流。

### 过程：片材加工与废料首次供应（`workshop`）

#### 输入

##### 产品流

###### 未粘结天然白云母片材 (`sheet_input`)

测量投入车间的片材质量；分别保留来料等级、供方、含水率和上游负担。

- 选定流：未粘结天然白云母片材
- 流属性/单位：Mass / kg
- 数量规则：F / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 计量电力 (`electricity`)

实际裁切、抽尘及装卸电耗；区分废料专用处理和共用加工。

- 选定流：计量电力
- 流属性/单位：Energy / kWh
- 数量规则：E / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 钢制裁切刀片 (`steel_blade`)

按期初库存、接收和期末库存记录条件性刀片消耗，排除仍在用工具。

- 选定流：钢制裁切刀片
- 流属性/单位：Mass / kg
- 数量规则：B / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

###### 白云母片材公路货运 (`inbound_freight`)

仅纳入供方数据集未含的实际片材入厂货运；载货质量乘实际载货里程再除以1000。

- 选定流：白云母片材公路货运
- 流属性/单位：Transport service / t km
- 数量规则：T / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

#### 输出

##### 产品流

###### 未粉磨天然白云母加工边角料 (`reference_product`)

Q为唯一合格首次放行废料批次的接收态净质量；内部返料和转售不计入。

- 选定流：未粉磨天然白云母加工边角料
- 流属性/单位：Mass / kg
- 数量规则：1 kg
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 裁整天然白云母片材 (`sheet_coproduct`)

记录实际合格可用片材输出及其独立规格；不得计作参考废料。

- 选定流：裁整天然白云母片材
- 流属性/单位：Mass / kg
- 数量规则：S / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

##### 废物流

###### 不合格白云母边角料 (`mica_reject`)

将不合格云母边角料与合格废料分开；识别污染及实际接收方。

- 选定流：不合格白云母边角料
- 流属性/单位：Mass / kg
- 数量规则：R / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 捕集白云母粉尘 (`captured_dust`)

仅记录裁切或抽尘实际收集的粉尘；不得虚构云母粉商品或销售等级。

- 选定流：捕集白云母粉尘
- 流属性/单位：Mass / kg
- 数量规则：C / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`

###### 废钢制裁切刀片 (`spent_blade`)

记录实际废弃刀片质量及回收或处理去向；不给替代信用。

- 选定流：废钢制裁切刀片
- 流属性/单位：Mass / kg
- 数量规则：W / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

##### 基本流

###### 排入空气的白云母颗粒物 (`mica_air`)

实际未捕集云母颗粒物排放；绑定UUID前确认介质、粒径级别和组成；不得将捕集粉尘当成排放。

- 选定流：排入空气的白云母颗粒物
- 流属性/单位：Mass / kg
- 数量规则：A / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared burdens | 先细分废料专用分选装载负担（全归废料）与片材专用工序；共用负担以可证明的物理因果关系分配；无法成立时才采用同一分配点、状态和时期的实际经济价值，并独立审阅。不得仅按废料名称置零或无条件质量分配。 | `ilcd-allocation-2010` |
| allocation_economic | residual shared burdens | 在每个共同加工分离点g测量同期产生的边料G_g和可用片材S_g，包括尚未交接的存货。对该点同期产生的所有实际有价共产品j，V_jg=m_jg*p_jg；alpha_scrap,g=V_scrap,g/sum(V_jg)。不得用跨期交接Q替代产生量G_g，也不得将Q与本期片材产出直接配价。p为共同分配点净价，扣除仅在该点后发生的加工、包装和运输；保留价格、时期、币种及敏感性。sum(V_j)>0且各项非负，否则不得套用，需审阅替代方法。 | `ilcd-allocation-2010` |
| allocation_no_credit | scrap and returns | 在每个分离点g，对每项交换k，B_scrap,g,k=B_scrap-only,g,k+alpha_scrap,g*B_shared,g,k；B_sheet,g,k=B_sheet-only,g,k+alpha_sheet,g*B_shared,g,k。片材专属投入不进入边料负担。每项共用交换的分配份额之和等于原数量。逐批将产生的负担向量结转至库存与放行，后续边料专用处理只归属相关批次一次。内部回流、减少处置或下游替代不产生本数据集信用；废物实际处理负担不得遗漏。 | `ilcd-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | workshop | sheet and mica mass | weighing and acceptance | F,S,Q,R,C,A; opening/closing WIP; gross,tare; lot; moisture; rejects; receiver; origin | 逐批称重、批次追踪、配对含水取样和买方验收；期初期末盘点 ;  相同边界同一时期求和；剔除重复交接，内部循环单列；均以Q归一化| kg | each batch | one declared representative period | generating workshop and outsourced fabrication | 每参考流 | 校准、规格、原料来源、物料平衡、买方签收 |
| cp_utilities | workshop | electricity; blade; inbound freight | meter and stock records | E,B,W,T; multiplier; blade stocks; payload; km; supplier boundary; dedicated/shared split | 分项电表读数、刀具库存和称重、入厂货运单与距离；核查供方重复覆盖 ;  各项分别加总后除Q，计量单位不得混加| kWh; kg; t km | meter interval and each shipment | same declared period | same workshop and provider boundary | 每参考流 | 电表倍率、库存记录、货运单、供方边界和分配依据 |
| cp_air | workshop | uncaptured mica particulate | emission measurement | concentration; gas volume; run time; background; size; medium; dust capture; uncertainty | 采用实际工况空气监测质量浓度乘匹配气量，或完整验证的质量平衡；不得以物料差额直接命名排放 ;  A=sum(c_i*V_i)且量纲先统一；去重有组织与无组织源；A/Q| kg | each representative operating condition | same declared period | actual release points and fugitive sources | 每参考流 | 监测方法、粒径、检出限、采样覆盖和不确定性 |
| cp_allocation | workshop | shared burden split | allocation records | dedicated burdens; common burdens; G_g,S_g; net prices; currencies; split point; lot; H_open,k; B_scrap,g,k; B_handling,k; H_release,k; H_close,k; H_loss,k; H_transfer,k | 细分工序、因果证据及同点价格凭据；独立审阅 ;  保留总量和分配后总量，alpha之和为1| kg; currency; activity units | each reporting period | same declared period | all coproducts at common point | 每参考流 | 原始账目、方法、敏感性和审阅记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | inventory | 仅Q>0时每项实测物理总量X按x=X/Q形成审计比值；Q为本时期首次交接合格净废料质量，不用片材投入量或所有输出之和作分母。该审计量不是分配后的模型交换。Q=0时保留原始X、库存与去向，不作任何除法。 | X,Q | per 1 kg accepted scrap |  |
| calc_mass_balance | mica mass | F+O=Q+S+R+C+A+K，O/K为同边界期初/末云母在制品和待交接库存；自由水增减须独立记录，配对干态复核。解释差额和不确定性，不将差额设为零或自动归排放。 | F,O,Q,S,R,C,A,K,w | mass closure and discrepancy |  |
| calc_burden | allocated inventory | 对每项交换k，H_open,k+sum(B_scrap,g,k)+B_handling,k=H_release,k+H_close,k+H_loss,k+H_transfer,k。这里H仅指分离后的边料在制品和待交接批次，保留原已分配的逐批向量，仅叠加实际新增作业。共同分离点之前另存未分配在制品向量U_open,k+U_new,k=U_to_split,k+U_close,k+U_loss,k+U_transfer,k，仅将U_to_split在相关产生点分配一次；不得把分离前在制品计入H_open，也不得将U_to_split再当作新采购重复计入。期末库存向量结转以后期间。损耗、不合格品及调拨向量保留去向，不得消失或成为信用。仅Q>0时计算模型交换i_k=H_release,k/Q，且只除一次。物理审计X/Q不得充当未分配模型投入或再次归一化。分别结转电力、材料、运输和处理等每项交换，携带身份、单位、供方、时期、分配与批次绑定，不得将异量纲量相加或仅结转影响评分。 | cp_allocation; Q | allocated burden per kg | `ilcd-allocation-2010` |
| calc_zero_release | zero dispatch and carryover | Q=0时不计算任何X/Q或H_release/Q，保存原始实物、产生批次、逐交换负担、期末库存、损耗和去向。示例：t1裁切产生G1>0但Q1=0，将B_scrap,1及专用处理负担完整入期末库存；t2无新裁切，期初H_open,2=H_close,1，释放该批次时H_release,2保留前期片材、电力等分配负担，再加t2实际专用作业、扣留t2期末和可追踪损耗/调拨向量。仅对实际交接Q2>0归一一次。不得因t2无裁切把负担设零；若仅部分放行，按实际批次追踪或已说明的一致库存法保留剩余份额。 | cp_allocation; lots; Q | raw stock ledger and released vector | `ilcd-allocation-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_acceptance | scrap | 必须有实际买方杂质和粒径状态标准及批次结果；无统一纯度、产率或能耗默认值 | lot acceptance and sampling |
| dq_origin | source | 加工来源和无粘结状态须可追踪；矿种名称或颜色不能证明来源或无污染 | sheet records and inspection |
| dq_unknown | all exchanges | 未知、实测零及不适用分别声明；实际供方原生属性、介质和单位链须核验；无实测范围保持待收集 | original records and uncertainty |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | reference product | 拒绝非加工来源、已粉磨、粘结、混合矿山废料、无买方验收或重复首次放行的参考批次。Q必须正且净质量可追溯。 | `wco-mica-2022`, `usgs-muscovite-1950` |
| validate_inventory | inventory and calculations | 核查所有卡片原子性、协议、每kg分母、物料和负担闭合、含水基准、供方重复覆盖、外包、释放和实际交接；支持单位不能证明商品身份。 |  |
| validate_readiness | dataset | 缺少实际交换UUID、关键量、验收、分配或排放证据时，数据包不能作为已完整验证的背景数据发布；方法结构校验不代表科学批准。 |  |
| validate_carry | lots and burden vectors | 逐交换核查产生点分配及期初+新增=放行+期末+损耗+调拨；损耗/不合格品的历史负担和处理负担保留在明确去向账户，若拟转分配给存续商品须另行审阅，不得凭减库存将其免除。用零交接期及后续无新生产放行例核验；禁止X/Q审计量流入模型、片材专属投入装入边料或重复除Q。 | `ilcd-allocation-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 买方回收加工的实际废料输入 |
| allowed_use | 限定工厂、状态和交接点的废料供应；明确分配与数据质量 |
| excluded_use | 原矿或粉末替代因子、再生信用、零负担废料、来源认证及跨工厂通用默认值 |
| required_metadata | 必需限定信息、实际供方、时期、交接边界、上游来源和分配方法 |
| required_quality_disclosure | 未决UUID、缺失值、监测不确定性、规格、测量覆盖及价格敏感性 |
| update_trigger | 来源、粘结或涂层状态、工艺、供方、买方验收、容器责任或分配依据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC 3.0 explanatory notes, 30 June 2025, PDF p202; 16390 and adjacent 392 subclasses. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39290 | 冻结分类标题及邻界；不推定2025版已有HS对应。 |
| unsd-cpc3-2026 | official_guidance | UNSD CPC 3.0 explanatory notes, 23 October 2026, CPC3!A1907:D1907 (39290), row 514 (16390). https://unstats.un.org/unsd/econstats/classifications/cpc | 现行补充说明2525.30及2621；不改变冻结覆盖输入。 |
| wco-mica-2022 | official_guidance | WCO HS 2022 chapter 25, Note 1 and heading 25.25, PDF pp1,5. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf | 原状或劈片云母、云母粉和废云母区别；不是实际货物关税裁定。 |
| usgs-muscovite-1950 | literature | Jahns and Lancaster, Physical characteristics of commercial sheet muscovite in the southeastern United States, USGS Professional Paper 225 (1950), printed pp17,26–27; PDF pp38,49–50, Figure 14. https://pubs.usgs.gov/pp/0225/report.pdf | 仅为历史车间废料来源、裁切冲切与杂质区分；不提供现代工厂、产率、等级或价格默认值。 |
| ilcd-allocation-2010 | handbook | European Commission JRC, ILCD Handbook General guide Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp255–265. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 细分、物理因果与同点同状态条件经济分配；不提供工厂参数。 |

| micamafco-factory-scrap | literature | MICAMAFCO, Forms of Processed Mica, MICA SCRAP / Factory Scrap or cuttings, undated. https://www.micamafco.com/processedd9db.html?nm=processed | 仅工厂边料和矿山废料来源、工序及单独商品区别；不采用定量规格或来源认证。 |
