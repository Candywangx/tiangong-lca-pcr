---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-seaweeds-and-other-algae-fresh-frozen-or-dried-whether-or-not-ground-fit-for-hum-15cbb138
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
translation_status: aligned
---

# 养殖鲜态完整糖海带：孢子育苗至首次食用品质放行

本方法为一条物理边界明确的食用供货路线的归因作物生产方法。场址数据仍待采集；证据支持技术综合，不代表实测养殖场清单或审批。以下全部条件及原生身份限制均须与规则一同消费。

## 1. 范围与适用性

仅用于从孢子直接接种苗绳育苗、海上水平延绳养成至首次食用品质放行的鲜态原态完整糖海带。代表配置将2014育苗方法与2020 Connecticut 原态食用品采收冷却路线综合，不假称同一 SKU 或养殖场。外购 PES、过滤紫外处理海水、电动育苗冷却照明曝气、作业船采收及非密封冷包装是已声明过程选择。实际设备、清洁及投加须披露，逐项补入真实新增交换。不设无依据通用产率、水分、药剂量、能耗或寿命范围。CPC 04932 的鲜冻干粉为不同可能状态，本记录仅覆盖鲜整藻路线。不建立营养等价、安全货架期或食品认证。[ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020]

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-seaweeds-and-other-algae-fresh-frozen-or-dried-whether-or-not-ground-fit-for-hum-15cbb138 |
| classification_refs | CPC 3.0 04932；产品状态范围更窄；仅为映射背景 |
| covered_products | 供人食用的养殖鲜态原态完整糖海带 |
| excluded_products | 其他物种；野采食用品；非食用生物量；提取物；冷冻干制粉碎焯烫或减氧路线 |
| representative_product | 孢子育苗延绳养殖的鲜糖海带藻体 |
| production_route | 孢子囊群采集；育苗接种及幼体培养；延绳布苗；维护；采收；冷却和首次食用放行 |
| market_state | 非密封冷包装的鲜态原态完整藻体；不声明货架期 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供所声明可食养殖鲜糖海带生物量 |
| How much | 1 kg 首次放行净湿组织 |
| How well | 物种和来源确认；有记录食用适用性放行；不以水冰包装虚增；独立披露干物和盐 |
| How long or cycle | 一个声明养殖批至首次放行；不设通用储期或货架期等价 |
| reference_flow_link | released_kelp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 藻类 `eb76bd93-d5a5-4db2-bd08-388665f2eda5` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种 Saccharina latissima 糖海带; 养殖来源及苗种溯源; 养殖场址和季节; 孢子育苗延绳路线; 新鲜原态完整藻体; 首次放行门及时间戳; Q 净湿组织及沥水方法; 独立实测干物率和含水率; 盐含量披露及外附水排除; 食用适用性证据及目的地要求; 采收水域状态; 微生物及化学检测方法与检出限; 碘及污染物评估; 采收到冷却的时间温度; 非密封包装及过敏原告知; 批次库存及继承负荷向量; 资本设施服务归属; 真实放行后服务范围; 不确定性及身份限制; 相反原生野生非食用元数据及未知所有者意图; 独立供货品质及不得自动选野生非食用上游数据集供应者 |

必需限定须保存在数据集元数据、过程说明、参考流备注或等效字段。通用“藻类”不是食品专属匹配：正文为通用水生生物量，无 CAS、固定等级路线形态地域或含水率属性，只有质量参考属性。其 CPC 标注野生非食用，与所声明养殖食用用途不一致且未解决，原生所有者意图未知；仅在每张所用藻体卡的明确限制下使用通用物理身份。不得从 UUID 推定养殖或可食用状态。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| wet_basis | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考量为 1 kg 新增首次放行糖海带净湿组织。按声明且可重复的沥水方案后使用校准秤；独立测量并排除游离外附海水、冰、绳、容器及附着物。按记录的干燥方法对代表性组织独立测干物率或水分，盐分单列。不把 1 kg 干藻当作 1 kg 鲜藻，不声称营养或食用等价。 |
| raw_units | all inventory rows | Mass or energy | kg or MJ | 保留原读数及单位、速率或累计量、温度和不确定性。kWh 按 3.6 MJ/kWh 换算。仅真实速率按时间积分，不将已积分气液体积再乘时长。使用独立实测物质专属密度及气体温压组成。不得从次级属性比值编造密度或单件质量。 |
| whole_formula | pes | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整份外购 PES 为一个质量投入。含量、活性盐、干物及载水仅为嵌套分析量。不提供可靠跨供应商浓缩液效价或 LCI 剂量范围；须逐交换采原量和真实供应规格。 |
| single_basis | all inventory rows | Mass or energy | kg or MJ | 全部最终交换均按每参考流计。采集只保留原始期间数量；其汇总标签声明最终目标基准，不执行归一化。第8节唯一归一化在原始换算、逐交换归属及在制负荷核对后导出最终数量。参考输出保持准确 1 kg。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 获准鲜糖海带孢子囊群取得以及真实在役资产和供应投入生产 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | CPC 3.0 04932 背景；仅本记录所述更窄鲜整食用作物 |
| recursive_input_rule | 苗绳为内部阶段；外购苗保留完整育苗负荷。不递归虚构食用藻投入，也不允许零负荷购成品 |
| upstream_dataset_requirement | 匹配实际材料配方、供货态、地域及能源边界；保留技术时间代表性和未解决缺口 |
| disclosure | 场址；养殖批；种源；设施配置；实际化学品；原水；食用放行；库存向量；下游服务范围；排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | cultivation_to_release | 纳入获准孢子囊群采集、育苗水处理、营养富集、孢子接种、照明冷却曝气育苗、苗绳运输、设施安装、布苗、监测、实际需要的疏苗、维护、回收、采收、冷却、采样检验、包装及首次食用品质放行。外购苗种不消除育苗链：取得完整供应商前景或上游清单，或明确保留所缺上游负荷。不得从购买可食成品藻开始该路线。 | ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020 |
| b_scope | fresh_food_route | 只涵盖有记录证明食用适用性的养殖糖海带原态完整藻体。排除野采食用品、海带 S. japonica、掌状海带、江蓠、微藻、饲肥或修复用途生物量、提取物和混合物种。冷冻、干制、粉碎、水洗焯烫或减氧包装须另有状态和过程证据扩展；分类叶不证明这些覆盖。 | ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020 |
| b_assets | capital_and_auxiliaries | 同一范围采集每项在役资产的供应制造、安装、寿命、更换和最终处理，不设无依据资本品截断。整件质量先按有理据服务使用归属，再归一化；不进入生物质量投入。列举的设施配置是透明技术采集设计，不假称同一工厂实证物料单。实际电缆、配件、建筑组件或其他投入若不在已购整件内，应逐项增加具体交换。 |  |
| b_gate | first_release_and_service | Q 是指定批次新增合格净湿组织的首次食用品质放行；交付、库存转移、重验或重工不形成第二次产量。同批已放行期末成品已含在 Q 中。制造、待放行在制及已放行成品服务各自保留物理边界；合并时抵消成对内部转移。放行后的包装、储存、搬运及发运服务仍按批独立记账，保留所服务历史成品批的负荷。不得将历史产量加入当前 Q。 |  |
| b_atomic | all_exchanges | 每份真实外购制剂按整份供货质量仅跨界一次；活性组分、干固体、载水和含量是组分子账。厂内配制须拆为真实外购材料、水、能耗及损失。每个真实排放物种及真实接收介质或处理均须记录。不得用其他、能源、公用工程、包装或污染指标集合藏掉未列交换；计算前增补具体条件行。本电力育苗及冷链配置不假定蒸汽、锅炉或外部热水返回；若实际存在，则分别记录供回水质量、温度、焓及供应水能约定。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assets | 养殖及育苗设施 | required | 服务本作物的真实安装及更换 | foreground_production | released_kelp |
| nursery | 孢子囊群处理与孢子育苗 | required | 孢子直接接种；过滤并紫外处理天然海水；外购 PES | foreground_production | released_kelp |
| growout | 延绳布苗维护与采收 | required | 单物种海水养殖；包含损失和回收 | foreground_production | released_kelp |
| release | 冷却检验包装与首次食用品质放行 | required | 非密封包装的鲜态完整原态藻体 | foreground_production | released_kelp |
| service | 放行后储存搬运及发运服务 | conditional | 仅真实由生产者控制且能识别放行批的服务 | postrelease_service | released_kelp |

以下卡的最终基准均为每参考流。其描述和 cp_<row_id> 协议要求独立原始交换记录；不列数值范围不代表已有范围。每个非参考卡仅消费第8节 normalize_once 的同一次结果；数量表达是最终量说明，不是第二次计算。所引背景来源说明路线和采集需要，绝不代表交换实测用量。

### 过程：养殖及育苗设施 (`assets`)

#### 输入

##### 产品流

###### 聚丙烯养殖延绳 (`asset_longline`)

仅适用于所声明设施。采集绳长及实测线密度；计入更换和遗失段。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_longline 采集未相除的真实原量及不确定性。

- 选定流：聚丙烯养殖延绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_longline
- 来源：ctsg-kelp-nursery-2014

###### 钢制系泊锚 (`asset_anchor`)

仅适用于所声明设施。采集完整锚的称量与安装记录。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_anchor 采集未相除的真实原量及不确定性。

- 选定流：钢制系泊锚
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_anchor
- 来源：ctsg-kelp-nursery-2014

###### 钢制系泊链 (`asset_chain`)

仅适用于所声明设施。采集实际配置链条称量。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_chain 采集未相除的真实原量及不确定性。

- 选定流：钢制系泊链
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_chain
- 来源：ctsg-kelp-nursery-2014

###### 高密度聚乙烯浮标 (`asset_buoy`)

仅适用于所声明设施。采集整件外购浮标质量；附带配件留在同一物品账。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_buoy 采集未相除的真实原量及不确定性。

- 选定流：高密度聚乙烯浮标
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_buoy
- 来源：ctsg-kelp-nursery-2014

###### 聚氯乙烯育苗绕线筒 (`asset_spool`)

仅适用于所声明设施。采集整件绕线筒质量和复用次数。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_spool 采集未相除的真实原量及不确定性。

- 选定流：聚氯乙烯育苗绕线筒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_spool
- 来源：ctsg-kelp-nursery-2014

###### 玻璃育苗缸 (`asset_tank`)

仅适用于所声明设施。采集整缸质量和服役历史。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_tank 采集未相除的真实原量及不确定性。

- 选定流：玻璃育苗缸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_tank
- 来源：ctsg-kelp-nursery-2014

###### 电动育苗水冷却机 (`asset_chiller`)

仅适用于所声明设施。采集整机质量且包括初装制冷剂。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_chiller 采集未相除的真实原量及不确定性。

- 选定流：电动育苗水冷却机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_chiller
- 来源：ctsg-kelp-nursery-2014

###### 电动海水泵 (`asset_pump`)

仅适用于所声明设施。采集整泵质量及实测使用时间。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_pump 采集未相除的真实原量及不确定性。

- 选定流：电动海水泵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_pump
- 来源：ctsg-kelp-nursery-2014

###### 电动曝气泵 (`asset_airpump`)

仅适用于所声明设施。采集整台气泵质量；环境空气通气不计作外购压缩气体。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_airpump 采集未相除的真实原量及不确定性。

- 选定流：电动曝气泵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_airpump
- 来源：ctsg-kelp-nursery-2014

###### 育苗电照明灯具 (`asset_lamp`)

仅适用于所声明设施。采集完整灯具质量和光源更换历史。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_lamp 采集未相除的真实原量及不确定性。

- 选定流：育苗电照明灯具
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_lamp
- 来源：ctsg-kelp-nursery-2014

###### 含柴油发动机的玻璃纤维作业船 (`asset_boat`)

仅适用于所声明设施。采集整船质量含发动机；不得再将其发动机组分作为第二项购入资产。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_boat 采集未相除的真实原量及不确定性。

- 选定流：含柴油发动机的玻璃纤维作业船
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_boat
- 来源：ctsg-kelp-nursery-2014

###### 机械制冷冷藏室 (`asset_coldroom`)

仅适用于所声明设施。采集整套冷藏室购入及安装设备边界；含初装工质。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_coldroom 采集未相除的真实原量及不确定性。

- 选定流：机械制冷冷藏室
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_asset_coldroom
- 来源：ctsg-kelp-nursery-2014

### 过程：孢子囊群处理与孢子育苗 (`nursery`)

#### 输入

##### 产品流

###### 藻类 (`sorus`)

仅限获准来源的新鲜糖海带 Saccharina latissima 生殖孢子囊群组织；称量接收净湿组织并独立测干物率。记录来源海域及采集船舶负荷。该通用身份不保证物种、食品级、含水率、来源或路线；其野生非食用 CPC 标注与本用途冲突，但完整物理描述没有相应限制。仅将其用作通用藻体身份，绝不作为已接受分类映射或食品许可。不得替代其他物种或干制掌状海带。 相反原生元数据明确标注野生且不适合人食用，原生所有者意图未知。这是有条件通用物理身份，不证明分类错误，也非食用、养殖、鲜态或物种精确匹配。应独立建立本 PCR 参考对象和供货品质，绝不自动选择野生或非食用上游数据集及供应者。 本交换未建立可靠通用数值范围，须按 cp_sorus 采集未相除的真实原量及不确定性。

- 选定流：藻类 `eb76bd93-d5a5-4db2-bd08-388665f2eda5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_sorus
- 来源：ctsg-kelp-nursery-2014

###### 未经化学处理的亲水尼龙育苗绳 (`twine`)

称量洁净外购尼龙绳；记录绳长和实测线密度。不得将尼龙棉混纺绳当作该身份。包含全部接种失败和监测取样损失。 本交换未建立可靠通用数值范围，须按 cp_twine 采集未相除的真实原量及不确定性。

- 选定流：未经化学处理的亲水尼龙育苗绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_twine
- 来源：ctsg-kelp-nursery-2014

###### Provasoli 浓缩营养盐溶液 (`pes`)

外购 PES 制剂按整份供货质量仅采购一次。采集供应商配方、浓度、批次分析、测温密度和有效期；载水和各营养元素为子账。手册半强度培养配方只提供过程背景，不证明该供应商浓缩液效价或通用 LCI 用量。若实际厂内配制，应以每项真实外购试剂、配制能耗及损失的独立卡替换本整剂采购卡。 本交换未建立可靠通用数值范围，须按 cp_pes 采集未相除的真实原量及不确定性。

- 选定流：Provasoli 浓缩营养盐溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pes
- 来源：ctsg-kelp-nursery-2014

###### 聚酯海水过滤滤芯 (`filter`)

采集整支滤芯质量、更换频率及实际过滤级别。上游数据按供货滤芯结构，不得只计聚合物而漏掉随件外壳。 本交换未建立可靠通用数值范围，须按 cp_filter 采集未相除的真实原量及不确定性。

- 选定流：聚酯海水过滤滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_filter
- 来源：ctsg-kelp-nursery-2014

###### 纤维素纸巾 (`paper`)

称量孢子囊群清洁和湿润暂存消耗纸巾；湿废纸与干采购纸分账。 本交换未建立可靠通用数值范围，须按 cp_paper 采集未相除的真实原量及不确定性。

- 选定流：纤维素纸巾
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_paper
- 来源：ctsg-kelp-nursery-2014

###### 去离子水 (`deionized`)

采集绕线筒准备和冲洗实际外供去离子水质量。若现场制备，则以原水、处理耗材、浓水和电力各项替换本外供边界。 本交换未建立可靠通用数值范围，须按 cp_deionized 采集未相除的真实原量及不确定性。

- 选定流：去离子水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_deionized
- 来源：ctsg-kelp-nursery-2014

###### 氯化钠 (`salt`)

仅实际育苗绳盐洗时适用。称量外购化学品，溶解水独立计量。记录纯度、盐残留、冲洗与排放；不得默认用于海上养成。 本交换未建立可靠通用数值范围，须按 cp_salt 采集未相除的真实原量及不确定性。

- 选定流：氯化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_salt
- 来源：ctsg-kelp-nursery-2014

###### 聚维酮碘水溶制剂 (`iodine`)

仅真实获准的孢子囊群浸洗适用。整份供货制剂称量一次；碘含量和载水记子账。采集产品使用许可、冲洗和适合最终食用作物的残留证据。实验室手册不批准食用用途化学残留。 本交换未建立可靠通用数值范围，须按 cp_iodine 采集未相除的真实原量及不确定性。

- 选定流：聚维酮碘水溶制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_iodine
- 来源：ctsg-kelp-nursery-2014

###### 二氧化锗 (`germanium`)

仅在有记录的硅藻控制且具有食用海藻用途适用性及残留评估时适用。实测投加与锗去向；培养洁净且未投加时不使用。不得从实验培养成功推断无残留或食品用途许可。 本交换未建立可靠通用数值范围，须按 cp_germanium 采集未相除的真实原量及不确定性。

- 选定流：二氧化锗
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_germanium
- 来源：ctsg-kelp-nursery-2014

###### 乙醇水溶消毒制剂 (`ethanol`)

实际表面消毒时适用。整份供应制剂称量一次；记录乙醇含量、水分、冲洗及独立确定的乙醇挥发量。不规定固定浓度或损失比例。 本交换未建立可靠通用数值范围，须按 cp_ethanol 采集未相除的真实原量及不确定性。

- 选定流：乙醇水溶消毒制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_ethanol
- 来源：ctsg-kelp-nursery-2014

###### 交流电 (`nursery_power`)

计量本过程使用点美国电网电力，按实际含待机、失败批、清洗和制冷。选定身份未规定电压和输配边界，且原来源背景是抽出处理；这里只借用电力身份，不借用处理负荷或电耗系数。采集实际供应商、电压、计量边界、期间及背景供电数据集；不适用于其他国家供电。先将 kWh 换为 MJ 再归属。 本交换未建立可靠通用数值范围，须按 cp_nursery_power 采集未相除的真实原量及不确定性。

- 选定流：交流电 `65ec3424-071f-42ab-8800-810364539813`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_nursery_power
- 来源：ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

##### 基本流

###### 育苗取水口海水 (`seawater`)

对实际抽取天然海水称量或计量；保留盐度、温度及体积换算所需独立实测密度。该资源流将整份取水只计一次；溶解组分为分析子账，不是重复购入。记录实际过滤和紫外处理。 本交换未建立可靠通用数值范围，须按 cp_seawater 采集未相除的真实原量及不确定性。

- 选定流：育苗取水口海水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_seawater
- 来源：ctsg-kelp-nursery-2014

###### 由空气进入育苗培养液的二氧化碳 (`nursery_co2_in`)

实际曝气或生物气体物种交换时适用。测量进出口物种浓度、积分流量及温压；保留成对总观测及其子账，再使用声明的环境库净交换。抽取和废海水的生物变化溶解物种须独立分析。不提供速率或气体产率，不从一个残差拟合两个未知通量。 本交换未建立可靠通用数值范围，须按 cp_nursery_co2_in 采集未相除的真实原量及不确定性。

- 选定流：由空气进入育苗培养液的二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_nursery_co2_in
- 来源：ctsg-kelp-nursery-2014

###### 由空气进入育苗培养液的氧气 (`nursery_o2_in`)

实际曝气或生物气体物种交换时适用。测量进出口物种浓度、积分流量及温压；保留成对总观测及其子账，再使用声明的环境库净交换。抽取和废海水的生物变化溶解物种须独立分析。不提供速率或气体产率，不从一个残差拟合两个未知通量。 本交换未建立可靠通用数值范围，须按 cp_nursery_o2_in 采集未相除的真实原量及不确定性。

- 选定流：由空气进入育苗培养液的氧气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_nursery_o2_in
- 来源：ctsg-kelp-nursery-2014

#### 输出

##### 产品流

###### 附着糖海带幼苗的尼龙育苗绳 (`seeded_out`)

按声明沥水方法称量整份转移湿苗绳；尼龙、附着干生物量和载水独立子账。该内部中间品不计作食用产量 Q。全部继承交换负荷转入养成，不再第二次采购其中苗绳。 本交换未建立可靠通用数值范围，须按 cp_seeded_out 采集未相除的真实原量及不确定性。

- 选定流：附着糖海带幼苗的尼龙育苗绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_seeded_out
- 来源：ctsg-kelp-nursery-2014

##### 废物流

###### 废 PES 富集培养海水 (`spent_medium`)

逐批计量整份废液和真实处理或海洋排口；残余氮、磷、锗及消毒剂物种分别为组分子账。 本交换未建立可靠通用数值范围，须按 cp_spent_medium 采集未相除的真实原量及不确定性。

- 选定流：废 PES 富集培养海水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_spent_medium
- 来源：ctsg-kelp-nursery-2014

###### 废糖海带孢子囊群组织 (`sorus_waste`)

称量用后及失败组织，测干物率和实际处置；没有放行和市场证据不得归为食用共产品。 本交换未建立可靠通用数值范围，须按 cp_sorus_waste 采集未相除的真实原量及不确定性。

- 选定流：废糖海带孢子囊群组织
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_sorus_waste
- 来源：ctsg-kelp-nursery-2014

###### 湿纤维素纸巾废物 (`paper_waste`)

计量整份湿废物，并在水平衡中独立区分干纤维与夹液。 本交换未建立可靠通用数值范围，须按 cp_paper_waste 采集未相除的真实原量及不确定性。

- 选定流：湿纤维素纸巾废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_paper_waste
- 来源：ctsg-kelp-nursery-2014

###### 废聚酯海水过滤滤芯 (`filter_waste`)

称量整支用后滤芯，独立确定截留固体和水；记录真实处理。 本交换未建立可靠通用数值范围，须按 cp_filter_waste 采集未相除的真实原量及不确定性。

- 选定流：废聚酯海水过滤滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_filter_waste
- 来源：ctsg-kelp-nursery-2014

##### 基本流

###### 排入空气的乙醇 (`ethanol_air`)

仅真实挥发时适用。由独立测量或经验证的该制剂专属物料衡算确定乙醇物种质量；总 VOC 不是乙醇质量。 本交换未建立可靠通用数值范围，须按 cp_ethanol_air 采集未相除的真实原量及不确定性。

- 选定流：排入空气的乙醇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_ethanol_air
- 来源：ctsg-kelp-nursery-2014

###### 由育苗培养液排入空气的二氧化碳 (`nursery_co2_out`)

实际曝气或生物气体物种交换时适用。测量进出口物种浓度、积分流量及温压；保留成对总观测及其子账，再使用声明的环境库净交换。抽取和废海水的生物变化溶解物种须独立分析。不提供速率或气体产率，不从一个残差拟合两个未知通量。 本交换未建立可靠通用数值范围，须按 cp_nursery_co2_out 采集未相除的真实原量及不确定性。

- 选定流：由育苗培养液排入空气的二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_nursery_co2_out
- 来源：ctsg-kelp-nursery-2014

###### 由育苗培养液排入空气的氧气 (`nursery_o2_out`)

实际曝气或生物气体物种交换时适用。测量进出口物种浓度、积分流量及温压；保留成对总观测及其子账，再使用声明的环境库净交换。抽取和废海水的生物变化溶解物种须独立分析。不提供速率或气体产率，不从一个残差拟合两个未知通量。 本交换未建立可靠通用数值范围，须按 cp_nursery_o2_out 采集未相除的真实原量及不确定性。

- 选定流：由育苗培养液排入空气的氧气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_nursery_o2_out
- 来源：ctsg-kelp-nursery-2014

### 过程：延绳布苗维护与采收 (`growout`)

#### 输入

##### 产品流

###### 附着糖海带幼苗的尼龙育苗绳 (`seeded_in`)

记录准确育苗转入及负荷向量，含尼龙和水子账；仅在合并物理及 LCI 边界抵消成对内部转移。 本交换未建立可靠通用数值范围，须按 cp_seeded_in 采集未相除的真实原量及不确定性。

- 选定流：附着糖海带幼苗的尼龙育苗绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_seeded_in
- 来源：ctsg-kelp-nursery-2014

###### 船用柴油 (`diesel`)

采集加油与油箱期初期末质量、实际航次、机时及共用情况。体积换算必须有该燃油在记录温度的密度；不用水密度或通用油耗率。包含布苗、维护、收获、失败航次和回收。 本交换未建立可靠通用数值范围，须按 cp_diesel 采集未相除的真实原量及不确定性。

- 选定流：船用柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_diesel
- 来源：ctsg-kelp-nursery-2014

###### 矿物润滑油 (`lubricant`)

称量实际润滑油补加和期初期末存量；采集油品等级、发动机范围和废油回收；不再重复并入柴油质量。 本交换未建立可靠通用数值范围，须按 cp_lubricant 采集未相除的真实原量及不确定性。

- 选定流：矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_lubricant
- 来源：ctsg-kelp-nursery-2014

##### 基本流

###### 海水中溶解的二氧化碳 (`co2_uptake`)

仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_co2_uptake 采集未相除的真实原量及不确定性。

- 选定流：海水中溶解的二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_co2_uptake
- 来源：ctsg-kelp-nursery-2014

###### 海水中碳酸氢根离子 (`bicarbonate`)

仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_bicarbonate 采集未相除的真实原量及不确定性。

- 选定流：海水中碳酸氢根离子
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_bicarbonate
- 来源：ctsg-kelp-nursery-2014

###### 海水中碳酸根离子 (`carbonate`)

仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_carbonate 采集未相除的真实原量及不确定性。

- 选定流：海水中碳酸根离子
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_carbonate
- 来源：ctsg-kelp-nursery-2014

###### 海水中硝酸根离子 (`nitrate`)

仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_nitrate 采集未相除的真实原量及不确定性。

- 选定流：海水中硝酸根离子
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_nitrate
- 来源：ctsg-kelp-nursery-2014

###### 海水中铵离子 (`ammonium`)

仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_ammonium 采集未相除的真实原量及不确定性。

- 选定流：海水中铵离子
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_ammonium
- 来源：ctsg-kelp-nursery-2014

###### 海水中正磷酸根离子 (`phosphate`)

仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_phosphate 采集未相除的真实原量及不确定性。

- 选定流：海水中正磷酸根离子
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_phosphate
- 来源：ctsg-kelp-nursery-2014

###### 进入糖海带组织的水 (`water_uptake`)

仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_water_uptake 采集未相除的真实原量及不确定性。

- 选定流：进入糖海带组织的水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_water_uptake
- 来源：ctsg-kelp-nursery-2014

###### 从燃烧空气消耗的氧气 (`engine_oxygen`)

由独立燃油发动机专属测量及物种平衡确定该大气物种实际净消耗。保留完整实测进排气组成，包括未变化氮氧氩及环境二氧化碳的成对总量子账；仅抵消相同穿过量，不抵消转化或排放物种。不猜燃烧空气量、水分、燃油组成或通用 NOx 因子。 本交换未建立可靠通用数值范围，须按 cp_engine_oxygen 采集未相除的真实原量及不确定性。

- 选定流：从燃烧空气消耗的氧气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_engine_oxygen
- 来源：ctsg-kelp-nursery-2014

###### 从燃烧空气消耗的氮气 (`engine_nitrogen`)

由独立燃油发动机专属测量及物种平衡确定该大气物种实际净消耗。保留完整实测进排气组成，包括未变化氮氧氩及环境二氧化碳的成对总量子账；仅抵消相同穿过量，不抵消转化或排放物种。不猜燃烧空气量、水分、燃油组成或通用 NOx 因子。 本交换未建立可靠通用数值范围，须按 cp_engine_nitrogen 采集未相除的真实原量及不确定性。

- 选定流：从燃烧空气消耗的氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_engine_nitrogen
- 来源：ctsg-kelp-nursery-2014

#### 输出

##### 产品流

###### 藻类 (`harvest_out`)

仅为所记录苗绳养成的鲜糖海带。按固定沥水条件称量收获完整藻体，排除绳索、附着生物和容器。独立携带水分、盐和干生物量；该通用 UUID 不认证物种或可食用性，分类标签存在野生非食用冲突。尚未首次食用品质放行。 相反原生元数据明确标注野生且不适合人食用，原生所有者意图未知。这是有条件通用物理身份，不证明分类错误，也非食用、养殖、鲜态或物种精确匹配。应独立建立本 PCR 参考对象和供货品质，绝不自动选择野生或非食用上游数据集及供应者。 本交换未建立可靠通用数值范围，须按 cp_harvest_out 采集未相除的真实原量及不确定性。

- 选定流：藻类 `eb76bd93-d5a5-4db2-bd08-388665f2eda5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_harvest_out
- 来源：ctsg-kelp-nursery-2014

##### 废物流

###### 剔除的糖海带疏苗生物量 (`thinned`)

称量实际移除糖海带，独立测干物率并记录处置。存在其他移除附着物种时逐真实分类单元增加独立条件卡；不得改称糖海带或漏掉质量。 本交换未建立可靠通用数值范围，须按 cp_thinned 采集未相除的真实原量及不确定性。

- 选定流：剔除的糖海带疏苗生物量
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_thinned
- 来源：ctsg-kelp-nursery-2014

###### 废矿物润滑油 (`waste_oil`)

计量回收废油及外部接收方；区分滤芯内油和泄漏，真实泄漏油另列独立流。 本交换未建立可靠通用数值范围，须按 cp_waste_oil 采集未相除的真实原量及不确定性。

- 选定流：废矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste_oil
- 来源：ctsg-kelp-nursery-2014

###### 废聚丙烯养殖延绳 (`waste_rope`)

称量退役绳并记录最终处理。真实绳索遗失入海时，另用聚丙烯绳入海基本流卡并测损失和去向；既不是糖海带损失，也非设施服务抵扣。 本交换未建立可靠通用数值范围，须按 cp_waste_rope 采集未相除的真实原量及不确定性。

- 选定流：废聚丙烯养殖延绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste_rope
- 来源：ctsg-kelp-nursery-2014

##### 基本流

###### 进入海水的脱落糖海带生物量 (`kelp_loss`)

测量或使用经验证的场址特定采样模型独立估计损失并给不确定性；采集湿重、干物率、碳氮磷和真实去向。不计作收获产量或海洋永久移除。未知损失不得默认零。 本交换未建立可靠通用数值范围，须按 cp_kelp_loss 采集未相除的真实原量及不确定性。

- 选定流：进入海水的脱落糖海带生物量
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_kelp_loss
- 来源：ctsg-kelp-nursery-2014

###### 释放到海水的氧气 (`oxygen`)

测量该真实生物气体物种通量和溶解态或气相，或采用经验证的独立物种平衡。区分总光合作用和呼吸；碳吸收和释放不可互换成气候抵扣。没有完整受支持生化平衡，不仅凭吸碳推定氧气量。 本交换未建立可靠通用数值范围，须按 cp_oxygen 采集未相除的真实原量及不确定性。

- 选定流：释放到海水的氧气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_oxygen
- 来源：ctsg-kelp-nursery-2014

###### 释放到海水的二氧化碳 (`respired_co2`)

测量该真实生物气体物种通量和溶解态或气相，或采用经验证的独立物种平衡。区分总光合作用和呼吸；碳吸收和释放不可互换成气候抵扣。没有完整受支持生化平衡，不仅凭吸碳推定氧气量。 本交换未建立可靠通用数值范围，须按 cp_respired_co2 采集未相除的真实原量及不确定性。

- 选定流：释放到海水的二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_respired_co2
- 来源：ctsg-kelp-nursery-2014

###### 柴油燃烧排入空气的二氧化碳 (`fossil_co2`)

针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_fossil_co2 采集未相除的真实原量及不确定性。

- 选定流：柴油燃烧排入空气的二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_fossil_co2
- 来源：

###### 排入空气的一氧化碳 (`carbon_monoxide`)

针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_carbon_monoxide 采集未相除的真实原量及不确定性。

- 选定流：排入空气的一氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_carbon_monoxide
- 来源：

###### 排入空气的一氧化氮 (`nitric_oxide`)

针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_nitric_oxide 采集未相除的真实原量及不确定性。

- 选定流：排入空气的一氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_nitric_oxide
- 来源：

###### 排入空气的二氧化氮 (`nitrogen_dioxide`)

针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_nitrogen_dioxide 采集未相除的真实原量及不确定性。

- 选定流：排入空气的二氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_nitrogen_dioxide
- 来源：

###### 排入空气的二氧化硫 (`sulphur_dioxide`)

针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_sulphur_dioxide 采集未相除的真实原量及不确定性。

- 选定流：排入空气的二氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_sulphur_dioxide
- 来源：

###### 柴油燃烧排入空气的水蒸气 (`combustion_water`)

针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_combustion_water 采集未相除的真实原量及不确定性。

- 选定流：柴油燃烧排入空气的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_combustion_water
- 来源：

### 过程：冷却检验包装与首次食用品质放行 (`release`)

#### 输入

##### 产品流

###### 藻类 (`harvest_in`)

接收准确鲜糖海带收获转入、全部继承负荷和水盐子账。仅为通用藻体身份；披露野生非食用分类冲突，不赋予食品许可。 相反原生元数据明确标注野生且不适合人食用，原生所有者意图未知。这是有条件通用物理身份，不证明分类错误，也非食用、养殖、鲜态或物种精确匹配。应独立建立本 PCR 参考对象和供货品质，绝不自动选择野生或非食用上游数据集及供应者。 本交换未建立可靠通用数值范围，须按 cp_harvest_in 采集未相除的真实原量及不确定性。

- 选定流：藻类 `eb76bd93-d5a5-4db2-bd08-388665f2eda5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_harvest_in
- 来源：ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

###### 淡水冰 (`ice`)

称量整份外购冷却冰；分别记录来源、质量、融化和余冰。保持有记录的冰藻隔离；融水不是 Q 或组织水。 本交换未建立可靠通用数值范围，须按 cp_ice 采集未相除的真实原量及不确定性。

- 选定流：淡水冰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_ice
- 来源：ctsg-seaweed-food-hazards-2020

###### 高密度聚乙烯敞口周转箱 (`tote`)

逐只称量可复用食品接触周转箱，采集购入、期初期末库存、损失、清洗和外部返回。已有箱不因每次使用而再次采购。 本交换未建立可靠通用数值范围，须按 cp_tote 采集未相除的真实原量及不确定性。

- 选定流：高密度聚乙烯敞口周转箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_tote
- 来源：ctsg-seaweed-food-hazards-2020

###### 低密度聚乙烯非密封内袋 (`liner`)

称量实际非密封食品接触内袋及隔冰组件。该路线不含真空或减氧包装；实际使用不同隔离材料时另行命名。 本交换未建立可靠通用数值范围，须按 cp_liner 采集未相除的真实原量及不确定性。

- 选定流：低密度聚乙烯非密封内袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_liner
- 来源：ctsg-seaweed-food-hazards-2020

###### 纤维素纸标识标签 (`label`)

称量实际纸标签；记录采收批、海域、日期和过敏原告知。若胶、油墨或覆膜随外购标签一体供货，整标签只采购一次，组成保留子账。 本交换未建立可靠通用数值范围，须按 cp_label 采集未相除的真实原量及不确定性。

- 选定流：纤维素纸标识标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_label
- 来源：ctsg-seaweed-food-hazards-2020

###### 饮用级清洗水 (`washwater`)

计量容器和食品接触表面实际清洁用水，含开机和清场。常规清洗或焯烫可食藻体不属本原态整藻路线；若实际发生，应采集方法并另行评审加工路线。 本交换未建立可靠通用数值范围，须按 cp_washwater 采集未相除的真实原量及不确定性。

- 选定流：饮用级清洗水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_washwater
- 来源：ctsg-seaweed-food-hazards-2020

###### 乙醇水溶食品接触面消毒制剂 (`sanitizer`)

仅所记录获准产品适用。称量整份供货制剂；独立采集活性含量、载水、接触冲洗要求和乙醇排放。水和活性乙醇不得二次采购。 本交换未建立可靠通用数值范围，须按 cp_sanitizer 采集未相除的真实原量及不确定性。

- 选定流：乙醇水溶食品接触面消毒制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_sanitizer
- 来源：ctsg-seaweed-food-hazards-2020

###### 1,1,1,2-四氟乙烷 (`refrigerant`)

仅实际 R134a 设备初装资本品以外的补充适用。用气瓶差重；独立记录回收、设备期初期末存量和泄漏。不同制冷剂须有独立卡和身份，不沿用本绑定。 本交换未建立可靠通用数值范围，须按 cp_refrigerant 采集未相除的真实原量及不确定性。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_refrigerant
- 来源：ctsg-seaweed-food-hazards-2020

###### 交流电 (`release_power`)

计量本过程使用点美国电网电力，按实际含待机、失败批、清洗和制冷。选定身份未规定电压和输配边界，且原来源背景是抽出处理；这里只借用电力身份，不借用处理负荷或电耗系数。采集实际供应商、电压、计量边界、期间及背景供电数据集；不适用于其他国家供电。先将 kWh 换为 MJ 再归属。 本交换未建立可靠通用数值范围，须按 cp_release_power 采集未相除的真实原量及不确定性。

- 选定流：交流电 `65ec3424-071f-42ab-8800-810364539813`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_release_power
- 来源：ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

#### 输出

##### 产品流

###### 藻类 (`released_kelp`)

唯一参考输出为养殖鲜态原态完整糖海带，经过收获、沥水、冷却、身份及食用适用性检查后的首次有记录品质放行。通用“藻类”不保证物种、食品级、含水率、路线或地域；其仅在 CPC 分类中标注的野生非食用与此食用养殖用途冲突。物理正文及质量属性仍可兼容；以上限制须随本行消费，禁止用干制掌状海带替代。Q 是依声明沥水方案新增放行的净湿组织，排除游离及外附海水、冰、包装、绳索和附着物种；报告盐和独立干物率。Q 已包括同批放行后的期末成品，不得再加一次期末成品作生产量。 相反原生元数据明确标注野生且不适合人食用，原生所有者意图未知。这是有条件通用物理身份，不证明分类错误，也非食用、养殖、鲜态或物种精确匹配。应独立建立本 PCR 参考对象和供货品质，绝不自动选择野生或非食用上游数据集及供应者。 本交换未建立可靠通用数值范围，须按 cp_released_kelp 采集未相除的真实原量及不确定性。

- 选定流：藻类 `eb76bd93-d5a5-4db2-bd08-388665f2eda5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_released_kelp
- 来源：ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

##### 废物流

###### 被拒收的糖海带食用批 (`reject_food`)

称量全部不安全、腐败、破损、放行失败和破坏性检验藻体；记录处置和水分。拒收批不计 Q，不自动作为共产品或抵扣。 本交换未建立可靠通用数值范围，须按 cp_reject_food 采集未相除的真实原量及不确定性。

- 选定流：被拒收的糖海带食用批
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_reject_food
- 来源：ctsg-seaweed-food-hazards-2020

###### 容器清洗废水 (`effluent`)

计量本操作整份废水及接收处理，分别分析盐、消毒剂和悬浮生物量。COD 是指标而不是特定有机化学品质量。 本交换未建立可靠通用数值范围，须按 cp_effluent 采集未相除的真实原量及不确定性。

- 选定流：容器清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_effluent
- 来源：ctsg-seaweed-food-hazards-2020

###### 分离的淡水冰融水 (`meltwater`)

计量融水实际排口或处理及残余冰；不假定海水密度，融水不计入可食 Q。 本交换未建立可靠通用数值范围，须按 cp_meltwater 采集未相除的真实原量及不确定性。

- 选定流：分离的淡水冰融水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_meltwater
- 来源：ctsg-seaweed-food-hazards-2020

###### 废低密度聚乙烯内袋 (`waste_liner`)

废弃破损袋与随实物发运袋质量分别称量。 本交换未建立可靠通用数值范围，须按 cp_waste_liner 采集未相除的真实原量及不确定性。

- 选定流：废低密度聚乙烯内袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste_liner
- 来源：ctsg-seaweed-food-hazards-2020

###### 废高密度聚乙烯周转箱 (`waste_tote`)

称量退役箱及真实废物接收方；系统内复用不是回收共产品。 本交换未建立可靠通用数值范围，须按 cp_waste_tote 采集未相除的真实原量及不确定性。

- 选定流：废高密度聚乙烯周转箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste_tote
- 来源：ctsg-seaweed-food-hazards-2020

###### 废纤维素纸标签 (`waste_label`)

在组分衡算中区分废标签和附带湿污染物并称量。 本交换未建立可靠通用数值范围，须按 cp_waste_label 采集未相除的真实原量及不确定性。

- 选定流：废纤维素纸标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste_label
- 来源：ctsg-seaweed-food-hazards-2020

##### 基本流

###### 排入空气的1,1,1,2-四氟乙烷 (`r134a_air`)

仅实际泄漏适用；独立测量区分损失、回收工质和保有存量。 本交换未建立可靠通用数值范围，须按 cp_r134a_air 采集未相除的真实原量及不确定性。

- 选定流：排入空气的1,1,1,2-四氟乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_r134a_air
- 来源：ctsg-seaweed-food-hazards-2020

###### 排入空气的乙醇 (`release_ethanol_air`)

仅实际使用食品接触面消毒制剂适用；由整剂采购独立确定乙醇质量；不以总 VOC 替代。 本交换未建立可靠通用数值范围，须按 cp_release_ethanol_air 采集未相除的真实原量及不确定性。

- 选定流：排入空气的乙醇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_release_ethanol_air
- 来源：ctsg-seaweed-food-hazards-2020

###### 排入空气的水蒸气 (`water_air`)

测量真实蒸发或使用独立受支持水平衡；组织水、游离海水、冰和清洁用水保持可区分。 本交换未建立可靠通用数值范围，须按 cp_water_air 采集未相除的真实原量及不确定性。

- 选定流：排入空气的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_water_air
- 来源：ctsg-seaweed-food-hazards-2020

### 过程：放行后储存搬运及发运服务 (`service`)

#### 输入

##### 产品流

###### 交流电 (`service_power`)

计量本过程使用点美国电网电力，按实际含待机、失败批、清洗和制冷。选定身份未规定电压和输配边界，且原来源背景是抽出处理；这里只借用电力身份，不借用处理负荷或电耗系数。采集实际供应商、电压、计量边界、期间及背景供电数据集；不适用于其他国家供电。先将 kWh 换为 MJ 再归属。 本交换未建立可靠通用数值范围，须按 cp_service_power 采集未相除的真实原量及不确定性。

- 选定流：交流电 `65ec3424-071f-42ab-8800-810364539813`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_power
- 来源：ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

###### 船用柴油 (`service_diesel`)

仅生产者控制下真实合同放行后搬运或发运适用。采集增量燃油及各放行批归属。该独立服务不形成 Q；历史批服务保留原负荷，不计入本期新产。 本交换未建立可靠通用数值范围，须按 cp_service_diesel 采集未相除的真实原量及不确定性。

- 选定流：船用柴油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_diesel
- 来源：ctsg-seaweed-food-hazards-2020

##### 基本流

###### 从燃烧空气消耗的氧气 (`service_oxygen`)

所记录放行后柴油服务真实发生的物种净消耗时适用。独立确定真实气体组成并保留成对不变穿过子账；不猜空气比，不重复生产负荷。 本交换未建立可靠通用数值范围，须按 cp_service_oxygen 采集未相除的真实原量及不确定性。

- 选定流：从燃烧空气消耗的氧气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_oxygen
- 来源：

###### 从燃烧空气消耗的氮气 (`service_nitrogen`)

所记录放行后柴油服务真实发生的物种净消耗时适用。独立确定真实气体组成并保留成对不变穿过子账；不猜空气比，不重复生产负荷。 本交换未建立可靠通用数值范围，须按 cp_service_nitrogen 采集未相除的真实原量及不确定性。

- 选定流：从燃烧空气消耗的氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_nitrogen
- 来源：

#### 输出

##### 基本流

###### 柴油燃烧排入空气的二氧化碳 (`service_co2`)

仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_co2 采集未相除的真实原量及不确定性。

- 选定流：柴油燃烧排入空气的二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_co2
- 来源：

###### 排入空气的一氧化碳 (`service_co`)

仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_co 采集未相除的真实原量及不确定性。

- 选定流：排入空气的一氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_co
- 来源：

###### 排入空气的一氧化氮 (`service_no`)

仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_no 采集未相除的真实原量及不确定性。

- 选定流：排入空气的一氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_no
- 来源：

###### 排入空气的二氧化氮 (`service_no2`)

仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_no2 采集未相除的真实原量及不确定性。

- 选定流：排入空气的二氧化氮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_no2
- 来源：

###### 排入空气的二氧化硫 (`service_so2`)

仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_so2 采集未相除的真实原量及不确定性。

- 选定流：排入空气的二氧化硫
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_so2
- 来源：

###### 柴油燃烧排入空气的水蒸气 (`service_water`)

仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_water 采集未相除的真实原量及不确定性。

- 选定流：柴油燃烧排入空气的水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属的原始期间交换仅除一次新增首次放行净湿组织质量 Q。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_service_water
- 来源：

## 7. 分配与共产品处理

a_scope 的条件约束本节全部规则；剩余分配仅在前述步骤后适用。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | attributional_model | 本层级仅适用于已声明的归因划分场景：Situation C2，或按 ILCD 相应目标条款评估细分、虚拟细分及相关替代或系统扩展不可用或不可行后需分配的其他情形。记录决策背景；不意味着可自由选择分配或替代。 | jrc-ilcd-allocation-2010 |
| a_dedicated | exchange_attribution | 首先分开独立计量的育苗批、专用设施、航次、冷却及放行活动。对只进入一个输出的材料采用虚拟细分。失败培养、拒收食用批、异常待机及清场活动保留为真实作物或功能负荷，不能假定可售产量把负荷分走。 | jrc-ilcd-allocation-2010 |
| a_physical | remaining_joint_exchanges | 对确实剩余的每项共用交换，逐项识别并证明其与各功能的决定性物理因果关系。设施占用时间、航次载荷或制冷负荷仅在实测证明该交换因果时才可使用。营养含量或干湿质量不自动决定船油、资本品或全部排放。分配向量之和须回到原向量，不改变物理产出质量。 | jrc-ilcd-allocation-2010 |
| a_residual | residual_joint_exchanges | 仅前述步骤后仍无决定性物理因果时，才使用同期代表性市场价值，必须是同一共用过程出口的真实状态和数量。扣除下游调理、包装、仓储和运输成本得到等效出门价值。保留价格、日期、数量、币种、敏感性及剩余判据理由。不提供固定比例或物理经济分配任选。 | jrc-ilcd-allocation-2010 |
| a_noncredits | biomass_and_residues | 拒收组织、废绳、融水及实测碳氮磷吸收不自动成为可售共功能或抵扣。保留其真实去向和处理负荷。光合吸收为物理交换，不是永久碳封存或避免营养盐生产。本食用作物清单不授权替代、负碳负荷或营养移除抵扣。真实另有市场功能须另有证据及目标一致处理。 |  |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

采集记录仅包含尚未相除的原始观测。aggregation_rule 单元格声明最终报告基准，引用唯一 normalize_once 计算且不执行运算。除了共用审计字段外，须保留每卡专属范围和采集义务。不得以过程通用行替代这些逐交换协议。本场址活动没有可靠通用用量范围；缺值须采集并披露不确定性，不编宽泛推测区间。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_asset_longline | assets | asset_longline | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集绳长及实测线密度；计入更换和遗失段。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_longline 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_anchor | assets | asset_anchor | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集完整锚的称量与安装记录。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_anchor 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_chain | assets | asset_chain | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集实际配置链条称量。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_chain 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_buoy | assets | asset_buoy | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集整件外购浮标质量；附带配件留在同一物品账。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_buoy 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_spool | assets | asset_spool | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集整件绕线筒质量和复用次数。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_spool 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_tank | assets | asset_tank | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集整缸质量和服役历史。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_tank 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_chiller | assets | asset_chiller | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集整机质量且包括初装制冷剂。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_chiller 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_pump | assets | asset_pump | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集整泵质量及实测使用时间。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_pump 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_airpump | assets | asset_airpump | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集整台气泵质量；环境空气通气不计作外购压缩气体。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_airpump 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_lamp | assets | asset_lamp | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集完整灯具质量和光源更换历史。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_lamp 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_boat | assets | asset_boat | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集整船质量含发动机；不得再将其发动机组分作为第二项购入资产。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_boat 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_asset_coldroom | assets | asset_coldroom | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅适用于所声明设施。采集整套冷藏室购入及安装设备边界；含初装工质。逐项采集实际购入、期初期末在役库存、失效、更换、回收、寿命及归属使用量。关联上游整件制造及安装和最终处置；年度归属质量是服务分摊，不是生物量原料。无可靠通用质量、寿命或利用率范围。 本交换未建立可靠通用数值范围，须按 cp_asset_coldroom 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_sorus | nursery | sorus | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅限获准来源的新鲜糖海带 Saccharina latissima 生殖孢子囊群组织；称量接收净湿组织并独立测干物率。记录来源海域及采集船舶负荷。该通用身份不保证物种、食品级、含水率、来源或路线；其野生非食用 CPC 标注与本用途冲突，但完整物理描述没有相应限制。仅将其用作通用藻体身份，绝不作为已接受分类映射或食品许可。不得替代其他物种或干制掌状海带。 相反原生元数据明确标注野生且不适合人食用，原生所有者意图未知。这是有条件通用物理身份，不证明分类错误，也非食用、养殖、鲜态或物种精确匹配。应独立建立本 PCR 参考对象和供货品质，绝不自动选择野生或非食用上游数据集及供应者。 本交换未建立可靠通用数值范围，须按 cp_sorus 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_seawater | nursery | seawater | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 对实际抽取天然海水称量或计量；保留盐度、温度及体积换算所需独立实测密度。该资源流将整份取水只计一次；溶解组分为分析子账，不是重复购入。记录实际过滤和紫外处理。 本交换未建立可靠通用数值范围，须按 cp_seawater 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_twine | nursery | twine | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量洁净外购尼龙绳；记录绳长和实测线密度。不得将尼龙棉混纺绳当作该身份。包含全部接种失败和监测取样损失。 本交换未建立可靠通用数值范围，须按 cp_twine 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_pes | nursery | pes | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 外购 PES 制剂按整份供货质量仅采购一次。采集供应商配方、浓度、批次分析、测温密度和有效期；载水和各营养元素为子账。手册半强度培养配方只提供过程背景，不证明该供应商浓缩液效价或通用 LCI 用量。若实际厂内配制，应以每项真实外购试剂、配制能耗及损失的独立卡替换本整剂采购卡。 本交换未建立可靠通用数值范围，须按 cp_pes 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_filter | nursery | filter | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 采集整支滤芯质量、更换频率及实际过滤级别。上游数据按供货滤芯结构，不得只计聚合物而漏掉随件外壳。 本交换未建立可靠通用数值范围，须按 cp_filter 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_paper | nursery | paper | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量孢子囊群清洁和湿润暂存消耗纸巾；湿废纸与干采购纸分账。 本交换未建立可靠通用数值范围，须按 cp_paper 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_deionized | nursery | deionized | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 采集绕线筒准备和冲洗实际外供去离子水质量。若现场制备，则以原水、处理耗材、浓水和电力各项替换本外供边界。 本交换未建立可靠通用数值范围，须按 cp_deionized 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_salt | nursery | salt | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅实际育苗绳盐洗时适用。称量外购化学品，溶解水独立计量。记录纯度、盐残留、冲洗与排放；不得默认用于海上养成。 本交换未建立可靠通用数值范围，须按 cp_salt 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_iodine | nursery | iodine | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅真实获准的孢子囊群浸洗适用。整份供货制剂称量一次；碘含量和载水记子账。采集产品使用许可、冲洗和适合最终食用作物的残留证据。实验室手册不批准食用用途化学残留。 本交换未建立可靠通用数值范围，须按 cp_iodine 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_germanium | nursery | germanium | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅在有记录的硅藻控制且具有食用海藻用途适用性及残留评估时适用。实测投加与锗去向；培养洁净且未投加时不使用。不得从实验培养成功推断无残留或食品用途许可。 本交换未建立可靠通用数值范围，须按 cp_germanium 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_ethanol | nursery | ethanol | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 实际表面消毒时适用。整份供应制剂称量一次；记录乙醇含量、水分、冲洗及独立确定的乙醇挥发量。不规定固定浓度或损失比例。 本交换未建立可靠通用数值范围，须按 cp_ethanol 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_nursery_power | nursery | nursery_power | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 计量本过程使用点美国电网电力，按实际含待机、失败批、清洗和制冷。选定身份未规定电压和输配边界，且原来源背景是抽出处理；这里只借用电力身份，不借用处理负荷或电耗系数。采集实际供应商、电压、计量边界、期间及背景供电数据集；不适用于其他国家供电。先将 kWh 换为 MJ 再归属。 本交换未建立可靠通用数值范围，须按 cp_nursery_power 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | MJ | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_seeded_out | nursery | seeded_out | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 按声明沥水方法称量整份转移湿苗绳；尼龙、附着干生物量和载水独立子账。该内部中间品不计作食用产量 Q。全部继承交换负荷转入养成，不再第二次采购其中苗绳。 本交换未建立可靠通用数值范围，须按 cp_seeded_out 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_spent_medium | nursery | spent_medium | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 逐批计量整份废液和真实处理或海洋排口；残余氮、磷、锗及消毒剂物种分别为组分子账。 本交换未建立可靠通用数值范围，须按 cp_spent_medium 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_sorus_waste | nursery | sorus_waste | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量用后及失败组织，测干物率和实际处置；没有放行和市场证据不得归为食用共产品。 本交换未建立可靠通用数值范围，须按 cp_sorus_waste 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_paper_waste | nursery | paper_waste | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 计量整份湿废物，并在水平衡中独立区分干纤维与夹液。 本交换未建立可靠通用数值范围，须按 cp_paper_waste 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_filter_waste | nursery | filter_waste | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量整支用后滤芯，独立确定截留固体和水；记录真实处理。 本交换未建立可靠通用数值范围，须按 cp_filter_waste 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_ethanol_air | nursery | ethanol_air | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅真实挥发时适用。由独立测量或经验证的该制剂专属物料衡算确定乙醇物种质量；总 VOC 不是乙醇质量。 本交换未建立可靠通用数值范围，须按 cp_ethanol_air 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_seeded_in | growout | seeded_in | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 记录准确育苗转入及负荷向量，含尼龙和水子账；仅在合并物理及 LCI 边界抵消成对内部转移。 本交换未建立可靠通用数值范围，须按 cp_seeded_in 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_diesel | growout | diesel | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 采集加油与油箱期初期末质量、实际航次、机时及共用情况。体积换算必须有该燃油在记录温度的密度；不用水密度或通用油耗率。包含布苗、维护、收获、失败航次和回收。 本交换未建立可靠通用数值范围，须按 cp_diesel 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_lubricant | growout | lubricant | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量实际润滑油补加和期初期末存量；采集油品等级、发动机范围和废油回收；不再重复并入柴油质量。 本交换未建立可靠通用数值范围，须按 cp_lubricant 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_co2_uptake | growout | co2_uptake | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_co2_uptake 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_bicarbonate | growout | bicarbonate | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_bicarbonate 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_carbonate | growout | carbonate | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_carbonate 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_nitrate | growout | nitrate | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_nitrate 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_ammonium | growout | ammonium | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_ammonium 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_phosphate | growout | phosphate | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_phosphate 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_water_uptake | growout | water_uptake | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅计该真实转移的开放海水物种。用经验证的通量及形态测量、实测在养收获损失生物量和元素组成独立确定总吸收；区分外附海水。记录电荷、分子质量、介质与期间。不得用营养盐、DIC 或总质量残差拟合两个未知通量或指定物种。自然吸收不是永久封存、避免肥料或负产品负荷。育苗抽取海水中的组分仍留在整份海水子账内。 本交换未建立可靠通用数值范围，须按 cp_water_uptake 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_harvest_out | growout | harvest_out | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅为所记录苗绳养成的鲜糖海带。按固定沥水条件称量收获完整藻体，排除绳索、附着生物和容器。独立携带水分、盐和干生物量；该通用 UUID 不认证物种或可食用性，分类标签存在野生非食用冲突。尚未首次食用品质放行。 相反原生元数据明确标注野生且不适合人食用，原生所有者意图未知。这是有条件通用物理身份，不证明分类错误，也非食用、养殖、鲜态或物种精确匹配。应独立建立本 PCR 参考对象和供货品质，绝不自动选择野生或非食用上游数据集及供应者。 本交换未建立可靠通用数值范围，须按 cp_harvest_out 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_kelp_loss | growout | kelp_loss | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 测量或使用经验证的场址特定采样模型独立估计损失并给不确定性；采集湿重、干物率、碳氮磷和真实去向。不计作收获产量或海洋永久移除。未知损失不得默认零。 本交换未建立可靠通用数值范围，须按 cp_kelp_loss 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_thinned | growout | thinned | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量实际移除糖海带，独立测干物率并记录处置。存在其他移除附着物种时逐真实分类单元增加独立条件卡；不得改称糖海带或漏掉质量。 本交换未建立可靠通用数值范围，须按 cp_thinned 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_waste_oil | growout | waste_oil | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 计量回收废油及外部接收方；区分滤芯内油和泄漏，真实泄漏油另列独立流。 本交换未建立可靠通用数值范围，须按 cp_waste_oil 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_oxygen | growout | oxygen | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 测量该真实生物气体物种通量和溶解态或气相，或采用经验证的独立物种平衡。区分总光合作用和呼吸；碳吸收和释放不可互换成气候抵扣。没有完整受支持生化平衡，不仅凭吸碳推定氧气量。 本交换未建立可靠通用数值范围，须按 cp_oxygen 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_respired_co2 | growout | respired_co2 | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 测量该真实生物气体物种通量和溶解态或气相，或采用经验证的独立物种平衡。区分总光合作用和呼吸；碳吸收和释放不可互换成气候抵扣。没有完整受支持生化平衡，不仅凭吸碳推定氧气量。 本交换未建立可靠通用数值范围，须按 cp_respired_co2 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_fossil_co2 | growout | fossil_co2 | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_fossil_co2 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_carbon_monoxide | growout | carbon_monoxide | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_carbon_monoxide 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_nitric_oxide | growout | nitric_oxide | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_nitric_oxide 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_nitrogen_dioxide | growout | nitrogen_dioxide | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_nitrogen_dioxide 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_sulphur_dioxide | growout | sulphur_dioxide | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_sulphur_dioxide 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_combustion_water | growout | combustion_water | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 针对该真实发动机废气物种采集实测或经验证的发动机及燃油专属因子，保留原始燃油基准和控制状态。声明方法及不确定性；不提供通用因子。NOx、VOC 和 COD 指标不能替代该物种质量。存在甲烷、烟炱等其他真实废气时逐项另列。 本交换未建立可靠通用数值范围，须按 cp_combustion_water 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_harvest_in | release | harvest_in | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 接收准确鲜糖海带收获转入、全部继承负荷和水盐子账。仅为通用藻体身份；披露野生非食用分类冲突，不赋予食品许可。 相反原生元数据明确标注野生且不适合人食用，原生所有者意图未知。这是有条件通用物理身份，不证明分类错误，也非食用、养殖、鲜态或物种精确匹配。应独立建立本 PCR 参考对象和供货品质，绝不自动选择野生或非食用上游数据集及供应者。 本交换未建立可靠通用数值范围，须按 cp_harvest_in 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_ice | release | ice | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量整份外购冷却冰；分别记录来源、质量、融化和余冰。保持有记录的冰藻隔离；融水不是 Q 或组织水。 本交换未建立可靠通用数值范围，须按 cp_ice 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_tote | release | tote | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 逐只称量可复用食品接触周转箱，采集购入、期初期末库存、损失、清洗和外部返回。已有箱不因每次使用而再次采购。 本交换未建立可靠通用数值范围，须按 cp_tote 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_liner | release | liner | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量实际非密封食品接触内袋及隔冰组件。该路线不含真空或减氧包装；实际使用不同隔离材料时另行命名。 本交换未建立可靠通用数值范围，须按 cp_liner 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_label | release | label | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量实际纸标签；记录采收批、海域、日期和过敏原告知。若胶、油墨或覆膜随外购标签一体供货，整标签只采购一次，组成保留子账。 本交换未建立可靠通用数值范围，须按 cp_label 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_washwater | release | washwater | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 计量容器和食品接触表面实际清洁用水，含开机和清场。常规清洗或焯烫可食藻体不属本原态整藻路线；若实际发生，应采集方法并另行评审加工路线。 本交换未建立可靠通用数值范围，须按 cp_washwater 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_sanitizer | release | sanitizer | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅所记录获准产品适用。称量整份供货制剂；独立采集活性含量、载水、接触冲洗要求和乙醇排放。水和活性乙醇不得二次采购。 本交换未建立可靠通用数值范围，须按 cp_sanitizer 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_refrigerant | release | refrigerant | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅实际 R134a 设备初装资本品以外的补充适用。用气瓶差重；独立记录回收、设备期初期末存量和泄漏。不同制冷剂须有独立卡和身份，不沿用本绑定。 本交换未建立可靠通用数值范围，须按 cp_refrigerant 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_release_power | release | release_power | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 计量本过程使用点美国电网电力，按实际含待机、失败批、清洗和制冷。选定身份未规定电压和输配边界，且原来源背景是抽出处理；这里只借用电力身份，不借用处理负荷或电耗系数。采集实际供应商、电压、计量边界、期间及背景供电数据集；不适用于其他国家供电。先将 kWh 换为 MJ 再归属。 本交换未建立可靠通用数值范围，须按 cp_release_power 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | MJ | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_released_kelp | release | released_kelp | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 唯一参考输出为养殖鲜态原态完整糖海带，经过收获、沥水、冷却、身份及食用适用性检查后的首次有记录品质放行。通用“藻类”不保证物种、食品级、含水率、路线或地域；其仅在 CPC 分类中标注的野生非食用与此食用养殖用途冲突。物理正文及质量属性仍可兼容；以上限制须随本行消费，禁止用干制掌状海带替代。Q 是依声明沥水方案新增放行的净湿组织，排除游离及外附海水、冰、包装、绳索和附着物种；报告盐和独立干物率。Q 已包括同批放行后的期末成品，不得再加一次期末成品作生产量。 相反原生元数据明确标注野生且不适合人食用，原生所有者意图未知。这是有条件通用物理身份，不证明分类错误，也非食用、养殖、鲜态或物种精确匹配。应独立建立本 PCR 参考对象和供货品质，绝不自动选择野生或非食用上游数据集及供应者。 本交换未建立可靠通用数值范围，须按 cp_released_kelp 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_reject_food | release | reject_food | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量全部不安全、腐败、破损、放行失败和破坏性检验藻体；记录处置和水分。拒收批不计 Q，不自动作为共产品或抵扣。 本交换未建立可靠通用数值范围，须按 cp_reject_food 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_effluent | release | effluent | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 计量本操作整份废水及接收处理，分别分析盐、消毒剂和悬浮生物量。COD 是指标而不是特定有机化学品质量。 本交换未建立可靠通用数值范围，须按 cp_effluent 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_meltwater | release | meltwater | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 计量融水实际排口或处理及残余冰；不假定海水密度，融水不计入可食 Q。 本交换未建立可靠通用数值范围，须按 cp_meltwater 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_waste_liner | release | waste_liner | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 废弃破损袋与随实物发运袋质量分别称量。 本交换未建立可靠通用数值范围，须按 cp_waste_liner 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_waste_tote | release | waste_tote | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量退役箱及真实废物接收方；系统内复用不是回收共产品。 本交换未建立可靠通用数值范围，须按 cp_waste_tote 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_waste_label | release | waste_label | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 在组分衡算中区分废标签和附带湿污染物并称量。 本交换未建立可靠通用数值范围，须按 cp_waste_label 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_r134a_air | release | r134a_air | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅实际泄漏适用；独立测量区分损失、回收工质和保有存量。 本交换未建立可靠通用数值范围，须按 cp_r134a_air 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_release_ethanol_air | release | release_ethanol_air | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅实际使用食品接触面消毒制剂适用；由整剂采购独立确定乙醇质量；不以总 VOC 替代。 本交换未建立可靠通用数值范围，须按 cp_release_ethanol_air 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_water_air | release | water_air | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 测量真实蒸发或使用独立受支持水平衡；组织水、游离海水、冰和清洁用水保持可区分。 本交换未建立可靠通用数值范围，须按 cp_water_air 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_nursery_co2_in | nursery | nursery_co2_in | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 实际曝气或生物气体物种交换时适用。测量进出口物种浓度、积分流量及温压；保留成对总观测及其子账，再使用声明的环境库净交换。抽取和废海水的生物变化溶解物种须独立分析。不提供速率或气体产率，不从一个残差拟合两个未知通量。 本交换未建立可靠通用数值范围，须按 cp_nursery_co2_in 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_nursery_co2_out | nursery | nursery_co2_out | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 实际曝气或生物气体物种交换时适用。测量进出口物种浓度、积分流量及温压；保留成对总观测及其子账，再使用声明的环境库净交换。抽取和废海水的生物变化溶解物种须独立分析。不提供速率或气体产率，不从一个残差拟合两个未知通量。 本交换未建立可靠通用数值范围，须按 cp_nursery_co2_out 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_nursery_o2_in | nursery | nursery_o2_in | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 实际曝气或生物气体物种交换时适用。测量进出口物种浓度、积分流量及温压；保留成对总观测及其子账，再使用声明的环境库净交换。抽取和废海水的生物变化溶解物种须独立分析。不提供速率或气体产率，不从一个残差拟合两个未知通量。 本交换未建立可靠通用数值范围，须按 cp_nursery_o2_in 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_nursery_o2_out | nursery | nursery_o2_out | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 实际曝气或生物气体物种交换时适用。测量进出口物种浓度、积分流量及温压；保留成对总观测及其子账，再使用声明的环境库净交换。抽取和废海水的生物变化溶解物种须独立分析。不提供速率或气体产率，不从一个残差拟合两个未知通量。 本交换未建立可靠通用数值范围，须按 cp_nursery_o2_out 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_engine_oxygen | growout | engine_oxygen | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 由独立燃油发动机专属测量及物种平衡确定该大气物种实际净消耗。保留完整实测进排气组成，包括未变化氮氧氩及环境二氧化碳的成对总量子账；仅抵消相同穿过量，不抵消转化或排放物种。不猜燃烧空气量、水分、燃油组成或通用 NOx 因子。 本交换未建立可靠通用数值范围，须按 cp_engine_oxygen 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_engine_nitrogen | growout | engine_nitrogen | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 由独立燃油发动机专属测量及物种平衡确定该大气物种实际净消耗。保留完整实测进排气组成，包括未变化氮氧氩及环境二氧化碳的成对总量子账；仅抵消相同穿过量，不抵消转化或排放物种。不猜燃烧空气量、水分、燃油组成或通用 NOx 因子。 本交换未建立可靠通用数值范围，须按 cp_engine_nitrogen 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_waste_rope | growout | waste_rope | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 称量退役绳并记录最终处理。真实绳索遗失入海时，另用聚丙烯绳入海基本流卡并测损失和去向；既不是糖海带损失，也非设施服务抵扣。 本交换未建立可靠通用数值范围，须按 cp_waste_rope 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_power | service | service_power | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 计量本过程使用点美国电网电力，按实际含待机、失败批、清洗和制冷。选定身份未规定电压和输配边界，且原来源背景是抽出处理；这里只借用电力身份，不借用处理负荷或电耗系数。采集实际供应商、电压、计量边界、期间及背景供电数据集；不适用于其他国家供电。先将 kWh 换为 MJ 再归属。 本交换未建立可靠通用数值范围，须按 cp_service_power 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | MJ | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_diesel | service | service_diesel | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅生产者控制下真实合同放行后搬运或发运适用。采集增量燃油及各放行批归属。该独立服务不形成 Q；历史批服务保留原负荷，不计入本期新产。 本交换未建立可靠通用数值范围，须按 cp_service_diesel 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_co2 | service | service_co2 | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_co2 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_co | service | service_co | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_co 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_no | service | service_no | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_no 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_no2 | service | service_no2 | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_no2 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_so2 | service | service_so2 | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_so2 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_water | service | service_water | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 仅真实生产者控制的放行后柴油服务适用。对该真实物种以实测或经验证发动机燃油专属因子采集，与制造排放独立。保留完整进排气总量子账并声明大气净交换；维持历史批归属，不生成新 Q。 本交换未建立可靠通用数值范围，须按 cp_service_water 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_oxygen | service | service_oxygen | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 所记录放行后柴油服务真实发生的物种净消耗时适用。独立确定真实气体组成并保留成对不变穿过子账；不猜空气比，不重复生产负荷。 本交换未建立可靠通用数值范围，须按 cp_service_oxygen 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_service_nitrogen | service | service_nitrogen | measured_record | 批次; 时间戳; 未相除原量; 原单位; 仪表或天平标识; 期初期末库存; 真实供货规格; 损失; 阶段; 继承交换负荷向量; 分配证据; 不确定性 | 所记录放行后柴油服务真实发生的物种净消耗时适用。独立确定真实气体组成并保留成对不变穿过子账；不猜空气比，不重复生产负荷。 本交换未建立可靠通用数值范围，须按 cp_service_nitrogen 采集未相除的真实原量及不确定性。 保留未归一原值及原始凭证，在归属或归一化前独立采集。 | kg | 每次真实事件及库存读数 | 完整批周期含失败及非生产期间 | 真实场址供应方和接收介质 | 每参考流 | 校准; 原始日志; 供应规格; 原始化验; 溯源和不确定性 |
| cp_release | release | released_kelp | quality_release | new_release_mass; 净组织称量; 沥水条件; 独立干物率; 盐; 排除外附水; 批号; 放行时间; 检测方法检出限; 水域状态; 碘污染物评审; 冷却记录; 过敏原告知; 期初期末在制成品 | 使用校准秤独立称量新增净组织，首次放行前审查批次食用适用性；记录库存及同批成品但不生成再次放行。仅采原值。 | kg | 每次放行及结存 | 完整养殖批 | 育苗场养殖场及放行设施 | 每参考流 | 签署放行; 校准净称量; 独立化验及控制 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | U_i = raw_i * unit_factor_i; 电力 kWh 的因子为 3.6 MJ/kWh。仅对真实速率积分。体积因子需独立状态密度；库存及混合物子账不重复采购。 | raw_i; unit_factor_i; density_i; state_i | U_i |  |
| cohort_numerator | all inventory rows | A_i = 已归属且换算的 raw_i + opening_WIP_burden_i - closing_WIP_burden_i; 形成 A_i 前先执行真实直接或虚拟细分及有理据剩余分配。育苗收获内部转移携带继承向量，仅合并时抵消。不从首次放行制造产量或已归属负荷中再扣已放行期末成品。 | U_i; allocation_i; opening_WIP_burden_i; closing_WIP_burden_i | A_i | jrc-ilcd-allocation-2010 |
| release_total | released_kelp | Q = 新增首次放行合格净湿组织质量之和; 按校准净称量及放行记录逐批计一次。期初成品、二次检验、交付、已放行后退回重工质量均不增加 Q。同批期末成品仍含在本 Q 内。 | new_release_mass; lot_id; release_record; cp_release | Q |  |
| normalize_once | all inventory rows | Q > 0 时 x_i = A_i / Q; A_i 是以 kg 或 MJ 计的未归一归属交换分子，Q 是 kg 首次放行净湿组织。这是唯一一次除以 Q。Q = 0 时保留 A_i 及库存绝对负荷，不出单位结果；参考输出准确为 1 kg。 | A_i; Q | x_i |  |
| biomass_subledger | released_kelp | dry_tissue = net_wet_tissue * 独立实测干物率; water_tissue = net_wet_tissue - dry_tissue。盐是干组织实测组分，不是附加产量。各库存和去向碳氮磷等于独立实测干生物量乘实测干基元素分数；物种形态须独立证据。 | net_wet_tissue; measured_dry_fraction; measured_salt; measured_element_fractions | biomass_water_salt_element_subledgers |  |
| packaging_balance | tote; liner; label | 逐组件 Opening_empty + opening_attached_WIP_FG + opening_reusable + purchases + external_returns_received = closing_empty + closing_attached_WIP_FG + closing_reusable + gross_dispatch_packaging + external_returns_sent + waste。合并时抵消内部复用，不抵消实物总发运。 | packaging_open; packaging_close; purchases; external_returns; gross_dispatch; waste | component_balance |  |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | all inventory rows | 完整来源专属状态过程支持；登记或工具成功不能代替适用性 | 完整原件和带日期场址记录及方法限制 |
| dq_complete | all inventory rows | 逐交换有原始采集义务和范围警示；纳入真实存在的全部条件交换并报告缺值；不藏入零或其他 | 逐卡协议记录及库存物种核对 |
| dq_food | released_kelp | 当前场址目的地适用性和所需检测；通用危害知识不批准批次 | 水域及批次检测; 时间温度记录; 放行决定 |
| dq_time | all inventory rows | 代表有名称完整周期及日期地域技术非生产负荷；披露供应过程替代及不确定性 | 完整原始日志; 校准及敏感性分析 |
| dq_identity | all inventory rows | 藻类保留相反野生非食用原生元数据和未知所有者意图；独立核供货品质，不自动选野生非食用上游供应者。逐 UUID 使用已核完整身份限制；未解决辅助流保持物理具体并在数据集完成前复核 | 精确状态原生身份及支持链记录和真实供应身份 |

## 9. 校验规则

这些要求适用于完整声明批及其真实条件交换，含 Q = 0。工程检查只能验证声明结构及一致性；缺实测或食用适用性决定不得报告为科学验证通过。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all_rows | 确认糖海带、养殖路线、鲜原态及全部限定。通用藻类 UUID 不建立食用适用性、养殖溯源或已接受 CPC 映射。拒绝将干压掌状海带身份用于湿作物；全部 UUID 限制及未解决辅助身份须留在可消费上下文。 |  |
| v_food | released_kelp | 计入 Q 前须有当前场址食用适用性决定、获准采收水域及苗种来源、带方法限值的微生物化学采样、污染物和碘风险评估、卫生、冷链及附着甲壳类过敏原告知。Connecticut 参考配置的 2020 指南要求采收开始后两小时内冷却、制冷设定低于 41 F 即 5 C；必须核实当前适用主管要求及操作控制，不能将历史指南当当前法律放行。该指南不验证货架期、杀菌步骤或食品安全认证。冷冻、干燥及减氧路线危害不同，不继承本放行。 | ctsg-seaweed-food-hazards-2020 |
| v_mass | physical_gates | 逐育苗、养成、放行和服务物理边界核对后再合并：期初库存 + 真实外部投入 + 生物净增量 = 期末库存 + 全部真实输出损失。干生物量、盐、内含水、外附海水、冰和各包装分别保留；反应呼吸及真实溶解或气态物种须有独立证据。不得调整水分或一个未知通量去拟合两个未知。不提供通用残差容差，应按实测不确定性追查失衡。 |  |
| v_elements | growout | 对每种生物量库存和去向独立测干物率及碳氮磷组成，并独立确定环境物种通量。在吸收、放行在养生物量、损失、呼吸和实际排放间守恒碳氮磷。元素质量仅可依据实测形态、正确化学计量及电荷换算物种。DIC、COD、总氮磷及 VOC 指标不识别分子。不作无证据碳抵扣或持久封存声明。 |  |
| v_period | campaign_and_stock | 包含失败零产出周期、启停、待机、清场、取样、重工和退回。逐交换保留期初期末在制量、阶段及继承负荷向量。退回时冲回原转移，增量重工仅计一次。不得再归一化已归一的历史负荷。已放行成品不能在重验或交付时第二次生成 Q。 |  |
| v_packaging | tote_liner_label | 逐不同包装组件核对：期初空包 + 期初附在制成品包装 + 期初可复用库存 + 外购 + 外部退回接收 = 对应期末存量 + 随实物总发运包装 + 对外返回 + 废物。仅合并时抵消内部复用转移。退回满包保留真实内容物及历史负荷，空包装另列。包装和冰不入净组织 Q，复用不代表再采购或自动共产品。 |  |
| v_calc | all_inventory_rows | 先换算原始单位并分配原始交换分子，再在 Q 大于零时执行唯一一次归一化计算。卡片和协议汇总引用同一结果，不再相除。Q 等于零保留绝对活动和继承负荷，不输出单位结果。缺原始数据、生物物种通量或安全决定均明确列不可得，不填零或宣称通过。 |  |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 首次放行门所声明鲜原态糖海带食用生物量，放行后服务独立标识 |
| allowed_use | 数据完成评审后用于匹配真实物种湿基边界场址季节技术的归因清单 |
| excluded_use | 自动食品认证或营养等价；干冻粉替代；避免肥料或碳抵扣；通用全藻物种清单 |
| required_metadata | 物种 Saccharina latissima 糖海带; 养殖来源及苗种溯源; 养殖场址和季节; 孢子育苗延绳路线; 新鲜原态完整藻体; 首次放行门及时间戳; Q 净湿组织及沥水方法; 独立实测干物率和含水率; 盐含量披露及外附水排除; 食用适用性证据及目的地要求; 采收水域状态; 微生物及化学检测方法与检出限; 碘及污染物评估; 采收到冷却的时间温度; 非密封包装及过敏原告知; 批次库存及继承负荷向量; 资本设施服务归属; 真实放行后服务范围; 不确定性及身份限制; 相反原生野生非食用元数据及未知所有者意图; 独立供货品质及不得自动选野生非食用上游数据集供应者 |
| required_quality_disclosure | 缺原值和条件行；不确定性；完整来源范围；原生 UUID 限制；库存向量；来源状态兼容及普通身份缺口 |
| update_trigger | 物种状态路线边界改变；新食品危害或主管条件；供应配方设备变化；实测或原生身份修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ctsg-kelp-nursery-2014 | handbook | Redmond et al. 2014. New England Seaweed Culture Handbook: Nursery Systems. CTSG-14-01. https://repository.library.noaa.gov/view/noaa/44208/noaa_44208_DS1.pdf | 第8–11页水处理培养基背景；第17–29页糖海带身份孢子直接接种；育苗设备；换水；海上延绳维护；营养培养反例。不支持食品授权或通用清单系数。 |
| ctsg-seaweed-food-hazards-2020 | official_guidance | Concepcion, DeRosia-Banick and Balcom. 2020. Seaweed Production and Processing in Connecticut: A Guide to Understanding and Controlling Potential Food Safety Hazards. CTSG-20-01. https://seagrant.uconn.edu/wp-content/uploads/sites/1985/2020/01/Seaweed-Hazards-Guide_Jan2020_accessible.pdf | 用户说明及第3–9页物种过程危害污染；第12页原态完整状态及过敏原；第13–18页原态与加工分支；第21页示范采收卸货冷却配送计划。历史 CT 指南，须核当前真实要求；不构成食品认证。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC. 2010. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010. §§7.9.2–7.9.3 pp. 255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 有条件归因细分及虚拟细分；逐交换决定性物理因果；剩余共同出口真实状态市场价值及清单守恒。不提供海藻工业配方或固定比例。 |
