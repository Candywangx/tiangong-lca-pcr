---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-phosphorus-and-potassium
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# TSP 与氯化钾干混磷钾肥

## 1. 范围与适用性

本初稿适用于将外购粒状重过磷酸钙（TSP）与肥料级氯化钾（MOP）物理干混为无氮磷钾肥。接收、分库存放、称重、筛分、混合、干式除尘、成品储存验收及散装装载或装袋合并为一个前景单元，同时保留分阶段记录。外购调理组分属于完整供货颗粒；仅在实际使用且已证明相容时纳入石灰石。辅助清洗单独收集和记录。BREF §7.2.1 区分机械混合与反应路线；生产者 PK 产品清单证实 TSP/MOP 组合。任何文献实例均不规定配方、等级、收率、能耗或排放量。

排除 DAP、MAP、其他 NP、NK、NPK 和硝酸钾，单物种磷酸钾合成，有机制剂，故意液体配制、湿法造粒、压实、酸解、中和及厂内包膜。TSP 酸解和 KCl 生产仍须作为必要上游负荷链接。实际出现的其他化学品、燃料、包膜、处理、包装组分或排放不得删去，须在数据集完成前逐原子流补入。实际反应会使无反应路线声明失效，须方法复核，不能藏入平衡修正项。通用复合肥参考仅在披露的来源语境和供方相容条件下用于本稿所声明 TSP/MOP 物理磷钾肥子集，不扩大产品或路线范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-phosphorus-and-potassium |
| classification_refs | CPC 3.0 34645；建议 narrower 关系，未接受映射 |
| covered_products | 具有实际验收组成的 TSP/MOP 物理磷钾混合肥；仅在有记录时纳入相容石灰石 |
| excluded_products | 其他养分组合、磷酸钾合成、反应或造粒或压实或包膜生产、液体与有机产品 |
| representative_product | 一个真实验收合格 TSP/MOP 磷钾肥 SKU；不规定养分等级 |
| production_route | 外购颗粒、物理筛分混合、干式除尘及交付 |
| market_state | 工厂门处固体混合料，包括实际水分和调理组分；运输包装不计入肥料净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应含磷和钾且不故意添加氮的物理混合肥料 |
| How much | 1 千克验收合格成品肥料净质量 |
| How well | 实际养分检测、溶解性、水分、粒径分布、均匀性及约定的储存交付验收 |
| How long or cycle | 覆盖制造储存并交付至工厂门的完整声明期间；不声称农艺服务寿命 |
| reference_flow_link | pk_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 多元复合肥，配方未说明 `b4e892e2-0421-4512-88e7-a5f8ae556d7a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际 SKU; 含包膜和填料的完整配方; 不故意加入氮源; 总量与水溶性 P₂O₅ 和 K₂O 当量含量及方法; 如采用元素表示须声明; 水分; 游离酸; 原料和成品粒径分布; 混合和调理路线; 交付状态; 包装; 供方及其数量基准; 场址和期间; 储存验收及离析; 废物去向; 计量和分配覆盖 |

所选通用整份复合肥 Product/Mass/kg 身份仅在实际无氮 TSP/MOP 干混料、交付状态和完整供货质量基准相容时采用。Compound fertilizer 可包括物理混合肥；均质复合颗粒、纯组分、养分当量或残余 n.e.c. 身份不能证明本成品混合料。具体数据包须声明必需限定信息。原生来源描述河北张家口胡麻投入端未说明配方的肥料实例，并非本工厂门成品实例；其配方和供方未明及上游截断属于来源语境债务，不授权沿用该地区或供方，也不授权省略负荷。核验实际组成、供方参考及背景相容性，保留完整上游生产与运抵。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | pk_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | B 为声明期间该确切 SKU、状态和路线新完成肥料跨越最终验收放行门的净质量之和，仅计一次，不含包装、已完成期初库存的转售及出售的不合格产品。分别称量毛重和皮重，保留水分及全部原始总量。 |
| period_coverage | all inventory rows | 一致的交换属性 | 每 1 kg 参考流 | 保留完整同产品、同状态、同路线期间，含开停、失败或零产出批次、清洗、返工和在制品。归属整个资源和排放池，再以正数 B 仅归一化一次。若整个池 B = 0，保留总量，不捏造归一化结果。 |
| material_basis | feed_tsp; feed_kcl; limestone_filler; pk_product | Mass | kg | 供货肥料质量不是养分当量质量或纯活性组分质量。水分、包膜和杂质计入供货质量；组分检测构成并行平衡，不是重复采购交换。保留 P 与 P₂O₅、K 与 K₂O 的表示约定，仅在必要时按有记录的摩尔换算。 |
| provider_basis | all inventory rows | 原生参考属性 | 原生参考单位 | 分别保留供方参考数量与期间需求。核实状态、等级、实际千克或立方米或兆焦定义，以及适用的密度、压力、温度、湿干与标况或工况体积条件。身份检索本身不证明供方兼容。 |
| package_basis | bag_pp; liner_pe; waste_pp; waste_pe | Mass | kg | 称量实际空包装各组分，另保留数量和容量核对。不得由肥料装载容量推算包装质量，也不得设默认袋数。 |
| emission_basis | pm25; pm2510; pm10plus; carbonate_co2 | Mass | kg | 浓度乘已积分的兼容气体体积得到质量；仅在对体积流率积分时乘时间。保留温压、水分、标况或工况体积、运行覆盖及检出限，不重复乘时间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完整外购粒状 TSP、MOP 以及有相容性证据的实际填料和包装进入前景接收门 |
| starting_condition_role | 前景采集边界，不是上游截断 |
| product_classification_scope | 仅为宽 CPC 分类叶中的所定义 TSP/MOP 物理磷钾肥子集 |
| recursive_input_rule | 外部同类混合肥按实际数量及合格供方记录一次；内部返料保留在转移和在制品记录，不重复采购或抵扣 |
| upstream_dataset_requirement | 链接供方兼容的 TSP、KCl、调理、填料、电力、水及包装生产，并纳入实际进厂运输和废物处理服务；缺失链接须披露，不置零负荷 |
| disclosure | 声明等级、地区、期间、储存、电表、运输、资本设备处理、包装、外部处理及全部截断的理由和敏感性 |

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_stages | blend | 纳入期间全部运行阶段，含除尘、包装、辅助清洗及失败批次。上游酸解与混合前景分开，保留完整供货链接。 | eu-jrc-lvic-aaf-2007; efba-solid-blending-2016 |
| boundary_actual | all inventory rows | 条件不适用须有证据。保留全部实际观察交换及其来源和去向；其他载能体、药剂、排放、运输及处理在使用前须有独立原子行和方法。零产出操作不得省略。 | efba-solid-blending-2016; origin-pk-sds-2016 |
| boundary_capital | blend | 声明实际资产及资本范围。纳入设备负荷时，分别保留实物设备数量和材料、服务期间、生产能力及实测分配，不与期间服务当量混淆，并逐项建立交换。不得虚构每千克设备质量或默认寿命；排除须有范围决定和敏感性。 | efba-solid-blending-2016 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| blend | 接收、干混、控制、验收与交付 | required | 实际 TSP/MOP 物理磷钾肥生产 | 一个前景单元，保留分阶段电表、内部返料和在制品账 | 1 千克验收合格磷钾肥成品净质量 |

### 过程：磷钾肥干混与交付（`blend`）

#### 输入

##### 产品流

###### 过磷酸钙（粒状）（`feed_tsp`）

外购由磷矿与磷酸酸解制得的粒状 TSP。取得实际供方等级、水分、磷含量、游离酸及上游包膜信息。记录完整供货颗粒质量；不得将其视为纯磷酸一钙，也不得重复购买其组分。原生说明支持 TSP，但 SSP 同义名和矿物分类有冲突；保留供方澄清要求，不把记录中的百分数作为默认值。

- 选定流：过磷酸钙（粒状） `2e8dcdd0-493e-4426-ad0e-e9871e139405`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_material 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：`efba-solid-blending-2016`

###### 氯化钾（`feed_kcl`）

外购肥料级粒状氯化钾；必须取得实际 KCl 含量、K₂O 当量含量、水分、杂质、粒径分布、调理和供方基准。化学品 UUID 不证明特定商品养分等级或上游过程数据集。 其原生参考为 Volume/m3，不是 Mass/kg。实物账保留完整供货实测千克，并实测对应供方体积约定、颗粒装填、水分和堆积密度。不得用通用密度或次级属性系数提供换算；供方立方米基准未定义时链接仍不完整。

- 选定流：氯化钾 `c0f36a80-f6a0-4926-9a92-9c80f5fcb662`
- 流属性/单位：Volume / m3
- 数量规则：保留实际供货千克及实测对应立方米。仅在与供方参考兼容时，使用相同装填及水分约定下独立实测的密度；以正数 B 仅归一化一次，报告每 1 kg 参考流的立方米，不设默认换算。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：`efba-solid-blending-2016`

###### 石灰石粉（`limestone_filler`）

仅在实际配方使用且已证明与酸性 TSP 相容时纳入天然磨细石灰石填料。核对实际实物等级和细度、碳酸盐和矿物组成、游离酸及储存稳定性。不采用检索记录 a3317ee0-aae8-4d22-b720-fe24bc73d3c4：其 CAS 587-26-8 对应碳酸镧，与石灰石名称和注释冲突。不得把该记录的 200–600 目限定移植到本未关联行，也不得代替生石灰或沉淀碳酸盐。意外反应产气须单独计量并复核路线。

- 选定流：天然磨细石灰石填料
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_material 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：`origin-pk-sds-2016`; `efba-solid-blending-2016`; `pubchem-lanthanum-carbonate-168924`

###### 交流电（`electricity`）

仅用于中国（CN）低于 1 kV 的用户端电网电力；尽可能分别计量接收、输送、筛分、混合、除尘、压缩空气制备和包装。核对实际交付电压、地区、期间和供方参考。实际采购电压不同时须核验对应流及变压边界，不得假定沿用此 UUID。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：保留期间电表总量（千瓦时），按 1 千瓦时 = 3.6 兆焦仅换算一次；先归属共用耗电，再除以 B。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_energy
- 来源：`efba-solid-blending-2016`

###### 聚丙烯编织肥料袋（`bag_pp`）

袋装交付时适用。称量实际空袋的 PP 编织袋组分，另保留领用数量与装载容量。不规定每袋固定数量或质量。不采用限定种子用 25 千克袋的记录。不得把完整复合袋表示为纯 PP 树脂。

- 选定流：聚丙烯编织肥料袋
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_pack 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`efba-solid-blending-2016`

###### 聚乙烯薄膜（`liner_pe`）

仅在使用独立 PE 内衬时适用。核验聚合物 CAS 9002-88-4、厚度和等级、空内衬组分质量及上游薄膜和加工覆盖。本流仅表示 PE 薄膜组分，不表示整个带内衬 PP 袋。原生箱包分类错误须披露。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_pack 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`efba-solid-blending-2016`

###### 自来水（`cleaning_water`）

仅为辅助清洗用水，不是配方加水。保留实测立方米；若转为千克须保留实测密度和温度，不把数据库次级体积系数当实测密度。纳入包括零产出期间在内的完整清洗周期及对应废水去向。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_water 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：`origin-pk-sds-2016`

##### 基本流

###### 从环境空气吸收的水蒸气（`humidity_uptake`）

仅在吸湿储存实际发生环境水分吸收时适用；根据代表性进出水分、库存和环境观测独立确定。环境空气资源身份未决；不得以空气排放或液态水流代替，不得把水平衡残差强制记为吸湿量。

- 选定流：从环境空气吸收的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_water 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：`origin-pk-sds-2016`; `efba-solid-blending-2016`

#### 输出

##### 产品流

###### TSP 与氯化钾干混磷钾肥（`pk_product`）

唯一的定量参考为验收合格的供货肥料净质量，包括实际水分及供货调理组分，不含包装。储存和包装后执行最终验收，检查组成及离析。仅在第 3 节的实物子集、整份质量及来源语境条件下采用所选通用参考，不继承来源配方或上游截断。

- 选定流：多元复合肥，配方未说明 `b4e892e2-0421-4512-88e7-a5f8ae556d7a`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_product
- 来源：`bartholomews-pk-blends`; `efba-solid-blending-2016`

###### 作为养分产品出售的不合格 TSP 与 KCl 磷钾混合料（`offgrade_product`）

仅在实际出售且养分功能、质量和接收方验收均有证明时适用。保留完整实物质量及检测值，不纳入目标合格产量 B。同一批物料不得同时记为废物，不预设抵扣或分配系数。

- 选定流：作为养分产品出售的不合格 TSP 与 KCl 磷钾混合料
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`efba-solid-blending-2016`

##### 废物流

###### 废弃的不合格 TSP 与 KCl 磷钾混合料（`reject_fertilizer`）

实际送外部处理的不合格混合料，声明组成、水分和污染状态；不含另行收集粉尘。记录处理验收和去向。留在前景内部返工的物料单独跟踪内部转移，不再作为外部投入或废物重复记录。

- 选定流：废弃的不合格 TSP 与 KCl 磷钾混合料
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`efba-solid-blending-2016`

###### 粉尘（`captured_dust`）

实际离厂送废物处理的收集肥料粉尘。依照这一广义废物身份核验实际 TSP/KCl/填料组成、水分、杂质和接收条件。厂内返回的收集粉尘保留在实物返料账；既不是外排颗粒物，也不产生避免生产抵扣。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`efba-solid-blending-2016`

###### 聚丙烯废料（`waste_pp`）

仅用于已分离且被接收进入原生机械回收路线的 PP 袋废料。分别计量聚合物与黏附肥料，并记录接收验收。污染、复合或采用其他处理路线的废物须另核兼容身份，不得无证据宣称机械回收。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`efba-solid-blending-2016`

###### 废弃聚乙烯肥料内衬（`waste_pe`）

保留分离内衬废料的实测污染状态与实际去向。检索到的回收厂内已清洗 PE 废物不能证明本工厂门处未清洗肥料内衬的身份，UUID 保持未决。

- 选定流：废弃聚乙烯肥料内衬
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_waste 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`efba-solid-blending-2016`

###### 收集的磷钾肥设备清洗废水（`cleaning_effluent`）

清洗液单独收集并送厂外处理时适用；保留完整湿质量、水及溶解或悬浮 P/K/Cl 和碳酸盐组成。不使用限定光伏或锰渣来源的废水记录。若实际在厂内处理或排放，数据集使用前须扩展实际药剂、污泥及逐物种和接收介质的排放清单。

- 选定流：收集的磷钾肥设备清洗废水
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_water 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：`origin-pk-sds-2016`

##### 基本流

###### 颗粒物 (PM2.5)（`pm25`）

实际进入室外空气未特指子介质的小于 2.5 微米残余颗粒物。纳入控制设施后的代表性有组织与无组织排放。室内职业粉尘浓度不是跨厂界排放质量。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_air 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`efba-solid-blending-2016`

###### 颗粒物 (PM2.5 - PM10)（`pm2510`）

实际进入室外空气的互不重叠 2.5–10 微米颗粒物。仅在采样边界、期间、气体基准和方法兼容时，可由累计 PM10 减去 PM2.5 得到；不得使用负残差或嵌套重复累加。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_air 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`efba-solid-blending-2016`

###### 颗粒物（> PM10）（`pm10plus`）

实际进入室外空气的大于 10 微米颗粒物，与两个较细粒径段分开。仅在粒径覆盖经过验证且累计 PM10 兼容时，可用总悬浮颗粒物减去 PM10，不设默认分率。留在收集箱内的粉尘不是空气排放。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_air 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`efba-solid-blending-2016`

###### 水蒸气（`water_vapour`）

仅记录辅助清洗或操作实际蒸发进入室外空气未特指子介质的水。依据实测水分或空气观测及保留的实物记录独立确定；COD 或未解释平衡残差不能证明蒸发量或反应水生成量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_water 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：`origin-pk-sds-2016`

###### 矿物碳酸盐来源进入室外空气的二氧化碳（`carbonate_co2`）

仅在游离酸与碳酸盐填料实际反应且观察到矿物碳释放时适用。计量物种、矿物碳来源、数量及接收空气介质，核对消耗碳酸盐及生成水，并重新审查无反应路线的适用性。拒绝大气资源 CO₂ 和延迟排放修正记录。不预设正排放、零排放、碳酸盐转化率或反应收率。

- 选定流：矿物碳酸盐来源进入室外空气的二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_air 采集实际期间归属数量，保留原始总量；正数 B 时报告每 1 kg 参考流，不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`origin-pk-sds-2016`

## 7. 分配与共产品处理

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| physical_ledger | all inventory rows | 保留完整未分配的材料、水、P/K/Cl/矿物碳及包装账，包括期初期末库存、全部失败批次和两端等量返料。不得对实物输出乘分配份额，不对厂内回用记抵扣。 | efba-solid-blending-2016 |
| burden_attribution | blend | 首先分开等级生产期间及直接计量操作。共用电力、清洗和除尘按实测因果工况归属，同路线零产出事件留在归属总池中。环境负荷分配另立账。若实际出售具有养分功能的不合格共产品，须记录功能质量并优先划分单元；剩余分配在完整使用前须有合理方法、加和为一的份额和敏感性。 | efba-solid-blending-2016 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

先保留原始期间总量，再归属及归一化。以最终验收放行门定义完成，之前的全部储存和包装均在 blend 内。期初期末过程库存包括原料和未验收在制品；过门后的已完成品另立仓储账，不得同时计为完成产量 B 和期末过程库存。返工批次仅在最终验收时计一次，不按返工次数重复。保留原始期间总池，以独立结转账追踪期初期末在制品的内含负荷；结转不得抹去失败批次消耗或造成零负荷进期在制品。未定义的结转归属继续 pending。每个协议仅属于 process_id blend。所有聚合采用完整同产品、同状态、同路线期间及正数合格净产量 B，含失败与零产出批次。原始零产出总池仍须报告，绝不除以零。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | blend | pk_product | foreground_record | SKU；毛重；皮重；合格净质量 B；P/P₂O₅ 与 K/K₂O 检测；溶解性；水分；筛分；期初期末验收前库存和在制品；独立已完成品仓储账；单次放行事件；失败批次；在制品内含负荷结转 | 校准秤称量最终净质量，在接收、储存与交付环节进行代表性组成和离析采样 | kg | 各批次阶段及对应代表性监测期间 | 完整声明期间，含开停、失败或零产出事件、返工、储存及在制品 | 实际选定场址、SKU、状态与路线 | 每 1 kg 参考流 | 校准、原始日志、证书、采样范围、库存转移核对及接收方和供方记录 |
| cp_material | blend | feed_tsp; feed_kcl; limestone_filler | foreground_record | 批号；供方；完整供货质量；KCl 实测立方米、装填约定、水分及独立实测堆积密度；期初期末原料库存；计量投料；完整配方；养分杂质检测；包膜；水分；游离酸；相容性；内部返料 | 校准接收和进料秤、计量兼容 KCl 体积和堆积密度并核对库存，保留等级证书、实际实物试验和供货数量定义 | kg; m3 | 各批次阶段及对应代表性监测期间 | 完整声明期间，含开停、失败或零产出事件、返工、储存及在制品 | 实际选定场址、SKU、状态与路线 | 每 1 kg 参考流 | 校准、原始日志、证书、采样范围、库存转移核对及接收方和供方记录 |
| cp_energy | blend | electricity | foreground_record | 阶段；千瓦时；表号；电压；期间；开停待机用电；共用负荷；设备工况；供方参考量；供方地区年份 | 读取含风机和包装的校准阶段电表，核对场址账单与实测共用负荷归属 | MJ | 各批次阶段及对应代表性监测期间 | 完整声明期间，含开停、失败或零产出事件、返工、储存及在制品 | 实际选定场址、SKU、状态与路线 | 每 1 kg 参考流 | 校准、原始日志、证书、采样范围、库存转移核对及接收方和供方记录 |
| cp_pack | blend | bag_pp; liner_pe | foreground_record | 供方；实际编织袋和内衬等级；总领用；空组分质量；包装数量；容量；库存变化；随货质量；损坏质量 | 分开称量实际空组分，核对采购、领用、随货、留存和废弃包装，不混淆容量与材料质量 | kg | 各批次阶段及对应代表性监测期间 | 完整声明期间，含开停、失败或零产出事件、返工、储存及在制品 | 实际选定场址、SKU、状态与路线 | 每 1 kg 参考流 | 校准、原始日志、证书、采样范围、库存转移核对及接收方和供方记录 |
| cp_waste | blend | offgrade_product; reject_fertilizer; captured_dust; waste_pp; waste_pe | foreground_record | 来源；完整实际湿质量；干物；P/K/Cl/矿物碳；聚合物；污染；返料量；不合格品出售；接收方；处理；转移票据 | 分别称量实物流和内部转移，核对销售功能或废物身份及去向，同一物料不得双重归类 | kg | 各批次阶段及对应代表性监测期间 | 完整声明期间，含开停、失败或零产出事件、返工、储存及在制品 | 实际选定场址、SKU、状态与路线 | 每 1 kg 参考流 | 校准、原始日志、证书、采样范围、库存转移核对及接收方和供方记录 |
| cp_water | blend | cleaning_water; humidity_uptake; cleaning_effluent; water_vapour | foreground_record | 清洗周期；供水实测质量或立方米；密度温度；湿废水；溶解悬浮物；原料成品库存水分；环境湿度；独立实测蒸发和吸湿；去向 | 计量完整清洗期间，分别采水和固体并独立测定水分交换；保留未解释残差，不由 COD 推算反应水 | kg | 各批次阶段及对应代表性监测期间 | 完整声明期间，含开停、失败或零产出事件、返工、储存及在制品 | 实际选定场址、SKU、状态与路线 | 每 1 kg 参考流 | 校准、原始日志、证书、采样范围、库存转移核对及接收方和供方记录 |
| cp_air | blend | pm25; pm2510; pm10plus; carbonate_co2 | foreground_record | 源；物种；矿物碳来源；粒径段；浓度；已积分气体体积或流率和时间；标况工况和湿干基准；压力；温度；控制；无组织排放；代表时段；检出限 | 在代表运行状态下计量残余有组织和无组织排放，匹配浓度体积基准，区分已积分体积与流率；如有 CO₂ 则核验矿物碳源 | kg | 各批次阶段及对应代表性监测期间 | 完整声明期间，含开停、失败或零产出事件、返工、储存及在制品 | 实际选定场址、SKU、状态与路线 | 每 1 kg 参考流 | 校准、原始日志、证书、采样范围、库存转移核对及接收方和供方记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 各完整期间归属交换以正数合格净产量 B 仅相除一次，保留原始总量；目标参考输出恰为 1 千克。若 B = 0，报告期间总量及未决归一化，不捏造单位清单。 | cp_product; cp_material; cp_energy; cp_pack; cp_waste; cp_water; cp_air | 每 1 kg 参考流的交换及保留的原始总量 | efba-solid-blending-2016 |
| energy_conversion | electricity | 电表千瓦时按 3.6 换算为兆焦，仅换算一次；供方参考量另行保留。原生流属性是 Net calorific value，不改名为通用电力属性。 | cp_energy; cp_product | 每 1 kg 参考流的兆焦 | efba-solid-blending-2016 |
| kcl_volume_basis | feed_kcl | 保留实测供货千克用于质量和 P/K/Cl 平衡；采用实测兼容立方米，或以供货千克除以与供方体积装填水分定义完全相同的实测密度。供方参考立方米与期间立方米需求分开，随后以正数 B 仅相除一次。实心或堆积体积约定未定义时保持未决，不设默认换算。 | cp_material; cp_product | 每 1 kg 参考流的立方米及并行千克账 | efba-solid-blending-2016 |
| material_balance | all inventory rows | 在匹配湿干基准上，接收供货材料加期初过程内库存与实测环境吸收，等于合格产品、出售不合格品、废肥和粉尘、实际排放及期末过程内库存和在制品（不再包含已计输出的放行目标产品）。内部返料两端等量，仅在总账汇总中抵消。依各出口实测组成核对 P/K/Cl；溶解性检测不等于总元素含量。包装另立库存随货废弃账。保留残差和测量不确定性，不调节收率、损耗或排放强制闭合。 | cp_product; cp_material; cp_waste; cp_water; cp_air; cp_pack | 完整未分配实物及元素账 | efba-solid-blending-2016 |
| water_carbon_balance | all inventory rows | 分子水及实测矿物碳和有机碳独立于湿总质量核对。区分材料水分、收集清洗液、真实水蒸气交换及有证据的反应生成消耗。实测碳酸盐反应须进行化学计量、物种及路线复核；残差或 COD 不能证明反应水、蒸发水或 CO₂。留在产品或废物中的包装和包膜碳不是直接空气排放。 | cp_material; cp_water; cp_air; cp_waste; cp_pack | 水碳账及已解释和未解释差异 | origin-pk-sds-2016 |
| air_mass | pm25; pm2510; pm10plus; carbonate_co2 | 兼容浓度乘已积分气体体积，或将浓度乘体积流率随时间积分。已积分体积不得再次乘时间。控制后残余排放与收集固体、互不重叠粒径段分开保留。 | cp_air | 实测期间质量，随后仅归一化一次 | efba-solid-blending-2016 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 核对完整供货身份、等级、适用 CAS、原生属性及供方数量基准。空 UUID 是具体缺口，绝不是零交换；化学组分不能代替完整制剂。 | cp_material; cp_pack; cp_product |
| quality_representative | pk_product | 证明实际验收磷钾组成且不故意添加氮，保留采样、相容性、储存及离析结果。不得将供方实例或 SDS 下限移植为配方或通用等级。 | bartholomews-pk-blends; origin-pk-sds-2016; efba-solid-blending-2016 |
| quality_completeness | all inventory rows | 区分有证据不存在、实测零、低于检出限、缺测及身份未决。纳入完整期间库存和在制品及每个实际出口。不完整上游处理链接或计量关系继续披露。 | cp_product; cp_waste; cp_air; cp_water |

## 9. 校验规则

| rule_id | Applies to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | pk_product | 要求一个兼容的完整成品混合料参考身份，Mass/kg 且匹配路线与交付状态。须核对条件通用身份与实际整份磷钾肥及供方基准，披露来源语境债务。机械检查本身不证明实物或供方相容。 | eu-jrc-lvic-aaf-2007 |
| validate_period | all inventory rows | 核对双语分母和聚合一致、全部原始总量，以及仅以正数 B 相除一次。不得删除失败批次或伪造零产出归一化。每个协议属于 blend 并覆盖所链接行。 | efba-solid-blending-2016 |
| validate_physics | all inventory rows | 未分配湿干质量、水、P/K/Cl、碳、包装及库存返料账与负荷分配账分别核查。调查残差和反应迹象，不设默认配方、含量、损失、水生成或排放因子。 | origin-pk-sds-2016; efba-solid-blending-2016 |
| validate_air | pm25; pm2510; pm10plus; carbonate_co2; water_vapour | 核对物种来源、室外空气介质、原生参考属性、兼容采样体积基准及互不重叠颗粒物段。修正流或资源流不代排放，收集粉尘不再次外排计数。 | efba-solid-blending-2016 |
| validate_scope | blend | 核实实际干式物理路线及完整供货包膜和原料覆盖。实际新增过程或交换须逐原子流扩展清单及有来源支持的方法，不得静默删除或为满足检查而改边界。 | eu-jrc-lvic-aaf-2007; bartholomews-pk-blends |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明物理磷钾肥子集的候选前景生产方法；科学批准 pending |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 未来核验后用于所定义 TSP/MOP 磷钾混合肥的工厂门供货清单 |
| excluded_use | 未核实产品或供方链接、通用 PK 覆盖、纯磷酸钾、其他养分组合、田间施肥排放或农艺等效 |
| required_metadata | 全部参考限定信息；完整原始期间总量及正数 B；实际上游数量链接；场址路线；采样平衡账；分配及资本范围 |
| required_quality_disclosure | 条件通用参考及来源语境债务；撤下石灰石 CAS 冲突；包装废物和环境吸湿及矿物 CO₂ 身份缺口；原生元数据冲突；供方和计量不确定性；独立科学审核 pending |
| update_trigger | 获得核实成品参考，原料包膜路线电压变化，等级、废物处理去向、供方数量基准或监测方法变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | 联合国统计司，CPC 3.0 解释性说明，2025年6月30日，第166页。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持分类背景；分类叶不规定制造路线或规范身份 |
| `eu-jrc-lvic-aaf-2007` | official_guidance | 欧盟委员会，LVIC-AAF BREF，2007年8月，§§7.1、7.2.1，印刷283/285页、PDF311/313页。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1 | PK 养分表示及机械混合与反应路线的区别；不设工厂规模、配方或消耗默认值 |
| `bartholomews-pk-blends` | literature | Bartholomews，Bespoke Fertiliser Blends，PK 小节，2026年10月15日网页快照。https://www.bartholomews.co.uk/blends | 生产者证实 TSP/MOP 磷钾混合肥；供方实例与已包膜 TSP 不证明通用配方、粒度或包膜组成 |
| `origin-pk-sds-2016` | literature | Origin Fertilisers (UK)，Group 9 无氮 P 与 PK 肥料 SDS，Revision B，2016年6月17日，§§1、3、6–10。https://originsoilnutrition.co.uk/wp-content/uploads/2021/01/1.-Origin-SDS-Group-9.pdf | 历史产品族身份、可能的石灰石填料、吸湿相容性及收集要求；不是完整配方、现行法律指令或正常运行排放因子 |
| `efba-solid-blending-2016` | handbook | 欧洲肥料混合商协会，Handbook of Solid Fertiliser Blending，第三版2016，2017年3月文件，§§2–5、7–9。https://fertiliser-society.org/wp-content/uploads/2019/11/Blender-Handbook-2017-efba.pdf | 干混定义、称重与校准、原料相容性、离析和采样；表格实例与历史法规不得作为默认值 |
| `pubchem-lanthanum-carbonate-168924` | dataset | NCBI PubChem，CID168924 分子式与 IUPAC 名称，CAS 名称查询 587-26-8，留存于2026年10月15日。https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/587-26-8/property/MolecularFormula,IUPACName/JSON | 仅作为化学身份反证：CAS587-26-8 对应碳酸镧（C3La2O9），支持撤下相互矛盾的石灰石记录；不提供石灰石等级、配方、交换数量或换算因子 |
