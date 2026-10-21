---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uncured-sbr-belt-cover-compound-sheets
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 外售未硫化SBR基输送带覆盖胶片材


## 1. 范围与适用性


本PCR仅覆盖中国场址将实际SBR基胶、炭黑及真实其他配方成分完成工业配料、母炼、冷却、最终硫化体系加入、压片/必要过滤、隔离/冷却、质检、包装、纳入的仓储与厂内发运搬运后，向独立下游工厂供货的无增强骨架黑色未硫化输送带覆盖胶片材。配方含SBR且可按真实规格共混NR或BR；硫磺体系已完整加入，但大宗供货尚未硫化。商业胶片、物理混炼工序与归一化库存方法共同构成独立方法需求，分类叶本身不授权建立PCR。

排除基胶聚合制造（包括34800干E-SBR）、任何任意橡胶总类、未加齐硫化体系的母炼胶、轮胎厂内部胶料/轮胎制造36111/12/13、翻胎camelback36115、再生胶制造36210、购买废胶重新加工、液态胶乳/胶黏剂、其他聚合物体系、过氧化物路线、骨架带坯及硫化胶板/带成品。实际采用不在本子集的工艺或物料时须独立评估，不以相近native名称覆盖硬性形态/路线/牌号/CAS矛盾。

证据是多份独立primary的有限技术综合，不宣称同一SKU或同一工厂证明全部单元。供应页不提供工业配方或数量，具体批配方、未硫化供货验收及所有实际负荷须采集。技术来源：`sld-belt-compound`; `hitkari-uncured-belting`; `somi-belt-mixing`; `flevo-compound-supply`.


## 2. 产品类别识别


| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uncured-sbr-belt-cover-compound-sheets |
| classification_refs | CPC 3.0 36220; 仅本较窄子集，科学审查及正向映射待定 |
| covered_products | 独立外售的SBR基炭黑填充可硫磺硫化未硫化无骨架输送带覆盖胶片材 |
| excluded_products | 基胶聚合物、轮胎/翻胎内部中间物、camelback、再生胶及硫化制品，及§1其他排除项 |
| representative_product | 有完整真实配方与硫化体系、逐批检验及独立发运记录的黑色胶片 |
| production_route | 机械母炼/终炼与压片供货；不实施大宗产品硫化 |
| market_state | 未硫化片状最终混炼胶stock，净质量计量，供下游成型/硫化；不是成品输送带 |


## 3. 参考流


| 字段 | 值 |
| --- | --- |
| What | 向下游提供合格完整未硫化带用覆盖胶片stock，不承诺带的使用寿命功能 |
| How much | 工厂发运门实际净交付的1 kg参考流；包装净重之外另账 |
| How well | 符合真实商业配方、未硫化状态、尺寸与批放行规格。硫化试片性能不等于已硫化大宗供货 |
| How long or cycle | 同一实测报告期间及有结转负荷的真实供货批群；不设默认寿命或库存周转天数 |
| reference_flow_link | product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未硫化橡胶输送带胶料 `51822322-6f49-4de3-858f-f2327cc8d9e9` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际中国生产场址与报告期; 商业配方与每种基胶牌号; 黑色炭黑填充可硫磺硫化未硫化状态与完整硫化体系; 无增强骨架片材尺寸与供货表面/隔离制剂; 母炼/终炼与真实整理路线; 逐批质检验收及硫化试片范围; 排除可拆卸包装的净产品质量及实际水分; 工厂发运门与区别于新增放行P的实际净交付Q; 期初末WIP与成品库存质量及结转负荷; 唯一发运退回再验收及重交付关联; 包装及纳入的仓储搬运范围; native中国厂内生产混合范围及宽输送带胶料身份限制 |

必需限定信息须逐项出现在数据集元数据、产品说明、参考流备注或等效可消费字段。Q由cp_delivery按唯一真实净交付确定，不能用放行P、总混炼吞吐、试片或返工再验收量替代。native完整限制见终端product卡片，亦须随数据可消费。


## 4. 计量与单位规则


| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为1 kg净交付胶料，排除可拆卸包装，保留实际供货水分及附着隔离制剂状态。净质量由cp_delivery实测，不假定体积密度。 |
| one_reporting_basis | all inventory rows | 逐行声明的实物量/能量 | 每 1 kg 参考流 | 所有卡片与协议均使用同一个净交付Q。采集只保留原始分子，report_once在原始转换及结转归属后唯一执行一次归一；卡片和aggregation_rule描述同一次操作，不再除。 |
| formulation_mass | all inventory rows | 质量及成分子账 | kg | 整份商业制剂/油展基胶按供货质量记录一次，活性物、载油、载胶及水分子账不能重复采购。phr仅在有真实配方、每种基胶基准及批产量时转换，不从datasheet推定。 |


## 5. 系统边界



### 边界概化


| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实外购基胶、填料、油剂、成分与整份预制剂到厂，连同有结转负荷的期初原料/WIP/成品/包装库存 |
| starting_condition_role | 供货工厂机械混炼及供货的前景起点；不是上游零负荷切断 |
| product_classification_scope | CPC3.0 36220中的较窄未硫化胶片子集；不覆盖该异质叶全部产品 |
| recursive_input_rule | 内部返回胶料/粉尘仅保留转移与增量加工负荷，不作为新采购。外购相同类别胶料须独立上游数据及状态证明，不展开无限递归，也不自动纳入本原生配混路线 |
| upstream_dataset_requirement | 逐商业原料及实用公用工程选择匹配路线/地区/年份/供货形态的上游数据。native物理身份不代表背景工厂用量或提供者兼容 |
| disclosure | 公开实测期间、场址、配方版本、混炼/整理/供货状态、Q门、P/Q差异、库存结转、包装与纳入仓储发运、缺口和所有native限制 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete_supply | compound_supply | 纳入称量、全部实际母炼/终炼轮次、冷却/过滤/压片、隔离表面处理、真实质检及试片、包装、成品仓储、搬运及工厂发运准备的实际负荷和废物流。失败/零产出、返工、停机清洗及库存结转不得删。境外生产或其他native固定路线不得套用。 | `somi-belt-mixing`; `flevo-compound-supply` |
| boundary_delivery | product | 终端门仍为实际净验收交付Q，不是新放行P。实物毛发运G、实际收到退回胶料R_phys、每笔有据原验收交付数量及向量冲回D_rev分别记录。水分、附着制剂、损失或返工、期间或验收状态不同时，不能默认D_rev等于R_phys。冲回及重交付须关联原批与逐交换负荷历史，不再形成一次交付或新增产量。只有同状态及同范围已独立核实时，才可用Q = G - D_rev表示净量桥接；Q仍依cp_delivery的唯一净验收定义。期初末未交付成品及结转负荷在真实交付前不进入Q。合并时仅抵消内部放行交接，实际外部退回仍为实物移动，不能作内部抵消。 |  |
| boundary_upstream_downstream | compound_supply | 前景到厂起点不消除上游原料及公用工程负荷。客户处输送带骨架制造、组带与大宗硫化及客户运输/使用/报废不属于本工厂交付边界，另建下游模型；场内真实质检硫化试片属于本边界。 | `hitkari-uncured-belting`; `somi-belt-mixing` |


## 6. 过程清单结构



### 过程图


| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| compound_supply | 完整工业混炼、整理与独立供货 | required | 本§1限定的真实供货路线；按工段和批群标记所有交换 | 配料/母炼与终炼→冷却压片与质检→包装仓储发运；一个集成供货单元 | 每 1 kg 参考流 |

这个集成单元的原始记录仍按上述三个工段分开采集。母炼胶、终炼胶及放行交接为内部状态，不是新增外部采购或第二个终端产品；如建子过程模型，须逐物理转移成对关联并抵消，参考只指product。下列条件行均为具体物质/制剂示例，仅由真实配方触发，不构成默认工业配方。真实不同基胶牌号、填料、助剂、整份制剂、公用工程、燃料/制冷剂或排放均须增加各自独立原子行。


### 过程：完整混炼与独立供货（`compound_supply`）


#### 输入


##### 产品流


###### 干态丁苯橡胶 （`sbr`）

必需的SBR基胶。逐一称量实际商业牌号，并声明苯乙烯含量、聚合路线、油展及水分。聚合物原料不是成品混炼胶。不同实际外购牌号分别建行，不从最终胶片datasheet反推牌号。


- 选定流：干态丁苯橡胶
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`sld-belt-compound`


###### 干天然橡胶 （`nr`）

仅在实际批准批配方含此共混基胶时纳入。逐牌号记录供货水分，缺席须有配方证据而非名义零值。


- 选定流：干天然橡胶
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：


###### 聚丁二烯橡胶 （`br`）

有实际共混投入时纳入。保留催化体系/牌号及供货形态，不以此名替代SBS、SBR、EPDM或再生胶。


- 选定流：聚丁二烯橡胶
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：


###### 炭黑 （`carbon_black`）

本黑色胶料子集的必需补强填料。逐实际牌号记录投料质量及进入收尘、损失和返回的质量。不规定phr用量。

原生Product身份为商业固体炭黑，CAS1333-86-4，仅有Mass属性，未固定牌号、颗粒聚集体、制造路线或地域。其石墨类别是独立分类元数据瑕疵，名称CAS同义名及完整化学说明指向炭黑，不代表石墨、已捕集烟炱或基本粉尘排放。须核实真实补强牌号、供货形态含量及兼容上游供方；UUID不建立密度性能或数量。若实际外购载体结合或其他整份炭黑制剂，须按制剂另表示，不能再采购其成分。

- 选定流：炭黑 `dee14a4f-c02b-4bf5-affc-9e66b1d9a8ce`
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-rubber-process-2008`


###### 沉淀二氧化硅 （`silica`）

仅在炭黑之外实际加入时纳入。记录供货水分与处理状态，不把预混制剂所含二氧化硅在成分子账中再次作为采购。


- 选定流：沉淀二氧化硅
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：


###### 石蜡基橡胶加工油 （`process_oil`）

仅在实际使用时计入实际外购油牌号。记录整份供货油及规格。外购油展聚合物或预制剂中已含的油是成分子账，不在此重复采购。另有实际不同油种时增加独立具体行。


- 选定流：石蜡基橡胶加工油
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`somi-belt-mixing`


###### 氧化锌粉末 （`zinc_oxide`）

有实际独立采购的活性剂时纳入。保留纯度与物理牌号，不重复计入外购预制剂中已含的氧化锌。


- 选定流：氧化锌粉末
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`epa-rubber-process-2008`


###### 硬脂酸 （`stearic_acid`）

仅纳入真实批记录中的独立采购成分，不假定通用配方。商业混合脂肪酸与纯硬脂酸须区分。


- 选定流：硬脂酸
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：


###### 元素硫粉末 （`sulfur`）

所选可硫磺硫化路线须记录实际硫磺牌号与投料，并按真实工艺进行低温终炼加入。本卡仅代表独立采购粉体，油处理硫磺预制剂须另建整份制剂行。不推定硫化收率或反应水。

原生Product身份为被描述为淡黄色脆性晶体或粉末的硫磺，仅有Mass属性；未声明固定CAS、牌号、生产路线或地域。此处仅用于真实独立供货的元素硫粉体，并核实供方牌号含量及兼容性。不代表油处理、载胶或湿硫化制剂、二氧化硫、农药或默认phr剂量，不同真实供货须单列整份制剂或化学品行；身份不建立配方收率或反应水数量。

- 选定流：硫磺 `9b418f5d-0b3e-4e95-b2ae-bd8518c122c6`
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`somi-belt-mixing`; `epa-rubber-process-2008`


###### 橡胶载体二硫化二苯并噻唑预制剂 （`mbts_preparation`）

仅在实际采购此具体促进剂预制剂时纳入。称量整份供货制剂，将MBTS含量、载体及其他成分记入子账并核对质量分数，不重复采购MBTS或载体橡胶。不同促进剂须单列其化学品/制剂行，本示例不是强制工业配方。


- 选定流：橡胶载体二硫化二苯并噻唑预制剂
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：


###### 聚合2,2,4-三甲基-1,2-二氢喹啉 （`tmq`）

仅在真实使用此防老剂时纳入。记录商业形态和含量，其他防老剂是另一原子交换。不从名义硬度或拉伸规格推定使用。


- 选定流：聚合2,2,4-三甲基-1,2-二氢喹啉
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：


###### 水性硬脂酸锌防粘分散液 （`anti_tack`）

有实际外购此隔离分散液时纳入。整份湿制剂采购一次，固体与载水分别作成分子账而不重复采购。另计实际稀释水，跟踪槽液期初末、产品附着膜、蒸发、排污与污泥。实际采用其他隔离制剂时为其建立具体独立行。


- 选定流：水性硬脂酸锌防粘分散液
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_material 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`flevo-compound-supply`; `somi-belt-mixing`


###### 交流电 （`electricity`）

分别标记并采集切胶、称量、每轮母炼/终炼、开炼、过滤、压片、冷却、空压、收尘、测试、包装、仓库及发运搬运实际电耗。包括失败批和返工，不以装机功率或铭牌产能代替消耗。


- 选定流：交流电
- 流属性/单位：电能 / kWh
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_utility 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`somi-belt-mixing`


###### 外购工业用水 （`water`）

按工段标记计量接触、冷却、隔离液稀释及清洗的实际外部补水。闭路循环量不是新增购水。独立记录排放与蒸发，外购制剂载水保留在其成分子账。


- 选定流：外购工业用水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_utility 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：`somi-belt-mixing`


###### 外购饱和蒸汽 （`steam`）

仅纳入混炼/供货场址真实使用的公用工程，包含有记录的质检试片制备。以MJ记录压力/温度与交付焓，蒸汽质量及冷凝水回流保留在实物公用工程账。下游输送带硫化蒸汽不纳入。蒸汽热MJ卡唯一拥有实际外购供方的蒸汽生产、处理及输送水热背景；steam_water_supply的kg实物配对视图不再挂第二份蒸汽或水背景。按实际进汽、回水和其他出口各自实测质量、状态和焓及存量变化核对，不预设供返同量同质，也不把返还凝水自动作信用。


- 选定流：外购饱和蒸汽
- 流属性/单位：热能 / MJ
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_utility 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：


###### 外供饱和蒸汽水质量 （`steam_water_supply`）

仅当本混炼/供货场址或有记录的质检试片制备真实使用外供饱和蒸汽时，记录跨供方接口的毛蒸汽水kg；不把下游输送带硫化纳入，也不因存在此条件卡强制工厂使用蒸汽。与steam的MJ热量及condensate的外返kg配对；这是公用工程实物水视图，蒸汽生产/处理/输送水热上游仅归steam热卡一次，不能再加同一水采购或供方背景。独立保留实际供汽压力、温度、干度/水质、相态及比焓，管路和设备期初末存量、实际凝结水外返、排污、液相排出或气相泄漏及各真实接收者；不假定供返同量同质。已在制剂中的载水或内部循环不重复采购；真实不同供货、相态或去向须各列原子行，不能以MJ、液态工艺水、固定压力蒸汽或热量专用UUID替代本实物输入。实际毛质量不按库存负荷向量或经济分配缩减，负荷归属另留逐交换向量。UUID暂留具体等级和相态身份匹配缺口，不代表无交换。

- 选定流：外供饱和蒸汽水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；A_i为本方向实测毛蒸汽水质量，按第8节唯一每参考流报告操作除一次；按 cp_utility 采集，不用负荷向量缩减实物量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：


###### 聚乙烯隔离薄膜 （`separator_film`）

未硫化胶片实际使用的层间隔离膜，与拉伸包装膜区分。核对材料领用、随产品保留薄膜、可复用库存及废料，内部重复周转不是重新采购。


- 选定流：聚乙烯隔离薄膜
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`flevo-compound-supply`


###### 聚乙烯拉伸包装膜 （`stretch_film`）

仅记录实际发运包膜。与净产品Q及隔离膜分别称量。


- 选定流：聚乙烯拉伸包装膜
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`sld-belt-compound`


###### 瓦楞运输纸箱 （`carton`）

实际使用运输纸箱时纳入，并有供应商材质与实测皮重。不假定通用包装UUID或通用纸箱用量。


- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`sld-belt-compound`


###### 木质运输托盘 （`pallet`）

记录实际木托盘采购或可归属复用服务，并有皮重及真实周转池/损失账。整件外购一次，不通过木材成分子账再次采购。


- 选定流：木质运输托盘
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`sld-belt-compound`; `flevo-compound-supply`


#### 输出


##### 产品流


###### 未硫化橡胶输送带胶料 （`product`）

终端为外售、无增强骨架的黑色SBR基可硫磺硫化胶片，已完成全部真实混炼、整理、质检放行、包装、纳入的仓储及厂内发运搬运。Native身份：生产混合，工厂内，中国；混炼配料，未硫化；Product flow；参考属性为质量，未声明其他属性、固定牌号、CAS或独立locationOfSupply/环境介质。备注说明它是输送带工厂混炼配料工序的1 kg参考产品，不证明外部交付、SBR配方、最终片材规格或背景供应商强度。仅在中国这一另经限定的最终供货子集中采用此宽物理胶料身份，须有实际配方/形态、完整实际硫化体系加入、放行及发运证明。未加齐真实硫化体系的母炼胶、轮胎中间物、camelback、增强带坯或已硫化胶板不得使用本终端行。Q是实际净交付产品质量，不是新增质量放行产量。


- 选定流：未硫化橡胶输送带胶料 `51822322-6f49-4de3-858f-f2327cc8d9e9`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`generic`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_delivery`
- 来源：`sld-belt-compound`; `hitkari-uncured-belting`; `somi-belt-mixing`


###### 聚乙烯隔离薄膜 （`supplied_separator`）

随胶料实物毛发运G真实离厂的隔离膜，包括实际重交付。为已领用同一实物的外出端，不是再采购、橡胶净Q或共产品。cp_pack独立记录外返接收、空返、废弃及库存，真实独立外部返运方向须有其原子行后才可使用。

- 选定流：聚乙烯隔离薄膜
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：


###### 聚乙烯拉伸包装膜 （`supplied_wrap`）

随实物毛发运G真实离厂并实测的包膜，包括实际退回或重交付发运，排除于橡胶净Q。不能因胶料交付冲回或净Q减少向外包膜质量，库存退回废弃数量分开。

- 选定流：聚乙烯拉伸包装膜
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：


###### 瓦楞运输纸箱 （`supplied_carton`）

随实物毛发运G真实外出并实测的纸箱。外返纸箱接收及独立空返输出在cp_pack和实际各卡中按方向分开，不能以净交付或所有权抵扣替代向外实物质量。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：


###### 木质运输托盘 （`supplied_pallet`）

随实物毛发运G真实外出并实测的完整托盘。区分取得、外部退回接收、独立向外空托盘返还及生命周期周转服务归属，托盘移动不作新橡胶输出或重复采购。实际另有空返方向时增设独立卡，不能因复用或净Q减少托盘毛外出质量。

- 选定流：木质运输托盘
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：


###### 返还蒸汽冷凝水 （`condensate`）

发生外部公用工程返还时纳入。称量或用实测密度换算积分体积，适用时保留温度/焓，不将其当作新增供水。


- 选定流：返还蒸汽冷凝水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_utility 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：


##### 废物流


###### 未硫化SBR基混炼胶废料 （`rubber_reject`）

实际不可回用的修边、失格及失败胶料外送处理。内部可回用边料留在返回/WIP账，不作为废物、新购橡胶或新增产量。若失格料可售，建独立合格外部Product行并完成分配决定后再建模。


- 选定流：未硫化SBR基混炼胶废料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_outlet 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：


###### 硫化橡胶实验室试片废料 （`cured_test_scrap`）

边界内实际质检试片/测试残留发生时纳入。大宗供货保持未硫化，但不得删除真实试片制备负荷。硫化试片质量不计入Q。


- 选定流：硫化橡胶实验室试片废料
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_outlet 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：


###### 含炭黑混炼收集粉尘 （`captured_dust`）

测量实际独立收集的固体废物、成分及去向。返回粉尘是内部转移，已捕集粉尘不是未捕集大气排放。


- 选定流：含炭黑混炼收集粉尘
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_outlet 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：`somi-belt-mixing`; `epa-rubber-process-2008`


###### 橡胶混炼工艺废水 （`wastewater`）

测量包括实际槽液排污与清洗废水在内的外部液体排出，保留悬浮固体、溶解物种及处理接口。不将污泥或返还冷凝水合入此液体行。


- 选定流：橡胶混炼工艺废水
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_outlet 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：


###### 含硬脂酸锌隔离槽污泥 （`sludge`）

仅在使用上述分散液且产生此独立湿污泥时纳入。记录湿质量、固体与物种，不把其含水再计作废水排出。


- 选定流：含硬脂酸锌隔离槽污泥
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_outlet 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlet`
- 来源：


###### 废聚乙烯薄膜 （`pe_scrap`）

实际废弃薄膜，与随Q供货、返运复用及留存薄膜区分。


- 选定流：废聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：


###### 废瓦楞纸板 （`carton_scrap`）

实际废弃纸箱材料并记录去向，排除复用/返运纸箱。


- 选定流：废瓦楞纸板
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：


###### 运输托盘废木材 （`wood_scrap`）

实际废弃木托盘部分，可继续使用的返运托盘不是废物。


- 选定流：运输托盘废木材
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_pack 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：


##### 基本流


###### 小于10微米颗粒物，排放至空气 （`pm_air`）

有此排放时采集本混炼/整理/搬运路线的实测PM10，并声明无组织范围与治理。各粒径分量不重叠，总尘不能自动当作PM10。


- 选定流：小于10微米颗粒物，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_emission 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`epa-rubber-process-2008`


###### 苯乙烯，排放至空气 （`styrene_air`）

仅在真实辨识出此混炼/整理排放物种时纳入。用物种特定证据，不以通用VOC值或SBR单体含量推定。每个其他实际检出物种另设确切流行。


- 选定流：苯乙烯，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_emission 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：


###### 水蒸气，排放至空气 （`water_vapour`）

实际冷却/隔离/清洗蒸发水。区分游离水、供货载水、蒸汽及有独立证据的真实反应水。此未硫化路线不假定硫化水项，不用一个残差同时拟合未知水量与未知损失出口。


- 选定流：水蒸气，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：A_i / Q；本原子行完整原始期间分子依第8节唯一报告操作除一次；按 cp_emission 采集，适用性由真实记录判定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：


## 7. 分配与共产品处理


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | compound_supply | 仅在已声明的归属型研究情景下应用下述ILCD7.9.2/7.9.3层级。先细分或虚拟细分并逐交换追踪专属原料、工序、试验及供货负荷，不能以一个通用物理或收入比例覆盖全厂。 | `ilcd-allocation-2010` |
| allocation_physical | compound_supply | 对仍共用的每个交换判断决定性物理因果，并用实测/可量化关系归集：例如实际工序电耗或有强度证据的加工服务、受真实面积/体积及持续时间约束的仓储。不能把质量或机器时间作为无证据默认，不同交换可有不同决定性驱动量。 | `ilcd-allocation-2010` |
| allocation_remaining | compound_supply | 仅对前两步无法合理归属的剩余共用负荷，记录其理由后，采用同工序、同出口位置/状态/数量质量下各真实联产品市场价值；保留价格期间、币种和产品量，必要时有据扣除后加包装/运输等价值。不是物理/经济任意选择，不设固定份额。所有份额须还原为原始总负荷；无法支持的关系保持待审。 | `ilcd-allocation-2010` |
| allocation_returns | compound_supply | 内部边料和退回再加工不创造新共产品、负采购或默认抵扣。外售失格胶料/实物回收出口须逐项确立Product或Waste身份、真实接收/处理边界与适用方法，再单列原子行及归属；不存在固定再生率或避免负荷credit。包装随货出库不是共产品。 |  |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |


## 8. 前景数据采集、计算与质量规则


采集协议collection_method仅保留未除的原始期间分子。aggregation_rule只声明最终报告基准，指向同一次report_once，不在采集端归一。


### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。


| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | compound_supply | terminal product and inventory | 称重及批群账 | 批号; 配方; 路线; 供货片材及水分隔离制剂状态; 场址; 放行事件; 新放行质量P; 唯一发运ID; 裸胶料实物毛发运G; 实收退回质量R_phys及状态; 原验收交付数量及向量冲回D_rev; 退回重交付及原报告批群关联; 唯一净验收Q; 互斥原料WIP成品槽液公用工程设备期初末库存及逐交换结转向量; 真实返工加减料及维修在制品; 包装皮重 | Owner：生产质检与仓库保管人共同负责。保留未除原始期间及批群记录，独立称每笔实物毛发运和退回，排除可拆包装并记录供货及退回水分和附着制剂状态，P单列。以有据原交付冲回和重交付去重确定唯一净验收Q，不能从已改变的实收退回质量推定原冲回质量或向量，也不能删掉真实毛移动。前期成品及每个继承交换向量保留原批群，已归属历史与真实新增返工仓储包装增量分开，记录对原交付归属的真实更正。Q不由P、吞吐量或首次放行服务分母替代；Q<=0时保留全部真实记录负荷及历史更正，不输出单位结果。 | kg | 每事件及期间对账 | 完整实际报告期及期初末批群关联 | 真实中国供货场址及发运门 | 每 1 kg 参考流 | 秤校准; 放行/发运/退回链; 实物盘点; 前期负荷账 |
| cp_material | compound_supply | each atomic ingredient | 批次称量及供应商规格 | 成分及牌号ID; 供货毛/皮/净重; 含量; 水分; 载体成分; 收货/领用/退回; 期初末库存; 混炼轮次; 失败批; WIP转移及结转负荷 | Owner：配料间材料保管人。逐真实牌号及轮次记录未归一期间数量，包括失败/零产出批、失格返工及期初末WIP结转。区分整份外购制剂、检验成分与现场调制品。不从硫化性能datasheet猜工业原料。 | kg | 逐收货及投料批 | 与cp_delivery相同原始期间及产品/路线/形态批群 | 称量、母炼/终炼及槽液调制 | 每 1 kg 参考流 | 供货检验单; 签字配方; 秤; 批号; 转移账 |
| cp_utility | compound_supply | each atomic utility and utility return | 分工段仪表记录 | 仪表期初末; 积分体积; 适用时速率及持续时间; 单位; 压力; 温度; 焓; 密度; 蒸汽/冷凝水质量; 工段; 失败批; 分配驱动量; 库存负荷结转; 蒸汽干度水质相态; 蒸汽冷凝水管路设备期初末存量; 逐实测入口外返排污泄漏质量及温压比焓; 真实相态去向; 唯一上游供方负荷owner | Owner：公用工程工程师。保留全部纳入工序的原始电量、外部补水、供热及实际回流数量，包含质检、冷却、空压、收尘、仓储、包装与发运准备。先记录实测专属需求再处理共用负荷。速率乘持续时间得到数量，已积分体积不再乘时间。采集端不除Q。 仅当场址或真实质检使用外供蒸汽时独立量steam_water_supply与外返condensate及真实排污泄漏存量；质量状态不假同一，热MJ与实物kg分账。steam热卡唯一拥有供方水热背景，kg配对视图不重复采购或给自动信用。真实实物不作负荷缩量，单次报告及净交付Q规则保持。 | kWh; MJ; kg; m3 | 连续或每仪表区间 | 同一实际期间及期初末WIP/成品负荷结转 | 全部纳入的供应商工序 | 每 1 kg 参考流 | 仪表校准; 供应账单; 物性/温度记录; 逐交换分配决定 |
| cp_pack | compound_supply | each packaging input outward movement and waste | 独立包装实物账 | 具体实物及成分; 实测皮重; 实际新增取得; 单独记录实际外部退回接收; 期初末空包装库存; 附着WIP库存; 附着成品库存; 可复用池; 每笔随毛发运实物外出; 不同的空包装向外返还; 废弃; 所有权及原批群向量; 真实整理搬运增量 | Owner：包装与仓库保管人负责。逐原始实物方向独立于橡胶净Q保留：期初空包装附着WIP附着成品可复用+真实新增取得+收到外部退回=对应期末库存+随毛发运真实外出+另行向外空返+真实废弃。内部复用抵消，不另作取得；供方已含实物仍记录其物理量及上游含入约定，不能再采购成分。实物数量与实际耗用或周转服务负荷归属分开，分配复用轮次净产品交付或退货冲回均不能减少包装毛移动。真实独立外部返运方向若未在既有具体原子卡表示，须增加该实物及方向卡后才可声明数据完整。周转服务须实测证据，不设默认寿命。 | kg | 每移动及盘点 | 同一实际期间及供货批群；结转已有库存负荷 | 包装区、仓库及发运门 | 每 1 kg 参考流 | 皮重; 采购/移动记录; 包装周转池盘点; 废物单据 |
| cp_outlet | compound_supply | each material outlet | 出口称重及废物联单 | 出口ID; 干湿质量; 成分; 去向; 已捕集与已排放区分; 内部返回ID; WIP及槽液库存; 处理接口; 失格料销售状态 | Owner：生产与环保保管人。测量各原始独立实物出口及实际测试量，包括零产出损失、试片、边料、粉尘、排槽与污泥。区分内部返回、外售及废物，并区分液体水与污泥含水。保留相关处理及返工负荷，未测损失保留缺口，不造残差出口。 | kg | 每批及外送事件 | 完整实际期间，包括失败批和结转库存 | 供应商生产及排放接口 | 每 1 kg 参考流 | 地磅; 分析; 废物联单; 返回账 |
| cp_emission | compound_supply | each elementary species and compartment | 逐物种排放测量 | 物种; 介质; 浓度; 气液实际流量; 干湿条件; 压力; 温度; 参考状态; 积分体积; 速率时长; 治理进出口; 无组织范围; 检出限 | Owner：环保工程师/实验室。保留期间原始逐物种结果，在有记录的条件下将相容浓度与总流量换算为排放质量，不除Q。粒径分量及捕集固体不重叠。筛查VOC/COD不是分子排放清单，也不用于拟合质量/水平衡。数据交付前为每个其他实际物种及真实燃料/制冷剂交换增加独立卡片。 | kg; mg/m3; m3; h | 与工况对应的监测活动 | 同一实际期间及开停机、失败批与返工 | 工艺及无组织排放接口 | 每 1 kg 参考流 | 物种方法; 空白/校准; 检出限; 运行日志; 总体积追溯 |


### 计算规则


| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | a_i = A_i / Q；仅对cp_delivery唯一正的净验收交付Q执行一次。负荷输入A_i在原始单位状态转换、互斥原料WIP成品槽液公用工程设备库存向量结转及专属共用归属后保持未除，每项库存只校正一次，不能同时再加采购量和已校正耗用。保留失败零产出、真实质检返工仓储包装及旧批历史，未交付负荷结转，已归属退回生产追踪与真实新增增量分开。实物毛发运退回包装外出、配对蒸汽水输入及公用工程返供记录的A_i为该真实批群实测方向数量，相关负荷分配或库存结转向量另存，不能减少真实毛移动。所有原始取得退回出口库存数量独立保留。product参考分子为Q，Q/Q=1 kg仅为净视图，不是第三笔毛发运。卡片及aggregation_rule复用同一存储结果不再除。Q<=0保留全部真实数量负荷及历史更正，不形成单位结果，不能改用P或别批分母。 | A_i; Q; cp_delivery; cp_material; cp_utility; cp_pack; cp_outlet; cp_emission | a_i |  |
| raw_conversions | all inventory rows | 按真实称量皮重换算kg；体积用同种供货物、同状态的实测/有据密度换算。速率×期间得到分子，积分体积不再乘时长。浓度与气液总量须同状态；电kWh与热MJ保留并按有据单位关系换算，蒸汽焓不能作密度。所有转换先于report_once。 | cp_material; cp_utility; cp_pack; cp_outlet; cp_emission | converted raw numerators |  |
| physical_closure | compound_supply | 独立于归一化，逐原始实物材料及元素控制体闭合：期初互斥库存+实际外部实物流入=期末互斥库存+全部实际毛外部实物流出。胶料实物毛发运用G，实际外部退回胶料用R_phys；Q为派生净报告视图，不是额外或替代的毛流出。成品门为期初成品+内部放行P+R_phys+真实返工加料+期初维修在制品+独立有据水分或物种增加=期末成品+G+真实成品返工废物或移除材料+期末维修在制品+独立有据水分或物种损失。原料WIP、槽液、公用工程设备充装及独立包装库存互不重叠，生产成品维修的内部转移成对关联，合并时只抵消这些内部移动。保留全部真实Product出口、公用工程返供、废物及排放。净Q/Q参考输出与毛实物账是关联备选视图，不能作相加的实物输出。只有已核实同状态桥接才可用Q替代G减对应冲回量，采用净视图后不能再加一次R_phys。生产账不能在已计同一P后再加期末成品。包装按实际毛发运及返运计，不按净Q减少。真实水相载水物种及反应水须独立证据，不以COD或共用残差拟合两个未知去向。 | cp_delivery; cp_material; cp_utility; cp_pack; cp_outlet; cp_emission | raw mass element and burden reconciliations |  |
| formulation_subledger | compound_supply | 每份外购制剂按真实供货总质量入账，活性/载体/水分经实测含量作子账；不重复计采购。现场调制则采用实际分别购入成分及实际调制能耗/损失。包装独立子账逐实物涵盖期初末、随货出口、废弃、返运与复用，其皮重排除于Q。 | cp_material; cp_pack; cp_delivery | nonduplicated formulation and packaging ledgers |  |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |


### 数据质量要求


| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 采用UUID前逐一核对完整native名称分量、中英文正式名、CAS、路线/形态/牌号、地区/locationOfSupply、类型/介质及全部属性。参考属性采用精确引用版本→精确单位组版本→参考单位，不能取latest或以次级系数作密度。 | query命中、完整state100直读及精确支持链；硬矛盾须拒绝；元数据债务披露 |
| coverage | compound_supply | 真实配方及全工段交换与所有适用条件完整，失败/零产出/返工、期初末库存与结转负荷保留。一般辅助UUID或未来provider未匹配不抹去原子交换；真实方法或最终参考缺口须待审。 | 批配方、完整账与仪表、质检及发运证据；未测不当作零 |
| evidence_limits | compound_supply | 技术综合不宣称同SKU/同工厂。不给通用recipe、收率、能耗、水耗、强度、反应水、分配share或寿命。数据有效性须有实际年份、地区、批群、测量及不确定性证据。 | `sld-belt-compound`; `hitkari-uncured-belting`; `somi-belt-mixing`; `flevo-compound-supply`; `epa-rubber-process-2008`; `ilcd-allocation-2010` |
| allocation_quality | compound_supply | 逐交换保留归属型情景、细分和物理因果判断，只有剩余负荷可有据使用同工序出口市场价值，并对价格/驱动量不确定性作披露。 | `ilcd-allocation-2010` |


## 9. 校验规则


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product | 确认SBR基、炭黑填充、完整硫磺体系、未硫化、无骨架片状及独立外售，且在所选native中国厂内混炼范围。拒绝聚合物、轮胎/翻胎中间胶、camelback、再生胶、增强绿带或已硫化胶板替代。 | `sld-belt-compound`; `hitkari-uncured-belting` |
| validate_q | all inventory rows | product必须是唯一reference_flow_link终端Product输出并与参考UUID一致。Q必须为正的唯一实际净交付，不等同P或总吞吐。按同产品/路线/供货状态核对期初末WIP/成品及结转负荷、失败/返工与退回重交付去重，并只执行一次report_once。 |  |
| validate_mass | compound_supply | 核对physical_closure与formulation_subledger，包含全部实际外部Product出口/utility return、包装随货出口及完整包装期初末/废弃/返运/复用账。不能双计制剂成分、内部返回或放行后库存，也不能用残差造物种/反应水。 |  |
| validate_evidence | compound_supply | 原始来源、所有适用性限制与native限制必须进入可消费规范context；双语逐字段投影完整。成分/供货状态、量纲、缺失核心方法或实际匹配不能仅以Schema/ID相同宣称验证完成。分配仅循已声明归属型层级，科学审查独立待定。 | `ilcd-allocation-2010`; `epa-rubber-process-2008` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |


## 10. 发布数据集画像


| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 真实匹配的未硫化覆盖胶片供给下游带用混炼胶需求，另建下游成型/硫化 |
| allowed_use | 同供货状态、路线/配方、场址地区及期间有证据匹配，明确一kg净交付与包装范围 |
| excluded_use | 任意橡胶、基胶聚合物、轮胎胶料、camelback、再生胶或已硫化制品的默认替代；完整ILCD/PEF或科学批准主张 |
| required_metadata | 全部Required qualifiers、原始协议owner、Q/P与库存结转、分配情景/方法、上游provider兼容性、各物种/包装/公用工程出口 |
| required_quality_disclosure | 实际测量/期间覆盖、缺口/不确定性、技术综合来源限制和完整native中国工厂宽身份限制；辅助未匹配不得隐瞒 |
| update_trigger | 配方/基胶牌号、硫化体系、供货形态/状态、工段/边界、计量/Q门、库存归属或支持native/方法证据实质变化 |


## 11. 数据源


| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sld-belt-compound | literature | Xiamen SLD Rubber, SBR Rubber Compound for Belt, web snapshot 2026-10-16, https://www.sldrubber.com/sbr-rubber-compound-for-belt.html | 中国供应商外售SBR基带用覆盖胶的片状形态及薄膜/纸箱/托盘包装。不证明本类别的未硫化状态、确切配方、炭黑、硫化体系、数量、性能或保质期。 |
| hitkari-uncured-belting | literature | Hitkari Rubber Industries, Industries We Serve, Conveyor Belting subsection, web snapshot 2026-10-16, https://hitkarirubber.com/industries/ | 独立印度制造商关于外售未硫化输送带用胶片及耐磨覆盖用途的证据。不证明中国供应商的SKU/配方，相邻翻胎及地垫段落不纳入本子集。 |
| somi-belt-mixing | literature | SOMI Conveyor Beltings Ltd., Stage Wise Process, steps 1–5, web snapshot 2026-10-16, https://somiconveyor.com/our-usp | 工业母炼/终炼、硫化体系加入、压片、冷却、收尘及公用工程。印度输送带工厂案例，不是同一SKU，也不提供通用停留时间、设备强度、配方或收率。不纳入后续织物涂胶、带坯成型与硫化，不采用磁场机理主张。 |
| flevo-compound-supply | literature | Flevo Rubber Compounding, Production, web snapshot 2026-10-16, https://www.rubbercompounding.nl/production/?lang=de | 独立荷兰混炼胶厂的密炼、整理、片材供货及按客户要求采用的隔离/包装选择。不证明覆盖胶配方、必用隔离剂、包装或供货数量。 |
| epa-rubber-process-2008 | official_guidance | US EPA, Emission Factor Documentation for AP-42 Section 4.12 Manufacture of Rubber Products, Draft Final November 2008, §§2.1 and 4.1.1, https://www.epa.gov/sites/default/files/2020-10/documents/db04s12.pdf | 历史美国混炼工艺及成分相关排放背景。不移植通用数值因子或配方，不采用下游硫化因子，此技术报告不作为LCA分配依据。 |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, complete §§7.9.2–7.9.3, printed pp.255–272, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅作为已声明归属型情景的LCA方法依据：细分/虚拟细分，逐交换决定性物理因果，再仅对剩余负荷采用同工序出口状态的市场价值。不是物理/经济任意选择、后果型替代、固定份额、通用回收抵扣或完整ILCD/PEF符合性声明。 |
