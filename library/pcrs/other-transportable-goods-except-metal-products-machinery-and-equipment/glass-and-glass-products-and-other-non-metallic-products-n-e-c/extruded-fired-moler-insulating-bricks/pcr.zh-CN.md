---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.extruded-fired-moler-insulating-bricks
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 挤出烧成 moler 硅藻土隔热砖

## 1. 范围与适用性

适用于以天然含黏土 moler 硅藻土为主体、实际木屑烧失造孔、配方需要时加入真实石灰石的挤出烧成裸隔热砖，从真实原料供货至首次最终质量放行，并另列原批次后续储存包装服务。EPD 工业路线与原厂终端资料共同支持公开工业 LCA 层级的技术综合；不声称同一 SKU、同厂配方或所有条件来自同一订单。

排除普通石英或硅岩制硅砖、普通黏土建筑砖、高铝或镁质耐材、37291 氧化铝化学坩埚、釉面卫生陶瓷、餐具、装饰陶瓷、电瓷、研磨介质、玻璃、矿粉、硅藻助滤剂、未烧土坯、磷酸盐改性专利新路线及蛭石或硅酸钙板。其他硅质土、成形路线或材料是否适用须由真实物相、制造和终端证据判断，不由 CPC 叶节点或以后 37320 标签建立重复 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.extruded-fired-moler-insulating-bricks |
| classification_refs | CPC 3.0:37310 (narrower semantic scope; 较窄关联已接受，以 classifications/mappings/cpc-3.0-to-pcr.yaml 及其决策记录为准；科学审查仍待完成) |
| covered_products | 天然含黏土 moler 与真实木屑造孔的挤出烧成裸隔热砖 |
| excluded_products | 普通硅砖黏土砖高铝耐材及其他上述不同物相终端 |
| representative_product | 真实烧成并各面机加工的多孔 moler 背衬隔热砖 |
| production_route | 真实整份原料接收制备混合调质挤出切坯干燥烧失烧成冷却精加工验收 |
| market_state | 完成烧成精加工验收的完整裸砖；供货水分及包装另记录 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明工业应用提供背衬隔热砖体，不替代安装寿命功能比较 |
| How much | 1 kg 首次放行干燥裸砖净质量 |
| How well | 真实等级尺寸热工机械测试和用途验收，不编性能默认值 |
| How long or cycle | 一次制造首次放行；后续服务另声明原批次 Qc 及观测 H |
| reference_flow_link | finished_brick |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | moler 地质来源和天然黏土及蛋白石壳组成; 实际整份供货形态及含水分析; 木屑树种来源及造孔剂碳和灰分; 石灰石存在性分析及碳酸盐转化; 挤出切坯几何及机加工状态; 真实干燥烧失烧成冷却路线及气氛; 热工机械尺寸验收方法及等级; 首次最终放行批次标识和干燥裸砖净质量 Q; 参考流族原生限制及分类差异; 原料在制品存料每交换继承负荷向量; 已放行 FG 发运退回及批次服务观测期限; 公用工程供应地域电压燃料状态及热和载体约定; 原子气体物种相态及独立质量元素证据; 互斥包装及实物资本和流体存量; 单次归属及归一化和不确定性披露 |

上述每项限定信息须在数据包元数据、参考流完整说明或过程说明中逐项声明。参考族的采用限制同样约束参考流对象和 finished_brick 消费卡。 原生产品流为工厂端生产混合，未固定地域、CAS、等级或单一二氧化硅物相。完整定义包含经高温烧成且具热震及结构稳定性的硅质砖。仅采用所引原厂终端支持的真实烧成机加工蛋白石硅藻与黏土背衬隔热砖，不用于未烧粉体、普通黏土建筑砖、致密石英硅砖或任意外购制品。原生分类称硅质土以外（37320），与宽泛且包含硅质材料的定义存在差异；完整披露该分类矛盾，不视为已接受映射，也不以此豁免材料物相路线类型硬冲突。真实等级、性能和供应过程适用性须另有证据。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 按 cp_release 独立采集唯一首次放行干燥裸砖净质量。包装、未放行 WIP 和发运复验不是新 Q；已放行期末 FG 已在 Q 内，不作制造期末负荷扣减或重复产出。 |
| native_units | all inventory rows | 各交换原生广延属性 | 该行原生单位 | 逐行保持 Mass/kg、Energy/kWh 或 MJ、原生体积 m3、件数 item；不得将 Required Mass/kg 套到其他属性。每件转质量需该配置经校准实测净重，不由密度或次级属性推定。 |
| one_basis | all inventory rows | 实际分子单位 | 逐行原生单位 | 所有制造行及内部移交使用同一 Q。服务增量使用原批次 Qc 和观测 H；原始采集不除，single_quotient 仅除一次。Q0 负荷保留不出单位结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实接收湿态或干态原始含黏土 moler、木屑、真实石灰石及其他独立供应投入，不以采购已烧成品为起点 |
| starting_condition_role | foreground_input |
| product_classification_scope | CPC 3.0:37310; moler insulating-brick subset |
| recursive_input_rule | 同类成品或废砖若真实投入需追踪其原始制造历史及真实增量处理；内返相消不再采购，不可截掉本次实际制造 |
| upstream_dataset_requirement | 每份外购真实供货形态、地域、技术与供应过程须匹配且仅连接一次，缺失负荷明示并阻止依赖结果 |
| disclosure | 声明现场期间批次真实起点全运行模式库存向量首次放行门及原批次服务 H，披露独立工厂数据缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | manufacture | 从接收供货的原始含天然黏土 moler、整份木屑及真实石灰石开始，覆盖制备、调质、挤出、切坯、干燥、烧失、烧成、冷却、机加工、检验至首次放行。采购已烧成砖仅包装不能代替制造。 | `skamol-moler-epd-2023`; `skamol-ceramic-brochure`; `jrc-ceramic-bref-2007` |
| b_cohort | quantity | Q 为唯一首次放行干燥裸砖净质量之和，包含已放行期末 FG。制造 Bclose 排除已放行 FG，仅含原料、WIP 和尚未归属的非 WIP 存料及继承交换向量。保留全部失败、零产出、启停、空载、清理和返工负荷。 | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| b_service | service | 放行后真实服务使用原批次 Qc 和观测 H，不在退回、复验或发运时逆转制造或新增 Q。FG 实物使用真实状态质量：期初加按真实 FG 状态计的首次放行砖体、真实退回及真实新增水和材料，等于期末加毛发运、销毁及含蒸发和加工损失的其他已识别实物出口。另保留干基参考 Q 账，不在缺少独立实测水账时将干 Q 直接代入湿实物桥。合并抵消内部参考产品转移。 | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| b_complete | all exchanges | 每卡只表示一个交换。数据验收前，将图中未列但真实存在的化学品、整份制剂、燃料、载体、包装、废物或排放物种各自新增卡片。条件未发生需有证据，未知不得作零。上游供应过程与内含成分仅计一次；内部热、水及废料循环只抵消匹配转移。 | `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007` |
| b_gates | physical boundary | 制造、FG 服务及合并整体质量和相关元素衡算独立于负荷分配。经济份额不缩减毛发运、退回、包装、资产或流体。需记录真实游离水、结构水、反应水和相态及供方载体质量焓回送，不预设锅炉蒸汽或零废水。 | `skamol-moler-epd-2023`; `jrc-ceramic-bref-2007` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare | 原料接收、制备与混合 | required | 按真实操作纳入；卡片条件逐项判定 | foreground production | 每 1 kg 参考流；服务保持原 Qc/H |
| form | 调质、挤出与切坯 | required | 按真实操作纳入；卡片条件逐项判定 | foreground production | 每 1 kg 参考流；服务保持原 Qc/H |
| thermal | 干燥、造孔烧失、烧成与冷却 | required | 按真实操作纳入；卡片条件逐项判定 | foreground production | 每 1 kg 参考流；服务保持原 Qc/H |
| finish | 机加工、检验与首次放行 | required | 按真实操作纳入；卡片条件逐项判定 | foreground production | 每 1 kg 参考流；服务保持原 Qc/H |
| support | 制造维修与环境治理 | required | 按真实操作纳入；卡片条件逐项判定 | foreground production | 每 1 kg 参考流；服务保持原 Qc/H |
| service | 原批次储存、包装与发运服务 | required | 按真实操作纳入；卡片条件逐项判定 | original cohort service | 每 1 kg 参考流；服务保持原 Qc/H |

逐卡按真实存在性采集，不将条件流全部假定存在。无确认 UUID 时仍保留具体单一物理化学名。描述和原生限制属于完整可消费上下文。

### 过程：原料接收、制备与混合（`prepare`）

#### 输入

##### 产品流

###### 含黏土的原始 moler 硅藻土（`moler`）

按实际湿态或干态接收完整天然含黏土硅藻土；破碎、筛分、混合和储存属于前景操作。蛋白石质硅藻壳与天然伴生蒙脱石质黏土仅为成分子账，不再作为独立投入重复采购。原生纯二氧化硅资源或煅烧助滤剂不代表该供货物。

- 选定流：含黏土的原始 moler 硅藻土
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 造孔用未处理木屑（`sawdust`）

称量整份外购未处理木屑，采集实际树种、来源、含水率、灰分及粒径证据。烧失用于造孔，不形成自动能源抵扣。若实际按废物供货，明确改用真实流类型和边界，不增加第二份投入。

- 选定流：造孔用未处理木屑
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 石灰石（`limestone`）

仅在实际配方含石灰石时记录整份供货物；碳酸盐、含水率和杂质分析仅为子账。独立测定实际脱碳与钙留存，不由 EPD 组成区间推定完全分解或固定配方。 原生石灰石产品按 Mass/kg 计，组成纯度等级开采路线地域及供应方未特指。仅用于真实整份石料并独立分析碳酸盐、水和杂质，不代表沉淀纯 CaCO3 或天然地下基本资源。

- 选定流：石灰石 `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_material_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 混料工艺水（`mix_water`）

实际外加水与 moler、木屑自带水分别记录；采集处理来源、温度及实测质量，体积换算需该实际状态下的独立密度。

- 选定流：混料工艺水
- 流属性/单位：Mass / kg
- 数量规则：由 cp_utility_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 外购交流电（`prepare_electricity`）

计量破碎、筛分、输送、混合和原料储存全部运行模式的电量；选择真实地域、电压和供应方。生物质电厂送出流或变压服务不能替代用户侧外购电。

- 选定流：外购交流电
- 流属性/单位：Energy / kWh
- 数量规则：由 cp_utility_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 柴油（`handling_diesel`）

条件纳入实际厂内物料搬运用柴油；记录收货与存量变化，升计量需独立燃油密度。上游供应过程已含的外部运输不重复加入。 原生柴油产品以 Mass/kg 计，燃料牌号配方密度热值炼制地域及供应方未特指。需真实柴油交付规格，不代表水或空气中的柴油排放节点，不预设热值或密度。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_utility_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 废物流

##### 基本流

###### 环境空气中的分子氧（`prepare_air_o2`）

由真实工艺空气带入的 O2；毛量与未反应出口分别记录，不与净氧化量混淆。 条件纳入该阶段真实搬运燃烧进气。 原生基本流 O2，CAS7782-44-7，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 O2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境空气中的分子氮（`prepare_air_n2`）

记录空气带入 N2，区分 N2 转化、NO/NO2 与不含 N2 的总氮。 条件纳入该阶段真实搬运燃烧进气。 原生基本流 N2，CAS7727-37-9，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 N2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境空气中的氩（`prepare_air_ar`）

由真实空气组成和状态记录天然氩质量，不代表外购纯氩或特定 Ar40 同位素。 条件纳入该阶段真实搬运燃烧进气。 原生基本流 Ar，CAS7440-37-1，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 Ar 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 工艺空气带入的大气二氧化碳（`prepare_air_co2`）

将进气大气 CO2 作为独立物种子账测量；它不属于燃料化石碳或木屑碳，保留来源与匹配穿透出口，不自动形成吸收抵扣。 条件纳入该阶段真实搬运燃烧进气。

- 选定流：工艺空气带入的大气二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境工艺空气中的水蒸气（`prepare_air_humidity`）

测量实际湿度、压力、温度和空气毛通量；将环境湿气与原料游离水、结构水及反应水分开。 条件纳入该阶段真实搬运燃烧进气。

- 选定流：环境工艺空气中的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

#### 输出

##### 产品流

###### 湿态 moler 木屑挤出坯料（`wet_feed`）

内部完整湿混坯料，包含实际存在的石灰石；将实测质量、游离水、固体及每项继承交换向量转入成形，不作为新增市场产品或外购料。

- 选定流：湿态 moler 木屑挤出坯料
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 废物流

###### 废弃原始 moler 撒漏料（`raw_spill`）

将实际废弃与回收内返分别计量，保留湿质量、含水率、分析、去向及继承负荷。

- 选定流：废弃原始 moler 撒漏料
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 废弃未处理木屑（`sawdust_discard`）

仅记录单独废弃的木屑；混合坯料废物使用自身物理身份。

- 选定流：废弃未处理木屑
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 废弃石灰石（`limestone_discard`）

条件纳入独立分离的石灰石损失，不代表碳酸盐 CO2 或混合坯料废物。

- 选定流：废弃石灰石
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_prepare`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 基本流

###### 化石源二氧化碳排入空气（`prepare_co2_fossil`）

仅为实际氧化的燃料化石碳；独立区分留存碳、CO、甲烷及未燃物。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 CO2，CAS124-38-9，Mass/kg，向未指定空气排放；化石来源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 CO2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 返回空气的大气二氧化碳（`prepare_co2_passthrough`）

追踪真实进气大气 CO2 及其未变穿透，不与新生燃烧或脱碳 CO2 抵消。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。

- 选定流：返回空气的大气二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 化石源一氧化碳排入空气（`prepare_co_fossil`）

仅记录来自化石燃料的真实分子 CO，不由未分形态总碳或 VOC 换算。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 CO，CAS630-08-0，Mass/kg，向未指定空气排放；化石来源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 CO 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 甲烷 (化石源) (`prepare_methane_fossil`)

仅为单独测量的化石源分子 CH4；VOC 或总碳不能识别甲烷。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生CAS74-82-8分子化石CH4至当期未细分空气，仅Mass/kg。原生别名混入石墨/炭黑、亚甲基/甲醛化合物、沼气、同位素及整股天然气，这些不改变明确CH4/CAS/来源，也不授权替代。仅实际化石来源CH4实测量，不是VOC/TOC总量、生物源甲烷、室内或长期释放。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 一氧化氮 (`prepare_no_air`)

要求独立物种化的 NO 及正确 CAS 和形态；以 NO2 表示的仪器 NOx 总量不等于 NO 质量。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生CAS10102-43-9 NO气体至未细分空气Mass/kg。HNO/亚硝基氢同义词噪声不作采用化学；不是NO2、亚硝酸根、N2O或以NO2计NOx。保留真实独立分子分种和原阶段归属，不设排放因子。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氧化氮排入空气（`prepare_no2_air`）

仅为真实分子 NO2；不得用 NOx 总量、液氮或一氧化二氮代替。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。

- 选定流：二氧化氮排入空气
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氧化硫排入空气（`prepare_so2_air`）

采样分子 SO2 并独立核对硫衡算；不假定总 SOx 全为 SO2。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 SO2，CAS7446-09-5，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 SO2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 水蒸气排入空气（`prepare_water_vapour`）

先分别确定出口环境湿气、原料游离水、黏土脱羟、燃烧反应水及蒸汽携带，再合计真实 H2O 气体；潜热损失不另作外购燃料。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 H2O gas，CAS7732-18-5，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 H2O gas 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 氧 (`prepare_o2_air`)

测量燃烧后未反应分子 O2，不代表净耗氧或高层大气氧。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生CAS7782-44-7分子O2，当期未细分空气Mass/kg。液体、离子及同位素别名不授权这些形态；不是长期、上层大气或外购气体。总出口独立于资源入口和净氧化量实测，不用固定空气比例或按负荷份额缩实物。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氮排入空气（`prepare_n2_air`）

测量跨热过程边界的分子 N2，独立核对真实氮转化。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 N2，CAS7727-37-9，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 N2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 氩排入空气（`prepare_ar_air`）

测量跨边界的实际氩，净反应核算抵消毛穿透，不增加外购气体投入。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 Ar，CAS7440-37-1，Mass/kg，向未指定空气排放；非长期，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 Ar 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_prepare 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_prepare`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

### 过程：调质、挤出与切坯（`form`）

#### 输入

##### 产品流

###### 湿态 moler 木屑挤出坯料（`forming_feed`）

仅接收同一 wet_feed 内部转移及其继承向量一次；调质、脱气后经实际模口挤出并切至目标几何形状。

- 选定流：湿态 moler 木屑挤出坯料
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_form 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_form`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 外购交流电（`form_electricity`）

计量挤出、真空、切坯和生坯转移，包括废品、启停、空载和清理。采用实际供电方和电压身份，不指定通用电网因子。

- 选定流：外购交流电
- 流属性/单位：Energy / kWh
- 数量规则：由 cp_utility_form 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_form`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 外购工艺蒸汽（`conditioning_steam`）

仅条件纳入真实调质蒸汽，不预设蒸汽锅炉。按声明焓基准记录供热量及载体质量、压力、温度、干度和供水约定。整份供热过程仅计其上游燃料一次。

- 选定流：外购工艺蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：由 cp_utility_form 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_form`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工艺蒸汽回送凝结水（`steam_condensate`）

条件纳入与真实外购蒸汽关联的外部产品回送，测量回送质量、温度、焓和去向。未回送载体进入独立有证据的水蒸气、废水或留存水，不假定蒸汽全凝结，不重复购买水。

- 选定流：工艺蒸汽回送凝结水
- 流属性/单位：Mass / kg
- 数量规则：由 cp_utility_form 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_form`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 未烧成形 moler 砖坯（`green_body`）

按湿质量、干固体、含水率、几何形状和全部继承负荷转入干燥；内部循环的挤出切边抵消实物流但保留处理负荷。

- 选定流：未烧成形 moler 砖坯
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_form 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_form`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 废物流

###### 废弃未烧 moler 木屑坯料（`green_discard`）

称量不可回收生坯废品及其实际含水率；内部循环不产生新产量或自动避免原料抵扣。

- 选定流：废弃未烧 moler 木屑坯料
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_form 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_form`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 基本流

### 过程：干燥、造孔烧失、烧成与冷却（`thermal`）

#### 输入

##### 产品流

###### 未烧成形 moler 砖坯（`thermal_green`）

仅接收匹配的 green_body 转移一次；保留干燥器和窑炉阶段期初期末库存及每交换继承向量。按真实过程蒸发游离水并烧失木屑；本终端必须经过烧成。

- 选定流：未烧成形 moler 砖坯
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 天然气（`kiln_gas`）

仅纳入实际燃气干燥或烧成；由真实燃气供应证据和状态校正气量确定总热值。另保留载体质量和 C/H 组成用于衡算。不混淆总热值、低位热值与有效供热，不同时购买整份供热过程及其中燃料。 原生产品流限定 GLO 工厂端生产混合及工业炉燃烧，参考属性为 Gross calorific value/MJ，不是质量、低位热值或有效供热。仅用于真实对应燃气路线，独立核实供应组成、真实总热值及载体质量，不重复整份外购供热过程。

- 选定流：天然气 `4bfd1abb-9106-495a-a291-ce410f205691`
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：由 cp_utility_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 外购交流电（`thermal_electricity`）

将风机、控制及真实电加热与燃气分开计量。电烧成是条件性能源选择，不加入虚构固定份额；采用真实供电方和电压。

- 选定流：外购交流电
- 流属性/单位：Energy / kWh
- 数量规则：由 cp_utility_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 外购工艺热（`purchased_heat`）

仅条件纳入外购热：记录载体供回状态、计量焓差及供方燃料和水约定。窑炉内部回收热为合并时抵消的内部转移，不自动抵扣替代供热。

- 选定流：外购工艺热
- 流属性/单位：Energy / MJ
- 数量规则：由 cp_utility_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 废物流

##### 基本流

###### 环境空气中的分子氧（`air_o2`）

由真实工艺空气带入的 O2；毛量与未反应出口分别记录，不与净氧化量混淆。 原生基本流 O2，CAS7782-44-7，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 O2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境空气中的分子氮（`air_n2`）

记录空气带入 N2，区分 N2 转化、NO/NO2 与不含 N2 的总氮。 原生基本流 N2，CAS7727-37-9，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 N2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境空气中的氩（`air_ar`）

由真实空气组成和状态记录天然氩质量，不代表外购纯氩或特定 Ar40 同位素。 原生基本流 Ar，CAS7440-37-1，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 Ar 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 工艺空气带入的大气二氧化碳（`air_co2`）

将进气大气 CO2 作为独立物种子账测量；它不属于燃料化石碳或木屑碳，保留来源与匹配穿透出口，不自动形成吸收抵扣。

- 选定流：工艺空气带入的大气二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境工艺空气中的水蒸气（`air_humidity`）

测量实际湿度、压力、温度和空气毛通量；将环境湿气与原料游离水、结构水及反应水分开。

- 选定流：环境工艺空气中的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

#### 输出

##### 产品流

###### 热交换器回送水（`heat_return_water`）

条件纳入外购载体供热的真实外部液态回水；独立记录质量、供回温度、焓及水质。不作为基本流排放，也不默认复制一份蒸汽凝结水。

- 选定流：热交换器回送水
- 流属性/单位：Mass / kg
- 数量规则：由 cp_utility_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 已烧未机加工 moler 隔热砖体（`fired_body`）

转移精加工和最终验收前的已烧冷却砖体；分别记录造孔烧失、反应质量损失、几何收缩和冷却吸湿。不转用固定烧成曲线或普通硅砖温度。

- 选定流：已烧未机加工 moler 隔热砖体
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 废物流

###### 烧成不合格 moler 隔热砖（`kiln_reject`）

记录全部烧成废品、破损砖及破坏性烧成试样的实际组成和含水率；可销售砖体不作为废物抵扣。

- 选定流：烧成不合格 moler 隔热砖
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_thermal`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 基本流

###### 化石源二氧化碳排入空气（`co2_fossil`）

仅为实际氧化的燃料化石碳；独立区分留存碳、CO、甲烷及未燃物。 原生基本流 CO2，CAS124-38-9，Mass/kg，向未指定空气排放；化石来源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 CO2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 生物源二氧化碳排入空气（`co2_biogenic`）

由实测木屑含水率、干基碳及留存量确定真实氧化；不预设碳中性，也不再增加一份燃料投入。 原生基本流 CO2，CAS124-38-9，Mass/kg，向未指定空气排放；生物来源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 CO2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 碳酸盐分解二氧化碳（`co2_mineral`）

以独立分析及碳酸盐留存测量求取石灰石和天然 moler 碳酸盐转化；矿物碳归类未核实前不硬套化石标记 UUID。

- 选定流：碳酸盐分解二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 返回空气的大气二氧化碳（`co2_passthrough`）

追踪真实进气大气 CO2 及其未变穿透，不与新生燃烧或脱碳 CO2 抵消。

- 选定流：返回空气的大气二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 化石源一氧化碳排入空气（`co_fossil`）

仅记录来自化石燃料的真实分子 CO，不由未分形态总碳或 VOC 换算。 原生基本流 CO，CAS630-08-0，Mass/kg，向未指定空气排放；化石来源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 CO 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 一氧化碳（生物源） (`co_biogenic`)

分别记录实测木源 CO，化石 CO 身份不能替代其碳来源。 原生CAS630-08-0分子生物源CO，当期未细分空气Mass/kg。实际木源CO须有独立来源/分种证据；低温液体、废气、烟气别名既不代表低温液体也不代表整股废气。原生一般备注中的版本文字不是性能/路线证据。不是化石CO、总碳/VOC或延迟/长期释放。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 甲烷 (化石源) (`methane_fossil`)

仅为单独测量的化石源分子 CH4；VOC 或总碳不能识别甲烷。 原生CAS74-82-8分子化石CH4至当期未细分空气，仅Mass/kg。原生别名混入石墨/炭黑、亚甲基/甲醛化合物、沼气、同位素及整股天然气，这些不改变明确CH4/CAS/来源，也不授权替代。仅实际化石来源CH4实测量，不是VOC/TOC总量、生物源甲烷、室内或长期释放。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 甲烷 (生物源) (`methane_biogenic`)

仅为单独实测且来源明确的木源分子 CH4，不假定碳中性。 原生CAS74-82-8分子生物源CH4至当期未细分空气Mass/kg。实测木碳来源与化石甲烷、环境穿透分开，不假定碳中和。混杂碳/石墨/亚甲基/沼气/同位素/天然气别名不授权这些物质、整混合物或当量指标，也不用室内/长期介质替代。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 一氧化氮 (`no_air`)

要求独立物种化的 NO 及正确 CAS 和形态；以 NO2 表示的仪器 NOx 总量不等于 NO 质量。 原生CAS10102-43-9 NO气体至未细分空气Mass/kg。HNO/亚硝基氢同义词噪声不作采用化学；不是NO2、亚硝酸根、N2O或以NO2计NOx。保留真实独立分子分种和原阶段归属，不设排放因子。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氧化氮排入空气（`no2_air`）

仅为真实分子 NO2；不得用 NOx 总量、液氮或一氧化二氮代替。

- 选定流：二氧化氮排入空气
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氧化硫排入空气（`so2_air`）

采样分子 SO2 并独立核对硫衡算；不假定总 SOx 全为 SO2。 原生基本流 SO2，CAS7446-09-5，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 SO2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 氟化氢排入空气（`hf_air`）

仅纳入采样证明的真实 HF；总氟与单质 F2 身份不同。 原生基本流 HF，CAS7664-39-3，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 HF 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：氟化氢 `08a91e70-3ddc-11dd-9804-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 氯化氢 (`hcl_air`)

仅为真实分子 HCl，并测定排放介质；总氯或外购酸制剂不代表该大气排放。 原生CAS7647-01-0分子HCl至未细分空气Mass/kg。酸、水溶清洁剂、试剂和同位素别名不授权整制剂质量、盐或总氯。真实HCl相态与伴随水独立实测，不用长期/室内介质替代。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 水蒸气排入空气（`water_vapour`）

先分别确定出口环境湿气、原料游离水、黏土脱羟、燃烧反应水及蒸汽携带，再合计真实 H2O 气体；潜热损失不另作外购燃料。 原生基本流 H2O gas，CAS7732-18-5，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 H2O gas 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 氧 (`o2_air`)

测量燃烧后未反应分子 O2，不代表净耗氧或高层大气氧。 原生CAS7782-44-7分子O2，当期未细分空气Mass/kg。液体、离子及同位素别名不授权这些形态；不是长期、上层大气或外购气体。总出口独立于资源入口和净氧化量实测，不用固定空气比例或按负荷份额缩实物。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氮排入空气（`n2_air`）

测量跨热过程边界的分子 N2，独立核对真实氮转化。 原生基本流 N2，CAS7727-37-9，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 N2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 氩排入空气（`ar_air`）

测量跨边界的实际氩，净反应核算抵消毛穿透，不增加外购气体投入。 原生基本流 Ar，CAS7440-37-1，Mass/kg，向未指定空气排放；非长期，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 Ar 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 晶体石英颗粒排入空气（`quartz_air`）

仅为单独测定的晶体石英物种及颗粒类别；总粉尘、PM 或蛋白石质原始硅藻硅不自动等同晶体 SiO2。实际存在的无定形或其他物种须另增卡片。

- 选定流：晶体石英颗粒排入空气
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_thermal 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_thermal`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

### 过程：机加工、检验与首次放行（`finish`）

#### 输入

##### 产品流

###### 已烧未机加工 moler 隔热砖体（`finish_body`）

仅接收同一 fired_body 质量及继承负荷一次；机加工规定各表面、除尘并验证尺寸和实际热工、机械验收后首次放行。

- 选定流：已烧未机加工 moler 隔热砖体
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_finish 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_finish`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 外购交流电（`finish_electricity`）

计量锯切、砂磨、抽尘、检验及失败试验用电，采用真实地域和电压。最终放行前全部返工保留在制造批次。

- 选定流：外购交流电
- 流属性/单位：Energy / kWh
- 数量规则：由 cp_utility_finish 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_finish`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 机加工与清洁水（`finish_water`）

条件纳入真实湿加工或清洗水；干式砂磨路线不得隐含新增湿工序。记录加入量、实际密度状态及排放。

- 选定流：机加工与清洁水
- 流属性/单位：Mass / kg
- 数量规则：由 cp_utility_finish 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_finish`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 碳化硅砂纸（`abrasive_paper`）

条件纳入实际砂磨使用的整份外购碳化硅砂纸，背基、黏结剂、磨粒和含水率为子账，不重复采购。工具化学组成不同时新增真实原子卡片。

- 选定流：碳化硅砂纸
- 流属性/单位：Mass / kg
- 数量规则：由 cp_material_finish 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_finish`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 烧成 moler 隔热砖（`finished_brick`）

以真实烧成、冷却、机加工及验收后首次记录的最终质量放行为门，计一千克干燥裸装完整 moler 隔热砖。已放行期末成品库存仅计入 Q 一次；包装不进入 Q，后续发运或复验不新增 Q。 原生产品流为工厂端生产混合，未固定地域、CAS、等级或单一二氧化硅物相。完整定义包含经高温烧成且具热震及结构稳定性的硅质砖。仅采用所引原厂终端支持的真实烧成机加工蛋白石硅藻与黏土背衬隔热砖，不用于未烧粉体、普通黏土建筑砖、致密石英硅砖或任意外购制品。原生分类称硅质土以外（37320），与宽泛且包含硅质材料的定义存在差异；完整披露该分类矛盾，不视为已接受映射，也不以此豁免材料物相路线类型硬冲突。真实等级、性能和供应过程适用性须另有证据。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`skamol-moler-epd-2023`; `skamol-ceramic-brochure`

##### 废物流

###### 废弃已烧 moler 机加工边料（`finish_scrap`）

原始记录分别称量真实加工边料、不合格砖及破坏性试样；继承负荷仅计一次，并保留真实废物去向。

- 选定流：废弃已烧 moler 机加工边料
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_finish 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_finish`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 废碳化硅砂纸（`spent_abrasive`）

条件纳入附带砖粉的整份废砂纸，不再将其中背基、磨粒作为第二份废弃物。

- 选定流：废碳化硅砂纸
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_finish 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_finish`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### moler 加工污泥（`grinding_sludge`）

条件纳入真实湿加工分离浆泥；测量干固体、游离水和实际化学组成。

- 选定流：moler 加工污泥
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_finish 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_finish`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### moler 工艺废水（`process_wastewater`）

条件纳入跨界送处理的整份废水；溶解物分析为子账。厂内处理后真实排放才采用独立基本流卡；COD 不作为分子质量。

- 选定流：moler 工艺废水
- 流属性/单位：Mass / kg
- 数量规则：由 cp_residue_finish 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_finish`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 基本流

### 过程：制造维修与环境治理（`support`）

#### 输入

##### 产品流

###### 陶瓷烧成窑炉（`kiln_asset`）

真实整窑在装存量和投产与当期服务负荷分账。不设固定寿命或每千克一整窑。内含炉衬不重复购入整份资本；真实替换炉衬另有卡片。

- 选定流：陶瓷烧成窑炉
- 流属性/单位：Number of items / item
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 陶瓷砖挤出机（`extruder_asset`）

保留挤出机期初期末新旧存量、部署、维修、退役和真实使用记录；当期服务归属需实测使用量及继承向量。

- 选定流：陶瓷砖挤出机
- 流属性/单位：Number of items / item
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 钢制挤出模口（`extrusion_die`）

仅记录真实替换钢模口加入及服务磨损，保留实际合金及质量，不假定每砖耗模量。

- 选定流：钢制挤出模口
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 黏土质窑炉耐火炉衬（`kiln_lining`）

条件纳入真实黏土质替换炉衬及矿物组成、含水记录；采用其他耐火材料时新增其物理身份。

- 选定流：黏土质窑炉耐火炉衬
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 润滑油制剂（`lubricant`）

真实供货整份润滑油制剂仅计一次；在装流体期初期末存量、泄漏、排油及留存水分分别记实物账。

- 选定流：润滑油制剂
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 聚酯除尘滤袋（`filter_bag`）

条件纳入真实整份聚酯织物滤袋；记录背基、表面处理、捕集粉尘及更换。其他滤材化学组成须独立卡片。

- 选定流：聚酯除尘滤袋
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 氢氧化钙吸收剂制剂（`lime_sorbent`）

条件纳入真实酸气处理整份供货试剂；区分粉体或浆液，载水与活性含量为子账。不在不存在的现场复制烟气洗涤装置。

- 选定流：氢氧化钙吸收剂制剂
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 外购交流电（`support_electricity`）

计量真实除尘、维修和污染控制用电，仅对实际共用负荷使用有证据的因果驱动分配。

- 选定流：外购交流电
- 流属性/单位：Energy / kWh
- 数量规则：由 cp_utility_support 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_support`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 烟气处理水（`control_water`）

条件纳入真实治理用水；独立确定回用、补水和全部真实出口，不藏入零值。

- 选定流：烟气处理水
- 流属性/单位：Mass / kg
- 数量规则：由 cp_utility_support 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_support`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 退役陶瓷窑炉（`retired_kiln`）

按交给接收方的真实整份资产记录，不再将全部内含组件重复废弃。

- 选定流：退役陶瓷窑炉
- 流属性/单位：Number of items / item
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 退役陶瓷挤出机（`retired_extruder`）

记录真实退役整机、水分和流体状态，以及退役边界前已单独拆出的组件。

- 选定流：退役陶瓷挤出机
- 流属性/单位：Number of items / item
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 废钢制挤出模口（`spent_die`）

仅为真实拆出钢模金属，不假定回收替代抵扣。

- 选定流：废钢制挤出模口
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 废黏土质窑炉衬（`spent_refractory`）

真实拆出炉衬及所附 moler 粉尘和水分；化学组成不同部位须另列卡片。

- 选定流：废黏土质窑炉衬
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 废润滑油（`spent_oil`）

真实排出润滑油包含污染物及水；环境泄漏需按物种和介质另列。

- 选定流：废润滑油
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 捕集未烧 moler 坯料粉尘（`captured_raw_dust`）

包含真实组分和水分的原料阶段捕集坯料粉尘，仅计真实对外废弃；内循环留存不同时作为排放 PM 质量。

- 选定流：捕集未烧 moler 坯料粉尘
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 捕集已烧 moler 陶瓷粉尘（`captured_fired_dust`）

烧成阶段捕集粉尘保留真实变化相态组成，仅计真实对外废弃，区别于逸散排放及留存内循环。

- 选定流：捕集已烧 moler 陶瓷粉尘
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 废聚酯除尘滤袋（`spent_filter`）

整份废织物滤袋包含残留粉尘，已单独卸出的粉尘不再嵌入。

- 选定流：废聚酯除尘滤袋
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

###### 废氢氧化钙吸收剂（`spent_sorbent`）

真实反应与未反应吸收剂整份残渣；独立分析钙盐、水和捕集物种，不用一个反应残差确定两种未知物。

- 选定流：废氢氧化钙吸收剂
- 流属性/单位：Mass / kg
- 数量规则：由 cp_asset 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010`

##### 基本流

### 过程：原批次储存、包装与发运服务（`service`）

#### 输入

##### 产品流

###### 烧成 moler 隔热砖（`released_to_service`）

接收原放行批次 Qc 及制造向量，不再计一次制造；在观测期限 H 内记录真实储存、搬运、包装、发运、退回和放行后返工增量。服务不形成第二次首次放行产出。 原生产品流为工厂端生产混合，未固定地域、CAS、等级或单一二氧化硅物相。完整定义包含经高温烧成且具热震及结构稳定性的硅质砖。仅采用所引原厂终端支持的真实烧成机加工蛋白石硅藻与黏土背衬隔热砖，不用于未烧粉体、普通黏土建筑砖、致密石英硅砖或任意外购制品。原生分类称硅质土以外（37320），与宽泛且包含硅质材料的定义存在差异；完整披露该分类矛盾，不视为已接受映射，也不以此豁免材料物相路线类型硬冲突。真实等级、性能和供应过程适用性须另有证据。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：`skamol-moler-epd-2023`; `skamol-ceramic-brochure`

###### 聚乙烯包覆膜（`pe_wrap`）

记录一份真实完整聚乙烯薄膜制品；胶黏或多层材料需用实际整份供货身份。全部互斥包装存量和毛流向均须记录。 原生聚乙烯薄膜产品 CAS9002-88-4、工厂端生产混合、Mass/kg，未固定支化等级供应方和地域。箱包分类与一致的 PE CAS名称薄膜身份存在孤立差异。说明将 PET 作为竞争材料比较，并未将 PET 纳入本 PE 身份。仅用于真实单份 PE 薄膜，配方、回收含量及供应过程另核。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 纸板保护片（`cardboard_pack`）

将真实纸板保护片与薄膜和托盘分开记录；若用整份瓦楞箱，属于其他供货制品，需另列卡片。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：纸板保护片
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 欧标木托盘（`euro_pallet`）

仅为真实完整欧标木托盘；记录新用与周转状态、附着库存、外部退回、维修、含水和处置。内部再用不再作采购，也不进入砖 Q。 原生产品为完整 Wooden pallet (EURO)，Mass/kg；不猜单托盘质量或固定周转寿命。记录明确为 ELCD3.2 工作账号本地重建，保留规范属性且另记未支持来源属性，该溯源不是独立科学批准。需核真实欧标配置、含水率及上游供应过程。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 聚丙烯捆扎带（`pp_strap`）

仅条件纳入真实 PP 捆扎带；纱线、切片、扎带和 PE 薄膜不能替代其供货形态。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 外购交流电（`service_electricity`）

计量原批次观测期限 H 内的储存、包装、搬运、退回检验和真实放行后返工电量；保持原 Qc，供电方和电压须匹配现场。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：外购交流电
- 流属性/单位：Energy / kWh
- 数量规则：由 cp_utility_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 柴油（`service_diesel`）

仅为原批次仓储或叉车服务真实增量燃料；砖毛实物流不按经济负荷份额缩减。 原生柴油产品以 Mass/kg 计，燃料牌号配方密度热值炼制地域及供应方未特指。需真实柴油交付规格，不代表水或空气中的柴油排放节点，不预设热值或密度。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_utility_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 烧成 moler 隔热砖（`returned_brick`）

条件纳入与原发运对应的真实退回 R，记录水分或损伤变化；保留原制造历史，仅采实际新增搬运、水、损失和返工。不假定 R 等于原交付质量。 原生产品流为工厂端生产混合，未固定地域、CAS、等级或单一二氧化硅物相。完整定义包含经高温烧成且具热震及结构稳定性的硅质砖。仅采用所引原厂终端支持的真实烧成机加工蛋白石硅藻与黏土背衬隔热砖，不用于未烧粉体、普通黏土建筑砖、致密石英硅砖或任意外购制品。原生分类称硅质土以外（37320），与宽泛且包含硅质材料的定义存在差异；完整披露该分类矛盾，不视为已接受映射，也不以此豁免材料物相路线类型硬冲突。真实等级、性能和供应过程适用性须另有证据。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：`skamol-moler-epd-2023`; `skamol-ceramic-brochure`

###### 放行后清洁水（`service_cleaning_water`）

条件纳入单独计量的真实退回或搬运清洁水；独立保留新增水、留存水、蒸发 H2O 及实际废水，不为干包装砖假定湿服务。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：放行后清洁水
- 流属性/单位：Mass / kg
- 数量规则：由 cp_utility_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 聚乙烯包覆膜 (`pe_attached_inbound`)

记录一份真实完整聚乙烯薄膜制品；胶黏或多层材料需用实际整份供货身份。全部互斥包装存量和毛流向均须记录。 原生聚乙烯薄膜产品 CAS9002-88-4、工厂端生产混合、Mass/kg，未固定支化等级供应方和地域。箱包分类与一致的 PE CAS名称薄膜身份存在孤立差异。说明将 PET 作为竞争材料比较，并未将 PET 纳入本 PE 身份。仅用于真实单份 PE 薄膜，配方、回收含量及供应过程另核。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 真实随原料/其他供货附带到厂I，即使包材已含在供方价格中。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 聚乙烯包覆膜 (`pe_external_return_in`)

记录一份真实完整聚乙烯薄膜制品；胶黏或多层材料需用实际整份供货身份。全部互斥包装存量和毛流向均须记录。 原生聚乙烯薄膜产品 CAS9002-88-4、工厂端生产混合、Mass/kg，未固定支化等级供应方和地域。箱包分类与一致的 PE CAS名称薄膜身份存在孤立差异。说明将 PET 作为竞争材料比较，并未将 PET 纳入本 PE 身份。仅用于真实单份 PE 薄膜，配方、回收含量及供应过程另核。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际外部退回收讫ER，独立于新购P和附带I。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 纸板保护片 (`cardboard_attached_inbound`)

将真实纸板保护片与薄膜和托盘分开记录；若用整份瓦楞箱，属于其他供货制品，需另列卡片。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 真实随原料/其他供货附带到厂I，即使包材已含在供方价格中。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：纸板保护片
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 纸板保护片 (`cardboard_external_return_in`)

将真实纸板保护片与薄膜和托盘分开记录；若用整份瓦楞箱，属于其他供货制品，需另列卡片。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际外部退回收讫ER，独立于新购P和附带I。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：纸板保护片
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 欧标木托盘 (`pallet_attached_inbound`)

仅为真实完整欧标木托盘；记录新用与周转状态、附着库存、外部退回、维修、含水和处置。内部再用不再作采购，也不进入砖 Q。 原生产品为完整 Wooden pallet (EURO)，Mass/kg；不猜单托盘质量或固定周转寿命。记录明确为 ELCD3.2 工作账号本地重建，保留规范属性且另记未支持来源属性，该溯源不是独立科学批准。需核真实欧标配置、含水率及上游供应过程。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 真实随原料/其他供货附带到厂I，即使包材已含在供方价格中。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 欧标木托盘 (`pallet_external_return_in`)

仅为真实完整欧标木托盘；记录新用与周转状态、附着库存、外部退回、维修、含水和处置。内部再用不再作采购，也不进入砖 Q。 原生产品为完整 Wooden pallet (EURO)，Mass/kg；不猜单托盘质量或固定周转寿命。记录明确为 ELCD3.2 工作账号本地重建，保留规范属性且另记未支持来源属性，该溯源不是独立科学批准。需核真实欧标配置、含水率及上游供应过程。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际外部退回收讫ER，独立于新购P和附带I。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 聚丙烯捆扎带 (`pp_attached_inbound`)

仅条件纳入真实 PP 捆扎带；纱线、切片、扎带和 PE 薄膜不能替代其供货形态。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 真实随原料/其他供货附带到厂I，即使包材已含在供方价格中。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 聚丙烯捆扎带 (`pp_external_return_in`)

仅条件纳入真实 PP 捆扎带；纱线、切片、扎带和 PE 薄膜不能替代其供货形态。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际外部退回收讫ER，独立于新购P和附带I。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 木托盘维修板材 (`pallet_repair_wood`)

仅真实独立收货用于木托盘修理的具体木板材，采树种/处理、干木及自由/吸附水、供方、归属和原Qc/H。不是完整欧标托盘或其UUID；整包装已含者仅作子账。新增实物木/水即使留在期末库存也保留真实收货，另供紧固件/胶须单建身份，不假定修理或寿命。

- 选定流：木托盘维修板材
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

##### 废物流

##### 基本流

###### 环境空气中的分子氧（`service_air_o2`）

由真实工艺空气带入的 O2；毛量与未反应出口分别记录，不与净氧化量混淆。 条件纳入该阶段真实搬运燃烧进气。 原生基本流 O2，CAS7782-44-7，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 O2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境空气中的分子氮（`service_air_n2`）

记录空气带入 N2，区分 N2 转化、NO/NO2 与不含 N2 的总氮。 条件纳入该阶段真实搬运燃烧进气。 原生基本流 N2，CAS7727-37-9，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 N2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境空气中的氩（`service_air_ar`）

由真实空气组成和状态记录天然氩质量，不代表外购纯氩或特定 Ar40 同位素。 条件纳入该阶段真实搬运燃烧进气。 原生基本流 Ar，CAS7440-37-1，Mass/kg，来自空气的可再生元素资源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 Ar 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 工艺空气带入的大气二氧化碳（`service_air_co2`）

将进气大气 CO2 作为独立物种子账测量；它不属于燃料化石碳或木屑碳，保留来源与匹配穿透出口，不自动形成吸收抵扣。 条件纳入该阶段真实搬运燃烧进气。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：工艺空气带入的大气二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 环境工艺空气中的水蒸气（`service_air_humidity`）

测量实际湿度、压力、温度和空气毛通量；将环境湿气与原料游离水、结构水及反应水分开。 条件纳入该阶段真实搬运燃烧进气。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 此H2O账也覆盖真实仓储/包装维修的吸释水，即使没有燃料燃烧；环境空气总入口/出口与包材实际摄取/释放分账，扣除其他流已携水而不取消留在期末的真实新增水。不假定任何湿过程或水量。

- 选定流：环境工艺空气中的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

#### 输出

##### 产品流

###### 烧成 moler 隔热砖（`gross_dispatch`）

按原批次和实际发运状态记录毛发运 G；不将 G 作新产量，不在 Q 外另加期末 FG。归一化服务出口是原批次服务账数量，原始 G 实物量始终不分配。 原生产品流为工厂端生产混合，未固定地域、CAS、等级或单一二氧化硅物相。完整定义包含经高温烧成且具热震及结构稳定性的硅质砖。仅采用所引原厂终端支持的真实烧成机加工蛋白石硅藻与黏土背衬隔热砖，不用于未烧粉体、普通黏土建筑砖、致密石英硅砖或任意外购制品。原生分类称硅质土以外（37320），与宽泛且包含硅质材料的定义存在差异；完整披露该分类矛盾，不视为已接受映射，也不以此豁免材料物相路线类型硬冲突。真实等级、性能和供应过程适用性须另有证据。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：耐火砖 `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：`skamol-moler-epd-2023`; `skamol-ceramic-brochure`

###### 聚乙烯包覆膜 (`pe_gross_shipped`)

记录一份真实完整聚乙烯薄膜制品；胶黏或多层材料需用实际整份供货身份。全部互斥包装存量和毛流向均须记录。 原生聚乙烯薄膜产品 CAS9002-88-4、工厂端生产混合、Mass/kg，未固定支化等级供应方和地域。箱包分类与一致的 PE CAS名称薄膜身份存在孤立差异。说明将 PET 作为竞争材料比较，并未将 PET 纳入本 PE 身份。仅用于真实单份 PE 薄膜，配方、回收含量及供应过程另核。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际随总发运S外出或独立发出，不是净发运。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 聚乙烯包覆膜 (`pe_external_return_out`)

记录一份真实完整聚乙烯薄膜制品；胶黏或多层材料需用实际整份供货身份。全部互斥包装存量和毛流向均须记录。 原生聚乙烯薄膜产品 CAS9002-88-4、工厂端生产混合、Mass/kg，未固定支化等级供应方和地域。箱包分类与一致的 PE CAS名称薄膜身份存在孤立差异。说明将 PET 作为竞争材料比较，并未将 PET 纳入本 PE 身份。仅用于真实单份 PE 薄膜，配方、回收含量及供应过程另核。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际向外退回EO，独立于S和废物W。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 纸板保护片 (`cardboard_gross_shipped`)

将真实纸板保护片与薄膜和托盘分开记录；若用整份瓦楞箱，属于其他供货制品，需另列卡片。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际随总发运S外出或独立发出，不是净发运。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：纸板保护片
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 纸板保护片 (`cardboard_external_return_out`)

将真实纸板保护片与薄膜和托盘分开记录；若用整份瓦楞箱，属于其他供货制品，需另列卡片。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际向外退回EO，独立于S和废物W。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：纸板保护片
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 欧标木托盘 (`pallet_gross_shipped`)

仅为真实完整欧标木托盘；记录新用与周转状态、附着库存、外部退回、维修、含水和处置。内部再用不再作采购，也不进入砖 Q。 原生产品为完整 Wooden pallet (EURO)，Mass/kg；不猜单托盘质量或固定周转寿命。记录明确为 ELCD3.2 工作账号本地重建，保留规范属性且另记未支持来源属性，该溯源不是独立科学批准。需核真实欧标配置、含水率及上游供应过程。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际随总发运S外出或独立发出，不是净发运。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 欧标木托盘 (`pallet_external_return_out`)

仅为真实完整欧标木托盘；记录新用与周转状态、附着库存、外部退回、维修、含水和处置。内部再用不再作采购，也不进入砖 Q。 原生产品为完整 Wooden pallet (EURO)，Mass/kg；不猜单托盘质量或固定周转寿命。记录明确为 ELCD3.2 工作账号本地重建，保留规范属性且另记未支持来源属性，该溯源不是独立科学批准。需核真实欧标配置、含水率及上游供应过程。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际向外退回EO，独立于S和废物W。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 聚丙烯捆扎带 (`pp_gross_shipped`)

仅条件纳入真实 PP 捆扎带；纱线、切片、扎带和 PE 薄膜不能替代其供货形态。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际随总发运S外出或独立发出，不是净发运。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 聚丙烯捆扎带 (`pp_external_return_out`)

仅条件纳入真实 PP 捆扎带；纱线、切片、扎带和 PE 薄膜不能替代其供货形态。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 实际向外退回EO，独立于S和废物W。 只计本具体包装配置真实总实物方向；保留所有权、原批次Qc/H及继承历史，不是新的砖产量或联产品。供方整包装已含胶/印刷/载水只作子账，不重复外购或母子质量；与其他实测方向互斥，期末留存不取消真实入流。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

##### 废物流

###### 废弃已放行 moler 砖（`service_brick_waste`）

真实放行后销毁，保留原批次继承历史及实际新增湿干状态；销毁不从 Q 扣除此前有效首次放行。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：废弃已放行 moler 砖
- 流属性/单位：Mass / kg
- 数量规则：由 cp_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 废弃聚乙烯包覆膜（`pe_waste`）

单独计量实际废弃制品及真实水分和污染；包装实物衡算仅计该出口一次，不按经济分配份额缩减。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：废弃聚乙烯包覆膜
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 废弃聚丙烯捆扎带（`pp_waste`）

单独计量实际废弃制品及真实水分和污染；包装实物衡算仅计该出口一次，不按经济分配份额缩减。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：废弃聚丙烯捆扎带
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 废弃纸板保护片（`cardboard_waste`）

单独计量实际废弃制品及真实水分和污染；包装实物衡算仅计该出口一次，不按经济分配份额缩减。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：废弃纸板保护片
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 废弃欧标木托盘（`pallet_waste`）

单独计量实际废弃制品及真实水分和污染；包装实物衡算仅计该出口一次，不按经济分配份额缩减。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：废弃欧标木托盘
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

###### 放行后 moler 清洁废水（`service_wastewater`）

条件纳入真实清洁废水整份跨界处理流；独立分析所含陶瓷固体、水和溶解物，不默认零废水或虚构 COD 分子。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：放行后 moler 清洁废水
- 流属性/单位：Mass / kg
- 数量规则：由 cp_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：`skamol-moler-epd-2023`; `jrc-ceramic-bref-2007`

###### 维修移除废木托盘板 (`removed_pallet_wood`)

实际修理移除的旧木板，按真实干木、含水/污染和去向独立称量；不是整只托盘退役，不重复W或另一已记出口。再用/销售按真实Product功能与边界判定，不自动当废物、负荷扣减或回收信用。

- 选定流：维修移除废木托盘板
- 流属性/单位：Mass / kg
- 数量规则：由 cp_pack 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`skamol-moler-epd-2023`

##### 基本流

###### 化石源二氧化碳排入空气（`service_co2_fossil`）

仅为实际氧化的燃料化石碳；独立区分留存碳、CO、甲烷及未燃物。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 CO2，CAS124-38-9，Mass/kg，向未指定空气排放；化石来源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 CO2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 返回空气的大气二氧化碳（`service_co2_passthrough`）

追踪真实进气大气 CO2 及其未变穿透，不与新生燃烧或脱碳 CO2 抵消。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：返回空气的大气二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 化石源一氧化碳排入空气（`service_co_fossil`）

仅记录来自化石燃料的真实分子 CO，不由未分形态总碳或 VOC 换算。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 CO，CAS630-08-0，Mass/kg，向未指定空气排放；化石来源，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 CO 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 甲烷 (化石源) (`service_methane_fossil`)

仅为单独测量的化石源分子 CH4；VOC 或总碳不能识别甲烷。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 原生CAS74-82-8分子化石CH4至当期未细分空气，仅Mass/kg。原生别名混入石墨/炭黑、亚甲基/甲醛化合物、沼气、同位素及整股天然气，这些不改变明确CH4/CAS/来源，也不授权替代。仅实际化石来源CH4实测量，不是VOC/TOC总量、生物源甲烷、室内或长期释放。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 一氧化氮 (`service_no_air`)

要求独立物种化的 NO 及正确 CAS 和形态；以 NO2 表示的仪器 NOx 总量不等于 NO 质量。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 原生CAS10102-43-9 NO气体至未细分空气Mass/kg。HNO/亚硝基氢同义词噪声不作采用化学；不是NO2、亚硝酸根、N2O或以NO2计NOx。保留真实独立分子分种和原阶段归属，不设排放因子。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氧化氮排入空气（`service_no2_air`）

仅为真实分子 NO2；不得用 NOx 总量、液氮或一氧化二氮代替。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：二氧化氮排入空气
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氧化硫排入空气（`service_so2_air`）

采样分子 SO2 并独立核对硫衡算；不假定总 SOx 全为 SO2。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 SO2，CAS7446-09-5，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 SO2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 水蒸气排入空气（`service_water_vapour`）

先分别确定出口环境湿气、原料游离水、黏土脱羟、燃烧反应水及蒸汽携带，再合计真实 H2O 气体；潜热损失不另作外购燃料。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 H2O gas，CAS7732-18-5，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 H2O gas 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 此H2O账也覆盖真实仓储/包装维修的吸释水，即使没有燃料燃烧；环境空气总入口/出口与包材实际摄取/释放分账，扣除其他流已携水而不取消留在期末的真实新增水。不假定任何湿过程或水量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 氧 (`service_o2_air`)

测量燃烧后未反应分子 O2，不代表净耗氧或高层大气氧。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。 原生CAS7782-44-7分子O2，当期未细分空气Mass/kg。液体、离子及同位素别名不授权这些形态；不是长期、上层大气或外购气体。总出口独立于资源入口和净氧化量实测，不用固定空气比例或按负荷份额缩实物。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 二氮排入空气（`service_n2_air`）

测量跨热过程边界的分子 N2，独立核对真实氮转化。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 N2，CAS7727-37-9，Mass/kg，向未指定空气排放，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 N2 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

###### 氩排入空气（`service_ar_air`）

测量跨边界的实际氩，净反应核算抵消毛穿透，不增加外购气体投入。 条件纳入该阶段真实燃料燃烧出口；不重复窑炉量。 原生基本流 Ar，CAS7440-37-1，Mass/kg，向未指定空气排放；非长期，未固定地域或供应方。宽泛多语言同义词可能提及液体、同位素、酸或其他形态，不授权改换相态结构或物种。仅用于独立实测真实 Ar 及本精确来源方向介质，不代表外购气体、空气集合、总元素指标或猜测物种。 服务负荷仅按 single_quotient 的原批次分支归一化一次，原始实物量保留。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_air_service 采集原始量；采用第 8 节唯一商的最终值，不重复归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_air_service`
- 来源：`jrc-ceramic-bref-2007`; `skamol-moler-epd-2023`

## 7. 分配与共产品处理

以下规则限于归因建模且确需分配的情景；不声称适用于所有 ILCD 决策情景，也不默认系统扩展。工业制造资料不能独立证明 LCA 分配。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | multifunctional process | 对确需分配的归因数据，先分离专属操作并以证据实施实物或虚拟细分；剩余共用过程逐交换建立决定性物理因果，说明各共功能数量变化如何决定相应投入产出；质量、热、时间、面积或体积不是可任意选择的默认菜单。 | `jrc-ilcd-allocation-2010` |
| a_residual | residual common process | 仅在确实无法建立可辩护决定性物理关系的剩余部分，使用同一真实共用过程出入口门及状态下的同期代表性市场价值，包含含水率、等级、质量、包装和数量。记录价格、期间、不确定性、因果方案排除理由，并核对分配负荷之和。不设固定份额或自动替代抵扣，不将下游成品价用于上游湿残渣。 | `jrc-ilcd-allocation-2010` |
| a_stocks | stocks and returns | 在独立原始单位转换和存量向量之后对负荷归属，保持实物质量和物种完整。内部生坯边料、回收热和周转托盘不自动成为共产品。废物处理和真实共功能需去向及价值与边界证据。 | `jrc-ilcd-allocation-2010`; `skamol-moler-epd-2023` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | finish | finished_brick | 质量与首次放行登记 | 批次标识; 唯一砖或批号; 配置; 验收裸砖净干质量; 含水测定法; 期初期末已放行 FG; 首次放行时间 | 用校准秤称量完整验收裸砖或可追溯批次净质量，排除包装和废品。采用对该烧成配置验证且不改变产品的声明含水修正。每次首次放行只计一次。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kg | 每次首次放行和库存结账 | 完整声明生产期 | 真实精加工放行门 | 每参考流 | 校准放行标识含水测试独立盘点 |
| cp_material_prepare | prepare | whole materials and internal body transfers | 未缩放收货和存量记录 | 交换标识; 批号; 阶段; 整份供货形态; 原始数量; 原始单位; 温度; 分析; 游离水; 结构水; Bopen_j; Bclose_j; 内返; 失败模式; receipt_or_net_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | 按原单位采整份收货及真实各阶段仪表和秤数据，独立测量组成、水与内转，逐 WIP 阶段保留继承交换向量。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | original native extensive units | 每次收货批次转移和边界结账 | 包含零产出期间的全部模式 | 真实原料至放行阶段 | 每参考流 | 称重单分析存量台账校准批次谱系 |
| cp_material_form | form | whole materials and internal body transfers | 未缩放收货和存量记录 | 交换标识; 批号; 阶段; 整份供货形态; 原始数量; 原始单位; 温度; 分析; 游离水; 结构水; Bopen_j; Bclose_j; 内返; 失败模式; receipt_or_net_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | 按原单位采整份收货及真实各阶段仪表和秤数据，独立测量组成、水与内转，逐 WIP 阶段保留继承交换向量。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | original native extensive units | 每次收货批次转移和边界结账 | 包含零产出期间的全部模式 | 真实原料至放行阶段 | 每参考流 | 称重单分析存量台账校准批次谱系 |
| cp_material_thermal | thermal | whole materials and internal body transfers | 未缩放收货和存量记录 | 交换标识; 批号; 阶段; 整份供货形态; 原始数量; 原始单位; 温度; 分析; 游离水; 结构水; Bopen_j; Bclose_j; 内返; 失败模式; receipt_or_net_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | 按原单位采整份收货及真实各阶段仪表和秤数据，独立测量组成、水与内转，逐 WIP 阶段保留继承交换向量。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | original native extensive units | 每次收货批次转移和边界结账 | 包含零产出期间的全部模式 | 真实原料至放行阶段 | 每参考流 | 称重单分析存量台账校准批次谱系 |
| cp_material_finish | finish | whole materials and internal body transfers | 未缩放收货和存量记录 | 交换标识; 批号; 阶段; 整份供货形态; 原始数量; 原始单位; 温度; 分析; 游离水; 结构水; Bopen_j; Bclose_j; 内返; 失败模式; receipt_or_net_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | 按原单位采整份收货及真实各阶段仪表和秤数据，独立测量组成、水与内转，逐 WIP 阶段保留继承交换向量。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | original native extensive units | 每次收货批次转移和边界结账 | 包含零产出期间的全部模式 | 真实原料至放行阶段 | 每参考流 | 称重单分析存量台账校准批次谱系 |
| cp_utility_prepare | prepare | each actual electricity fuel water heat carrier | 原始仪表燃料及热记录 | 行标识; 阶段; 批次; 原始表起数; 原始表止数; 单位; 速率或累计; 时标; 压力; 温度; 湿度; 密度来源; GCV_NCV; carrierMass; 供焓; 回焓; 供方水约定 | 读取原始仪表和供方燃热凭证，仅积分真实速率，累计体积保持累计基准。独立测定材料密度及热值基准；关联供回载体质量、热和水而不重复供应过程。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kWh; MJ; kg; m3 as actually metered | 仪表区间及供回事件 | 全部运行及观测服务 H | 真实公用工程供回门 | 每参考流 | 校准匹配凭证状态记录边界核对 |
| cp_utility_form | form | each actual electricity fuel water heat carrier | 原始仪表燃料及热记录 | 行标识; 阶段; 批次; 原始表起数; 原始表止数; 单位; 速率或累计; 时标; 压力; 温度; 湿度; 密度来源; GCV_NCV; carrierMass; 供焓; 回焓; 供方水约定 | 读取原始仪表和供方燃热凭证，仅积分真实速率，累计体积保持累计基准。独立测定材料密度及热值基准；关联供回载体质量、热和水而不重复供应过程。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kWh; MJ; kg; m3 as actually metered | 仪表区间及供回事件 | 全部运行及观测服务 H | 真实公用工程供回门 | 每参考流 | 校准匹配凭证状态记录边界核对 |
| cp_utility_thermal | thermal | each actual electricity fuel water heat carrier | 原始仪表燃料及热记录 | 行标识; 阶段; 批次; 原始表起数; 原始表止数; 单位; 速率或累计; 时标; 压力; 温度; 湿度; 密度来源; GCV_NCV; carrierMass; 供焓; 回焓; 供方水约定 | 读取原始仪表和供方燃热凭证，仅积分真实速率，累计体积保持累计基准。独立测定材料密度及热值基准；关联供回载体质量、热和水而不重复供应过程。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kWh; MJ; kg; m3 as actually metered | 仪表区间及供回事件 | 全部运行及观测服务 H | 真实公用工程供回门 | 每参考流 | 校准匹配凭证状态记录边界核对 |
| cp_utility_finish | finish | each actual electricity fuel water heat carrier | 原始仪表燃料及热记录 | 行标识; 阶段; 批次; 原始表起数; 原始表止数; 单位; 速率或累计; 时标; 压力; 温度; 湿度; 密度来源; GCV_NCV; carrierMass; 供焓; 回焓; 供方水约定 | 读取原始仪表和供方燃热凭证，仅积分真实速率，累计体积保持累计基准。独立测定材料密度及热值基准；关联供回载体质量、热和水而不重复供应过程。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kWh; MJ; kg; m3 as actually metered | 仪表区间及供回事件 | 全部运行及观测服务 H | 真实公用工程供回门 | 每参考流 | 校准匹配凭证状态记录边界核对 |
| cp_utility_support | support | each actual electricity fuel water heat carrier | 原始仪表燃料及热记录 | 行标识; 阶段; 批次; 原始表起数; 原始表止数; 单位; 速率或累计; 时标; 压力; 温度; 湿度; 密度来源; GCV_NCV; carrierMass; 供焓; 回焓; 供方水约定 | 读取原始仪表和供方燃热凭证，仅积分真实速率，累计体积保持累计基准。独立测定材料密度及热值基准；关联供回载体质量、热和水而不重复供应过程。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kWh; MJ; kg; m3 as actually metered | 仪表区间及供回事件 | 全部运行及观测服务 H | 真实公用工程供回门 | 每参考流 | 校准匹配凭证状态记录边界核对 |
| cp_utility_service | service | each actual electricity fuel water heat carrier | 原始仪表燃料及热记录 | 行标识; 阶段; 批次; 原始表起数; 原始表止数; 单位; 速率或累计; 时标; 压力; 温度; 湿度; 密度来源; GCV_NCV; carrierMass; 供焓; 回焓; 供方水约定 | 读取原始仪表和供方燃热凭证，仅积分真实速率，累计体积保持累计基准。独立测定材料密度及热值基准；关联供回载体质量、热和水而不重复供应过程。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kWh; MJ; kg; m3 as actually metered | 仪表区间及供回事件 | 全部运行及观测服务 H | 真实公用工程供回门 | 每参考流 | 校准匹配凭证状态记录边界核对 |
| cp_air_thermal | thermal | each molecular input/output species | 气体和颗粒采样 | 物种标识; CAS; 来源; 介质; 相态; 颗粒类别; 原始浓度; 原始体积或速率; 时段; 压力; 温度; 干湿基; 独立进口; 独立出口; 不确定性 | 测量真实进出口气体物种和颗粒身份，需换算时采用独立状态和物种摩尔证据。保留化石、生物、矿物及大气碳源，不从 NOx、VOC、COD、颗粒或元素总量指标推定物种。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | native mass concentration volume or actual rate | 代表性运行模式及事件 | 包含清理失败的完整热工期间 | 真实排放门及接收介质 | 每参考流 | 采样计划物种分析实验校准气体状态证据 |
| cp_air_prepare | prepare | each molecular input/output species | 气体和颗粒采样 | 物种标识; CAS; 来源; 介质; 相态; 颗粒类别; 原始浓度; 原始体积或速率; 时段; 压力; 温度; 干湿基; 独立进口; 独立出口; 不确定性 | 测量真实进出口气体物种和颗粒身份，需换算时采用独立状态和物种摩尔证据。保留化石、生物、矿物及大气碳源，不从 NOx、VOC、COD、颗粒或元素总量指标推定物种。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | native mass concentration volume or actual rate | 代表性运行模式及事件 | 包含清理失败的完整热工期间 | 真实排放门及接收介质 | 每参考流 | 采样计划物种分析实验校准气体状态证据 |
| cp_air_service | service | each molecular input/output species | 气体和颗粒采样 | 物种标识; CAS; 来源; 介质; 相态; 颗粒类别; 原始浓度; 原始体积或速率; 时段; 压力; 温度; 干湿基; 独立进口; 独立出口; 不确定性 | 测量真实进出口气体物种和颗粒身份，需换算时采用独立状态和物种摩尔证据。保留化石、生物、矿物及大气碳源，不从 NOx、VOC、COD、颗粒或元素总量指标推定物种。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | native mass concentration volume or actual rate | 代表性运行模式及事件 | 包含清理失败的完整热工期间 | 真实排放门及接收介质 | 每参考流 | 采样计划物种分析实验校准气体状态证据 |
| cp_residue_prepare | prepare | each waste and actual outlet | 称重处理及去向记录 | 行标识; 路线; 湿质量; 含水率; 干固体; 分析; 处理; 回收; 外运; 留存; 期初; 期末; 附着物 | 逐真实分离流称重，独立采组成、水和相态；核对边料、粉尘、污泥、废水和内部留存循环。现场有处理且释放时增加真实已识别出水物种。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kg and original native units | 每次废弃转移和存量结账 | 全部生产模式 | 真实现场废物及外运门 | 每参考流 | 废物单处理合同独立固体含水测试 |
| cp_residue_form | form | each waste and actual outlet | 称重处理及去向记录 | 行标识; 路线; 湿质量; 含水率; 干固体; 分析; 处理; 回收; 外运; 留存; 期初; 期末; 附着物 | 逐真实分离流称重，独立采组成、水和相态；核对边料、粉尘、污泥、废水和内部留存循环。现场有处理且释放时增加真实已识别出水物种。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kg and original native units | 每次废弃转移和存量结账 | 全部生产模式 | 真实现场废物及外运门 | 每参考流 | 废物单处理合同独立固体含水测试 |
| cp_residue_thermal | thermal | each waste and actual outlet | 称重处理及去向记录 | 行标识; 路线; 湿质量; 含水率; 干固体; 分析; 处理; 回收; 外运; 留存; 期初; 期末; 附着物 | 逐真实分离流称重，独立采组成、水和相态；核对边料、粉尘、污泥、废水和内部留存循环。现场有处理且释放时增加真实已识别出水物种。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kg and original native units | 每次废弃转移和存量结账 | 全部生产模式 | 真实现场废物及外运门 | 每参考流 | 废物单处理合同独立固体含水测试 |
| cp_residue_finish | finish | each waste and actual outlet | 称重处理及去向记录 | 行标识; 路线; 湿质量; 含水率; 干固体; 分析; 处理; 回收; 外运; 留存; 期初; 期末; 附着物 | 逐真实分离流称重，独立采组成、水和相态；核对边料、粉尘、污泥、废水和内部留存循环。现场有处理且释放时增加真实已识别出水物种。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | kg and original native units | 每次废弃转移和存量结账 | 全部生产模式 | 真实现场废物及外运门 | 每参考流 | 废物单处理合同独立固体含水测试 |
| cp_asset | support | capital replacement consumables and residues | 实物资产及当期服务账 | 资产标识; 部件材料; 新旧; 期初; 实际加入; 在装流体; 含水; 维修; 使用时数; 通量; 磨损; 泄漏; 退役; 期末; 继承向量; actual_gross_receipts_returns; measured_new_water_material; removed_old_material; independent_water_loss; parent_child_disjoint_scope | 分别点数或称量真实整机组件，追踪在装流体及水分。按实测使用量建立真实部署及当期服务归属；不设固定寿命或每千克一整机，不重复内含组件。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 | item; kg and relevant native units | 每次部署维修替换退役及结账 | 含继承历史的真实服务期 | 真实在装资产及维修边界 | 每参考流 | 资产登记维修凭证使用记录流体分析及退役单 |
| cp_pack | service | each PE cardboard pallet and actual band | 互斥包装存量账 | 材料配置; 批次; 期初空包; 期初附着WIP; 期初附着FG; 期初周转; 外购; 附着入厂; 外部退回接收; 期末同类池; 毛发运; 对外退回; 废物; 含水; 再用; Radd; Rremove; independent_H2Oin; independent_H2Oout; dry_wood; absorbed_water; actual_repair_identity_destination | 逐包装材料配置点数称重，核对与真实实物毛流向关联的互斥池。内部再用抵消且不再计采购；实物毛量独立于负荷分配。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 逐具体配置保留六个外部总方向P/I/ER/S/EO/W及独立维修增减材和吸释水；与其他流项去重，不因新增量进入期末库存而省略真实入流。 | kg and actual measured count | 每次包装发运退回维修废弃及结账 | 原批次观测期限 H | 真实包装储存退回发运门 | 每参考流 | 包装凭证皮重盘点及发运退回对应 |
| cp_service | service | original released cohort brick and increments | 实物 FG 及增量服务账 | 批次标识; 原始Qc; 观测H; 期初FG; 新首次放行; 毛G; 实际R; 发运标识; 退回状态; 期末FG; 销毁; 其他出口; 新水; 新材料; 真实损失; 返工; 继承向量; manufacturer_permission; moler_grade_compatibility; actual_rework_route; final_reacceptance; removed_old_material; independent_water_loss | 按标识追踪原放行、发运和退回，保留真实质量、水分、状态和损伤；保持原制造负荷，仅采实际储存、包装、搬运及放行后返工增量，不新增 Q 或自动逆转。 原始采集和存储保持未除分子，聚合基准仅指第 8 节唯一商生成的最终值。 任何真实放行后返工须有制造者对实际moler品级及原隔热砖终端的相容许可，并在加工后按实际尺寸、热工及机械条件重新验收；不假定可修、通过、复烧或有机胶/涂层修复。不相容新配方/表面/终端须另定范围。新增材料/水、移除旧料及独立水损失均有真实原子交换及去向，湿态实物与原干参考Qc分开。 | kg and each service native unit | 每次存量事件及观测期限结束 | 各原批次声明的真实 H | FG 实物门及实际服务操作 | 每参考流 | 批次谱系校准称量状态观察时间记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | 逐选定原生广延分子在归属前转换原始单位及真实速率。真实速率在实测区间积分，累计体积不再积分。仅同类能量 kWh 到 MJ 用 3.6；燃气总热值、低位热值、供热和载体质量为不同账，需独立供应组成状态和量热证据。 | raw_reading; actual_state; calibration | raw_extensive_amount | `jrc-ceramic-bref-2007` |
| first_release | finished_brick | Q = 机加工和质量验收后首次最终放行唯一完整裸砖净干质量之和。已放行期末 FG 仅含一次；未放行 WIP、不合格砖、退回、复验和发运不新增 Q。 | cp_release; unique_release_IDs | Q | `skamol-moler-epd-2023`; `skamol-ceramic-brochure` |
| manufacture_burden | manufacture | 逐交换 j：真实单位转换、细分和有证据归属后，A_j = Bopen_j + P_j - Bclose_j - Tother_j。B 向量仅属原料、WIP 及尚未归属非 WIP 存料，已放行 FG 不作制造 Bclose。P 保留失败、零产出、空载、启停、清理及返工。每项转移或扣减需独立识别去向及继承向量。 每流注明原始收货/发生量或已扣库存的实际消耗基准；已经净耗用的原料数值不再对同一库存重复加减，但真实耗用的期初材料仍承接其上游历史，WIP/非WIP向量用一致基准。普通废物外送或销售不自动构成Tother扣减；只有按第7节证明的真实另一个共功能/归属及其负荷可转出，不可用去向单或售价自动抹去失败、废料制造或处理负荷。 | Bopen_j; P_j; Bclose_j; Tother_j; cp_material_prepare; cp_material_form; cp_material_thermal; cp_material_finish; cp_asset | A_j | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| cohort_service | service | 保持原制造向量。Aservice_j 仅为观测 H 内归属原批次 Qc 的真实增量服务负荷。FG 实物按真实状态质量：期初 FG + 按实际 FG 状态计的首次放行砖体 + 真实退回 + 真实新增水和材料 = 期末 FG + 毛发运 + 销毁 + 含蒸发加工损失的其他有证据实物出口。以独立实测水账将干基参考 Q 与真实湿实物质量分开，不自动逆转原制造或新增 Q。 | cp_service; cp_pack; Qc; H | Aservice_j | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| single_quotient | all inventory rows | 唯一单位结果步骤为制造 a_j = A_j / Q，以及单独标明的原批次观测 H 服务 aservice_j = Aservice_j / Qc。在原始单位转换、存量和归属后仅执行一次。采集存未归一化原始值，卡片数量和聚合指向同一次结果，不再除一次。砖体内部移交及 FG、发运、退回实物账卡的分子为未按经济份额缩减的真实实物量，不代表新制造负荷；继承负荷向量与增量服务归属另账。Q 或 Qc 为零时保留真实负荷而不出单位结果。合并抵消内部转移。 | A_j; Q; Aservice_j; Qc; cp_release; cp_service | a_j; aservice_j | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| pack_stock | cp_pack | 逐材料配置：期初空置+WIP附着+FG附着+可复用存量+采购P+附带入厂I+外部退回收讫ER+Radd+H2Oin=对应互斥期末存量+总发运S携包材+外返EO+废物W+Rremove+H2Oout。Radd/Rremove为既有完整包装方向之外的真实维修增减材；H2Oin/H2Oout为这些实测流已携水之外的独立吸释水。所有流项互斥，已在另一实测方向内的子项仅记一次；新增质量留在期末库存并不取消真实入流。干木/其他材料与自由/吸附水独立分账，不以一个湿重残差拟合两个未知；每种实际维修木材、紧固件、胶、水和移除物均须具体原子身份/状态及去向。内部复用/部件交接只抵消一次，总实物量不按经济份额缩减，不入裸砖Q；采购与实际增量作业的原批次继承负荷只归一次。 | cp_pack; purchases; gross_shipments; external_returns; waste; attached_inbound; Radd; Rremove; H2Oin; H2Oout | packaging_balance | `skamol-moler-epd-2023` |
| asset_stock | cp_asset | 逐材料形态核对真实新旧整机、替换、在装流体、水、磨损、维修、退役和期末实物存量。按部署、实测使用和继承向量归属真实当期服务负荷，不设固定寿命，不重复采购整机内含项。 逐实物核期初+真实总收货+独立实测新材料/水=期末+外返+退役废弃+磨入其他已记录流的损耗+真实水损失/其他出口，所有项互斥。整机已含部件/流体仅作子账，不重复磨耗报废；新增量留在期末仍保留真实入流，实物不按当期服务负荷份额缩减。 | cp_asset; measured_use; inherited_vectors | period_asset_service | `jrc-ilcd-allocation-2010`; `jrc-ceramic-bref-2007` |
| physical_species | all physical gates | 依据真实原料分析、碳酸盐转化、氧摄取、各源碳留存及逐一测量的气体分子和相态水路径，独立核对整体质量和相关元素。空气毛物种及外部热载体为实物子账，不重复采购供应过程。一个残差不拟合两未知；COD、VOC、PM 及元素总量指标不识别分子。 | cp_material_prepare; cp_material_form; cp_material_thermal; cp_material_finish; cp_air_thermal; cp_air_prepare; cp_air_service; cp_utility_prepare; cp_utility_form; cp_utility_thermal; cp_utility_finish; cp_utility_support; cp_utility_service; cp_residue_prepare; cp_residue_form; cp_residue_thermal; cp_residue_finish; cp_release; cp_service | mass_element_residuals | `skamol-moler-epd-2023`; `skamol-ceramic-brochure`; `jrc-ceramic-bref-2007` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each exchange | 核实精确原生整份材料形态相态路线类型介质地域参考属性单位及正式中文名。供应方等级或辅助流缺口需真实数据，但本身不构成核心冻结。 | 完整原生记录真实供货规格及产品测试 |
| dq_time | whole period | 保留完整现场批次期间、全部失败空载启停清理返工模式、原料 WIP 存料继承以及原 Qc 观测 H 服务。 | 原始仪表存量谱系放行登记及事件记录 |
| dq_balance | physical gates | 独立量化质量组成水分相态气体状态物种化及量热不确定性；披露未闭合质量元素残差，不拟合缺失物种或声称虚假精度。 | 校准分析采样状态凭证及独立衡算 |
| dq_complete | dataset | 区分未发生、实测零、低于检出、未知和未解决身份；新增真实遗漏原子交换，未来前景量为采集要求而非虚构测值。科学及翻译复核独立于工程检查。 | 原子完整性登记未解决清单及证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | dataset | 依据真实路线、组成、状态、类型、属性、单位及供应方核实烧成蛋白石质硅藻土黏土砖终端及全部原生卡片限制。参考族包含烧成硅质砖，但其外部分类型排除硅质土；该差异不产生已接受分类边，也不豁免物理不相容。 | `skamol-moler-epd-2023`; `skamol-ceramic-brochure` |
| v_quantity | all stages | 核对唯一 Q 首次放行并包含已放行期末 FG，不重复加入 FG 输出或从制造扣减 FG。一次商计算前记录全部原料、WIP、存料继承向量与真实失败返工负荷。Q=0 保留负荷且不出单位结果。复验和发运不是生产。 | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| v_species | physical gates | 在制造、服务和合并门独立核对整体质量及实际存在的 C H O N S Ca Si Al Cl F。以独立测量分清真实氧化、碳酸盐转化、黏土脱羟、蛋白石水及游离吸附水。一个残差不能确定两项未知，灼减或收缩均不直接定义气体分子质量。 | `skamol-moler-epd-2023`; `skamol-ceramic-brochure`; `jrc-ceramic-bref-2007` |
| v_utilities | utilities | 按各行原生广延属性计量；Mass/kg 不套用于 kWh、MJ 或 m3。累计体积不再乘时间，只有实际速率积分。独立密度、组成、压力、温度与量热证据支持换算及载体质量和热子账。整份供应过程与其燃料或水不重复计入。 | `jrc-ceramic-bref-2007` |
| v_stocks | packaging assets and FG | 逐包装配置核对互斥期初期末空包、附着 WIP、附着 FG、周转池以及外购、附着入厂、外部退回接收，对应毛发运、对外退回和废物。实物资本新旧存量、真实替换、磨损、退役制品和在装流体分别作材料状态衡算；当期服务归属不使用虚构寿命。 | `skamol-moler-epd-2023`; `jrc-ilcd-allocation-2010` |
| v_evidence | sources and completeness | 核实完整来源上下文及相邻反例。EPD 组成和包装百分比、LCIA、截断、寿命、密度及旧现场总量不是工厂默认值；BREF 硅砖和高铝热工表及铬质流程图不是 moler 数据。未知物种、原生身份或继承历史须明示并阻止依赖它的数值结果。 | `skamol-moler-epd-2023`; `skamol-ceramic-brochure`; `jrc-ceramic-bref-2007`; `jrc-ilcd-allocation-2010` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 实际匹配 moler 隔热砖供应链模型；制造与原批次服务分别说明 |
| allowed_use | 边界等级用途和证据匹配时的归因 LCA，所有必需限定信息须完整 |
| excluded_use | 未经功能等价验证的隔热寿命比较、其他材料族、默认密度配方寿命、以工程检查代科学批准 |
| required_metadata | moler 地质来源和天然黏土及蛋白石壳组成; 实际整份供货形态及含水分析; 木屑树种来源及造孔剂碳和灰分; 石灰石存在性分析及碳酸盐转化; 挤出切坯几何及机加工状态; 真实干燥烧失烧成冷却路线及气氛; 热工机械尺寸验收方法及等级; 首次最终放行批次标识和干燥裸砖净质量 Q; 参考流族原生限制及分类差异; 原料在制品存料每交换继承负荷向量; 已放行 FG 发运退回及批次服务观测期限; 公用工程供应地域电压燃料状态及热和载体约定; 原子气体物种相态及独立质量元素证据; 互斥包装及实物资本和流体存量; 单次归属及归一化和不确定性披露 |
| required_quality_disclosure | 实际现场期间代表性不确定性遗漏限制及未闭合衡算，分清身份与供应过程数据 |
| update_trigger | 原料物相、供货形态、造孔剂、路线、等级、能源方、几何终端、放行门、存量或服务期限有实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| skamol-moler-epd-2023 | dataset | Skamol Group; MD-23062-EN Version 1 issued 14 April 2023 valid to 14 April 2028; 2021 Fur site data; full 21-page EPD; product groups pp2/4/5 flowdiagram p6 system boundary p7 limitations pp18-21. https://www.skamol.com/Admin/Public/Download.aspx?file=Files%2FFiles%2FDocumentation%2FEPD%2FEPD-Skamol-moler-products-EN15804-A2.pdf | 真实 moler、木屑、石灰石挤出干燥烧成机加工包装路线及终端的定性依据；不设配方包装份额现场 LCIA 密度寿命截断或末端抵扣默认值。 |
| skamol-ceramic-brochure | extension_guidance | Skamol by Etex; SkamoCeramic Insulation system for high temperature industries; undated publisher brochure; complete 8 pages; moler p4 versus vermiculite/calcium-silicate pp5-6. https://www.skamol.com/Admin/Public/Download.aspx?file=Files%2FFiles%2FDocumentation%2FBrochures%2FSkamoCeramic-UK.pdf | 烧成砂磨 moler 砖终端、蛋白石硅藻与蒙脱石黏土结构及背衬隔热功能；排除相邻板材族，不指定品级性能值。 |
| jrc-ceramic-bref-2007 | official_guidance | European Commission JRC; Reference Document on Best Available Techniques in the Ceramic Manufacturing Industry; August 2007; complete PDF; sections 2.3.3 and adjacent 2.3.2/2.3.4; printed pp49-54; Figures2.16/2.17 and Tables2.8-2.12. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | 一般单元、公用工程、真实废物气体候选及不相容路线；铬质碱性砖图及硅砖高铝工艺数值作为反例，不转用 moler 配方或排放因子。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC; ILCD Handbook General guide for Life Cycle Assessment Detailed guidance; first edition March 2010; sections7.9.2-7.9.3 printed pp255-272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 一般归因细分和逐交换决定性物理因果，仅剩余共用部分使用同期真实门与状态市场价值；不作为工业制造证据。 |
