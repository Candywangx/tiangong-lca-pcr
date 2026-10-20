---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.nmmo-lyocell-uncarded-staple-fibre
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# NMMO路线未梳理莱赛尔短纤维制造与供货


## 1. 范围与适用性

本PCR仅覆盖一种工业路线：溶解级木浆在含水N-甲基吗啉-N-氧化物（NMMO）中物理溶解，经溶液纺丝和水浴析出、水洗、上油、干燥及切断，以未梳理、未精梳短纤维供货。切断、水洗、干燥的实际顺序必须声明；原始来源描述不同工业布置，不冒充同一工厂。jrc-polymers-2007、lenzing-lyocell-technology、cirfs-lyocell-production支持该路线和真实短纤终态，不提供默认配方、操作条件、溶剂回收率、分配比例或工厂清单。本方法规定未来真实场址的采集要求，不声称已经测得工厂绩效。

终端参考门为生产场址发运门实际净交付纤维量Q，已包含所声明的包装、仓储、搬运和装载。P为首次正向质量放行并转入供货账的纤维新产量；Q与P分别核对，不默认相等。参考量为实测供货水分和油剂状态下1 kg净纤维，不含任何包装皮重。纸浆、聚合物、纺丝液、湿丝束、留库包件及内部放行均不是终端已交付纤维。

排除viscose/modal黄化及化学再生、铜氨法、醋酸/三醋酸纤维溶解或合成、合成高聚物纤维、销售丝束、卷装连续长丝纱、已梳理/精梳纤维、短纤纺纱及织物。交联、染色、混纺、功能化及再生原料变体须另有证据扩展，不能由通用纤维素身份推断。现有纺前处理人工短纤PCR从本未加工供货状态之后开始；人工长丝纱的终端形态不同。本有限方法仅提议与CPC 3.0 35540形成narrower关系，不创建或接受映射。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.nmmo-lyocell-uncarded-staple-fibre |
| classification_refs | CPC 3.0: 35540；提议narrower范围，接受待定 |
| covered_products | 溶解级木浆与含水NMMO路线制造的未混纺、未改性莱赛尔短纤，供货时未梳理或精梳 |
| excluded_products | 黏胶、莫代尔、铜氨、醋酸/三醋酸纤维、合成纤维、销售丝束、长丝纱、纺前处理纤维、纺纱及无证据扩展的功能化/再生原料变体 |
| representative_product | 一种已声明等级和切断长度的莱赛尔短纤，采用实测供货水分/油剂状态 |
| production_route | 浆粕接收、NMMO直接溶解过滤、溶液纺丝、水浴析出、水洗、上油、干燥及切断，采用有记录的场址顺序；NMMO/水回收、包装、仓储及发运 |
| market_state | 生产场址发运门实际净交付的未梳理短纤；披露包装、油剂及水分 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为后续纺织或非织造制造供应未梳理莱赛尔短纤 |
| How much | 生产场址发运门Q实际净交付纤维中的1 kg |
| How well | 具有记录的一种等级、切长、线密度、供货水分及油剂状态；Q中无包装皮重 |
| How long or cycle | 一个经核对的生产至交付批群；不声称使用寿命 |
| reference_flow_link | delivered_fibre |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 再生纤维素短纤维 `d0e37315-a795-4f13-85b9-325c681d3c57` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | NMMO直接溶解莱赛尔路线及溶解木浆来源; 单一等级、短纤切断长度及线密度规格; 未梳理、未精梳、未混纺及未改性状态; 实际工序顺序及场址技术; 供货态净纤维质量、实测水分基准及油剂附着量; 包装组件、皮重及装载门; P新放行及Q实际交付定义与唯一批次谱系; 在制品及成品期初期末库存与结转负荷; 退货、失败批次、零产出运行及返工; 场址、地理、生产及交付批群期间; 真实NMMO整份制剂含量与水/油剂分账; 回收、排污、废水处理及实测排放去向; 上游供应者、运输及共享服务分配证据 |

全部必需限定信息须进入数据包元数据、过程说明、参考流备注或等效字段；缺任一项则该数据包参考流不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_supply_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为声明门处唯一正向净交付纤维量，不是P。逐包称重并扣除全部包装，记录水分/油剂状态，排除取消及留置发运；退回和重发不能制造第二次验收数量。 |
| fibre_moisture | all fibre and pulp masses | Mass | kg | 湿净纤维、干纤维素、纸浆非纤维素固形物、油剂固体、残余NMMO及水分别实测。干燥试验失重不自动等于纯水，须采用真实经验证方法。湿基水分w仅在声明组分范围内按干质量=湿质量×(1-w)换算；干基回潮率r按湿质量=干质量×(1+r)换算；不得重复应用或抹去油剂。 |
| whole_formulation | external solution inputs | Mass | kg | 整份NMMO溶液及整份上油乳液各采购一次；实测NMMO/有效油剂及载体水仅为组分分账，不重复采购。现场配制则记录各单独采购组分与真实混配损失及能耗。 |
| utility_dimensions | metered utilities | Energy or volume | kWh, MJ, m3 | 电力与蒸汽有用热分别保留；蒸汽质量换热量须实测压力/温度/品质及回水焓。流率×时长得到体积；已积分体积不得再乘时长。体积转质量仅用独立流体状态密度，不能把次级流属性因子当密度。 |
| physical_ledger | fibre and recovery processes | Mass and elements | kg | 物理总质量及相关元素分别闭合，并独立于物种/反应账。直接溶解、水浴析出和水蒸发不构成化学计量反应水证据。真实降解、清洗或处理反应及实际物种须独立证实；不能用同一残差同时求未知反应水和未知出口，也不能由COD推物种。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生产场址接收溶解木浆、整份采购NMMO溶液、上油乳液、公用工程和包装；上游投入及运输仍须链接 |
| starting_condition_role | 一种NMMO路线纤维/供货系统的前景接收门，继承期初库存负荷 |
| product_classification_scope | 仅提议CPC 3.0 35540中narrower范围的未梳理莱赛尔短纤；不能用长丝纱或纺前处理纤维替代 |
| recursive_input_rule | 外购同类别纤维保留为明确链接上游的输入。内部回收溶剂、水、退回纤维及P交接保留谱系并在合并时抵消；不是新采购或新产量 |
| upstream_dataset_requirement | 纸浆、整份溶液、能源、包装、运输及废物处理须采用路线、供货状态、地理及属性兼容的数据集；身份UUID不确立供应者数量 |
| disclosure | 声明全部真实过程owner、起止门、P/Q、在制品/成品期初期末及结转负荷、处理切点、内部交接抵消、库存批群方法及分配服务 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| route_scope | all processes | NMMO直接溶解须与化学衍生/再生及合成聚合物制造分开；来源配方、回收率或名义等级均不能直接成为工厂值。 | jrc-polymers-2007; lenzing-lyocell-technology; cirfs-lyocell-production |
| complete_gate | all processes | 纳入到Q门的实际接收搬运、溶解、过滤、纺丝、析出、水洗、切断、上油、干燥、溶剂/水回收、处理服务、包装、仓储、搬运及发运。实际存在但基础卡片未列的每种稳定剂、清洗/再生化学品、燃料、制冷剂、包装组件、处理药剂及实测排放均须新增原子行和协议；缺记录不等于零。存在内部锅炉或处理时须明确建模，不与采购蒸汽或场外处理重复。 | jrc-polymers-2007; lenzing-lyocell-technology |
| period_stock | all processes | 采集完整未归一期间分子，包括失败及零产出运行、返工和在制品期初期末及继承负荷。供货账按一致组分基准核对：期初成品+P+外部验收来料+实物退回+独立实测吸湿量=Q+期末成品+其他有记录实物出口+独立实测失水量。包装另账。重复发运作为实物交接，不新增验收Q；退回须撤销/修正先前交付验收并保留继承负荷，退货库存再放行一次但不形成新P。逐唯一批次及水分状态核对，不强迫不同水分的供货态质量相等。制造输出是P，不能再加同批P的期末库存。未交付库存保留负荷并在所属批群交付时结转，不再次作为新生产。合并时内部P输出/输入抵消。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fibreline | 直接溶解、成纤及短纤后处理 | required | 本声明路线的真实操作；条件用量据实采集 | manufacturing | 每 1 kg 参考流；各内部交接按实测批群归属 |
| recovery | NMMO及水回收 | required | 本声明路线的真实操作；条件用量据实采集 | manufacturing | 每 1 kg 参考流；各内部交接按实测批群归属 |
| supply | 包装、成品仓储及实际发运 | required | 本声明路线的真实操作；条件用量据实采集 | supply | 每 1 kg 参考流；各内部交接按实测批群归属 |

### 过程：直接溶解、成纤及短纤后处理（`fibreline`）

#### 输入

##### 产品流

###### 溶解级木浆（`wood_pulp`）

整份来料纸浆含实测水分；纤维素及其他干固体另测。记录木材来源及漂白等级，不用聚合物粒料或纺织纤维替代。

- 选定流：溶解级木浆
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### N-甲基吗啉-N-氧化物水溶液（`fresh_nmmo`）

整份外购补加溶液，声明供应商制剂、含量、水合/载体水基准及包装；内部回收液是另一物理行，组分NMMO及水不是新增采购。

- 选定流：N-甲基吗啉-N-氧化物水溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 回收NMMO水溶液（`nmmo_return_in`）

内部交接与nmmo_return_out配对，实测整份溶液质量、NMMO含量、水及杂质；无替代原生信用或新采购，配对数量与负荷抵消一次。

- 选定流：回收NMMO水溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 工艺水（`fibre_water`）

实际预混、水浴析出、水洗及清洗的外部补水；内部回收水另列。披露供水/处理，避免溶液载体水重复。

- 选定流：工艺水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 回收工艺水（`water_return_in`）

与water_return_out配对的内部交接，保留残余NMMO/固体含量；不是采购补水或自动废水排放。

- 选定流：回收工艺水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 莱赛尔上油水乳液（`spin_finish`）

一种真实采购的上油制剂，含载体水；保留组分/SDS、有效固体、施加损失、纤维保留量及进入废水量记录。不假设配方或上油率。

- 选定流：莱赛尔上油水乳液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 电力（`fibreline_electricity`）

真实过程owner电表或有记录的因果服务分摊，包括空转、失败运行及返工；不能在纤维线总表中再重复回收或仓储分表。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 采购工艺蒸汽（`fibreline_steam`）

记录真实采购蒸汽与热负荷、蒸汽状态及返回冷凝水；现场锅炉须另列实际燃料/空气/排放，不重复采购蒸汽负荷。

- 选定流：采购工艺蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

#### 输出

##### 产品流

###### 再生纤维素短纤维（`released_fibre`）

P为首次正向质量放行、内部交接至received_fibre的未梳理莱赛尔短纤，不是终端Q。原生身份仅为通用再生纤维素短纤，mix/location及路线分量为空，无CAS、地理/locationOfSupply或介质限制，无等级/水分/油剂规格，仅有一个Mass参考属性。其不确立莱赛尔技术、供应者数量或区域代表性，须以声明的木浆/NMMO路线和真实批次证据补足。保留的来源分类399为历史元数据，与当前35540分开。

- 选定流：再生纤维素短纤维 `d0e37315-a795-4f13-85b9-325c681d3c57`
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 待回收NMMO水溶液（`spent_liquor_out`）

含NMMO、水、溶解固体及油剂污染的内部整份液流，与spent_liquor_in配对；不能同时记作离开合并场址的废水。

- 选定流：待回收NMMO水溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 返回蒸汽冷凝水（`fibreline_condensate_return`）

真实返回蒸汽供应者的外部冷凝水，实测质量、状态及焓。物理水质量与有用热MJ分开保留，不重复返回热信用，不与内部工艺水回收混淆。

- 选定流：返回蒸汽冷凝水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`

##### 废物流

###### 未回收不合格莱赛尔短纤（`offspec_fibre`）

仅记录实际作为废物离开的物料；区分可内部返工物及留置品，保留水分、油剂、残余溶剂及真实处理和结转负荷。

- 选定流：未回收不合格莱赛尔短纤
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 富纤维素纺丝液过滤残渣（`dope_filter_residue`）

整份湿残渣须测滞留NMMO/水；不得将其中溶液再计为另一股外部溶剂损失。

- 选定流：富纤维素纺丝液过滤残渣
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 莱赛尔纤维线废水（`fibre_effluent`）

仅为离开纤维线回收环路、进入声明的场内/外处理的真实排污；测积分废水量、NMMO、固体及处理去向。COD是质量指标，不是分子排放身份。

- 选定流：莱赛尔纤维线废水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

##### 基本流

###### 排入空气的水（`fibreline_water_air`）

实际捕集后实测外部蒸发/排气水；内部冷凝水或循环水不是基本排放，物理相变不是反应水生成。

- 选定流：排入空气的水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 排入空气的纤维素颗粒物（`fibreline_cellulose_dust`）

按采样基准及空气介质记录实际未捕集纤维素粉尘；已收集粉尘进入相应废物/返工账，不同时作为排放。

- 选定流：排入空气的纤维素颗粒物
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 排入空气的N-甲基吗啉-N-氧化物（`fibreline_nmmo_air`）

仅记录经独立鉴别和定量的捕集后外部NMMO损失/气溶胶；不自动假设挥发，不用溶剂平衡残差作排放因子；其他真实物种须单独实测列行。

- 选定流：排入空气的N-甲基吗啉-N-氧化物
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibreline`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

### 过程：NMMO及水回收（`recovery`）

#### 输入

##### 产品流

###### 电力（`recovery_electricity`）

真实过程owner电表或有记录的因果服务分摊，包括空转、失败运行及返工；不能在纤维线总表中再重复回收或仓储分表。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 采购工艺蒸汽（`recovery_steam`）

记录真实采购蒸汽与热负荷、蒸汽状态及返回冷凝水；现场锅炉须另列实际燃料/空气/排放，不重复采购蒸汽负荷。

- 选定流：采购工艺蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 待回收NMMO水溶液（`spent_liquor_in`）

spent_liquor_out的精确内部对应；按真实装置纳入过滤/净化/浓缩，单独识别耗材并保留全部启停损失。

- 选定流：待回收NMMO水溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 工艺水（`recovery_water`）

实测回收/清洗外部补水；与回收冷凝水及实际采用的树脂再生用水区分。每种真实再生化学品另列，不假设酸碱配方。

- 选定流：工艺水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

#### 输出

##### 产品流

###### 回收NMMO水溶液（`nmmo_return_out`）

交回nmmo_return_in的内部溶液，保留组分及回收库存；回收比例仅由真实一致NMMO质量和期间库存计算，不能套发表百分比。

- 选定流：回收NMMO水溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 回收工艺水（`water_return_out`）

向water_return_in交接的内部分离水，实测残余溶剂/固体及去向；无外部排放信用。

- 选定流：回收工艺水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 返回蒸汽冷凝水（`recovery_condensate_return`）

回收加热的真实外部冷凝水返回；投入蒸汽水质量及返回冷凝水保留在物理水账，能源负荷按真实净热及有记录的供应者约定仅计一次。

- 选定流：返回蒸汽冷凝水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`

##### 废物流

###### NMMO回收排污废水（`recovery_purge`）

记录进入声明处理的真实水相排污，含整份液体质量及NMMO/降解溶质分析；保留处理负荷，实际终端物种须经处理证据确认后另列。

- 选定流：NMMO回收排污废水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### NMMO回收过滤残渣（`recovery_residue`）

实际去除湿固体，记录滞留溶液、处置路线及替换滤材负荷；存在废树脂/活性炭时各自新增原子行。

- 选定流：NMMO回收过滤残渣
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

##### 基本流

###### 排入空气的水（`recovery_water_air`）

实际捕集后实测外部蒸发/排气水；内部冷凝水或循环水不是基本排放，物理相变不是反应水生成。

- 选定流：排入空气的水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 排入空气的N-甲基吗啉-N-氧化物（`recovery_nmmo_air`）

仅记录经独立鉴别和定量的捕集后外部NMMO损失/气溶胶；不自动假设挥发，不用溶剂平衡残差作排放因子；其他真实物种须单独实测列行。

- 选定流：排入空气的N-甲基吗啉-N-氧化物
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

### 过程：包装、成品仓储及实际发运（`supply`）

#### 输入

##### 产品流

###### 电力（`supply_electricity`）

真实过程owner电表或有记录的因果服务分摊，包括空转、失败运行及返工；不能在纤维线总表中再重复回收或仓储分表。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 再生纤维素短纤维（`received_fibre`）

released_fibre P的内部对应，成品期初另行继承历史负荷。原生通用再生纤维素身份未指定路线、等级、水分、油剂、CAS、地理/locationOfSupply或介质；mix/location及路线名称分量为空不确立莱赛尔或区域混合。当前CPC35540及保留的历史source399分别披露；须由真实木浆/NMMO未梳理短纤批群补足特定性。

- 选定流：再生纤维素短纤维 `d0e37315-a795-4f13-85b9-325c681d3c57`
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 聚乙烯纤维包裹膜（`pe_wrap`）

真实整份PE包裹膜质量含裁边及破损膜，不进入纤维Q；声明树脂/添加剂、再生比例、供应者和结构，不用通用包装集合替代。

- 选定流：聚乙烯纤维包裹膜
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 聚对苯二甲酸乙二醇酯打包带（`pet_strap`）

真实PET打包带与包裹膜分开；记录组分、来料、库存及废带。真实其他材质须使用其自身身份，不能改标签冒充。

- 选定流：聚对苯二甲酸乙二醇酯打包带
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

##### 基本流

###### 取自空气的水（`supply_water_air_in`）

仅为真实纤维调湿/仓储中独立测定的空气水分吸收；整份纤维质量与水组分分开，不能把该输入作为不受约束的质量闭合项，不能将采购调湿水计入此处。有证据的缺席可记录，不编零值。

- 选定流：取自空气的水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`

#### 输出

##### 产品流

###### 再生纤维素短纤维（`delivered_fibre`）

reference_flow_link选定的终端Product输出。Q为唯一实际净交付的木浆/NMMO路线莱赛尔未梳理/未精梳短纤，采用实测供货水分及油剂状态，扣除PE/PET皮重。原生通用再生纤维素短纤的mix/location及路线分量为空，未指定CAS、等级、水分、油剂、介质及地理/locationOfSupply；它既不确立莱赛尔专用背景供应者也不确立区域代表性。当前CPC35540与历史source399元数据分开保留。适用性须由真实批次路线/形态/状态/供货门确立；原生供应商未指定不构成相反路线。P内部交接及真实独立联产品即使共享该UUID也不能隐藏。

- 选定流：再生纤维素短纤维 `d0e37315-a795-4f13-85b9-325c681d3c57`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

##### 废物流

###### 废聚乙烯包裹膜（`pe_scrap`）

实际跨废物边界的裁边及破损膜；排除内部再用膜，保留真实处理及库存。

- 选定流：废聚乙烯包裹膜
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 废PET打包带（`pet_scrap`）

真实废弃打包带及处理路线；废带不等于全部采购带，不得把带质量重复从纤维Q扣除。

- 选定流：废PET打包带
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 搬运废莱赛尔短纤（`supply_fibre_loss`）

实测不可回收仓储/装载损失，保留油剂/水分和批次归属；退回或留置纤维在真实废弃决定前属于库存/返工。

- 选定流：搬运废莱赛尔短纤
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

##### 基本流

###### 排入空气的纤维素颗粒物（`supply_cellulose_dust`）

按采样基准及空气介质记录实际未捕集纤维素粉尘；已收集粉尘进入相应废物/返工账，不同时作为排放。

- 选定流：排入空气的纤维素颗粒物
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`; `lenzing-lyocell-technology`

###### 排入空气的水（`supply_water_air_out`）

独立测定的真实纤维仓储/装载水分损失，记录接收空气介质及批次状态；它改变供货态纤维质量，但既不生成化学反应水也不形成新的干纤维素产量。

- 选定流：排入空气的水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；仅执行一次报告操作。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：`jrc-polymers-2007`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| internal_loops | internal transfers | 过程清单保留P及NMMO/水交接，合并时抵消匹配内部交换；能耗、损失、废物处理及结转负荷仍保留。内部回收既不是联产品信用，也不是新产量。 |  |
| shared_services | shared services and stock | 优先过程/批次直接计量，共享设施先拆分，否则记录因果物理驱动及敏感性。按一致明确方法把库存负荷结转至交付批群。次级物料出售须有真实产品/规格及独立合理分配方法，废物价格本身不证明产品身份。不设默认比例或替代负荷信用。 | jrc-ilcd-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_fibreline | fibreline | atomic exchanges and service burdens | period ledger | 过程owner；期间；批次；表起止数；收发；整份制剂质量及含量；输出及处置；内部交接ID；在制品/库存期初期末；继承负荷向量；失败/零产出；返工；蒸汽质量及状态；冷凝水质量及焓；独立实测吸湿/失水；积分体积或流率时长；密度证据 | 指定过程owner保留未归一原始记录、完整边界分子及期初期末结转负荷。逐原子交换及配对交接核对，采集端不执行A_i/Q。保留全部失败/零产出负荷；共享服务按因果分配一次。供货owner还保留P、Q、发运/验收/退回ID、库存谱系及皮重/水分试验。 | kg; kWh; MJ; m3; h | 逐批及计量区间 | 完整报告期间及库存来源期间 | 一种声明场址、路线及等级；指定owner | 每 1 kg 参考流 | 校准；发票；化验；质量账；库存/负荷核对；处理联单 |
| cp_recovery | recovery | atomic exchanges and service burdens | period ledger | 过程owner；期间；批次；表起止数；收发；整份制剂质量及含量；输出及处置；内部交接ID；在制品/库存期初期末；继承负荷向量；失败/零产出；返工；蒸汽质量及状态；冷凝水质量及焓；独立实测吸湿/失水；积分体积或流率时长；密度证据 | 指定过程owner保留未归一原始记录、完整边界分子及期初期末结转负荷。逐原子交换及配对交接核对，采集端不执行A_i/Q。保留全部失败/零产出负荷；共享服务按因果分配一次。供货owner还保留P、Q、发运/验收/退回ID、库存谱系及皮重/水分试验。 | kg; kWh; MJ; m3; h | 逐批及计量区间 | 完整报告期间及库存来源期间 | 一种声明场址、路线及等级；指定owner | 每 1 kg 参考流 | 校准；发票；化验；质量账；库存/负荷核对；处理联单 |
| cp_supply | supply | atomic exchanges and service burdens | period ledger | 过程owner；期间；批次；表起止数；收发；整份制剂质量及含量；输出及处置；内部交接ID；在制品/库存期初期末；继承负荷向量；失败/零产出；返工；蒸汽质量及状态；冷凝水质量及焓；独立实测吸湿/失水；积分体积或流率时长；密度证据 | 指定过程owner保留未归一原始记录、完整边界分子及期初期末结转负荷。逐原子交换及配对交接核对，采集端不执行A_i/Q。保留全部失败/零产出负荷；共享服务按因果分配一次。供货owner还保留P、Q、发运/验收/退回ID、库存谱系及皮重/水分试验。 | kg; kWh; MJ; m3; h | 逐批及计量区间 | 完整报告期间及库存来源期间 | 一种声明场址、路线及等级；指定owner | 每 1 kg 参考流 | 校准；发票；化验；质量账；库存/负荷核对；处理联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_burdens | all inventory rows | 保留完整原始期间交换向量R_i。未归一交付批群分子A_i=期初结转向量+本期应归属向量-期末结转向量-另有记录的其他出口结转向量。在在制品及成品门按有记录的批次追踪或一致因果库存层方法计算。纳入失败/零产出及返工负荷；P、NMMO及水内部交接抵消一次，实际处理负荷不得抵消。每份未交付负荷均保留供后续交付结转。 | R_i; opening_carried_vector; closing_carried_vector; other_outlet_carried_vector; cp_fibreline; cp_recovery; cp_supply | A_i |  |
| normalize_supply | all inventory rows | a_i = A_i / Q。这是换算为1 kg净实际交付参考流的唯一归一化；卡片数量及协议聚合仅描述同一次报告操作，不是追加除法。Q须大于零，并来自相同产品、路线、供货状态及交付批群；Q不为正时不得形成每kg结果。 | A_i; Q; cp_supply | a_i |  |
| constituent_accounts | all solution and fibre rows | 每份整份商业溶液或湿纤维质量，仅为组分分账乘以独立实测且同批匹配的组分分数。NMMO、水、纤维素及油剂账纳入库存变化、实测残渣、废水、真实排放及独立鉴别的转化物种。内部溶液回收不是外购；不设固定溶剂回收比例或残差拟合出口。 | whole_mass; constituent_assay; stock_changes; measured_outlets | constituent_ledger |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | 核验真实等级、状态、路线、供应者、地理及完整原生身份；通用参考UUID不提供配方或供应者用量。辅助UUID未定须明确，数据集使用前匹配真实供应者。 | 身份直读；产品及供应商规格 |
| period_completeness | all processes | 核对原始期间输入、内部交接、正向验收放行P、交付Q、全部库存及结转负荷，包含失败/返工；按测量不确定度调查残差，不强行闭合。 | 批次账；校准秤表；期初期末负荷向量 |
| environment | recovery and treatment | 按采样/分析及处理证据鉴别每个真实出口和接收介质。送处理供应者的废水不同于直接排入水体的基本流。不能由闭环标签推断零空气排放或反应水化学计量。 | 采样方法；许可/监测；处理合同及质量/物种账 |
| quantities | all inputs and outputs | 原文配方、实验条件、宣传回收率或行业分配比例均不能替代真实匹配记录。缺辅助数据须补齐，不编数量，也不因此自动降低已成文采集方法状态。 | 原件、真实来源范围及前景协议证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| terminal | delivered_fibre | reference_flow_link明确选择唯一终端Product行，双语UUID一致。共用UUID的真实内部或联产品行仍可见。终端数量为1 kg供货态纤维，不是纸浆、原液、丝束、P、库存、毛包或纱。 |  |
| normalisation | all inventory rows | 要求正Q、匹配的原始批群及结转负荷、仅一次normalize_supply、分别核对P/Q及全部在制品/成品期初期末。退回/再验收不造新产量。缺原始记录、库存未追溯或交换重复未解释，均使所产数据集不完整。 |  |
| atomic_completeness | all processes | 每个真实材料、公用工程、废物、处理及基本物种各为一个正确类型交换，有自身数量、单位、过程owner及采集链接。条件缺席须有真实证据；所有额外真实耗材/出口须在数据集完成前新增原子行。不重复废水处理，不由COD、库存残差或物理蒸发编分子物种。 |  |
| readiness | dataset use | 科学审查、分类接受及发布是独立待定决定。结构/计量/原生格式检查不等于方法批准或实测工厂绩效。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 真实完整数据集形成并经审查后，作为后续纺纱或非织造制造的声明路线莱赛尔短纤投入 |
| allowed_use | 仅用于匹配的未梳理短纤等级/状态/供货门，须评估供应者及地理兼容性 |
| excluded_use | 长丝纱、黏胶/莫代尔/铜氨/醋酸纤维、合成纤维、纺前处理纤维及未限定跨路线平均；不得声称生产商品牌足迹 |
| required_metadata | 全部参考限定；场址/路线/期间；原始记录；上游/处理链接；P/Q；库存/负荷批群；水分/油剂；包装及发运门 |
| required_quality_disclosure | 完整性、不确定度、库存结转、原生通用身份限制、辅助UUID/供应者缺口、服务分配、排除及待定科学审查 |
| update_trigger | 路线、原料、功能处理、短纤状态、工序顺序、水分基准、回收配置、供应商、地理或终端门变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-polymers-2007 | official_guidance | European Commission (2007), Reference Document on Best Available Techniques in the Production of Polymers, section 11.2.4, printed pp.179–180. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | 仅支持工业直接溶解、析出、切断、水洗、上油及回收结构；不采用数值回收率、消耗因子、操作配方或排放结论。图中卷绕不定义本短纤终端门。 |
| lenzing-lyocell-technology | literature | Lenzing, Fiber Technologies: Explore Lenzing’s Production Processes, Process A: Lyocell, publisher web snapshot 2026-10-16. https://www.lenzing.com/technology-production/technologies/ | 生产商原始资料支持商业浆粕/NMMO路线和切断纤维终态；实际工序顺序及产品合格条件由场址确定。不采用品牌平均清单、溶剂回收率或替代纤维素原料假设。 |
| cirfs-lyocell-production | literature | CIRFS, Lyocell, Production, publisher web snapshot 2026-10-16. https://www.cirfs.org/man-made-fibers/Fibre-range/lyocell | 独立行业原始资料描述商业短纤生产及含水NMMO回收；仅作定性佐证，不代表同一工厂或定量清单。 |
| jrc-ilcd-allocation-2010 | official_guidance | 欧盟委员会JRC，ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance，2010年3月第一版，7.9.3节，印刷257–258页（PDF277–278）；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅在选择分配而非替代的归因型范围内，以虚拟细分及逐交换的决定性物理因果关系，支持共享服务的直接计量、细分及有记录因果驱动分配。工艺来源支持成纤及回收结构，不提供这一LCA方法。未建立默认物理或经济份额、库存层公式、回收率、收率公用工程排放因子、自动联产品身份、替代负荷信用或PEF/CFF符合性；实际库存谱系、服务驱动、敏感性及真实次级产品分配仍须独立证据。 |
