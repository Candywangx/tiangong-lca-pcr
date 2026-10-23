---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gasolene-type-jet-fuel
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 终端调和汽油型航空涡轮燃料（Jet B）

## 1. 范围与适用性

本PCR覆盖石油来源汽油型（宽馏分）航空涡轮燃料的终端制造：使用合格煤油与石脑油或有记录的汽油组分，经所述添加剂处理、质量放行、储存及散装装载。代表牌号为Jet B。边界从接收合格炼油组分开始，到合格燃料净量通过终端交付计量点结束。组分炼制留在所链接的上游数据集中。炼厂仅可将本方法用于可分离的调和单元并完整链接上游炼油过程，不得据此声称具备独立的全炼厂清单。

所选路线采用电力泵送与调和，不含厂内燃料燃烧、供汽、热转化或废水处理。排水及残余物送往声明的厂外处理设施。明确覆盖的添加剂选择为Stadis 450，以及在规定使用时的纯2,6-二叔丁基-4-甲基苯酚与III型二乙二醇单甲醚。其他添加剂制剂、防腐润滑剂包、检漏示踪剂、不同滤芯介质、新公用工程类型或厂内产生排放的处理，须先增加有来源支持的原子交换，才能由本方法建立完整性。组分身份本身不证明规格许可。

排除煤油型Jet A、Jet A-1、JP-5和JP-8；活塞发动机航空汽油；作为最终参考产品的道路汽油；纯合成或生物来源涡轮燃料；以无证据前景配方表示的上游炼油制造；下游配送、机场作业、飞机使用及燃烧。历史JP-4/AVTAG制造不属于本Jet B添加剂和认证路线。本PCR定义LCA制造记录，不提供飞行使用认证、飞机批准或安全操作建议。

联合国CPC 3.0（2025年6月30日，印刷/PDF第155页）将33320描述为煤油与汽油/石脑油调和的涡轮燃料，所述馏程100–250°C、芳烃体积分数不超过25%、蒸气压13.7–20.6 kPa。这些是分类描述，不是组分配比。Jet B认证遵循所选版本CAN/CGSB-3.22，并不自动等同于CPC：2012版于2022年9月重确认，有其检测方法对应的限值。采集实际性质及方法，分别判定分类，不得强行调整数值以匹配标签。仅本终端路线中符合CPC描述的批次支持33320的narrower映射。[cpc3-2025; cgsb-jetb-2022]

Shell民用和军用燃料牌号网页均标示2025年11月20日更新，于2026年10月12日读取；其描述Jet B在寒冷地区供应有限，JP-4于20世纪90年代退出美国空军使用，并由该供应商报告剩余产量很少。这些是有日期的供应商表述，不是2026年市场普查或某厂运行证明。加拿大2022年重确认建立的是规格，不证明实际销售。每个现行或历史数据集均须提供生产者、国家、生产日期及真实合同/证书。Shell民用网页含较旧标准引用，规格权威依据采用政府标准。[shell-civil-2025; shell-military-2025]

2026年10月13日核对的政府目录仍列CAN/CGSB-3.22为2012年9月版、2022年9月重确认，未列修订。目录同时说明CGSB自2026年4月1日起停止标准制定及合格评定服务，但目录仍可访问。这是已识别的规格证据，不是生产普查。历史批次须保留当时实际适用版本及合同；后续编制数据集时重新核对目录状态及适用修订。[cgsb-catalogue-2026]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gasolene-type-jet-fuel |
| classification_refs | CPC 3.0:33320 汽油型喷气燃料；narrower；另行接受映射 |
| covered_products | 上述终端路线的石油宽馏分Jet B |
| excluded_products | 煤油型喷气燃料、航空汽油、历史JP-4路线及上述其他排除项 |
| representative_product | 通过声明版本Jet B规格放行的均匀批次 |
| production_route | 合格炼油组分接收→电力调和与所述添加剂投加→检测放行→储存装载 |
| market_state | 交付计量点散装液态燃料；不得由历史型号推定当前供应 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 终端交付的合格宽馏分航空涡轮燃料 |
| How much | 1 千克完整合格燃料净量，含实际留存添加剂及载体 |
| How well | 声明Jet B版本、质量证书、实际组成及放行条件 |
| How long or cycle | 一个声明的生产报告期或批次 |
| reference_flow_link | out_fuel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 燃料 `7ea177ac-eb74-4551-99ea-d015070bfb50` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Jet B牌号及规格版本；生产者、地域及生产年份；实际配方与石油来源；添加剂牌号、载体及累计投加；批次证书；密度温度基准、热值基准；上游炼制与分配；电压；装载边界；CPC实际性质判定 |

必需限定信息须写入数据包元数据、参考交换或过程说明；缺失即参考流不完整。广义“燃料”以质量表示可释放能量的材料，并明确包含石油燃料。完整名称及说明允许该石油Jet B子集；路线、CAS、配方、牌号及供应地区未特指，而非冲突的固定条件。仅有CPC标签不确认Jet B身份。仅在具备上述批次限定信息及完整燃料质量时采用该广义参考身份；它不是精确Jet B牌号记录，也不建立配方、当前供应或背景过程。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单行按每 1 kg 参考流报告；净交付质量包含完整合格燃料中留存的全部组分、添加剂及载体，排除容器、包装、已分离游离水及未放行燃料。 |
| density_basis | liquid material | Mass | kg | 液体体积采用同批次同温度基准实测密度rho(T)换算；记录样品及状态、实际或校正体积、温度、必要时压力、校正方法和不确定性。不得将某温度罐容乘另一温度密度；不用默认密度。 |
| electricity_basis | in_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表kWh；1 kWh = 3.6 MJ；该属性用于数据库电力数量，不表示燃料热值。 |
| gas_measurement | out_benzene_air,out_hexane_air,out_toluene_air,out_ethylbenzene_air,out_oxylene_air,out_mxylene_air,out_pxylene_air | Mass | kg | 保留气体采样点及报告期、绝对压力、温度、压缩因子Z、实际或参考体积、干湿基准、湿度、物种分数基准及摩尔质量。仅在实测基准一致时换算；理想气体Z及参考温压须有适用性证据，不自动默认。 |
| calorific_basis | reference product | Mass | kg | 保留净/总热值基准、样品组成及水分、温度、检测或计算方法与质量控制。规格下限是验收限值，不是燃料实测热值或默认换算值。 |
| substance_basis | all elementary outputs | Mass | kg | 保留物种、CAS、介质及测量定义；总挥发性有机物与分物种行不重复相加。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经验证的炼油组分及所述添加剂到达终端接收边界 |
| starting_condition_role | 前景记录起点；其前的生产和运输由上游链接完整表示 |
| product_classification_scope | 仅CPC性质相符的本路线批次可建议33320 narrower |
| recursive_input_rule | 外购同类成品须另列产品输入和上游数据，不递归展开；本组分调和清单不自动覆盖成品再调和 |
| upstream_dataset_requirement | 组分、添加剂、载体、滤芯、水、电及厂外废物处理；炼油供应过程须保留实际技术与共产品分配证据 |
| disclosure | 报告期、批次、组分履历、现场图、内部返工、损失、水/碳/氢/硫及能量账、全部包装容器、维护、退回、源/原生/缩放数量、上游边界和未决项 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_upstream | upstream links | 炼油BREF描述中间馏分可进入多个成品池，EPA描述炼厂流程随原料及产品方案变化。因此须从真实供应过程获取蒸馏、处理、氢气、供热及硫回收覆盖，不能由Jet B质量指标推定所有单元均运行。同厂前序单元须保留真实handoff，含生产及接收方、原生流身份、数量、报告期、组成状态和两端核对；内部组分不是无负荷外购。每个供应过程以精确过程身份及保留的数据版本、参考交换、技术/地区/年份、原生属性单位和未缩放数量链接，保留换算及模型缩放量，核查前序遗漏或重复。不得将煤油型Jet燃料成品背景当作宽馏分成品；仅经验证的组分供应可链接。 | ref-bref-2015; ap42-refining-2015 |
| boundary_ledgers | physical system | 保留分配前实物图：接收→调和/投加→检测→储存→交付。内部返工及回收蒸气返回两端同量，不另算外排；同时保留期初期末库存、液体/气体/固体外出、废水及水/碳/硫/能量账。厂外废水转移不是本厂水体排放。 | ref-bref-2015; ap42-refining-2015 |
| boundary_support | supporting physical exchanges | 保留每项实际添加剂桶/瓶/内衬/封口、托盘及其他包装、采样容器、可周转运输容器、清洗物料、维护润滑剂、替换密封件/滤芯及废弃对应物的完整账。区分内装物与完整容器皮重，区分滤芯干态结构与截留燃料/水。记录供方、接收方、内外部状态、周转次数、期初期末库存、损坏、退回及实际数量。声明完整性前，每项外部物料/废物均须有物理具体的原子交换及精确供给/处理；耐用设备及运输资产遵循明确一致的纳入政策。不得发明包装材料或将其藏入添加剂/燃料质量。 | pcr-balance-method |
| boundary_route | foreground | 本路线不使用厂内锅炉、供汽、焚烧式蒸气处理或厂内废水处理。若实际存在，必须先扩展有证据的单元和原子流；不能以外购电力行覆盖这些操作或将其排放设零。生物CO2、化石CO2和每种排放在真实扩展路线分别记账。 | ap42-refining-2015 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| terminal_manufacture | 终端制造 | required | 上述路线 | foreground | out_fuel |

接收、调和、投加、检测、储存和装载汇为一个前景单元；各阶段独立计量，避免同成品UUID形成多个参考输出。

### 过程：终端制造（`terminal_manufacture`）

#### 输入

##### 产品流

###### 煤油 （`in_kerosene`）

合格石油煤油调和组分，采集实际混合物组成、CAS身份、处理路线、批次证书及供应方。不是单一分子物质或煤油型喷气燃料成品；加氢精制及固定热值须由真实供应方证据建立，不用默认组分配方。

- 选定流：石油煤油调和组分
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`cpc3-2025`

###### 石脑油 （`in_naphtha`）

仅在实际配方使用时纳入合格石油石脑油组分。采集馏程、硫及添加剂带入量，不设固定石脑油比例。

- 选定流：石脑油 `4f19ca0d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`cpc3-2025`

###### 汽油 （`in_gasoline`）

仅为有记录的汽油调和组分，在替代石脑油或与其同时使用时纳入。按适用涡轮燃料规格核对含氧物、铅及其他组分，不假定道路汽油背景适用。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`cpc3-2025`

###### 交流电 （`in_electricity`）

中国（CN）低于1千伏交付到用户的电网平均消费组合交流电，用于泵送、调和、检测、储存和装载。该身份限定中国供给；其他地区终端须先选择地区匹配的身份及供应过程。保留供方、年份、电压、参考数量及损耗边界；高电压供给须不同身份和明确变压链接。该限定不证明任何中国终端实际生产Jet B。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值/低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以 cp_energy 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ref-bref-2015`

###### 去离子水 （`in_water`）

仅纳入实际实验室或清洗用去离子水。采集水质及质量；该行是外购产品水，不是环境取水。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ap42-refining-2015`

###### Stadis 450 抗静电添加剂制剂 （`in_sda`）

一项供货的Stadis 450制剂，采集实际供应方配方、载体及投加量。不得将整份制剂视为纯聚合物或逆推保密组成；核算带入及累计投加。

- 选定流：Stadis 450 抗静电添加剂制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_additive 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive`
- 来源：`cgsb-jetb-2022`

###### 2,6-二叔丁基-4-甲基苯酚 （`in_bht`）

仅当所选配方使用该特定纯抗氧剂（CAS 128-37-0）时纳入。其他获准抗氧剂及溶剂制剂须另设原子行并审查身份；不设默认剂量。

- 选定流：2,6-二叔丁基-4-甲基苯酚
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_additive 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive`
- 来源：`cgsb-jetb-2022`; `nist-additive-identity`

###### 二乙二醇单甲醚 （`in_diegme`）

仅纳入买方指定的III型防冰剂（CAS 111-77-3），采集牌号及纯度证书。乙二醇二甲醚是不同分子，不能替代。

- 选定流：二乙二醇单甲醚
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_additive 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive`
- 来源：`cgsb-jetb-2022`; `nist-additive-identity`

###### 聚丙烯燃料滤芯 （`in_filter`）

燃料净化中实际消耗的一项聚丙烯滤芯。采集型号、包含介质/支撑芯体/壳体/密封件的完整滤芯干质量及服务批次，避免在维护行重复计入这些部件；实际介质不同则本行不适用，须审查真实滤芯身份。

- 选定流：聚丙烯燃料滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_material 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ap42-refining-2015`

#### 输出

##### 产品流

###### 燃料 （`out_fuel`）

唯一参考输出为放行并通过交付计量点的石油宽馏分涡轮燃料。数据库展示名广义，本PCR将其限定到声明的Jet B批次、规格、配方和石油来源，不授权使用任意泛燃料供应过程。

- 选定流：燃料 `7ea177ac-eb74-4551-99ea-d015070bfb50`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_release`
- 来源：`cpc3-2025`

##### 废物流

###### 废油 （`out_offspec`）

仅纳入实际转交废物处理的不合格宽馏分石油燃料，以厂内收集状态链接后续独立运输及处理。内部返工为内部循环；作为真实产品出售的不合格燃料须另设产品身份并分析共产品。采集污染状态、废物属性及接收方。

- 选定流：废油 `e620bc79-43f0-41a8-9589-9b5fe50ffef2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ap42-refining-2015`

###### 石油污染的储罐排水废水 （`out_wastewater`）

实际转送厂外处理的水性罐底排水或清洗废水。采集湿质量、水油比例、溶解组分及接收设施；锰渣洗水和油泥不能替代。

- 选定流：石油污染的储罐排水废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ap42-refining-2015`

###### 石油储罐底泥 （`out_sludge`）

实际固态或半固态罐底沉积物，排除单独计量的水性排水。采集油、水、干固体、硫、污染及处理方式；不假定预设组成的机械分离油泥等同。

- 选定流：石油储罐底泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ap42-refining-2015`

###### 含截留石油的废聚丙烯燃料滤芯 （`out_filter`）

一项完整废弃滤芯，分别计量截留燃料/水、截留固体及其中全部介质、支撑/芯体、壳体和密封件的干质量。不得视为散装聚丙烯废料。截留颗粒固体在此记账，与排出环境的颗粒分开。

- 选定流：含截留石油的废聚丙烯燃料滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_waste 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ap42-refining-2015`

##### 基本流

###### 苯 （`out_benzene_air`）

仅纳入经实测或有证据分物种核算的苯，CAS 71-43-2，排出终端边界至室外空气、子介质未特指。分别采集储存、转输、装载及泄漏源，不再作为挥发性有机物总量重复计入。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ap42-refining-2015`

###### 己烷 （`out_hexane_air`）

仅纳入经实测或有证据分物种核算的己烷，CAS 110-54-3，排出终端边界至室外空气、子介质未特指。分别采集储存、转输、装载及泄漏源，不再作为挥发性有机物总量重复计入。

- 选定流：己烷 `08a91e70-3ddc-11dd-947d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ap42-refining-2015`

###### 甲苯 （`out_toluene_air`）

仅纳入经实测或有证据分物种核算的甲苯，CAS 108-88-3，排出终端边界至室外空气、子介质未特指。分别采集储存、转输、装载及泄漏源，不再作为挥发性有机物总量重复计入。

- 选定流：甲苯 `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ap42-refining-2015`

###### 乙苯 （`out_ethylbenzene_air`）

仅纳入经实测或有证据分物种核算的乙苯，CAS 100-41-4，排出终端边界至室外空气、子介质未特指。分别采集储存、转输、装载及泄漏源，不再作为挥发性有机物总量重复计入。

- 选定流：乙苯 `fe0acd60-3ddc-11dd-a2eb-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ap42-refining-2015`

###### 邻二甲苯 （`out_oxylene_air`）

仅纳入经实测或有证据分物种核算的邻二甲苯，CAS 95-47-6，排出终端边界至室外空气、子介质未特指。分别采集储存、转输、装载及泄漏源，不再作为挥发性有机物总量重复计入。

- 选定流：邻二甲苯 `08a91e70-3ddc-11dd-974c-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ap42-refining-2015`

###### 间二甲苯 （`out_mxylene_air`）

仅纳入经实测或有证据分物种核算的间二甲苯，CAS 108-38-3，排出终端边界至室外空气、子介质未特指。分别采集储存、转输、装载及泄漏源，不再作为挥发性有机物总量重复计入。

- 选定流：间二甲苯 `08a91e70-3ddc-11dd-96c1-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ap42-refining-2015`

###### 对二甲苯 （`out_pxylene_air`）

仅纳入经实测或有证据分物种核算的对二甲苯，CAS 106-42-3，排出终端边界至室外空气、子介质未特指。分别采集储存、转输、装载及泄漏源，不再作为挥发性有机物总量重复计入。

- 选定流：对二甲苯 `fe0acd60-3ddc-11dd-ab7b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以 cp_air 采集实际数量，按净交付燃料质量归一至每 1 kg 参考流；不设默认量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ap42-refining-2015`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | terminal batches | 优先采用阶段及批次实测记录。共用电量、水和耗材须按现场可核对的驱动因素归属，如实测泵送电量或设备运行时间；由数据生产者证明关系并披露其他服务负荷，不能使用默认份额。 | ref-bref-2015 |
| allocation_refinery | component providers | 每个组分供应过程须给出实际炼厂多产品单元及其分配政策、因果依据、同期产量/价格（如采用）及因子归一性。保存全体气液固产品、水、碳、硫与能量接口和未分配总账；来源不充分时保留链接缺口，不以成品规格反推。 | ref-bref-2015; ap42-refining-2015 |
| allocation_physical | all balances | 分配后环境负荷账与实物过程图分别保存。联产品实际输出、内部连接和返工数量不得乘分配份额。废物不因具有热值而自动成为共产品；实际销售及接收条件须证明。考虑单元拆分及物理因果后，如有依据采用经济分配，保留同期净数量、实际价格、币种、价格日期及基准、运输/税费处理和敏感性；金额不是质量或能量换算。 | ref-bref-2015 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | terminal_manufacture | 组分/水/滤芯 | foreground_record | batch_id; supplier; material; grade; mass; volume; temperature; pressure; density; sample_id; composition; H2O; source_document; provider_process_id; provider_version; native_reference_amount; native_property_unit; conversion; scaled_amount; opening_inventory; closing_inventory; returns | 校准质量计/秤；储罐体积与同批密度核对；合格证书 | kg | 每批/每转输及报告期结算 | 完整声明报告期 | 全部所覆盖终端阶段 | 每 1 kg 参考流 | 校准、发票、证书 |
| cp_additive | terminal_manufacture | 添加剂投加 | foreground_record | batch_id; additive SKU; composition; carrier; purity; dose; cumulative carry-over; recipe; meter; whole_formulation_mass; active_mass; carrier_mass; container_tare; volume_temperature; supplier_source; native_and_scaled_amounts | 供应方证书、领用称重及匹配燃料/添加剂转输记录；含载体的完整供货制剂只计一次，活性成分为分析子账而非第二次交换 | kg | 每批/每转输及报告期结算 | 完整声明报告期 | 全部所覆盖终端阶段 | 每 1 kg 参考流 | 供应方资格、批次剂量核对 |
| cp_energy | terminal_manufacture | 电力 | foreground_record | meter_id; kWh; stage; batch; voltage; period; supplier; driver; non-scope use | 校准分表及实测服务分配；保留kWh和3.6 MJ/kWh换算 | MJ | 每批/每转输及报告期结算 | 完整声明报告期 | 全部所覆盖终端阶段 | 每 1 kg 参考流 | 校准、计量图、发票、驱动因素证明 |
| cp_release | terminal_manufacture | 参考质量及质量放行 | foreground_record | batch_id; grade; standard edition; release certificate; density; temperature; net dispatch kg; opening/closing stocks; samples; rework; rejected kg; property test results; sample_id; sample_time; preservation; test_method_edition; uncertainty; replicate_and_QA; retained_additive_mass; water; net_gross_calorific_basis; measured_calorific_value | 校准交付质量计及批次认证采样；采用适用标准检测方法 | kg | 每批/每转输及报告期结算 | 完整声明报告期 | 全部所覆盖终端阶段 | 每 1 kg 参考流 | 采样链、实验室质量控制、放行签署 |
| cp_waste | terminal_manufacture | 废物转移 | foreground_record | stream_id; receiver; status; wet mass; water; oil; dry solids; retained fuel; sulfur; contamination; date | 校准出厂称重及代表性组成检测；接收方联单 | kg | 每批/每转输及报告期结算 | 完整声明报告期 | 全部所覆盖终端阶段 | 每 1 kg 参考流 | 衡器、实验室质量控制、接收签认 |
| cp_air | terminal_manufacture | 分物种空气排放 | foreground_record | source_id; species; CAS; location; vapour composition; period; gas volume; temperature; absolute pressure; Z; dry_wet_basis; humidity; species_fraction_basis; carrier_inflow; exhaust_outflow; recovery_return; measured load; recovery efficiency; outage; method; sampling_QA; detection_limit; uncertainty | 代表性排放/组分检测或有来源的源特定计算；扣除分别计量的载气进入/背景及内部回收返回，核对厂界净物种释放；总蒸气及未识别物种覆盖保留子账，不将全燃料挥发量赋给任一物种；记录监测缺口及未检出限值，不自动置零；不自动采用AP42因子 | kg | 每批/每转输及报告期结算 | 完整声明报告期 | 全部所覆盖终端阶段 | 每 1 kg 参考流 | 采样计划、校准、源计算及不确定性 |
| cp_support | terminal_manufacture | 包装、维护及退回账 | foreground_record | item_id; precise_material_or_whole_article; supplier; receiver; source_record; mass; tare; contents; construction; reuse_cycles; period; opening_closing_stocks; internal_external_link; maintenance_service; return_status; disposal; transport; inclusion_policy; native_reference_amount; native_property_unit; conversion; scaled_amount | 实际采购/领用/退回/维护及接收记录与校准量值核对；每项实物及处理单设外部原子交换，不默认物品或周转容器寿命 | kg | 每次领用/退回/维护及期末结算 | 完整声明报告期 | 全部所覆盖终端阶段及支持耗材 | 每 1 kg 参考流 | 发票、校准称重、退回及维护记录、供应过程参考交换 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_reference | all inventory rows | 各流实际报告期数量/合格净交付质量；共用负荷先按有证据的归属核算，实物流不乘分配份额。 | measured flow; net dispatch; cp_release | per 1 kg reference flow | pcr-balance-method |
| volume_mass | in_kerosene,in_naphtha,in_gasoline,out_fuel | 质量 = 相同温度及状态基准体积 × 同批次密度rho(T)；保留样品id、实测体积及密度、校正与不确定性。 | volume; temperature; density | kg | pcr-balance-method |
| electricity_conversion | in_electricity | 电量MJ = 电表kWh × 3.6。 | kWh | MJ | pcr-balance-method |
| physical_reconciliation | all inventory rows | 逐项实物账核对：期初库存+外部接收及退入=净交付+期末库存+外出废物+净外部释放+取样及退外；区分售出产品与废物并避免重叠。内部返工及回收在匹配两端相消，保留阶段库存及实际边界的储存/装载/运输挥发。按实测组成、H2O、载气空气及湿度、库存变化和真实转输核对水、碳、氢、硫和能量；储存/交付燃料化学能与输入电能及散热分开，挥发不产生燃烧CO2。包装容器及维护账与燃料净质量分开，不用虚构平衡流强行闭合未解释余额。 | physical ledgers; batch composition; cp_material; cp_waste; cp_air | unallocated balance; disclosed residual | pcr-balance-method |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all flows | 验证实际物质、介质、路线、属性及供应数量基准；UUID身份不是完整背景数据。 | certificates; provider boundaries; identity records |
| dq_temporal | all rows | 统一真实报告期；标明历史生产及停产状态、缺口和异常。 | dated production and purchase records |
| dq_completeness | all rows | 逐项证明已计量、未发生或缺口；无证据不得置零。其他实际组分、清洗剂、载体及物种须逐行扩展，不可合并。 | site diagram; source ledger; gap register |
| dq_recipe | batch | 实际组分比例、添加剂牌号、组成及投加取自生产记录；规格限值不建立配方或排放。 | batch recipe; certificates |
| dq_upstream | component supply | 上游完整性涵盖真实炼油多产品、水/碳/硫/能量接口和分配；不填未经验证的煤油成品路线。 | provider process inventory and allocation records |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | out_fuel | 恰好一个产品输出链接参考行；数量1千克及所声明质量链一致。缺少限定信息或相反煤油/航空汽油路线则拒绝。 | pcr-balance-method; cpc3-2025 |
| validate_specification | batch | 核对全部适用规格及采样/添加剂要求；记录各性质方法和结果。Jet B合格不能自动证明33320分类，需单独核验。 | cgsb-jetb-2022; cpc3-2025 |
| validate_boundaries | site and providers | 确认实际路线满足第1节；否则扩展方法后再使用。废水外运不并记厂内水体排放；内部回用不并记厂界输出。 | ap42-refining-2015 |
| validate_accounting | all inventory | 分别核对实物、水/碳/硫及能量余额与分配后负荷；不得用分配份额修改联产品实物量或用产品损失替代物种排放。 | ref-bref-2015; pcr-balance-method |
| validate_support | supporting ledgers | 核查全部包装容器、维护、退回及完整滤芯账，每项外部物品均有原子交换及精确供给/接收过程；每条过程链接保留来源、原生参考/属性/单位、换算及缩放量。真实SKU/现场参数未采集是后续采集要求；不支持的实物身份或换算不得豁免。 | pcr-balance-method |
| validate_emissions | all emissions | 按实际物种和介质逐行，监测/因子覆盖和来源年份透明；总量与组分不重复，PM嵌套粒径不累加，CO2来源不删减，NOx数量定义须明确且不含N2O。现路线不授权无证据通用排放因子。 | ap42-refining-2015 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 终端制造前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 完整上游链接的终端交付宽馏分Jet B供应模型 |
| excluded_use | 全炼厂无证据配方、煤油型或航空汽油替代、历史JP-4市场推广、认证或飞机燃烧声明 |
| required_metadata | Jet B牌号及规格版本；生产者、地域及生产年份；实际配方与石油来源；添加剂牌号、载体及累计投加；批次证书；密度温度基准、热值基准；上游炼制与分配；电压；装载边界；CPC实际性质判定 |
| required_quality_disclosure | 实測/计算/缺口、UUID限定、供应基准、计量覆盖、配方证据、余额、分配及源年份 |
| update_trigger | 规格、路线、供应方、配方、添加剂、电压、污染、处理或生产期改变 |

## 11. 数据来源

| 来源id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| cpc3-2025 | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, p.155; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类边界，不是配方 |
| cgsb-jetb-2022 | standard | CAN/CGSB-3.22-2012, reaffirmed September 2022, sections 1, 3–6, PDF pp.8–14; https://publications.gc.ca/collections/collection_2022/ongc-cgsb/P29-003-022-2022-eng.pdf | Jet B规格、组分/添加剂及采样；不代替实际采购/批次证明 |
| ref-bref-2015 | official_guidance | JRC, Refining of Mineral Oil and Gas BREF, 2015, section 2.21 printed p.107/PDF p.141; 4.21.14–16 printed pp.461–462/PDF pp.495–496; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/REF_BREF_2015.pdf | 一般炼油储运及多产品调和接口；柴油图不是Jet B配方，不采用节能或回收率默认值 |
| ap42-refining-2015 | official_guidance | US EPA, AP-42 section 5.1 Petroleum Refining, April 2015, sections 5.1.1–5.1.2; https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf | 一般流程及排放源识别；历史美国因子不作本路线通用数值 |
| shell-civil-2025 | handbook | Shell, Civil Jet Fuel, page updated 20 November 2025, read 12 October 2026; https://www.shell.com/business-customers/aviation/aviation-fuel/civil-jet-fuel-grades.html | 供应商Jet B市场叙述；旧标准引用不作为规格权威 |
| shell-military-2025 | handbook | Shell, Military Jet Fuel, page updated 20 November 2025, read 12 October 2026; https://www.shell.com/business-customers/aviation/aviation-fuel/military-jet-fuel-grades.html | JP-4历史及区分；不是2026年生产调查 |
| cgsb-catalogue-2026 | official_guidance | Government of Canada, Canadian General Standards Board Catalogue, checked 13 October 2026; https://www.canada.ca/en/public-services-procurement/services/standards-oversight/canadian-general-standards-board/catalogue.html | Jet B所列版本及修订状态、CGSB服务状态；不证明生产或飞行批准 |
| nist-additive-identity | official_guidance | NIST Chemistry WebBook, SRD 69, Butylated Hydroxytoluene（CAS 128-37-0）及Ethanol, 2-(2-methoxyethoxy)-（CAS 111-77-3），2026年10月13日核对；https://webbook.nist.gov/cgi/cbook.cgi?ID=C128370 及 https://webbook.nist.gov/cgi/cbook.cgi?ID=111-77-3 | 仅分子/CAS身份，不建立添加剂制剂、剂量或燃料批准 |
| pcr-balance-method | method_factor | 本PCR的守恒与单位换算规则；无经验默认数量 | 归一化及分配前实物核对 |
