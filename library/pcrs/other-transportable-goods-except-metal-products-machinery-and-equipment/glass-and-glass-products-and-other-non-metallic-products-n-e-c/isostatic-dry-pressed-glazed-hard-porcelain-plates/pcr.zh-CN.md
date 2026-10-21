---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.isostatic-dry-pressed-glazed-hard-porcelain-plates
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 等静压干压成形施釉硬质瓷餐盘

## 1. 范围与适用性

本归因生产方法覆盖一个规定设计和质量等级的未装饰透明施釉硬质瓷餐盘，从未烧矿物原料经厂内湿法制备、喷雾造粒及等静压干压，再干燥修边、素烧、厂内制釉施釉、釉烧冷却、底足磨抛和分选试验至唯一首次质量放行。保留真实燃气烧成、治理、失败、返工、资产及其后批次服务。来源支持透明技术综合，不代表同一SKU、工厂配方或当代生产订单。

排除炻器、陶器、骨瓷、黑色坯体、技术电瓷、卫生洗面器、陈设雕像、以磨料为参考的产品、无釉参考器、空心器茶具、塑性滚压、注浆/压力浇注、买粉代替厂内喷雾干燥、单烧、艺术釉下釉上釉中装饰及装饰复烧、贵金属、哑光黑色或表面涂层路线、安装使用清洗及寿命末端。真实小厂标按完整油墨独立采集，不扩张到艺术装饰。不能变为买烧成餐盘再包装，不推断食品接触、性能尺寸器重寿命。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.isostatic-dry-pressed-glazed-hard-porcelain-plates |
| classification_refs | CPC 3.0:37221 |
| covered_products | 等静压干压成形施釉硬质瓷餐盘 |
| excluded_products | 第1节列明其他坯体成形烧成装饰类别及下游服务功能 |
| representative_product | 一个真实未装饰硬质瓷餐盘设计及选定质量等级 |
| production_route | 完整未烧原料→湿法制坯料/喷雾造粒→等静压干压干燥→素烧→厂内制釉施釉→釉烧冷却→底足磨抛→检验首次放行；观测批次服务另记 |
| market_state | 首次质量放行的完整裸施釉餐盘，真实后续包装成品服务另披露 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产规定陶瓷餐盘供日后盛餐，须真实产品批准 |
| How much | 唯一首次质量放行的净裸餐盘1 kg |
| How well | 真实设计等级釉面及要求试验记录，不作通用合规或等服务主张 |
| How long or cycle | 规定生产批次，真实后续服务观测H另记，不假设使用寿命 |
| reference_flow_link | finished_plate |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 日用陶瓷 `13201762-198b-406a-8596-e66564114ff1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址地域期间和真实供方; 一个真实餐盘设计材质及质量等级; 硬质瓷坯和透明釉化学; 整份供货原料制剂及含水; 厂内湿法制备喷雾造粒等静压干压及两次燃气烧成; 干燥气氛表面后整理与验收试验; 唯一首次放行净质量Q且不推单件kg; 期初末原料在制非在制库存及每流继承负荷向量; 原放行成品批次及总发运退回状态桥接; 观测服务H与原批次Qc; 每种包材身份所有权空置附着可复用库存及总往返; 真实物种相态媒体CAS来源和检出依据; 独立完整实物质量及元素平衡; 原生广延单位载体质量热状态焓及供方水能约定; 机器模具耐材流体实物存量与当期服务负荷; 独立专属细分物理因果及剩余共门价值证据; 不确定性未定辅流及下游限制 |

每项限定须在数据元数据或等效完整参考流语境中声明。这是生产声明质量单位，不是等同盛餐服务。件数转质量须独立校准的同设计净质量测量，次级属性、目录典型器重、几何或假定密度均不提供kg/件。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用1kg放行净裸餐盘，cp_release将校准真实首次放行质量Q汇总一次。期末已放行成品仍在内；件数面积及包装不入Q。 |
| native_units | each inventory exchange | 保留各行原生属性 | 原生单位 | 每分子保留Mass/kg、Volume/m3、能量/MJ或货运t km。kWh转MJ用3.6，不把质量kg套给能量体积服务或从次级系数推密度。 |
| physical_chemistry | 质量元素物种门 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 须独立校准湿干实物质量和分析化学。游离吸附水、结构羟基、生成反应水及液气相不同，不用一个残差同时拟合水和CO2。 |
| carrier_state | 公用工程空气水量 | 保留各行属性 | 原生单位 | 仅真实速率按记录时间积分，累积体积不再积分。使用独立物质状态密度和热值焓。外部蒸汽热水回流保留实态及供方水能约定，不重复供方采购。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完整外购未烧矿物原料及真实具体辅料，明确供方制备含水，无烧成盘或替代粉料 |
| starting_condition_role | foreground_material_receipt |
| product_classification_scope | 仅CPC37221中所选硬质瓷餐盘子集，不意味着接受映射 |
| recursive_input_rule | 外购同类成品陶瓷须相容上游负荷及重审范围，不替代本原料到成品路线 |
| upstream_dataset_requirement | 匹配每真实完整材料制剂、理化身份、供货状态牌号路线地域和广延单位，不重复子成分供方 |
| disclosure | 原料到首次放行前景制造及明确分离原批次服务账；摇篮到门须核实上游链接并披露合并 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | 制造 | 仅规定未装饰施釉硬质瓷餐盘设计等级及等静压干压两烧路线适用。从整份外购未烧原料开始，纳入真实接收运输、湿磨、混合、过筛除铁、喷雾干燥、等静压、修边预干、素烧、厂内制釉施釉去足釉、釉烧冷却、底足磨抛、分选试验及控制至唯一首次放行。外购粉料或烧成餐盘不能替代本路线。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| b_supply | 全部输入 | 每份完整供货制剂只计一次，成分检测与载水进子账。厂内配制逐记采购原料及真实水能排放损失。未列真实原料、清洗剂、制冷剂或治理药剂须补具体原子交换，不以other/zero集合掩盖。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| b_cohort | 制造负荷 | 保留失败、零产出、启停、待机保温、清理及放行前返工复烧。逐交换继承期初末原料、在制和未归属非在制库存的负荷向量。已放行期末成品已在Q中，不扣其制造负荷，也不再加作产量。内部循环抵消一次，真实再处理保留。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| b_service | 放行后服务 | 原制造负荷留在唯一放行批次。包装、成品仓储、搬运、发运、外返、清洗重验返工及损失，按原批次Qc和观测H另采真实增量；后续移动不造Q。总发运/退回各有独立状态与质量。合并抵消内部放行餐盘交接，保留外部移动。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| b_physical | 制造服务合并 | 制造、成品服务及合并门分别闭合完整湿干实物及相关元素，包含全部气体组分、游离结构反应水、耗氧、载体产品回流、在制成品废物和资产。独立物种证据与元素闭合分开，一个残差不能解两个未知。不在组分外叠加总空气，经济份额不缩减实物存发。 | `jrc-ceramic-bref-2007` |
| b_identity | 每项绑定交换 | 使用建议UUID时每卡完整限制强制适用。核对全名、同义词、备注、CAS、固定牌号路线形态地域媒体类型和全部属性。物理相容宽族仍需真实主证据终端限定，分类孤立错误另披露。硬冲突须另定身份，核心参考不得绕过。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整餐盘制造 | required | 规定原料到首次放行干压硬质瓷路线 | 汇总前景保留接收制浆喷雾压制干燥素烧釉制釉烧磨抛试验治理资产分账，内部抵消 | finished_plate; Q |
| service | 原批次观测服务 | required | 仅H内真实放行后操作 | 原Qc独立增量负荷及成品包材总实物账 | Qc; H |

除参考成品外每卡均以真实存在为条件，缺数据不是不存在。这些是独立具名交换，不是选项集合。每真实操作保留分账，数据使用前补真实未列原子材料物种。卡数量与协议汇总引用第8节同次单位结果，原采集不得预先相除。

### 过程：完整餐盘制造（`manufacture`）

#### 输入

##### 产品流

###### 未煅烧瓷土（`kaolin`）

坯体或釉料所用整份外购未煅烧高岭质瓷土。记录矿物组成、选矿、含水、颗粒形态和检测。仅矿名不能证明此完整供货瓷土；天然资源开采流不是外购产品。

- 选定流：未煅烧瓷土
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 长石助熔原料（`feldspar`）

整份外购钾/钠长石矿物，全球工厂生产混合、来料原料。原生来源说明用于电瓷坯体但无用量；物理相容的矿物身份不将该用途或任何配方及供方转为本餐盘数据。另记碱金属/矿物组成、颗粒状态、含水和实际供方。

- 选定流：长石 `093a520f-0386-4da6-bcb1-16928df4efbf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 晶质石英粉（`quartz`）

整份外购坯釉用晶质石英粉；独立记录粒径与可吸入组分。不得绑定石英坩埚、熔融或沉淀二氧化硅、资源砂及纳米粉路线。

- 选定流：晶质石英粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚乙烯醇结合剂（`pva`）

仅实际使用时记录PVOH聚合物。原生产品是聚乙烯醇，不是聚醋酸乙烯酯胶或单体。记录牌号、醇解度、干品/溶液供货状态和完整外购制剂；聚合物/水检测子账不得再次采购。厂内配液逐记外购干聚合物及真实水、能耗和损失。

- 选定流：聚乙烯醇 `cea707dd-98a3-451d-bc43-2dcc145091e9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 硬脂酸压制润滑剂（`stearic`）

仅记录真实采购的整份硬脂酸牌号或制剂。二硬脂酸镉是不同盐类，不能替代。独立取证保留和热分解部分。

- 选定流：硬脂酸压制润滑剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 纤维素胶釉料结合剂（`cmc`）

仅实际使用纯度至少95%的自由流动CMC粉末、工厂生产混合和化学改性纤维素路线时绑定。原生同义词含羧甲基纤维素钠；绑定前核实盐型、取代度、含水与供方化学。原生评论不赋予药品或食品批准。与粉末/纯度身份不符的稀溶液应按完整供货另保留未定身份。

- 选定流：羧甲基纤维素 `ab3e2bac-18e0-427b-ad88-91499c3bc367`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 硅酸钠溶液解凝剂（`silicate`）

真实整份外购水玻璃溶液，实测模数、固含与载水。采用真实整份溶液身份，不假设纯固体或仅活性质量。厂内配制逐记真实外购固体及水，不再另购一次整份溶液。

- 选定流：硅酸钠溶液解凝剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 透明瓷釉熔块（`frit`）

仅真实外购玻璃质瓷釉熔块组件，保留完整化学和上游熔块制造。厂内制釉仍在边界；整份外购釉不能冒充熔块，也不得重复采购其成分。真实非熔块釉原料逐一记录。

- 选定流：透明瓷釉熔块
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 烧成陶瓷厂标油墨（`marking_ink`）

仅未装饰白瓷上真实小型厂标。含颜料、熔块、结合剂与载体的完整油墨只采购一次，保留物种子账。UV固化纸印油墨不相容。艺术釉下/釉上图案及装饰烧成排除，实际存在须重审。

- 选定流：烧成陶瓷厂标油墨
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 处理后的工艺用水供给（`water`）

原生为经处理的工业工艺用水产品；记录真实处理、供货点、水质与供方。只采购外部补水，回用泥浆/洗水内部转移抵消。整份制剂已有的载水只进子账，不再供给一次。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 计量电网电力（`electricity`）

原生交流电仅限中国1–35千伏用户端电网平均消费组合；其他地域、电压或供电需另定身份。保留净热值的广延能量/MJ，计量kWh以3.6换算。此身份不提供电网年份、供方或用量。球磨、喷雾干燥驱动、压缩空气、成形、后整理、控制和真实待机负荷只计一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 供给的气态天然气燃料混合物（`natural_gas`）

喷雾造粒、预干燥及两次烧成所用真实天然气。保留规定温压组分下的实测积分体积m3，并独立建立质量及热量子账。不得用纯甲烷、他厂固定组分气或假设外购热接口替代整份真实燃料。燃烧能量和物种采用真实场址记录，不设纯甲烷或默认热值。

- 选定流：供给的气态天然气燃料混合物
- 流属性/单位：Volume / m3
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 外部工艺蒸汽供给（`steam`）

仅真实蒸汽跨厂门时纳入。记录温压、干度、载体质量、进回焓及供方水能约定，约定供给只购一次。不得默认为窑炉燃料或虚构锅炉。

- 选定流：外部工艺蒸汽供给
- 流属性/单位：Energy / MJ
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 外部热水供热（`heat`）

仅真实外部热水供热，另测载体质量和回水温度/焓。内部窑热回收抵消，不形成第二次外购。

- 选定流：外部热水供热
- 流属性/单位：Energy / MJ
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 外部冷却补水（`cooling_water`）

仅真实单独计量的处理液态换热补水，不是内部循环总量。明确外部产品回水及供方水核算约定。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 燧石研磨卵石（`flint_media`）

仅真实使用的整份燧石研磨卵石。普通天然卵石不能证明所选硅质矿物和磨耗适用性。分别记录新旧实物库存、替换、进入泥浆的磨耗及报废磨料。

- 选定流：燧石研磨卵石
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚氨酯等静压膜片（`press_membrane`）

真实模压弹性膜片的几何、化学和安装液压边界；流延热塑性PU薄膜不是此成形部件。新旧膜片实物收废与当期服务负荷分开。

- 选定流：聚氨酯等静压膜片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 机加工钢压模（`steel_die`）

真实完整机加工模具，不是钢板原料。记录钢号、完成几何、维修、接收在装报废存量和真实使用，不规定寿命。

- 选定流：机加工钢压模
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 堇青石窑具垫板（`kiln_furniture`）

仅真实堇青石垫板；完整外购定形陶瓷与其矿物原料、其他窑具及附着物分开。不设默认循环次数，记录换废和使用。

- 选定流：堇青石窑具垫板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 天然气陶瓷烧成窑（`kiln_asset`）

真实完整窑炉资产或单独确定的维修部件。实物存量及在装流体与有依据的当期继承服务负荷分开，不按每kg一整窑。

- 选定流：天然气陶瓷烧成窑
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 陶瓷粉料等静压机（`press_asset`）

真实完整压机及规定组件、流体范围和使用。接收、留存、维修、退役质量与当期服务归属分开，不设寿命或猜机器重。

- 选定流：陶瓷粉料等静压机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 陶瓷泥浆喷雾干燥塔（`dryer_asset`）

真实喷雾干燥设备存量及经证实的当期服务负荷；运行燃料和电力另计。记录真实修理、附着物和水，不按每kg一整塔。

- 选定流：陶瓷泥浆喷雾干燥塔
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 固结金刚石磨轮（`diamond_wheel`）

底足磨削所用真实完成磨轮及结合剂、磨料组成，不能替代为散金刚石或钢件。记录换耗和湿磨转移。

- 选定流：固结金刚石磨轮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚酯除尘滤袋（`filter_bag`）

真实制成的除尘滤袋及滤材、整理状态；纤维或PE包装袋不能代替。区分截留尘、耗损滤材和处置，避免重复。

- 选定流：聚酯除尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 纤维素擦拭海绵（`sponge`）

底足去釉所用真实单独外购海绵，记录留存釉、水及磨耗报废。洗水与真实清洗化学品分别记录。

- 选定流：纤维素擦拭海绵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 定形高铝耐火砖（`refractory`）

仅真实烧结定形铝硅耐火砖，Al2O3大于48%、铝土矿/高岭质原料和原生1350–1450摄氏度烧成范围；不是原黏土或铝碳砖。原生黏土分类是元数据缺陷，不改变已制造实物身份。接收、维修、退废与当期服务分开，不设窑寿命。

- 选定流：定型高铝耐火砖 `773fbca7-3575-483c-b38d-c017771979b3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 液压系统流体（`hydraulic_oil`）

真实矿物或合成基础油加添加剂的完整液压流体。原生参考为Volume/m3；保留真实计量体积，并以规定温度独立测得的该流体密度闭合质量。在机留存油是库存，不是损失；整机已含流体不得再次采购。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_asset；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 熟石灰吸收剂（`lime`）

仅真实烟气或废水治理所用完整氢氧化钙吸收剂牌号。供货含水、化学消耗、反应物和废吸收剂质量分开；总氟不能证明HF。

- 选定流：熟石灰吸收剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 固态聚合氯化铝混凝剂（`pacl`）

仅真实水处理固态PAC，CAS1327-41-9，黄色水溶羟基氯化铝工厂产品。记录完整牌号、盐基度、含水及真实投加、留存和污泥；稀商业溶液应另定整份相容身份，不假定仅活性量。

- 选定流：聚合氯化铝 `f1b285a5-2733-450c-af08-69e960b671ee`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 阳离子聚丙烯酰胺絮凝剂（`pam`）

仅真实阳离子PAM给水/污泥处理产品，工厂生产混合，未指定具体上游工艺。记录整份形态、浓度、电荷、牌号与供方；非离子或阴离子PAM不同。厂内稀释保留真实水能及损失。

- 选定流：阳离子聚丙烯酰胺 `ccf600a4-35af-45d6-95b3-cb58590a579f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_material；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 入厂公路货运（`inbound_freight`）

仅实际运输符合原生30吨柴油公路货运时绑定，保留路线、载量、空返及吨公里。原生参考kg*km，所选t*km满足1 t*km=1000 kg*km；t km是省略乘号的同义拼法。其他车型/方式需另定流。供方已含运输时不得再计负荷。

- 选定流：公路货物运输服务 `9425f2bf-e734-4884-be1b-645473a3e82d`
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t km
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

##### 基本流

###### 大气中的氮气（`air_in_n2`）

真实燃烧、干燥或通风空气总组分，CAS 7727-37-9，独立测湿度、组分、体积和状态。不假设外购工业气，不在这些组分外再加总空气。 原生为分子二氮N2，CAS7727-37-9，基本流Mass/kg，大气可再生元素资源。液化同义词不将其变为采购液氮；不得替代不含N2总氮、氧化亚氮或活性氮。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 氧气 (`air_in_o2`)

真实燃烧、干燥或通风空气总组分，CAS 7782-44-7，独立测湿度、组分、体积和状态。不假设外购工业气，不在这些组分外再加总空气。 原生CAS7782-44-7分子O2为来自空气的可再生元素资源，Mass/kg；只用于实际气态环境空气组分。液体、离子及同位素别名不授权这些形态、外购工业气体或固定空气比例。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 氩 (`air_in_ar`)

真实燃烧、干燥或通风空气总组分，CAS 7440-37-1，独立测湿度、组分、体积和状态。不假设外购工业气，不在这些组分外再加总空气。 原生CAS7440-37-1天然非放射性氩为来自空气的可再生元素资源，Mass/kg。Ar41/Ar40别名噪声不建立同位素或活度，真实空气气态、状态及组成需独立实测。不是外购分离气体、默认空气比例或拟合残差。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 大气水蒸气（`air_in_h2o`）

真实燃烧、干燥或通风空气总组分，CAS 7732-18-5，独立测湿度、组分、体积和状态。不假设外购工业气，不在这些组分外再加总空气。

- 选定流：大气水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 大气中的二氧化碳（`air_in_co2`）

真实燃烧、干燥或通风空气总组分，CAS 124-38-9，独立测湿度、组分、体积和状态。不假设外购工业气，不在这些组分外再加总空气。

- 选定流：大气中的二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

#### 输出

##### 产品流

###### 首次质量放行的施釉餐盘（`finished_plate`）

原生日用陶瓷产品含餐具套装同义词、工厂生产混合和Mass/kg；未指定CAS、固定牌号、成形路线或供货地域。仅用于主证据支持的一个真实设计的未装饰施釉硬质瓷餐盘，喷雾粉料干压、干燥、素烧、施釉、釉烧、底足磨抛和分选至唯一首次质量放行。原生CPC37299不推翻物理餐具身份。原生炊具营销及条件食品接触文字不能证明食品批准、不粘性能、尺寸、单件重或寿命。不得替代茶具套装、艺术陈设、卫生瓷、骨瓷、炻器、陶器或买已烧成品再包装。

- 选定流：日用陶瓷 `13201762-198b-406a-8596-e66564114ff1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：Fixed value (`fixed_value`)
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：Identity reference (`identity_reference`)
- 采集协议：`cp_release`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 单独验收的低等级瓷餐盘（`lower_grade_plate`）

原生日用陶瓷产品含餐具套装同义词、工厂生产混合和Mass/kg；未指定CAS、固定牌号、成形路线或供货地域。仅用于主证据支持的一个真实设计的未装饰施釉硬质瓷餐盘，喷雾粉料干压、干燥、素烧、施釉、釉烧、底足磨抛和分选至唯一首次质量放行。原生CPC37299不推翻物理餐具身份。原生炊具营销及条件食品接触文字不能证明食品批准、不粘性能、尺寸、单件重或寿命。不得替代茶具套装、艺术陈设、卫生瓷、骨瓷、炻器、陶器或买已烧成品再包装。 仅同一物理日用陶瓷族中真实可售的低等级品，finished_plate的完整原生限制同样适用。其真实等级/状态不同，不是所选参考，绝不入Q。独立确认共过程门与归属，缺陷或收款不自动形成共产品。

- 选定流：日用陶瓷 `13201762-198b-406a-8596-e66564114ff1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_release；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 外返液态蒸汽凝结水（`condensate_return`）

仅真实外部产品回流，实测载体质量、温度、压力/焓与污染。不默认为废水或重复蒸汽供方水约定，无蒸汽则不假设凝结水。

- 选定流：外返液态蒸汽凝结水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 外返换热水（`cooling_return`）

真实规定状态的外返冷却/热水产品，保留载体质量和焓，不虚构回路，内部循环抵消。

- 选定流：外返换热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

##### 废物流

###### 未烧瓷坯废料（`green_reject`）

真实向外部接收方转移的未烧修坯料/不合格坯，测湿干组成；内部回坯抵消但真实再处理负荷保留。

- 选定流：未烧瓷坯废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 素烧瓷废品（`biscuit_reject`）

真实首次烧成后的素烧废品，与生坯和釉烧废品分开，测留存干物、游离/结构水和化学状态。

- 选定流：素烧瓷废品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 釉烧瓷废品（`glost_reject`）

首次放行前真实碎损/不合格施釉瓷，不入Q。记录完整釉坯和去向，回用再生不自动抵扣。

- 选定流：釉烧瓷废品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 截留瓷坯粉尘（`body_dust`）

真实单独截留并外运的干坯尘，不是环境排尘或内部回用粉。总质量附检测、矿物和含水。

- 选定流：截留瓷坯粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 制釉污泥（`glaze_sludge`）

真实整份外送处理制釉污泥，记录固体、水、化学及去向；同份污泥物种子账不得又作直接排放。

- 选定流：制釉污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 瓷底足湿磨浆料（`grinding_slurry`）

真实整份外送湿磨浆，磨料、坯釉及留水独立检测；不同处理或污染的流分开。

- 选定流：瓷底足湿磨浆料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 陶瓷废水处理滤饼（`treatment_sludge`）

真实末端处理滤饼，含真实药剂、固体、留水及独立接收方。进入本厂该处理的制釉/湿磨泥是内部转移，不再作第二份外部废物。

- 选定流：陶瓷废水处理滤饼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 外送处理的陶瓷工艺废水（`wastewater`）

真实整份外送废水及接收方，保留湿质量、体积、密度、溶解/悬浮检测与不确定性。不再把整份水和物种计为直排。COD/AOX或总硼不是具体分子。

- 选定流：外送处理的陶瓷工艺废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 废熟石灰吸收剂（`spent_sorbent`）

真实单独卸出的吸收剂，测反应盐、水和尘，不用一项泛总废料；不得仅由总氟假设CaF2。

- 选定流：废熟石灰吸收剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 废聚酯除尘滤袋（`spent_filter`）

真实完整废滤袋，其附着固体、水另作子账；仍附着的尘不得又处置一次。

- 选定流：废聚酯除尘滤袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 废聚氨酯压制膜片（`spent_membrane`）

真实退役模压部件及附着油和固体，不用PU生产薄膜或树脂替代。

- 选定流：废聚氨酯压制膜片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 废液压系统油（`spent_oil`）

真实离机离厂污染油，保留该油密度、水和固体污染及期末在装流体，不默认零损耗。

- 选定流：废液压系统油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 废高铝耐火砖（`spent_refractory`）

真实退役砖及留釉尘水，不重叠的窑炉资产实物质量与当期服务归属分开。

- 选定流：废高铝耐火砖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 废堇青石窑具垫板（`spent_setter`）

真实退役垫板及污染和去向，不混耐材及金属废物。

- 选定流：废堇青石窑具垫板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 废固结金刚石磨轮（`spent_wheel`）

真实退役磨轮及留存磨料结合剂，已入湿磨浆的磨耗不得二次报废。

- 选定流：废固结金刚石磨轮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 报废钢压模（`scrap_die`）

真实退役成形压模及污染、总实物质量和下游回收，不是资产实物按经济份额缩量。

- 选定流：报废钢压模
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

###### 废纤维素擦拭海绵（`spent_sponge`）

真实完整污染海绵，留釉水进子账，明确接收处理。

- 选定流：废纤维素擦拭海绵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_residue；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`jrc-ceramic-bref-2007`

##### 基本流

###### 二氧化碳（`air_co2`）

仅实际存在的气态二氧化碳，CAS 124-38-9，排入真实烟囱/无组织空气分区：燃料和碳酸盐/有机物来源各自独立约束，不能用碳残差冒充。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。

- 选定流：二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 一氧化碳（`air_co`）

仅实际存在的气态一氧化碳，CAS 630-08-0，排入真实烟囱/无组织空气分区：真实控制后CO计量，不是总有机碳。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。

- 选定流：一氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 一氧化氮 (`air_no`)

仅实际存在的气态一氧化氮，CAS 10102-43-9，排入真实烟囱/无组织空气分区：独立NO物种，NOx按NO2折算不足以证明。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生CAS10102-43-9 NO气体，仅未细分空气Mass/kg。HNO/亚硝基氢别名不作采用化学；不是NO2、亚硝酸根或以NO2计NOx总量，须真实独立分子分种，不设来源因子。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 二氧化氮（`air_no2`）

仅实际存在的气态二氧化氮，CAS 10102-44-0，排入真实烟囱/无组织空气分区：独立NO2物种，不得把全部NOx归它。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。

- 选定流：二氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 二氧化硫（`air_so2`）

仅实际存在的气态二氧化硫，CAS 7446-09-5，排入真实烟囱/无组织空气分区：独立SO2物种，不是总SOx当量。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生为CAS7446-09-5二氧化硫排入未特指空气基本流，Mass/kg。仅此分子及相容未特指分区，不是SOx、外购化学品、液体亚硫酸盐、其他空气媒体或长期排放。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 氟化氢 (`air_hf`)

仅实际存在的气态氟化氢，CAS 7664-39-3，排入真实烟囱/无组织空气分区：独立真实气态HF；按HF报告的总气态氟只是当量。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生CAS7664-39-3 HF，仅未细分空气Mass/kg。酸、溶液、同位素、元素别名不授权整股洗涤液、氟盐或以HF计总氟当量；实际HF气体/相态和水分独立实测。

- 选定流：氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 氯化氢 (`air_hcl`)

仅实际存在的气态氯化氢，CAS 7647-01-0，排入真实烟囱/无组织空气分区：真实气态HCl，不是总氯离子或氯当量。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生CAS7647-01-0 HCl，仅未细分空气Mass/kg。水溶酸、清洁剂、试剂及同位素别名不授权其整份制剂、总氯、盐或延迟/长期介质。只导出独立实测HCl分子质量与真实相态，不将伴随水算作HCl。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 苯 (`air_benzene`)

仅实际存在的气态苯，CAS 71-43-2，排入真实烟囱/无组织空气分区：真实观察到的结合剂分解苯；VOC/COD/TOC不证明苯。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生CAS71-43-2分子苯气体，仅当期未细分空气Mass/kg。真实分种苯不是VOC/TOC总量、其他芳香化合物、供货溶剂制剂或室内/长期释放；同义词不建立纯苯采购或排放因子。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 甲烷（`air_methane`）

仅实际存在的气态甲烷，CAS 74-82-8，排入真实烟囱/无组织空气分区：具体未燃甲烷及来源，不是整份天然气或总烃。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。

- 选定流：甲烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 水蒸气 (`air_h2o`)

仅实际存在的气态水蒸气，CAS 7732-18-5，排入真实烟囱/无组织空气分区：一份真实总水汽，入口湿气、游离水、脱羟水和燃烧反应水各有来源子账，不重复作总出口。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生CAS7732-18-5 H2O蒸气，当期未细分空气Mass/kg；冰、液体、重水和离子别名不授权这些形态。只保留一项实测总蒸气，并独立保留环境、游离、结构及反应来源子账；不重复子项、不用烧失量当水因子或以同一残差拟合水和碳酸盐两未知。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 氮气（`air_n2`）

仅实际存在的气态氮气，CAS 7727-37-9，排入真实烟囱/无组织空气分区：真实总排氮气而非NOx，独立约束干湿状态及气量。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生为分子二氮N2，CAS7727-37-9，基本流Mass/kg，排未特指空气。液化同义词不将其变为采购液氮；不得替代不含N2总氮、氧化亚氮或活性氮。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 氧 (`air_o2`)

仅实际存在的气态氧气，CAS 7782-44-7，排入真实烟囱/无组织空气分区：真实未反应总氧和测得耗氧，不只氧校正百分比。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生CAS7782-44-7分子O2为真实当期未细分空气排放，Mass/kg；总实物出口独立于资源进口。液体、离子和同位素别名不授权这些形态，不用长期/室内介质，也不按经济份额缩气体质量。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 氩 (`air_ar`)

仅实际存在的气态氩气，CAS 7440-37-1，排入真实烟囱/无组织空气分区：气体组成和积分体积支持的真实总排氩。不由BREF历史案例推断物种或零值。选身份前保留相态、媒体、来源。 原生CAS7440-37-1天然非放射性Ar为当期未细分空气排放，Mass/kg；总穿透出口独立于资源入口。Ar41/Ar40别名不授权同位素/活度假定、放射性稀有气体流、长期/室内释放或整股空气重复。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 排空气的未定物种陶瓷颗粒物（`air_dust`）

真实规定空气分区和粒径切割的互不重叠实测颗粒物。此为组成未定的物理粉尘交换，不从总尘推石英或金属分子。另鉴定颗粒物种应替换相应部分，不重复相加。 原生基本流为粒径与空气子媒体未特指颗粒物，不固定化学组成、烟囱高度、粒径分布、治理技术或LCIA因子。熟料来源例及数值不采用。报告实际已特指粒径或媒体时需合适不同原生身份。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_air；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`jrc-ceramic-bref-2007`

###### 排向空气的废热（`heat_air`）

真实未回收的空气显潜热，明确焓基准和实测热状态。能量为MJ；载体和物种质量独立，不再作热质量相加。

- 选定流：排向空气的废热
- 流属性/单位：Energy / MJ
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_utility；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`jrc-ceramic-bref-2007`

###### 排入受纳淡水的液态水（`water_water`）

仅真实单独直排具名受纳淡水，独立确认排入受纳淡水的液态水分析身份、相态媒体和积分水量。不是整份外送处理废水；元素总量不自动成为离子或盐，绑定前须核验化学CAS。

- 选定流：排入受纳淡水的液态水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_water；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`jrc-ceramic-bref-2007`

###### 排入淡水的溶解钙离子（`water_calcium`）

仅真实单独直排具名受纳淡水，独立确认排入淡水的溶解钙离子分析身份、相态媒体和积分水量。不是整份外送处理废水；元素总量不自动成为离子或盐，绑定前须核验化学CAS。

- 选定流：排入淡水的溶解钙离子
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_water；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`jrc-ceramic-bref-2007`

###### 排入淡水的溶解硫酸根（`water_sulfate`）

仅真实单独直排具名受纳淡水，独立确认排入淡水的溶解硫酸根分析身份、相态媒体和积分水量。不是整份外送处理废水；元素总量不自动成为离子或盐，绑定前须核验化学CAS。

- 选定流：排入淡水的溶解硫酸根
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_water；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`jrc-ceramic-bref-2007`

###### 排入淡水的溶解氯离子（`water_chloride`）

仅真实单独直排具名受纳淡水，独立确认排入淡水的溶解氯离子分析身份、相态媒体和积分水量。不是整份外送处理废水；元素总量不自动成为离子或盐，绑定前须核验化学CAS。

- 选定流：排入淡水的溶解氯离子
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_water；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`jrc-ceramic-bref-2007`

###### 排入淡水的溶解氟离子（`water_fluoride`）

仅真实单独直排具名受纳淡水，独立确认排入淡水的溶解氟离子分析身份、相态媒体和积分水量。不是整份外送处理废水；元素总量不自动成为离子或盐，绑定前须核验化学CAS。

- 选定流：排入淡水的溶解氟离子
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_water；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`jrc-ceramic-bref-2007`

### 过程：原批次服务（`service`）

#### 输入

##### 产品流

###### 原批次包装仓储电力（`service_electricity`）

规定H内原批次Qc真实包装、仓储、搬运、退回服务增量；仅中国1–35kV用户端电网平均交流电，保留能量/MJ、kWh的3.6换算和真实供方年份；其他地域电压须换身份。不得用当期制造分母或重复共用电表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_service；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 原批次清洗水（`service_water`）

仅放行后清洗退回处理真实外部处理工业工艺补水。原制造留在批次，不造Q，不重复制剂或循环水；记录水质、处理、供给点和供方。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_service；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 原批次发运与退回公路货运（`service_freight`）

H内Qc单独声明的真实物流，仅采用原生30吨柴油公路货运，保留真实载空各段和吨公里（1 t*km=1000原生kg*km，t km为等价拼法），不重复供方货运。其他运输另设行。总发运和退回不是净产量。

- 选定流：公路货物运输服务 `9425f2bf-e734-4884-be1b-645473a3e82d`
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t km
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_service；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 瓦楞运输纸箱（`pack_carton`）

一只完整瓦楞运输箱，不是声明运输中不可继续使用的折叠纸板盒。须核对完成纸箱的实物形态、耐用性和实际运输角色；供方制造、印刷和胶按真实纸箱组成只含一次。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 实心纸板餐盘隔片（`pack_divider`）

一片组成已知的真实纸板隔片，不是电工隔膜纸或混合包装部件。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。

- 选定流：实心纸板餐盘隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚乙烯包覆薄膜（`pack_film`）

真实完整PE薄膜，CAS9002-88-4，工厂生产混合；核实牌号、厚度、添加剂和供方。原生箱包分类是独立元数据错误，PE薄膜实物与CAS一致；PET、PU薄膜或原树脂不同。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 木质运输托盘（`pack_pallet`）

原生木托盘族中真实完整工厂制造的便携承载平台。规定设计、木材处理、紧固件、含水、所有权，制造只含一次；不假设欧标或围板质量。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚丙烯包装带（`pack_strap`）

一根真实PP运输包装带；树脂切片、编织袋、绳及PP废料不能证明完成包装带。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。

- 选定流：聚丙烯包装带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 淀粉基封箱胶（`pack_glue`）

真实整份工厂天然淀粉包装胶产品，记录固水、化学及供方；淀粉水检测是子账，不重复购买。排除合成热熔/压敏胶。供方纸箱已含胶不得再次采购。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。

- 选定流：淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 外部往返木托盘（`pallet_return_received`）

原生木托盘族中真实完整工厂制造的便携承载平台。规定设计、木材处理、紧固件、含水、所有权，制造只含一次；不假设欧标或围板质量。 真实外部返入、所有权和历史负荷与新采购分开，明确留水、破损和修理增量，内部复用抵消。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 退回瓷餐盘（`plates_returned`）

原生日用陶瓷产品含餐具套装同义词、工厂生产混合和Mass/kg；未指定CAS、固定牌号、成形路线或供货地域。仅用于主证据支持的一个真实设计的未装饰施釉硬质瓷餐盘，喷雾粉料干压、干燥、素烧、施釉、釉烧、底足磨抛和分选至唯一首次质量放行。原生CPC37299不推翻物理餐具身份。原生炊具营销及条件食品接触文字不能证明食品批准、不粘性能、尺寸、单件重或寿命。不得替代茶具套装、艺术陈设、卫生瓷、骨瓷、炻器、陶器或买已烧成品再包装。 仅H内真实批次总实物移动，不是第二次首次放行。记录实测退回状态、水、污染、损失和原制造负荷向量，发运与退回质量不得假设相等。

- 选定流：日用陶瓷 `13201762-198b-406a-8596-e66564114ff1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_service；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 木托盘维修板材 (`pallet_repair_wood`)

仅真实独立外购用于托盘维修的具体木板材，记录实测树种/处理/干木质量及自由/吸附水、紧固件/胶是否另供、供方和归属；不是一只完整托盘，也不复用完整托盘UUID。若已含在另一整包装供货中仅作子账。维修实物增量与原批次服务负荷分开，不假定维修或寿命。

- 选定流：木托盘维修板材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 瓦楞运输纸箱 (`inbound_carton`)

一只完整瓦楞运输箱，不是声明运输中不可继续使用的折叠纸板盒。须核对完成纸箱的实物形态、耐用性和实际运输角色；供方制造、印刷和胶按真实纸箱组成只含一次。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际随其他供货附带到厂I，含已在供货价格内的包材，不得因供应商已含成本或期末库存含该质量而删除真实入流。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 瓦楞运输纸箱 (`returned_in_carton`)

一只完整瓦楞运输箱，不是声明运输中不可继续使用的折叠纸板盒。须核对完成纸箱的实物形态、耐用性和实际运输角色；供方制造、印刷和胶按真实纸箱组成只含一次。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回收讫ER，独立于新购和供应附带I。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 实心纸板餐盘隔片 (`inbound_divider`)

一片组成已知的真实纸板隔片，不是电工隔膜纸或混合包装部件。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际随其他供货附带到厂I，含已在供货价格内的包材，不得因供应商已含成本或期末库存含该质量而删除真实入流。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：实心纸板餐盘隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 实心纸板餐盘隔片 (`returned_in_divider`)

一片组成已知的真实纸板隔片，不是电工隔膜纸或混合包装部件。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回收讫ER，独立于新购和供应附带I。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：实心纸板餐盘隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚乙烯包覆薄膜 (`inbound_film`)

真实完整PE薄膜，CAS9002-88-4，工厂生产混合；核实牌号、厚度、添加剂和供方。原生箱包分类是独立元数据错误，PE薄膜实物与CAS一致；PET、PU薄膜或原树脂不同。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际随其他供货附带到厂I，含已在供货价格内的包材，不得因供应商已含成本或期末库存含该质量而删除真实入流。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚乙烯包覆薄膜 (`returned_in_film`)

真实完整PE薄膜，CAS9002-88-4，工厂生产混合；核实牌号、厚度、添加剂和供方。原生箱包分类是独立元数据错误，PE薄膜实物与CAS一致；PET、PU薄膜或原树脂不同。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回收讫ER，独立于新购和供应附带I。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 木质运输托盘 (`inbound_pallet`)

原生木托盘族中真实完整工厂制造的便携承载平台。规定设计、木材处理、紧固件、含水、所有权，制造只含一次；不假设欧标或围板质量。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际随其他供货附带到厂I，含已在供货价格内的包材，不得因供应商已含成本或期末库存含该质量而删除真实入流。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚丙烯包装带 (`inbound_strap`)

一根真实PP运输包装带；树脂切片、编织袋、绳及PP废料不能证明完成包装带。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际随其他供货附带到厂I，含已在供货价格内的包材，不得因供应商已含成本或期末库存含该质量而删除真实入流。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：聚丙烯包装带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚丙烯包装带 (`returned_in_strap`)

一根真实PP运输包装带；树脂切片、编织袋、绳及PP废料不能证明完成包装带。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回收讫ER，独立于新购和供应附带I。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：聚丙烯包装带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 淀粉基封箱胶 (`inbound_glue`)

真实整份工厂天然淀粉包装胶产品，记录固水、化学及供方；淀粉水检测是子账，不重复购买。排除合成热熔/压敏胶。供方纸箱已含胶不得再次采购。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际随其他供货附带到厂I，含已在供货价格内的包材，不得因供应商已含成本或期末库存含该质量而删除真实入流。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 淀粉基封箱胶 (`returned_in_glue`)

真实整份工厂天然淀粉包装胶产品，记录固水、化学及供方；淀粉水检测是子账，不重复购买。排除合成热熔/压敏胶。供方纸箱已含胶不得再次采购。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回收讫ER，独立于新购和供应附带I。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

##### 基本流

###### 包装吸收的环境水蒸气 (`service_humidity_in`)

只有包装仓储期间真实由环境空气吸收的H2O水蒸气资源，CAS7732-18-5；独立实测湿度、状态与水摄取质量，不用固定空气比例或次级密度。与已含在收货包材/维修木/外部工艺补水中的水互斥，不因留在期末库存而取消真实入流。

- 选定流：包装吸收的环境水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

#### 输出

##### 产品流

###### 瓦楞运输纸箱（`shipped_carton`）

一只完整瓦楞运输箱，不是声明运输中不可继续使用的折叠纸板盒。须核对完成纸箱的实物形态、耐用性和实际运输角色；供方制造、印刷和胶按真实纸箱组成只含一次。 本卡仅记录Qc/H实物闭合所需真实附着/空包装总外运，不是净产品Q、新可售共产品或第二次供方采购。继承包材负荷与真实批次服务归属另记。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 实心纸板餐盘隔片（`shipped_divider`）

一片组成已知的真实纸板隔片，不是电工隔膜纸或混合包装部件。 本卡仅记录Qc/H实物闭合所需真实附着/空包装总外运，不是净产品Q、新可售共产品或第二次供方采购。继承包材负荷与真实批次服务归属另记。

- 选定流：实心纸板餐盘隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚乙烯包覆薄膜（`shipped_film`）

真实完整PE薄膜，CAS9002-88-4，工厂生产混合；核实牌号、厚度、添加剂和供方。原生箱包分类是独立元数据错误，PE薄膜实物与CAS一致；PET、PU薄膜或原树脂不同。 本卡仅记录Qc/H实物闭合所需真实附着/空包装总外运，不是净产品Q、新可售共产品或第二次供方采购。继承包材负荷与真实批次服务归属另记。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 木质运输托盘（`shipped_pallet`）

原生木托盘族中真实完整工厂制造的便携承载平台。规定设计、木材处理、紧固件、含水、所有权，制造只含一次；不假设欧标或围板质量。 本卡仅记录Qc/H实物闭合所需真实附着/空包装总外运，不是净产品Q、新可售共产品或第二次供方采购。继承包材负荷与真实批次服务归属另记。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚丙烯包装带（`shipped_strap`）

一根真实PP运输包装带；树脂切片、编织袋、绳及PP废料不能证明完成包装带。 本卡仅记录Qc/H实物闭合所需真实附着/空包装总外运，不是净产品Q、新可售共产品或第二次供方采购。继承包材负荷与真实批次服务归属另记。

- 选定流：聚丙烯包装带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 淀粉基封箱胶（`shipped_glue`）

真实整份工厂天然淀粉包装胶产品，记录固水、化学及供方；淀粉水检测是子账，不重复购买。排除合成热熔/压敏胶。供方纸箱已含胶不得再次采购。 本卡仅记录Qc/H实物闭合所需真实附着/空包装总外运，不是净产品Q、新可售共产品或第二次供方采购。继承包材负荷与真实批次服务归属另记。

- 选定流：淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 外部往返木托盘（`pallet_return_sent`）

原生木托盘族中真实完整工厂制造的便携承载平台。规定设计、木材处理、紧固件、含水、所有权，制造只含一次；不假设欧标或围板质量。 真实外部返出、所有权和历史负荷与新采购分开，明确留水、破损和修理增量，内部复用抵消。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 总实物发运瓷餐盘（`gross_plates_shipped`）

原生日用陶瓷产品含餐具套装同义词、工厂生产混合和Mass/kg；未指定CAS、固定牌号、成形路线或供货地域。仅用于主证据支持的一个真实设计的未装饰施釉硬质瓷餐盘，喷雾粉料干压、干燥、素烧、施釉、釉烧、底足磨抛和分选至唯一首次质量放行。原生CPC37299不推翻物理餐具身份。原生炊具营销及条件食品接触文字不能证明食品批准、不粘性能、尺寸、单件重或寿命。不得替代茶具套装、艺术陈设、卫生瓷、骨瓷、炻器、陶器或买已烧成品再包装。 仅H内真实批次总实物移动，不是第二次首次放行。记录实测退回状态、水、污染、损失和原制造负荷向量，发运与退回质量不得假设相等。

- 选定流：日用陶瓷 `13201762-198b-406a-8596-e66564114ff1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_service；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 瓦楞运输纸箱 (`returned_out_carton`)

一只完整瓦楞运输箱，不是声明运输中不可继续使用的折叠纸板盒。须核对完成纸箱的实物形态、耐用性和实际运输角色；供方制造、印刷和胶按真实纸箱组成只含一次。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回送出EO，独立于总发运S及废物W。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 实心纸板餐盘隔片 (`returned_out_divider`)

一片组成已知的真实纸板隔片，不是电工隔膜纸或混合包装部件。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回送出EO，独立于总发运S及废物W。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：实心纸板餐盘隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚乙烯包覆薄膜 (`returned_out_film`)

真实完整PE薄膜，CAS9002-88-4，工厂生产混合；核实牌号、厚度、添加剂和供方。原生箱包分类是独立元数据错误，PE薄膜实物与CAS一致；PET、PU薄膜或原树脂不同。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回送出EO，独立于总发运S及废物W。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 聚丙烯包装带 (`returned_out_strap`)

一根真实PP运输包装带；树脂切片、编织袋、绳及PP废料不能证明完成包装带。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回送出EO，独立于总发运S及废物W。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：聚丙烯包装带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

###### 淀粉基封箱胶 (`returned_out_glue`)

真实整份工厂天然淀粉包装胶产品，记录固水、化学及供方；淀粉水检测是子账，不重复购买。排除合成热熔/压敏胶。供方纸箱已含胶不得再次采购。 本材料逐一保留互不重叠的期初末空包材、附着在制、附着成品及可复用库存、外购、外部返入、总实物发运、外返与废物。内部复用抵消；总实物量不按经济份额缩减。配置或实物不同另设池及行。 实际外部退回送出EO，独立于总发运S及废物W。 仅本具体材料的真实总实物流，保留所有权及原批次Qc/H；不是新采购、净发运或新联产品。供方已含胶/印刷/水是整包装子账，不另购或重复质量；真实独立部件与整包装母子质量/负荷互斥。

- 选定流：淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`

##### 废物流

###### 废弃瓦楞运输纸箱（`waste_carton`）

真实整份废弃瓦楞运输纸箱，记录组成、污染、接收方和留水，不是总发运量或内部回用包装。

- 选定流：废弃瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`

###### 废弃实心纸板餐盘隔片（`waste_divider`）

真实整份废弃实心纸板餐盘隔片，记录组成、污染、接收方和留水，不是总发运量或内部回用包装。

- 选定流：废弃实心纸板餐盘隔片
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`

###### 废弃聚乙烯包覆薄膜（`waste_film`）

真实整份废弃聚乙烯包覆薄膜，记录组成、污染、接收方和留水，不是总发运量或内部回用包装。

- 选定流：废弃聚乙烯包覆薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`

###### 废弃木质运输托盘（`waste_pallet`）

真实整份废弃木质运输托盘，记录组成、污染、接收方和留水，不是总发运量或内部回用包装。

- 选定流：废弃木质运输托盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`

###### 废弃聚丙烯包装带（`waste_strap`）

真实整份废弃聚丙烯包装带，记录组成、污染、接收方和留水，不是总发运量或内部回用包装。

- 选定流：废弃聚丙烯包装带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`

###### 废弃淀粉基封箱胶（`waste_glue`）

真实整份废弃淀粉基封箱胶，记录组成、污染、接收方和留水，不是总发运量或内部回用包装。

- 选定流：废弃淀粉基封箱胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`

###### 放行后破损施釉瓷餐盘（`service_breakage`）

H内真实破损品及退回、返工历史保留在实物服务平衡和原批次负荷中，不追溯抹去Q或创造新制造单位。

- 选定流：放行后破损施釉瓷餐盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_service；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`jrc-ceramic-bref-2007`

###### 外送处理的放行后清洗废水（`service_wastewater`）

真实整份外送清洗废水及载体、污染物和接收方，实测新增水及损失；不复制工厂废水因子或再给该转移加直排溶解物。

- 选定流：外送处理的放行后清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_service；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`jrc-ceramic-bref-2007`

###### 维修移除废木托盘板 (`removed_pallet_wood`)

实际维修移除的旧木板，按真实含水/污染/干木及去向独立称量；不是全部托盘报废，也不重复W或另一已记录出口。材料再用/出售须按真实Product而非自动废物或信用处理。

- 选定流：维修移除废木托盘板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`

##### 基本流

###### 水蒸气 (`service_vapour_out`)

只记录包装维修/仓储真实释出的分子H2O蒸气，CAS7732-18-5，原生当期未细分空气Mass/kg。实测蒸发水，不把湿重残差同时当木损失；不重复其他已记出口携水，也不把冰/液体/重水同义词当授权。不是厂内烧成蒸气，归原Qc/H的实际服务。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行仅引用第8节同一次最终商，原分子保留于cp_pack；不得再次相除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：Reference flow (`reference_flow`)
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：`jrc-ceramic-bref-2007`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_goal | 归因清单 | 仅对规定未装饰干压硬质瓷餐盘制造及单独观测原批次服务，在有依据归因研究需分配时应用本层次。先独立专属操作、物理细分及有据虚拟细分，直接归属设计特定材料、成形、磨抛试验和批次服务。 | `jrc-ilcd-allocation-2010` |
| a_cause | 每项共享交换 | 对每项剩余共享交换以独立真实运行证据确定决定性物理因果。窑占位、时间、热容或载荷对各交换可能不同；测得质量件数体积不自动具有因果性。失败待机清理及支持负荷保留归属依据。 | `jrc-ilcd-allocation-2010` |
| a_residual | 不可再分共同过程 | 仅真实剩余多功能性采用同期真实共过程门、状态等级数量的市场价值，以证据校正进一步处理包装运输。非正或缺失价值及未决归属保持明确，不任意选物理/经济法、定比例、豁免废物或自动替代信用。逐交换分至各共功能的总和须等于分配前完整清单，含失败及支持负荷。不同低等级不等同参考功能。 | `jrc-ilcd-allocation-2010` |
| a_asset | 回用包装资产 | 内部回收不是新采购或共产品，真实回收负荷及继承向量保留。资产模具耐材流体和包装总实物平衡不作分配缩量。当期资本服务按真实部署使用和有据继承负荷，无固定寿命、每kg整机或废物自动抵扣。门外回收再生需另有方法与接收方。 | `jrc-ilcd-allocation-2010`; `jrc-ceramic-bref-2007` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | 唯一首次质量放行 | raw_records | 唯一件批ID; 设计等级; 放行净餐盘质量; 放行时间状态; 校准秤; 样本件数与同配置净质量; 期初末原料在制成品身份 | 核对质量生产台账，以校准称量真实放行裸餐盘，排全部包装。Q仅汇总首次放行净kg一次，含期末已放行成品；件数是独立测量账，不猜kg/件。 | kg; item | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |
| cp_material | manufacture | 每种完整材料制剂 | raw_records | 行ID; 批次工段; 供货形态牌号; 整份数量; 独立固含检测游离结构水; 配料领用; 期初末原料在制非在制库存; 每流继承向量; 回用损失; 运行状态; receipt_or_consumption_basis; already_applied_raw_stock_adjustment; consumed_opening_material_history | 以校准称量罐量、真实领收存核对和独立检测采集。成功失败清理返工均保留未归一原始量，整份制剂与检测子成分分开。 | kg | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |
| cp_utility | manufacture | 每载体及运输服务 | raw_records | 行ID; 表积分起止或真实速率区间; 原生单位; 温压湿度; 独立组分密度热值基准; 蒸汽干度载体质量进回焓; 供方水能约定; 载空运输段; 待机 | 用工段仪表和供给账单，只积分速率，不重复积分已累积体积。独立确定该物质状态的密度和能量，载体质量与热量并存不重复供方；厂内压缩空气耗电不再采购第二份空气服务。 | kg; m3; MJ; kWh; t km | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |
| cp_asset | manufacture | 每模具资产流体 | raw_records | 资产部件ID; 完整材料形态流体范围; 期初末实物存量; 新旧维修往返退役磨耗含水附着物; 在装油; 真实部署使用; 继承物化负荷向量; 当期服务规则; gross_receipts_returns; measured_new_material_water; removed_old_material; independent_water_loss; parent_child_disjoint_scope | 逐资产组件流体独立平衡实物，总收存退与有据当期服务清单及实际使用归属分开。记录维修新料，不重复完整外购资产或设寿命。 | kg; m3; actual usage unit | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |
| cp_residue | manufacture | 每外部残余流 | raw_records | 行ID; 工段批次; 湿质量; 独立干物水分化学污染; 内外去向; 接收处理; 继承负荷; 附着物种子账; 库存转移 | 分别称量表征每条相容残余流并保留真实转运处理记录。内部处理回收抵消，不重复整份废物废水转移及所含直排。 | kg | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |
| cp_air | manufacture | 每真实空气物种 | raw_records | 行ID; CAS相态; 来源; 干湿基; 气体温压湿度氧校正; 真实速率时间或累积气量; 物种浓度; 检出限; 治理前后; 独立原矿相碳酸盐有机组成; 水氧来源 | 在同状态期间边界匹配物种检测及气量。测游离吸附水不得暗含结构羟基；用独立矿相及经验证H2O/CO2逸出气分析或等效证据区分脱羟、燃烧、碳酸盐贡献。当量指标另存。空气进出组分闭合且不加总空气。 | kg; measured concentration and gas volume | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |
| cp_water | manufacture | 每真实直接水排放 | raw_records | 行ID; 真实受纳体; 积分流量或速率时间; 状态密度; 溶解悬浮身份检出限; 独立化学; 整份外送废水另列 | 匹配真实排水采样和水量，有分析证据才记录具体离子；总元素/COD/AOX不定盐或分子。直排与外送处理边界互斥。 | kg; actual analytical units | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |
| cp_pack | service | 每具体包装材料 | raw_records | 材料配置所有权; 期初末空置在制附着成品附着可复用库存; 新购P; 外返入ER; 总实物发运S; 外返出EO; 废物W; 内复用; 供方含胶印; 继承负荷; 原Qc及H; supplier_attached_inbound_I; repair_material_Radd_Rremove; independently_measured_water_H2Oin_H2Oout; dry_wood; free_absorbed_water; actual_repair_identity_destination | 逐真实材料存池称量，追收总发返；空置附着可复用池互斥且仅包材。整份供货和子成分分开。按原批次归真实增量和继承包材负荷，不按经济份额缩实物。 明确I、独立维修增减及吸释水；已在另一实测流方向内的水料不得重复，但入流留在期末库存不取消实收。逐新增真实修理材料/水/移除物具体建行，未知不是零。 | kg | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |
| cp_service | service | 原批次观测服务 | raw_records | 原首次放行批次; 原Qc净kg; 原制造向量; H; 期初末成品; 总G发运及R退回和实测水污染损失; 退回重验返工增量; 计量; 实物残差; manufacturer_permission; body_glaze_compatibility; actual_rework_route; reacceptance; measured_new_material_water; removed_old_material; independent_mass_bridge | 按具名批次采H内真实操作增量，原制造与新水能料损失分开。退回质量未必等于原发质量；重验再交付不造产量，不以当期Q或净发替换Qc。 返工只在制造者实际许可、坯釉厂标相容且恢复原餐盘终端后真实重验验收时适用，不假定可修、通过或有机修复；不相容涂胶/装饰须另定范围。独立实物质量桥含真实期初+首放收货+退回+新增材料/水=期末+总发运+销毁+移除旧料+独立水损失+其他真实出口，所有项互斥且逐物种/相态核对，原Qc/H不变。 | kg; m3; MJ; t km | 每批收料区间和库存关账 | 规定代表期间及继承库存、观测H | 真实场址设计及可追溯批次 | 每 1 kg 参考流 | 原校准记录独立检测及闭合 |

采集协议只采未归一原量。汇总标签仅标最终报告基准；final_exchange在换算库存历史归属后作唯一除法。服务行用原Qc/H，不用当期制造Q。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | 先将原始记录换到各自行的广延单位和状态再作库存分配。真实速率只积分一次；用独立物质状态密度及热值焓证据，kWh转MJ用3.6。完整制剂与载体子账不重叠；流次级系数不提供密度化学或kg/件。 | cp_material; cp_utility; cp_asset; cp_air; cp_water; cp_pack; cp_service | raw_native_totals | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| manufacturing_stock | manufacture | 逐交换j由继承期初原料在制未归属非在制库存负荷，加真实当期操作并作有据专属细分因果剩余归属，扣对应期末未完成原料在制未归属库存，形成原分子A_j。逐向量保留及失败启停待机清理返工负荷。期末已放行成品在Q内不得扣。内部回收抵消一次，实物总存另闭合。 每个交换须注明收货/发生量或已扣库存的实际消耗基准；若原料数值已是净消耗，不再对它重复加减同一原料库存。耗用的期初材料仍承接真实上游历史，未放行WIP和未归属非WIP存料的逐交换历史按各自一致基准处理，未知不填零。 | raw_native_totals; cp_release; inherited_vectors; allocation_evidence | A_j | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`; `jrc-ilcd-allocation-2010` |
| service_increment | service | 逐原批次保留首次放行Qc和制造向量。Aservice_j为H内真实归属服务增量，保留期初末成品包材历史及真实返工新增损失。退回重发不造Q或反转原制造。实物总G/R和包装移动与负荷归属分开。对实物移动输出卡，Aservice_j是该具体移动的真实总量，绝不是经济负荷份额；继承制造不是第二次服务消耗。 | cp_service; cp_pack; Qc; H; inherited_vectors | Aservice_j | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| final_exchange | all inventory rows | 唯一单位结果运算为制造a_j = A_j / Q，及明确分离的原批次H内服务aservice_j = Aservice_j / Qc。在原量换算、库存历史及有据归属后仅执行一次。采集仍为raw，卡和汇总引用同次结果不再除。Q为首次放行净kg，Qc为原批次首次放行净kg。任何分母零保留真实负荷不出单位结果。参考成品1kg，合并抵消内部首次放行转移并保留已观测服务。 | A_j; Q; Aservice_j; Qc; cp_release; cp_service | a_j; aservice_j | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`; `jrc-ilcd-allocation-2010` |
| packaging_stock | cp_pack | 逐真实材料配置：期初空包装+WIP附着+FG附着+可复用包装+P+I+ER+Radd+H2Oin=期末相同互斥库存+S+EO+W+Rremove+H2Oout。I是随其他供货附带的真实外部包装；Radd/Rremove是既有完整包装方向之外的真实维修增减材；H2Oin/H2Oout是这些实测流已携水之外的独立水摄取/释出。所有流项互斥，某子项已在另一实测方向内只记一次，但新增质量留在期末库存并不取消真实入流。干木及水独立分账，不由单一湿重残差推两未知；新增真实木/胶/紧固件/水/移除物分别有具体原子交换及状态去向。内部复用/部件交接只抵消一次，总实物量不按负荷分配，包材不入Q；原批次继承负荷与实际服务增量独立只归一次。 | cp_pack; P; ER; S; EO; W; I; Radd; Rremove; H2Oin; H2Oout | packaging_residuals | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| physical_balance | manufacture and service gates | 独立在制造、成品服务和合并门闭合湿干实物及相关元素，含原料在制成品、完整供给、资产流体、全部真实气体进出组分、水相化学变化、产品回流和废物。游离结构反应水及化学独立测定，一个残差不解两个未知物种。负荷份额前明示实物残差。 | cp_material; cp_release; cp_asset; cp_residue; cp_air; cp_water; cp_utility; cp_service; cp_pack | physical_element_species_residuals | `jrc-ceramic-bref-2007` |
| asset_service | cp_asset | 真实新旧修退设备模具磨料耐材附着固体及在机流体保持互斥实物总存平衡。另从经核实继承物化清单和真实部署使用计算当期服务。不按每kg整机、不猜质量或定寿命；已磨入另一条流的材料不得重复报废。 逐实物资产/部件/流体另核：期初+总真实收货+独立实测新增材料/水=期末+外返+退役/废弃+已进入其他记录流的磨耗+真实水损失/其他出口。所有项互斥，整机已含部件/流体只作子账，磨耗不再重复报废；新增物料留在期末不取消真实入流，实物量不按服务负荷分配份额缩减。 | cp_asset; inherited_asset_vectors; actual_usage | period_asset_service | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 每交换 | 核对精确原生身份属性链和每卡限制；具体辅流身份供方未定需明示，不造集合UUID或泛替代。 | 原生完整记录及真实供货规格 |
| dq_time | 全部工况库存 | 声明代表期间场址设计批次及全部非生产工况、继承库存向量，服务仅原Qc和观测H。 | 原始运行放行存发记录 |
| dq_measure | 数量化学 | 保留校准采样检出不确定性、独立检测物种密度热证据及未闭合实物残差，公开案例不变工厂测量。 | 实验室报告仪表及质量元素核对 |
| dq_scope | 完整性用途 | 区分缺失未知、实测零、检出限下、证实无。宣称数据包前补齐真实材料制剂包材物种资产治理流；工程检查不认证科学食品接触或等效服务。 | 缺口册真实供方数据及独立适用审查 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 数据包 | 确认单一规定未装饰透明施釉硬质瓷餐盘设计等级、真实原料到喷雾粉等静压及素烧釉烧两烧路线、磨抛试验和首次放行门；排除不相容材质路线组件状态。核心UUID及完整限制须成立；科学适用性独立于工程审查。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| v_q | 数量历史 | 核对唯一首次放行Q含期末已放行成品，保留原料在制库存逐流继承向量、失败零产出待机清理负荷及原Qc/H服务。不因重验重发造Q，不重复除单位；零分母保留负荷但不出单位结果。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production` |
| v_species | 质量元素物种 | 检查独立实物与相关Si/Al/Na/K/C/H/O/S/F/Cl平衡及相态物种。NOx按NO2折算、SOx/HF当量、总金属硼碳、VOC/AOX/COD是指标而非已定化学物种。残差检出限明确，不从一个灼减值拟合反应水及CO2。 | `jrc-ceramic-bref-2007` |
| v_stock | 全部包装资产载体 | 核对每种包材期初末空置在制成品可复用池、整份采购外返总发运废物，以及资产流体存量与当期服务负荷。匹配真实蒸汽热水凝结水状态及供方水能约定，不重复整份供给。 | `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| v_complete | 每项适用行 | 每适用行须有原始记录、原生广延分子单位、一次最终除法、真实条件供方和全卡限定、不确定性及来源限制。未知、检出限下、实测零和证实不存在不同，真实缺失原子流全部补上。辅流UUID供方数量缺口明示，不能用集合流掩盖。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`; `jrc-ilcd-allocation-2010` |
| v_use | 分配下游主张 | 复核专属细分操作、逐交换物理因果及剩余共门价值。不得从名称典型配方或原生营销推食品认证、功能等同、尺寸单件质量或寿命。工程检查不批准科学翻译、映射或发布。 | `jrc-ceramic-bref-2007`; `rosenthal-porcelain-production`; `jrc-ilcd-allocation-2010` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 单独规定产品服务研究中的特定设计等级瓷餐盘生产输入 |
| allowed_use | 规定原料到首次放行制造及经核实上游供给、单独标注真实观测Qc/H服务 |
| excluded_use | 全CPC覆盖、泛陶瓷替代、等盛餐食品接触寿命比较、其他材质成形烧成装饰、未观测未来服务和自动回收信用 |
| required_metadata | 场址地域期间和真实供方; 一个真实餐盘设计材质及质量等级; 硬质瓷坯和透明釉化学; 整份供货原料制剂及含水; 厂内湿法制备喷雾造粒等静压干压及两次燃气烧成; 干燥气氛表面后整理与验收试验; 唯一首次放行净质量Q且不推单件kg; 期初末原料在制非在制库存及每流继承负荷向量; 原放行成品批次及总发运退回状态桥接; 观测服务H与原批次Qc; 每种包材身份所有权空置附着可复用库存及总往返; 真实物种相态媒体CAS来源和检出依据; 独立完整实物质量及元素平衡; 原生广延单位载体质量热状态焓及供方水能约定; 机器模具耐材流体实物存量与当期服务负荷; 独立专属细分物理因果及剩余共门价值证据; 不确定性未定辅流及下游限制 |
| required_quality_disclosure | 候选科学状态及已对齐未审翻译、来源时空限制、真实原始观测与要求区别、辅流供方物种未定及库存实物残差、分配证据和观测完整性 |
| update_trigger | 坯釉制剂供货状态、造粒成形烧成路线、后整理厂标装饰、质量门、原生限制供方、库存归属或服务边界变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-ceramic-bref-2007 | official_guidance | European Commission, Ceramic Manufacturing Industry BREF, August 2007, §§2.3.6 and3.3.6; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | 完整餐具路线、真实输入输出治理类别、后整理及相邻材质成形烧成反例的定性证据。历史表和滚压质量流例不是配方因子或本干压工厂记录。 |
| rosenthal-porcelain-production | literature | Rosenthal, The fascinating world of porcelain production; https://www.rosenthal.de/en-de/porzellan-herstellung.html | 制造商硬质瓷、喷雾粉干压、两烧施釉、磨抛分选及完成白瓷终端的定性主证据，保留浇注装饰反例。不推通用配方温度压力收缩食品接触性能寿命。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, First edition March 2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅归因分配情境：专属细分虚拟细分、逐交换决定性物理因果、剩余共过程实际状态市场价值及限制。不证明工业过程，不定份额、不套QFD产品功能法或回收信用。 |
