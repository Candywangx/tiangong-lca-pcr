---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-gold-or-of-metal-clad-with-gold
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 源头分隔的金合金首饰冲压边角料精炼供料

## 1. 范围与适用性

本归因型PCR覆盖一批身份明确的均质无包覆首饰用金合金供料，以及实际条材至板材的轧拉成形、需要时实际电退火和水淬、模具冲压及组件边缘修整、大片金属板材边角料的源头分流收集、必要干式异物去除、实测成分水分夹杂检验，直至唯一首次放行为精炼厂供料。后续真实硬质容器包装、储存、搬运及公路交付至精炼厂接收门，保留在原批次服务账。保留原合金和联合制造负荷；不能简化为采购已形成废料再包装。

GJSCI说明金或金合金组件制造、热加工成形分支、边角及粉尘回收、失败与返工。Brepohl区别大片板材废料与锉屑扫屑，支持分开硬质包装。Morris and Watson说明洁净合金板材边角接收，并以单独条款确定接收法律实体及条件。这是定性技术综合，不能证明同一当代SKU、工厂、订单、现行许可或实际批次接受。每份真实供货均需供方规格和代表性分析，每个接收方均需独立法律及技术核验。不采用原文示例的成色、温度、产率、费用、回收率或密度。来源：gjsci-components-2013; brepohl-refining; mw-scrap; mw-terms-2023。

排除非黄金贵金属供料（39332）、贵金属灰（39333）、金包覆或镀金料、混合来源废料、在用或完整首饰、铸造浇冒口、矿或多雷金、纯金锭，以及以粉末、锉屑、扫屑、污泥、液体为参考产品、热焚烧或精炼，以及以废物处理服务为参考。完整CPC39331还包含金包覆废料，本较窄方法不包含。真实酸洗、燃气加热、厂内合金配制、熔化、废料清洗脱油或精炼金属终端，均须有证据的清单扩展；不能为适应本路线省略实际工序。含金物不能仅因含银或铜而改归其他贵金属子类。un-cpc3-2025。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-gold-or-of-metal-clad-with-gold |
| classification_refs | CPC 3.0:39331; 较窄的均质固体金合金制造边角料方法; 不表示接受映射 |
| covered_products | 来自一批身份明确金合金首饰冲压料并检验为精炼供料的大片未焚烧金属板材边角料 |
| excluded_products | 非金供料; 金包覆或镀金料; 灰; 完整首饰; 浇冒口; 粉末锉屑扫屑污泥液体; 混合来源; 精炼金锭; 废物处理服务 |
| representative_product | 源头分隔的金合金首饰冲压边角料，具有实测成分和实际接收方约定规格 |
| production_route | 整份合金接收 -> 实际轧拉、电退火及水淬 -> 冲压和实际边缘修整 -> 源头分流 -> 干式准备与检验 -> 首次放行; 后续原批次服务至接收门另计 |
| market_state | 首次放行的未精炼金属固体供料; 实测收料状态净质量; 排除包装; 另追踪接收方收货 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 向合格接收方提供未精炼金合金首饰冲压固体边角料 |
| How much | 1 kg参考流，按首次放行收料状态净质量 |
| How well | 实际接收方同意的成分、金属形态、水分和夹杂要求; 无默认成色或回收率 |
| How long or cycle | 一批唯一首次放行; 后续包装储运接收按原批次服务追踪 |
| reference_flow_link | gold_feed |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 含贵金属废碎料 `99555c72-dba9-4c85-b92e-4cd541f48a15` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 来源供应商与合金批次; 整份合金供货规格及上游负荷覆盖; 实测金及其余各成分并注明分析基准和不确定性; 均质无包覆合金及条板成形路线; 大片未焚烧板材边角形态; 实测水分及已分离液体; 异物和含油夹杂及测定方法和限值; 实际电加热和淬冷状态; 首次放行事件及净质量Q; 期初期末在制品及逐交换继承向量; 已放行成品批次身份及原Q_c; 实际接收法律实体及地址; 针对实际物料和地域核实的接收资质; 接收方约定规格及书面接受和交接收货凭证; 实际法律废物或产品交接状态; 分配决策情景及逐行层级; 公用工程国家电压和供方边界; 包装身份皮重所有权及全部返回; 运输路线距离毛载荷和返程约定 |

上述每个限定信息须进入数据包元数据、参考流备注或等效可消费字段，缺一不能视为完整参考定义。参考Product身份只识别相容实物，不证明适用性、接收资质或方法批准。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_reference | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q由cp_release采集，是新增首次放行边角料的收料状态净质量，排除包装、已分离液体及不合格物。已包含本Q的期末成品不能再加一次。纯金及干质量为独立实测子账，不能替代分母。 |
| m_units | 全部交换 | 实际原生参考属性 | 实际单位 | 按明确单位将原始克、吨及金衡盎司转换为千克，区别金衡和常衡盎司、成色和质量。电量按3.6MJ/kWh转换。保留公路运输原生kg*km，1t*km为1000kg*km。不猜件重、密度、热值或电机功率强度。 |
| m_water | 淬冷与释放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用独立水状态测量；已积分气液体积不再乘时间，真正速率才按实测状态积分。游离水、相变水、反应水、金属氧平衡和物种证据分开；一个残差不能识别两个未知。 |
| m_normalisation | 所有清单行 | 实际交换分子 | 每 1 kg 参考流 | 采集未除原始记录，先转换、归属及继承在制品向量，再由c_normalise执行唯一A_j/Q。卡片和汇总引用同一次结果。原批次服务c_services只对互斥H_jc和原Q_c计算一次；H不是生产分母。Q=0保留实际负荷与库存，不生成单位产出结果。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 外购整份身份明确金合金条及其完整继承负荷；不是已形成废料 |
| starting_condition_role | 联合首饰成形制造的负荷起点 |
| product_classification_scope | CPC39331内的均质金合金金属板边角料子集 |
| recursive_input_rule | 同类外来边角料不是本代表原条材输入；真实返回配对承接历史，避免递归重复 |
| upstream_dataset_requirement | 整份合金一个相容供方，完整矿冶合金铸造供货历史；实际其他外购材料服务各有供方 |
| disclosure | 声明实际供应状态、工序归属、共功能、所有库存、转移法律状态及接收条件；未来工厂记录待采不等于零 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_chain | 完整工艺链 | 包含整份合金实际供货，通过一个相容上游供方承接矿冶、合金、铸造和准备历史，以及实际成形、热加工、冲压、修整、废料形成、分流检验和至接收门的批次服务。外购料已完成的工序不重复。工业证据支持单元结构，不支持分配或零负荷。 | `gjsci-components-2013`; `brepohl-refining`; `mw-scrap`; `jrc-ilcd-2010` |
| b_gate | 首次放行与后续服务 | 生产门为唯一首次供料质量放行，不是发运、付款或精炼出金。之后至真实收货的包装、储存、重包、装载、运输、返回和清理记原批次服务；收货或重验不创造Q。接收方拒收批保留原负荷及真实返回返工路线。 | `mw-terms-2023`; `jrc-ilcd-2010` |
| b_receiver | 精炼厂接收 | 独立于流身份核实接收法律实体和确切设施：书面供料标准、来源所有权和危险物披露、针对实际废物或产品状态和地域的现行资质登记或许可豁免、核验记录及真实交接收货。Morris and Watson条款确定一家企业及自主接受条件，并禁止含油、液体、有毒金属、低品位等，不是可转用的许可或接受所有金合金的承诺。任何决定性法律或接收条件未知时，该应用须在本门暂缓。 | `mw-scrap`; `mw-terms-2023` |
| b_extension | 实际新增工序 | 选定热路线为实际需要的电退火与水淬，不假定锅炉、蒸汽或精炼。真实存在而候选卡未列出的每种燃料、气体、试剂、清洗剂、油、磨具、包装、废物和分子排放，使用前均须逐项添加，配原始记录、原生限制、供方及证据。真实不存在才可not_applicable，数据缺失不能据此置零。不能以other或零值隐藏制造。 | `gjsci-components-2013`; `brepohl-refining` |
| b_physical | 实物核对 | 在成形、准备、成品及合并门保留未分配总物理量V。所有内部交接包含放行供料、工艺返回及包装重用均须配对，只在合并边界抵消。整份混合物流、来源分区及分析成分不叠加；每个实物交接仅有一个供方。全部库存变动保留物种及逐交换继承向量。 | `gjsci-components-2013`; `jrc-ilcd-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| forming | 合金成形与首饰冲压 | required | 真实条板热成形冲压及修边；无数值配方 | foreground | Q新增首次放行净供料质量 |
| preparation | 边角料分流与首次供料放行 | required | 源头分流、必要干式准备和检验 | foreground | Q新增首次放行净供料质量 |
| services | 至接收门的原批次服务 | required | 真实首次放行后至接收门服务 | cohort_service | 原批次Q_c；H不是生产分母 |

以下卡片的数量规则引用第8节同一次结果，不要求采集时先除。条件行仅在该原子交换真实不存在并有证据时标记not_applicable；实际新增物料和出口必须另列，不能塞入集合。

### 过程：合金成形与首饰冲压（`forming`）

#### 输入

##### 产品流

###### 整份外购首饰合金条（`alloy_bar`）

接收一批身份明确、无包覆、均质的首饰用金合金条，实际轧制或拉制成板材。取得供方规格及代表性的金和其他金属分析、夹杂、水分、状态及完整上游负荷向量。整份合金只采购一次；金、银、铜及其他分析成分仅为成分子账，不能再作采购。不得以纯金锭、多雷金、箔、包覆材或成品废料替代。可再用余料退回时保留历史。 所采用的原生Product是一份预先熔制并凝固为固溶体、混合物或金属间化合物的合金材料；参考属性为质量，无CAS、固定配方、供货几何、规格、路线限定或地域。其分类叶标为其他铁合金，但完整名称、同义词及解释正文均未限定铁含量。披露这项孤立分类不一致；不能据此以真实铁合金替代经独立规格确认的金合金条。核实实际单份均质无包覆含金供货、代表性分析及供方。这不是分别采购金银铜的集合，也不是供方批准。

- 选定流：合金，未指定 `a37ade44-f4b4-4e82-8bfc-509eb1553eaa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_origin`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 实际成形用电（`forming_power`）

该 Product 绑定只适用于中国低于1千伏、到用户的低压交流电电网平均消费组合，包含其供电输送边界；不是发电输出，也不再叠加电网或变压服务。核实实际国家、电压、表计边界和相容供应方；其他供电必须另核身份。保留生产、加热、成形、抽排、启停、失败批、空转和清理电量，不假定强度。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 实际淬冷和设备清理用水（`quench_water`）

实际经处理并符合饮用水标准的市政管道供水，边界为工厂或用户；不是地表原水、自然资源取水、去离子水、蒸汽或清洗制剂。原生参考属性是质量；次级体积系数不等于实测密度。称量水，或用实际温度下独立测定的密度转换计量体积。分别保留淬冷、蒸发、库存、带出和废水去向。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 整份外购金属加工液（`forming_fluid`）

仅在实际使用冲压或轧制冷却润滑液时纳入。原生 Product 覆盖油或乳液等金属加工冷却润滑剂，无固定配方和地域；仅在核对安全说明、成分及供应方后绑定实际的一份外购液态制剂。采购一次，载水和活性成分置于子账。若厂内配制，分别列出独立购入的每种油、乳化剂、水及能耗，并保留真实损失和废水，不能再叠加本整份采购行。接收方禁止含油时，边角料不得带油交付。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 实际砂纸（`abrasive_paper`）

仅在冲压后实际外缘修整使用砂纸时纳入。这是包含基材和粘结剂的一整份外购涂附磨具，不再采购一次氧化铝磨粒。记录实际规格、使用和废磨具；仅手工锉修不能虚构砂纸投入。其他磨料另列具体行。

- 选定流：氧化铝涂附砂纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

##### 废物流

##### 基本流

###### 实际氧化耗氧（`oxygen_uptake`）

只有独立证实退火氧化时，才记录实际净分子氧消耗。加热本身不证明发生氧化。独立确定氧化物物种及金属和氧的变化，不能从无法解释的质量残差推导空气、惰性氮或水的消耗。

- 选定流：合金氧化从空气消耗的氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

#### 输出

##### 产品流

###### 联产首饰组件输出（`stamped_component`）

实际离开共同制造门的冲压并修整边缘的组件，其设计质量和合金身份与废料不同。记录总物理质量及独立归属负荷；后续首饰装配、镶嵌、电镀和使用在组件门外。该流不是本PCR参考输出，不能增加废料Q。

- 选定流：冲压金合金首饰组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 源头分隔板材边角料（`formed_offcuts`）

本卡为所声明首饰组件制造产生并物理分隔的一批固体金合金板材边角料。该原生 Product 身份覆盖可回收制造余料，未固定纯度、合金配方、形态路线或地域；并非分别采购各金属的集合。声明实际金含量及其余各成分、夹杂、锐边固体形态、来源、阶段和接收标准。它不证明精金、金包覆材料、灰分、纸木身份、法律废物状态、接收方资质、供应商适配或分配方法。整批质量和成分分区是同一批物料的非叠加表示。 本内部交接阶段为待供料检验的已形成废料，不是另一份首次放行参考产品。其总质量、批号和完整继承向量与准备输入配对，在合并边界抵消。

- 选定流：含贵金属废碎料 `99555c72-dba9-4c85-b92e-4cd541f48a15`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 可再用合金余料退回（`reusable_remnant`）

同一合金批的一份可追踪固体余料返回实际制造，不能同时记作废料销售。另行保留的条材余料须有独立确切供货状态行；保留原状态和交换历史。内部循环抵消，不形成新增采购、Q或信用。真实对外退回按实际界面记录，上游负荷调整仅一次。

- 选定流：可再用金合金板材余料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stocks_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 单独交易的金合金锉屑（`separate_filings`）

仅当经独立分析的洁净制造锉屑实际作为另一产品交易时纳入。与大片板材边角、扫屑和含磨料残渣物理分离。其整份质量和价值归其独立共功能及接收方，不进入参考Q。若实际按废物管理，则改用真实废物交换，同一物料不能两记。

- 选定流：金合金制造锉屑
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_forming`
- 来源：`gjsci-components-2013`; `brepohl-refining`; `jrc-ilcd-2010`

##### 废物流

###### 实际退火氧化皮（`annealing_scale`）

条件性单独收集的混合氧化皮流，实测金及其他金属、氧化态、氧及水分，不称作纯氧化金。它既非洁净金属边角料也非贵金属灰。保留接收处理及继承负荷，无默认产率或零负荷。

- 选定流：金合金退火氧化皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 废砂纸（`spent_abrasive`）

一份实际废涂附磨具，含真实附着的金属颗粒。记录整份质量和成分子账，不能再把其中金作为另一物理输出。与松散锉屑及直接排气部分互斥。

- 选定流：废氧化铝涂附砂纸
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 实际淬冷水排液（`quench_effluent`）

循环使用后真实排出的整份液体，测定悬浮和溶解组分并绑定实际外部处理方；不是直接基本流排放，也不是虚构蒸汽或冷凝水返回。内部循环不增加新鲜需水。若真实对外返回可用产品，则另列核实后的Product返回行，明确实际温度、焓和供方水能约定。

- 选定流：废金合金淬冷水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 实际废金属加工液（`spent_fluid`）

仅记录实际独立管理的一整份废冷却润滑液，含其中水、油和金属，不再次采购这些成分。保留批次成分及处理；区别仍附于边角料、泄漏、蒸发及库存的部分。实际溶剂或VOC指标不是分子排放质量。

- 选定流：废金合金加工液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_forming`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

##### 基本流

###### 实际向空气蒸发的水（`vapour`）

仅为真实排入空气的分子H2O水蒸气，CAS7732-18-5，原生介质为未指定空气排放。原生广义同义词含同位素和液态词，并不允许把重水、冰、溶解污染物、淡水排放或化学反应水当作本蒸发。实际证据要求更具体空气介质时应重新选择。独立测定进水、库存、排液、带出和湿度，不能用一个残差拟合两个未知。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 金颗粒向空气排放（`gold_air`）

仅纳入独立确定物种、实际越过捕集系统排入所测空气介质的金金属颗粒。粉尘总量、块体合金分析或通用VOC/COD指标均不等于本元素。记录实际颗粒相态和粒径；氧化物或其他化学物种另列行并按化学计量处理，不能当作相同的纯金属质量。整个气溶胶质量及其成分分区不叠加。

- 选定流：金金属颗粒向空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 银颗粒向空气排放（`silver_air`）

仅纳入独立确定物种、实际越过捕集系统排入所测空气介质的银金属颗粒。粉尘总量、块体合金分析或通用VOC/COD指标均不等于本元素。记录实际颗粒相态和粒径；氧化物或其他化学物种另列行并按化学计量处理，不能当作相同的纯金属质量。整个气溶胶质量及其成分分区不叠加。

- 选定流：银金属颗粒向空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 铜颗粒向空气排放（`copper_air`）

仅纳入独立确定物种、实际越过捕集系统排入所测空气介质的铜金属颗粒。粉尘总量、块体合金分析或通用VOC/COD指标均不等于本元素。记录实际颗粒相态和粒径；氧化物或其他化学物种另列行并按化学计量处理，不能当作相同的纯金属质量。整个气溶胶质量及其成分分区不叠加。

- 选定流：铜金属颗粒向空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

###### 实测散热（`heat_air`）

仅纳入实际测定或核对的空气散热，与金属或水带出显热和外购电能分开。电退火方案不假定售热、锅炉、燃烧烟气或供汽。

- 选定流：散入空气的热
- 流属性/单位：Energy / MJ
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`gjsci-components-2013`; `jrc-ilcd-2010`

### 过程：边角料分流与首次供料放行（`preparation`）

#### 输入

##### 产品流

###### 接收厂内已形成边角料（`offcuts_received`）

本卡为所声明首饰组件制造产生并物理分隔的一批固体金合金板材边角料。该原生 Product 身份覆盖可回收制造余料，未固定纯度、合金配方、形态路线或地域；并非分别采购各金属的集合。声明实际金含量及其余各成分、夹杂、锐边固体形态、来源、阶段和接收标准。它不证明精金、金包覆材料、灰分、纸木身份、法律废物状态、接收方资质、供应商适配或分配方法。整批质量和成分分区是同一批物料的非叠加表示。 精确接收配对的成形交接，含逐交换继承向量及在制品历史；不是新增采购或零负荷原料。

- 选定流：含贵金属废碎料 `99555c72-dba9-4c85-b92e-4cd541f48a15`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stocks_preparation`
- 来源：`brepohl-refining`; `mw-scrap`; `jrc-ilcd-2010`

###### 实际分流与质量控制用电（`preparation_power`）

该 Product 绑定只适用于中国低于1千伏、到用户的低压交流电电网平均消费组合，包含其供电输送边界；不是发电输出，也不再叠加电网或变压服务。核实实际国家、电压、表计边界和相容供应方；其他供电必须另核身份。保留生产、加热、成形、抽排、启停、失败批、空转和清理电量，不假定强度。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_preparation`
- 来源：`brepohl-refining`; `mw-terms-2023`; `jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次放行的金合金精炼供料（`gold_feed`）

本卡为所声明首饰组件制造产生并物理分隔的一批固体金合金板材边角料。该原生 Product 身份覆盖可回收制造余料，未固定纯度、合金配方、形态路线或地域；并非分别采购各金属的集合。声明实际金含量及其余各成分、夹杂、锐边固体形态、来源、阶段和接收标准。它不证明精金、金包覆材料、灰分、纸木身份、法律废物状态、接收方资质、供应商适配或分配方法。整批质量和成分分区是同一批物料的非叠加表示。 Q是这些金属固体边角料新发生的首次放行净收料状态质量，须满足实际接收方约定的金及其他金属、水分和夹杂要求，排除包装、已分离液体和不合格物。保留实测水分及干金属、含金量子账，不能用纯金质量替代Q。放行证明和后续接收凭证按批关联；即使留在期末成品库存或后来退回重验，首次放行也只计一次。

- 选定流：含贵金属废碎料 `99555c72-dba9-4c85-b92e-4cd541f48a15`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`mw-scrap`; `mw-terms-2023`; `brepohl-refining`; `jrc-ilcd-2010`

##### 废物流

###### 去除的铁质工具碎片（`ferrous_contamination`）

仅记录实际分出的铁或钢工具碎片，声明实际合金及处理路线。其他异物另列具名物理流；使用磁铁不证明完全去除或固定铁含量。不得以零值隐藏夹带的金或污染残渣。

- 选定流：金废料分选去除的铁质工具碎片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_preparation`
- 来源：`brepohl-refining`; `mw-terms-2023`; `jrc-ilcd-2010`

###### 对外管理的不合格边角料（`rejected_offcuts`）

仅纳入未满足约定供料规格后实际离开并进入废物管理的物料。逐项记录原因、数量、继承负荷和路线。待处置批仍属在制品；内部返工或可用余料退回抵消，不能作本对外输出；若另作产品交易须有真实产品行。失败物料不增加Q。

- 选定流：不合格固体金合金板材边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次a_j结果；保留未除原始记录及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_preparation`
- 来源：`mw-terms-2023`; `jrc-ilcd-2010`

##### 基本流

### 过程：至接收门的原批次服务（`services`）

#### 输入

##### 产品流

###### 原批次包装搬运用电（`service_power`）

该 Product 绑定只适用于中国低于1千伏、到用户的低压交流电电网平均消费组合，包含其供电输送边界；不是发电输出，也不再叠加电网或变压服务。核实实际国家、电压、表计边界和相容供应方；其他供电必须另核身份。保留生产、加热、成形、抽排、启停、失败批、空转和清理电量，不假定强度。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

###### 带盖完整硬质钢罐（`rigid_can`）

用于锐边废料的一份真实硬质钢罐及随供盖，不假定为200升钢桶。确定实际皮重、配置和供应方；本锐边料不采用松散塑料袋运输。对新购、外部返收和现有周转罐分别执行包装平衡；内部重复使用不算再次采购或废料Q。

- 选定流：带盖废料硬质钢罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

###### 实际纸质识别标签（`paper_label`）

仅纳入一份实际纸标签及随供印刷，与钢罐分开记录成分和皮重。不同标签材料另核身份。标签注明批次、净皮毛重、合金信息和接收目的地，不虚构分析结果。

- 选定流：废料批次纸质识别标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-refining`; `mw-terms-2023`; `jrc-ilcd-2010`

###### 实际聚丙烯封口胶带（`sealing_tape`）

仅实际使用时纳入一整份外购胶带，包含基材和胶粘剂。不能重复采购聚合物或胶粘剂；实际其他紧固件须单独具名，不能隐藏在本卡。

- 选定流：聚丙烯基材封口胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

###### 实际运至精炼接收方的公路货运（`delivery_freight`）

原生Product身份为工厂端生产组合公路货运，参考工作量为质量乘距离，参考单位kg*km，未指定国家或载重。选择相容的实际承运方路线、载荷和返回安排。以实际运输的废料及其包装毛重和距离计算工作量，并按供方约定保留真实空驶、返程；不能再叠加承运方柴油及尾气。不适用于空海铁运输或客运，也不证明接收合法性。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`mw-terms-2023`; `jrc-ilcd-2010`

###### 实际清罐用水（`can_wash_water`）

实际经处理并符合饮用水标准的市政管道供水，边界为工厂或用户；不是地表原水、自然资源取水、去离子水、蒸汽或清洗制剂。原生参考属性是质量；次级体积系数不等于实测密度。称量水，或用实际温度下独立测定的密度转换计量体积。分别保留淬冷、蒸发、库存、带出和废水去向。 实际清罐用水归原批次服务账，不产生新生产Q；真实清洗剂逐种另列。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials_services`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 原批次供料的实物交付（`delivered_feed`）

本卡为所声明首饰组件制造产生并物理分隔的一批固体金合金板材边角料。该原生 Product 身份覆盖可回收制造余料，未固定纯度、合金配方、形态路线或地域；并非分别采购各金属的集合。声明实际金含量及其余各成分、夹杂、锐边固体形态、来源、阶段和接收标准。它不证明精金、金包覆材料、灰分、纸木身份、法律废物状态、接收方资质、供应商适配或分配方法。整批质量和成分分区是同一批物料的非叠加表示。 这是已放行批次c的实物发运接收追踪，不是新制造的供料。记录总实物流V和配对内部放行交接，并在合并时抵消交接。只有互斥的批次服务H带来增量负荷；保留原Q_c、退回、重复交付和拒收，不形成新Q。

- 选定流：含贵金属废碎料 `99555c72-dba9-4c85-b92e-4cd541f48a15`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`mw-scrap`; `mw-terms-2023`; `jrc-ilcd-2010`

###### 实际对外退还周转罐（`can_return`）

周转罐真实对外退还是Product返回实物界面，不是可售金共产品。记录罐的确切状态、所有者、皮重及供方约定；内部重用抵消。收到的外部返还罐是同一罐类库存账的ER。

- 选定流：带盖废料硬质钢罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

##### 废物流

###### 报废废料硬质钢罐（`can_waste`）

仅为实际单独追踪的报废包装物及其真实处理；区别仍在使用的随货外出与废弃。执行其完整独立包装平衡并保留继承负荷。附着的金污染为实测子账，不是另一份实物金输出或自动回收信用。

- 选定流：报废废料硬质钢罐
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

###### 废纸质识别标签（`label_waste`）

仅为实际单独追踪的报废包装物及其真实处理；区别仍在使用的随货外出与废弃。执行其完整独立包装平衡并保留继承负荷。附着的金污染为实测子账，不是另一份实物金输出或自动回收信用。

- 选定流：废纸质识别标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

###### 废聚丙烯胶带（`tape_waste`）

仅为实际单独追踪的报废包装物及其真实处理；区别仍在使用的随货外出与废弃。执行其完整独立包装平衡并保留继承负荷。附着的金污染为实测子账，不是另一份实物金输出或自动回收信用。

- 选定流：废聚丙烯胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

###### 实际清罐废水（`can_wash_effluent`）

条件性整份清罐排液进入实际外部处理，测定水、固体及物种并保留原批次服务历史。不是直接环境排放；每种真实直接排放另列介质明确的基本流。

- 选定流：废钢罐清洗水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节同一次原批次s_jc结果；保留未除原始H及总实物V
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`brepohl-refining`; `jrc-ilcd-2010`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | 归因决策 | 只用于确需划分的归因型分配情景，说明适用理由，区别交易共产品、废物管理和负价值流。原物料不自动无负荷；与双方明确相容的上下游回收废物约定。工业制造及接收证据不建立LCA分配键。 | `jrc-ilcd-2010` |
| a_subdivision | 全部交换 | 先真实细分专属组件制造、专属边角准备和放行后服务；对具有定量技术关系的专属材料服务作虚拟细分。各交换和原合金继承向量在全部共功能中仅出现一次，不能把整条联产线归给边角或省略其形成。 | `jrc-ilcd-2010` |
| a_causality | 每个剩余交换 | 对每个剩余交换先建立决定性的物理因果关系。各输出实际含有的合金实测量可支持该材料关系，但不能自动用同一质量或金比例分配炉、冲床、空转和清理。说明共功能如何决定每项交换；不得任意选物理或经济键。总物理平衡不使用分配系数。 | `jrc-ilcd-2010` |
| a_residual | 真正剩余的交换 | 仅对细分和决定性物理因果分析后有依据的剩余项，才采用实际共功能在同一共同工艺门、真实状态下同期代表性市场价值。下游报价须扣除后续精炼、修整、准备和服务，记录价格基准、数量、币种、时期、调整及敏感性。缺失、零负或不相容价格须复核，不编比例或取绝对值。分配后向量须回加至完整原始清单。 | `jrc-ilcd-2010` |
| a_no_credit | 回收与返回 | 不设固定成色或产率、零历史负荷、自动回收信用、替代原生金、避免处置或下游精炼产率。含金分析既非可售纯金输出也非信用。真实内部循环抵消，对外返回保留历史。同一实物批不能既作参考边角又作另一个获信用共产品。 | `jrc-ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

协议只采集未除原始量、真实状态和继承向量。aggregation_rule仅声明完成第8节单次计算后的共同报告基准，不指示采集器再除。服务原始H与生产A互斥，实际原批次Q_c在cp_services记录。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_origin | forming | 整份合金 | 供方与接收记录 | 批次; 供应商; 整份合金质量状态; 金及每种金属分析; 夹杂; 水分; 上游工序及供方; 继承交换向量 | 核对校准接收称重、供方成分规格和代表性分析；识别一份完整整物料供方及其上游边界 | kg; 分析质量分数 | 每次接收和退回 | 完整时期及期初批次 | 实际来源供应商和成形场址 | 每 1 kg 参考流 | 供方证书; 分析方法及校准; 交接和覆盖 |
| cp_energy_forming | forming | 电力 | 表计和账单 | 表计起止; 原始kWh; 国家; 电压; 供电方; 时间曲线; 设备; 生产服务启停空转失败清理分区 | 读取实际校准电表并对应物理覆盖；归属前保留未除总量和所有模式 | kWh | 连续及报告边界 | 完整时期含零Q | 所有实际共享与专用设备 | 每 1 kg 参考流 | 电表校准; 拓扑; 操作日志 |
| cp_energy_preparation | preparation | 电力 | 表计和账单 | 表计起止; 原始kWh; 国家; 电压; 供电方; 时间曲线; 设备; 生产服务启停空转失败清理分区 | 读取实际校准电表并对应物理覆盖；归属前保留未除总量和所有模式 | kWh | 连续及报告边界 | 完整时期含零Q | 所有实际共享与专用设备 | 每 1 kg 参考流 | 电表校准; 拓扑; 操作日志 |
| cp_materials_forming | forming | 水与每种耗材 | 采购库存和使用 | 独立供货物或制剂; 接收使用; 期初期末; 返回; 安全说明及成分子账; 原单位; 实际密度温度; 循环配对 | 逐项称量或计量真实水、制剂和磨具供应；整份外购制剂仅一次，真实厂内配制输入另列；记录独立密度及实际去向 | kg; 实测m3 | 每次供货使用及库存边界 | 完整时期及期初历史 | 实际储罐设备和服务界面 | 每 1 kg 参考流 | 校准; 成分; 供方; 库存核对 |
| cp_materials_services | services | 水与每种耗材 | 采购库存和使用 | 独立供货物或制剂; 接收使用; 期初期末; 返回; 安全说明及成分子账; 原单位; 实际密度温度; 循环配对 | 逐项称量或计量真实水、制剂和磨具供应；整份外购制剂仅一次，真实厂内配制输入另列；记录独立密度及实际去向 | kg; 实测m3 | 每次供货使用及库存边界 | 完整时期及期初历史 | 实际储罐设备和服务界面 | 每 1 kg 参考流 | 校准; 成分; 供方; 库存核对 |
| cp_outputs_forming | forming | 每种实物共输出或不合格物 | 称重和目的地 | 每种物流; 总V; 皮重; 净质量; 金及每种成分; 水; 相态物种; 来源批; 路线; 供方; 内部交接对; 继承向量 | 分别称量互斥实物流并独立分析成分夹杂；记录整份混合物及非叠加分区，确定真实产品或废物状态及处理 | kg | 每次批交接和拒收 | 完整时期含失败返工清理 | 全部成形准备出口 | 每 1 kg 参考流 | 校准称重; 分析; 交接处理凭证 |
| cp_outputs_preparation | preparation | 每种实物共输出或不合格物 | 称重和目的地 | 每种物流; 总V; 皮重; 净质量; 金及每种成分; 水; 相态物种; 来源批; 路线; 供方; 内部交接对; 继承向量 | 分别称量互斥实物流并独立分析成分夹杂；记录整份混合物及非叠加分区，确定真实产品或废物状态及处理 | kg | 每次批交接和拒收 | 完整时期含失败返工清理 | 全部成形准备出口 | 每 1 kg 参考流 | 校准称重; 分析; 交接处理凭证 |
| cp_release | preparation | 新增首次放行边角料 | 放行称重及质量证明 | 唯一批次事件; 净Q; 皮毛重; 水分; 金及全部成分; 夹杂方法结果; 接收规格; 来源; 失败暂缓历史; 放行时刻 | 用校准秤称量合格边角固体净批量，排除包装和分离液体，并把代表性分析及书面接收标准绑定唯一首次放行事件；重验退回发运不能另造事件 | kg | 每次唯一首次放行 | 完整时期及期初批身份 | 实际供料放行门 | 每 1 kg 参考流 | 秤校准; 取样分析; 检验和事件去重 |
| cp_stocks_forming | forming | 材料与在制品向量 | 分批库存及交接 | 期初期末原料和在制品; 逐流数量; 逐交换继承负荷; 失败暂缓返工状态; 返回批; 交接对; 实际新增转化负荷 | 逐批核对两端实物量及逐交换继承向量，区分可用余料、待放供料和已放成品；承接失败清理负荷，不得丢弃 | kg; 原交换单位 | 每次交接及报告边界 | 完整时期及期初负荷历史 | 全部制造准备库存 | 每 1 kg 参考流 | 盘点; 交接; 向量等式; 原记录 |
| cp_stocks_preparation | preparation | 材料与在制品向量 | 分批库存及交接 | 期初期末原料和在制品; 逐流数量; 逐交换继承负荷; 失败暂缓返工状态; 返回批; 交接对; 实际新增转化负荷 | 逐批核对两端实物量及逐交换继承向量，区分可用余料、待放供料和已放成品；承接失败清理负荷，不得丢弃 | kg; 原交换单位 | 每次交接及报告边界 | 完整时期及期初负荷历史 | 全部制造准备库存 | 每 1 kg 参考流 | 盘点; 交接; 向量等式; 原记录 |
| cp_packaging | services | 每种独立包装物 | 采购返回库存与去向 | 物品配置; 所有权; 实测皮重; 期初空置在制附着成品附着周转; 新购P; 外返收到ER; 期末C; 随毛实物发运S; 对外返回EO; 废物W; 重用配对; 污染 | 对每种真实钢罐、纸标签和胶带分别称量，或按实测配置皮重计件；记录原批次、进出状态和每个去向，保留全部包装库存及返回界面 | kg; 实际件数及实测皮重 | 每次包装发运返回和库存边界 | 完整时期及期初附着库存 | 实际包装与对外界面 | 每 1 kg 参考流 | 皮重测量; 发票; 返回发运废物凭证 |
| cp_services | services | 各原批次服务 | 服务计量发运与收货 | 批次c; 原Q_c; 逐项原始H_jc; 期初期末成品; 毛发运返回; 重验返工; 路线距离毛载; 接收法律实体; 许可登记或豁免; 书面接受; 收货 | 追踪每个已放批次及互斥放行后服务至接收，含返回重包空转清理和真实增量返工；独立于UUID核法律实体、设施资质与物料接受；不采预除数量 | 原交换单位; kg; kg*km | 每事件及批次核对 | 完整批次服务历史含期初成品 | 首次放行至实际接收门 | 每 1 kg 参考流 | 原始服务记录; 交接收货; 资质接受核验记录 |
| cp_species | forming | 每种实际物种及热 | 特定状态测量 | 真实物种; 相态介质; 质量或浓度; 积分体积或真实速率时间; 温度压力湿度; 粒径成分; 捕集和非空气去向; 独立水氧金属证据; 热状态 | 跨模式独立校准测量分子颗粒和热，并按各自实测状态转换；指标未定物种前保留为指标，不借用水密度、不猜气量、不重复时间积分 | kg; 原体积或速率; MJ | 连续或代表性事件测量 | 全部启停失败正常空转清理模式 | 实际工艺和环境界面 | 每 1 kg 参考流 | 取样校准; 独立相态反应证据; 不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_release | gold_feed | Q等于唯一新增首次放行边角料净千克质量之和，排除包装、分离液体和不合格物；不是发运、含金量或再加期末成品。批号延续至接收门。 | cp_release; cp_stocks_forming; cp_stocks_preparation | Q | `mw-terms-2023`; `jrc-ilcd-2010` |
| c_units | 所有清单行 | 逐项将未除原分子转为声明交换单位：克除1000为千克；kWh乘3.6为MJ；t*km乘1000为kg*km。只积分真实速率，积分体积仍为体积。体积转质量仅用该物质实际状态下独立密度。分析分区不能把整份外购合金变为多次输入。 | raw_records; cp_origin; cp_energy_forming; cp_energy_preparation; cp_materials_forming; cp_materials_services; cp_species | converted_raw | `gjsci-components-2013`; `jrc-ilcd-2010` |
| c_attribute | 所有清单行 | 逐交换j按第7节专属或虚拟细分、决定性物理因果及仅有依据的共同门剩余价值归属。A_j等于期初在制品继承向量_j加实际归属转换负荷_j减期末在制品继承向量_j，核对内部返回交接向量对。保留全部失败、零产出、启停、空转、清理、返工负荷及所有其他共功能。这是负荷账，不是总物理V平衡。 | converted_raw; cp_stocks_forming; cp_stocks_preparation; allocation_records | A_j | `jrc-ilcd-2010` |
| c_normalise | 所有清单行 | Q大于0时仅一次a_j=A_j/Q，卡片和协议汇总只引用本结果。Q为0保留A_j及库存历史，不出单位生产结果。gold_feed参考输出由同次操作得到1千克。 | A_j; Q; cp_release | a_j | `jrc-ilcd-2010` |
| c_services | services | 原放行批次c的Q_c大于0时，对互斥真实放行后服务仅一次s_jc=H_jc/Q_c。s_jc关联原批生产画像，不再除；H不是Q，也不再进入当前生产A_j/Q。保留期初成品负荷、退回、原交付冲回和仅真实增量返工；重验或交付不造产量。Q_c缺失或为0则保留H，暂缓单位服务结果。 | cp_services; cp_packaging; cp_stocks_forming; cp_stocks_preparation; Q_c | s_jc | `jrc-ilcd-2010` |
| c_physical | 全部实物门 | 各门期初实物库存加外部收到加真实反应吸收，等于期末库存加外部流出加实测物种排放。制造出口只含一次Q；已放期末成品在Q内，不是第二份制造输出。成品门：期初已放成品加配对Q加实际收到退回，等于期末成品加毛实物发运加实际服务拒收；服务内交接配对。合并各门抵消内部Q及其他配对变动。总质量及相关金银铜等各元素独立核对物种反应水证据；披露不确定性，不强迫闭合。 | cp_origin; cp_outputs_forming; cp_outputs_preparation; cp_stocks_forming; cp_stocks_preparation; cp_release; cp_services; cp_species | physical_reconciliation | `gjsci-components-2013`; `jrc-ilcd-2010` |
| c_packages | 每种包装物 | 钢罐、标签、胶带逐种：期初空置加期初附着在制加期初附着成品加期初周转加P加ER，等于C加S加EO加W。C含对应全部期末状态；S是随毛实物发运外出的包装，含退回或重复发运。内部重用抵消，不是采购或产品Q。新增外部界面X仅扩展真实所在侧；只有证明OTHER恰为同侧该重复项才去重。保留所有权、原负荷及污染；不再加金属分析分区。 | cp_packaging; cp_services; cp_stocks_forming; cp_stocks_preparation | packaging_reconciliation | `brepohl-refining`; `jrc-ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 参考与供货 | 一批实际合金、整份制剂或物品身份、来源工序、接收规格及实物状态；记录全部UUID限制和待核供方身份。 | 供方与原生身份证据; 代表性分析 |
| dq_completeness | 全部模式与库存 | 覆盖完整时期、全部失败启停空转清理返工零Q、库存和逐交换继承向量、每个真实流及去向；不删除缺失观测。 | 原始模式日志; 库存向量核对 |
| dq_measurement | 全部分子与Q | 秤表校准、代表性取样和独立状态相态物种观测；量化精度及缺失，不设默认合金分析、回收率、密度或生产参数。 | 校准; 分析方法; 不确定性 |
| dq_context | 分配与接收 | 核研究情景及独立接收法律技术适用性，记录来源具体限制；配方证据不批准分配，Product UUID不批准废物转移。 | 分配决策; 资质与接受核验 |
| dq_bilingual | 完整数据包 | 英中保留相同事件、限定信息、交换流身份、单次公式、来源、条件及不确定性；中文UUID显示保持正式原名。 | 配对记录; 完整语义投影审计 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 具体应用 | 核对完整合金路线来源形态组合及39332/39333等排除条件；必须有供料规格分析及真实接收条件。 | `un-cpc3-2025`; `gjsci-components-2013`; `mw-terms-2023` |
| v_identity | 每个UUID | 逐UUID核原生类型、全部名称组成注释同义词、CAS、规格路线形态地域介质及全部属性。采用精确引用的属性单位组链和真实参考单位，不以最新版替代。即使分类吻合也拒绝硬身份矛盾；全部限制进入消费上下文。 | `mw-terms-2023` |
| v_basis | Q与负荷 | 核唯一首次放行，区分金、干质量、整份质量，禁止期末成品重复产量；先单位转换和归属，再唯一归一；服务用原Q_c并保留零Q负荷。 | `jrc-ilcd-2010` |
| v_balances | 实物与包装 | 核每门含成品及合并交接、整份混合物及分区、独立元素水物种证据、每个包装状态返回去向及完整在制成品继承向量。未知关系保持复核项，不能强行数值通过。 | `gjsci-components-2013`; `brepohl-refining`; `jrc-ilcd-2010` |
| v_receiver | 接收终端 | 缺现行接收资质接受、转移状态不相容、因油危险物低品位被拒或缺决定性分析时，不得使用实际接收终端。保留暂缓物料和负荷，不虚构精炼输出或覆盖。 | `mw-scrap`; `mw-terms-2023` |
| v_review | 数据包 | 执行有限计量、源内容指纹及Schema检查；另评科学适用性和翻译。工程通过不表示科学翻译批准、接受分类映射或发布。 | `jrc-ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相容归因情景下的明确来源金合金边角供料及接收门模型；保留全部限定和原批次服务 |
| excluded_use | 普遍回收率、零负荷废料、替代纯金信用、非金供料、灰、包覆料、在用首饰、精炼输出或无条件合法性证明 |
| required_metadata | 来源供应商与合金批次; 整份合金供货规格及上游负荷覆盖; 实测金及其余各成分并注明分析基准和不确定性; 均质无包覆合金及条板成形路线; 大片未焚烧板材边角形态; 实测水分及已分离液体; 异物和含油夹杂及测定方法和限值; 实际电加热和淬冷状态; 首次放行事件及净质量Q; 期初期末在制品及逐交换继承向量; 已放行成品批次身份及原Q_c; 实际接收法律实体及地址; 针对实际物料和地域核实的接收资质; 接收方约定规格及书面接受和交接收货凭证; 实际法律废物或产品交接状态; 分配决策情景及逐行层级; 公用工程国家电压和供方边界; 包装身份皮重所有权及全部返回; 运输路线距离毛载荷和返程约定 |
| required_quality_disclosure | 全供应及共功能边界、原始时期、继承向量、分配层级、UUID限制、接收法律技术核验、缺失和不确定性、科学及翻译状态 |
| update_trigger | 来源合金、成形热路线、污染水分、供方、接收标准资质法律状态、计量或分配证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Structure, 30 June2025, complete group393 and adjacent 39331/39332/39333; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅分类界线；较窄方法不构成新增接受映射 |
| gjsci-components-2013 | official_guidance | GJSCI G&J/Q0603 Goldsmith Component Maker v1.0, reviewed30July2013; G&J/N0603 PDF13–17; https://www.gjsci.org/nos/hmg2/HMG-GoldsmithComponents.pdf | 定性原始金及合金成形冲压、修边、废料回收、返工和台账；无当代配方或数值默认 |
| brepohl-refining | handbook | Erhard Brepohl, Precious Metal Refining, Ganoksin publisher excerpt from The Theory and Practice of Goldsmithing, updated11December2016; Treatment at the Refinery/Scrap and adjacent Filings/Sweeps/PGM; https://www.ganoksin.com/article/precious-metal-refining/ | 大片洁净废料分流、成色识别、称重及硬质包装；排除精炼化学和焚烧示例 |
| mw-scrap | extension_guidance | Morris and Watson, Scrap, undated publisher HTML; https://morrisandwatson.com/refining/scrap | 真实洁净合金板边角接收示例，限定原文自家合金来源；无普遍买方接受、回收率或负荷键 |
| mw-terms-2023 | extension_guidance | Morris and Watson Ltd New Zealand, Refining Terms and Conditions v2 July2023, complete2pages §§1–8; https://morrisandwatson.com/pdf/MWNZ-Refining-Terms-v2.pdf | 独立接收法律实体、物料排除、自主接受、来源所有权危险物披露、运输接收分析边界；无可转用运营资质 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA Detailed Guidance, firstedition2010 §§7.9.2–7.9.3 PDF275–292; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因情景、真实虚拟细分、逐交换决定性物理因果及有依据剩余项共同门市场价值；无工业配方或默认废物信用 |
