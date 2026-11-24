---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.bran-and-other-residues-from-the-working-of-cereals-or-legumes-vegetable-materials-and-0d80a2b8
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 干法辊式制粉副产的未造粒饲用小麦麸皮

## 1. 范围与适用性

本方法涵盖较窄的单一饲料原料：干法辊式面粉制粉副产、未造粒、未复配、未发酵的小麦麸皮。初级工业路线为已分离原麸经实际细辊/麸皮整理、必要筛分或除杂、麸仓、称量、取样及首次饲用质量放行，随后进行实际散装装运或袋装供货及保管服务。Modern Mills 记载独立的面粉/原麸/饲料过程顺序及麸皮散装/袋装终端；行业来源说明辊式制粉分离及相对的全麦粉流。本方法是透明技术综合，不是同一 SKU 或同一工厂的数量清单。不提供固定产率、含水率、粒度、组成、密度、功率、市场价格、袋质量或动物营养功能。

前景起于整理前已分离原麸的实测交接点，完整上游小麦供应、清理、调质及联合制粉通过必需供方物理/负荷接口承接一次。不将面粉厂视为专门有意仅产麸皮的作业。产出门为首次饲用质量放行而非净销售；后续实际储存、包装及发运仍在原批群服务账内。排除零售食用麸皮、整粒谷物、复合饲料、淀粉湿渣、酿造/蒸馏或糖残渣、发酵料及造粒。来源标识：modern-mills-2023; nzfma-milling; ukfm-milling; un-cpc3-2025; kahl-bran-pelleting.

Engelke 独立记载经面粉筛分取得、以散装形式供饲用的小麦麸皮，同时提到食用用途；本方法仅接纳有声明的饲用批次。Cefetra 确认干法制粉麦麸作为饲料原料，并区分粉状与颗粒状态。其组成示例明确属于非合同值，不构成 PCR 范围。这些来源不证明与 Modern Mills 为同一工厂或 SKU。来源标识：engelke-feed-bran; cefetra-wheat-bran-2025。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.bran-and-other-residues-from-the-working-of-cereals-or-legumes-vegetable-materials-and-0d80a2b8 |
| classification_refs | CPC 3.0:39120，散装饲用小麦麸皮范围以正式分类裁定为准 |
| covered_products | 单一声明麦种/批次的干法辊式制粉饲用麸皮，未经造粒或复配 |
| excluded_products | 零售食用麸皮; 整粒谷物; 复合饲料; 淀粉湿渣; 酿造/蒸馏及糖残渣; 发酵; 颗粒; 其他植物残余物 |
| representative_product | 首次批次放行的未造粒饲用小麦麸皮 |
| production_route | 必需上游联合干法辊式制粉交接; 实际麸皮整理及筛分; 麸仓及质量放行; 原批群散装或袋装供货服务 |
| market_state | 未复配未发酵未造粒麸皮; 放行净湿质量; 实测干物质及饲用质量; 包装单列 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明饲用规格供应一种用于后续饲料制造或饲喂的物理饲料原料；不作营养等效主张 |
| How much | 按放行状态称量的 1 千克净小麦麸皮，计入其实际含水量，包装单列 |
| How well | 实际批次满足声明饲用放行准则，具有实测含水率/干物质及粒度/外来物证据 |
| How long or cycle | 一个首次放行批群；原批群服务观察至 H；无动物寿命或营养持续期 |
| reference_flow_link | released_bran |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 麦麸 `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际小麦植物种及原粮批号; 干法辊式面粉制粉来源及前体交接点; 未造粒物理形态; 未复配且未发酵状态; 实际饲用放行准则及去向; 唯一首次放行批号及时间; 放行净湿质量及包装皮重; 独立实测含水质量分数及湿基约定; 独立干物质观测及取样方法; 粒度分布及取样方法; 外来物及污染结果; 实际整理及筛分作业; 散装或袋装供货配置; 场址地域及供方边界; 上游联合制粉出口及原批群; 逐交换继承负荷向量; 上游及前景分配论证; 原料与 WIP 及 FG 期初期末存量; 服务观察期 H 及原批群 Qc; 真实废物接收方及排放介质; 原生通用麦麸身份及独立核实的饲用状态; 普通 UUID 及供方缺口 |

历史公开 ILCD Product 流将 Wheat bran／麦麸描述为制粉时剥离的小麦籽粒外层。其分类是 Materials production / Food and renewable raw materials；该原件没有 CPC 01112 分类，也未声明饲料级或工厂生产混合状态。营养文字不建立动物生产性能等效或固定组成。索引 0 的参考属性为 Mass，meanValue 为 1，经所声明质量单位组链接到参考单位 kg。通用身份本身不能证明实际批次未造粒、未复配、未发酵或达到饲用级别；这些 PCR 限定信息以及麦种、含水率、粒度、污染、供方与放行终端须独立核实。不得将未放行中间料、面粉、整粒谷物、淀粉残渣、酒糟、复合饲料或木屑颗粒绑定为放行参考产品。历史身份证据不证明当日平台可用性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg 参考流使用放行净湿产品质量。通过 cp_release 称量唯一首次放行，合格期末 FG 仅计一次。实测水/干物质为非叠加桥接，不以干质量、发运质量或价格替代 Q。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际筛分至整理交接点实测、含附着胚乳的已分离小麦原麸流；不是用于再包装的外购饲用成品麸皮 |
| starting_condition_role | received_intermediate |
| product_classification_scope | CPC 3.0:39120; narrower |
| recursive_input_rule | 外部接收同类别原麸按真实阶段记录一次，链接上游原粮/联合制粉负荷及完整物理交接；不重复整套制粉，也不假定残余物零负荷 |
| upstream_dataset_requirement | 供方原粮供应及运输，加清理调质联合制粉分离清单; 完整共产品/废物平衡; 精确继承向量及原分母; 经适用性检查的分配推理 |
| disclosure | 小麦身份; 实际来源阶段; 全部 Q 与 Qc 终端; 原生限制; 存量/历史; 真实设备及服务; 全部普通缺口及真实数据集保留条件 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_handoff | raw_bran_fraction; bran_finishing | 从有物理记录的整理前已分离原麸交接点开始。纳入实际细辊/麸皮整理机、必要筛分或除杂、麸仓、称量、取样及首次饲用放行。实际小麦供应、清理、调质及全部联合研磨分离在上游承接一次，并具有质量及负荷交接。单纯采购成品再包装的数据集不符合本路线。 | modern-mills-2023; nzfma-milling |
| b_upstream | cp_upstream | 要求供方全厂物理终端：期初原粮/WIP 加实际接收小麦与水及真实新增材料，等于期末原粮/WIP 加面粉、分离原麸、真实存在的胚芽/次粉/粗粒粉、筛出物、退回、废物及实测水分/物种交换。区分互斥流和内部循环。保留真实农业/原粮供应及运输负荷、原上游批群分母；不能因原麸便宜或被称作废物而零负荷进入。 | modern-mills-2023; ukfm-milling; ilcd-2010-allocation |
| b_q | released_bran; fg_service | Q 为唯一首次新增放行饲用麸皮批的实测净湿质量。合格期末 FG 已在 Q 内，不能再次作为生产出口相加。后续存储、包装、搬运、发运、复验、退回及真实返工均按原批群 Qc 在 H 内的独立服务账追踪。合并终端抵消内部 Q 转移。 | modern-mills-2023 |
| b_actual | 所有过程 | 保留每个失败批、零产出事件、启停、空转区间、试验、清扫及实际被拒或未经授权的返工。资格决定不抹除物理流。出具数据集之前，将每项真实遗漏的化学制剂、能量载体、燃料、材料、更换件、包装、废物及真实排放物种各列一项交换；不得藏于零值或其他集合。 | modern-mills-2023 |
| b_physics | 所有物理终端 | gross 湿物理质量与干物质、相关元素及真实物种分别核对。整份湿麸为主质量账；水分、营养化验和固体为非叠加桥接。水分吸收与释放、污染以及相关反应水/游离水/相态水/结构水均采用独立观测。不用一个残差拟合两个未知。COD/TOC/总氮和总粉尘不建立某一分子质量。 | modern-mills-2023; nzfma-milling |
| b_utilities | 真实公用工程扩展 | 不假设所有制粉厂均有锅炉、干燥机、制粒机、气送或气态反应。实际存在外购热或蒸汽时，保留实测 MJ、真实载热体质量、压力/温度、焓及供回约定。真实对外凝结水或换热水回流单列 Product return。以一个主能量账和非叠加载体桥接核算；不杜撰锅炉燃料或不存在的回流。 | modern-mills-2023; kahl-bran-pelleting |
| b_package | packaging_pool | 每种真实包装分别核对：期初空包装、附着 WIP/FG、可复用存量，加采购和收到外部退回，等于全部期末存量，加随 gross 发运外出的包装、对外送回及废物。内部复用相消，不创造产品 Q、再次采购或自动共产品。袋材料和封口方法为已核实现场事实，不是初级来源默认值。 | modern-mills-2023 |
| b_feed_state | released_bran | 依据实际接收方规格及放行检测结果核实散装或粉状未造粒饲料原料批次。工厂提到食用用途不证明每批均适合饲用。不将 Cefetra 组成示例、所列法规或处置建议转为通用 PCR 限值或实际废物去向。 | engelke-feed-bran; cefetra-wheat-bran-2025 |
| b_scope | 所有过程 | 本方法是 CPC39120 内较窄的未造粒干法小麦麸皮方法，不涵盖所有饲用残余物。排除零售食用麸皮、整粒谷物、复合配方、淀粉湿渣39130、糖残渣39141/39149、可可/咖啡废料39150、酿造/蒸馏残渣39160、发酵麸皮及木屑颗粒。造粒属于需要证据的额外路线，不只是包装变化。分类不决定 LCA 的 Product/Waste 身份。 | un-cpc3-2025; modern-mills-2023; kahl-bran-pelleting |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| bran_finishing | 原麸交接至整理及首次饲用放行 | required | 实际干式未造粒路线及必需上游交接 | foreground | per 1 kg reference flow |
| fg_service | 原批群储存及散装/袋装供货服务 | conditional | 全部真实服务含留置 FG 及退回 | foreground | per 1 kg reference flow |
| packaging_pool | 单件包装保管 | conditional | 每项已核实真实包装件 | foreground | per 1 kg reference flow |

每卡为一项原子交换。条件行表示须确认真实存在，不是默认零。未列出的真实流须逐一补充。归因清单与 gross 物理账是独立非叠加视图；供方审计保留原批群分母。全部卡片采用第8节唯一归一化结果，采集保留原始数量。

### 过程：麸皮整理及放行（`bran_finishing`）

#### 输入

##### 产品流

###### 接收的已分离小麦原麸流（`raw_bran_fraction`）

这是筛分至麸皮整理交接点的一整份湿物理中间料，并非只待包装的外购成品麸皮。整份供货状态只记录一次；水、蛋白、淀粉、纤维及矿物质化验是非叠加子账。实际小麦供应、清理、调质、联合辊磨/筛分清单及逐交换归属负荷只承接一次。本中间料尚无核实 UUID 绑定；达到饲用状态且制造阶段相容之前，不借用成品饲用流 UUID。独立称量本流，并保留上游全厂共产品平衡及原上游批群分母。

- 选定流：麸皮整理前含附着胚乳的已分离小麦原麸流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_upstream`
- 来源：`modern-mills-2023`; `nzfma-milling`; `ilcd-2010-allocation`

###### 麸皮整理与筛分用电（`finisher_electricity`）

计量实际运行的麸皮整理辊、筛机、输送、吸风及麸仓设备用电，包含空转、失败、启停及清扫负荷。声明供电电压、电网/地域/供方和实际电力边界；自有空压机的实际电力只在此记录，不再重复外购压缩空气服务。设备铭牌功率或通用制粉强度不是活动数据。

- 选定流：电力
- 流属性/单位：Energy / MJ
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`modern-mills-2023`

###### 外供压缩空气（`external_compressed_air`）

仅当整理边界实际接收外供压缩空气时纳入。记录实测质量，或以独立核实的同一气体状态密度换算计量体积。保留压力、温度、组成、供方及供给约定；累计体积不再乘时间。内部制气及转移按实际相消，不产生第二笔外购投入。

- 选定流：压缩空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`modern-mills-2023`

###### 实际清洗用水（`cleaning_water`）

仅纳入实际湿清洗或卫生作业用水。上游小麦调质加水已在中间料及上游供应账中，不在此重复采购。即使无产品放行，真实新增清洗水或维修用水仍为 F，不用水作为平衡残差。

- 选定流：过程用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`modern-mills-2023`

###### 单独外购矿物润滑油（`mineral_lubricant`）

仅在整理设备实际单独接收这种润滑油制剂时纳入。整份配方仅采购一次；基础油、添加剂及化验组分为非叠加组成桥接。声明供方、牌号、接触控制、保有量、泄漏及排出目的地。实际使用其他润滑剂时另建具体卡片。

- 选定流：矿物润滑油制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：`modern-mills-2023`

###### 更换用不锈钢筛网（`replacement_screen`）

仅纳入实际整理机/筛机单独供应的不锈钢更换筛网。记录整份供货筛网的质量、牌号、网目及配件边界；不把内含合金元素再次作为采购。失败或未经授权作业中的真实维修更换和拆出件也保留。采用其他筛网的设备不套用此材料。

- 选定流：不锈钢筛网
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：`modern-mills-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次饲用质量放行（`released_bran`）

实际完成麸皮整理、必要筛分/除杂、麸仓保管、称量和批次饲用质量放行后的 1 千克净湿麸皮。Q 为各唯一新增放行批净质量之和，已包含合格期末 FG。净产品质量排除包装。历史公开 ILCD Product 流将 Wheat bran／麦麸描述为制粉时剥离的小麦籽粒外层。其分类是 Materials production / Food and renewable raw materials；该原件没有 CPC 01112 分类，也未声明饲料级或工厂生产混合状态。营养文字不建立动物生产性能等效或固定组成。索引 0 的参考属性为 Mass，meanValue 为 1，经所声明质量单位组链接到参考单位 kg。通用身份本身不能证明实际批次未造粒、未复配、未发酵或达到饲用级别；这些 PCR 限定信息以及麦种、含水率、粒度、污染、供方与放行终端须独立核实。不得将未放行中间料、面粉、整粒谷物、淀粉残渣、酒糟、复合饲料或木屑颗粒绑定为放行参考产品。历史身份证据不证明当日平台可用性。

- 选定流：麦麸 `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`identity_reference`
- 采集协议：`cp_release`
- 来源：`modern-mills-2023`; `un-cpc3-2025`; `ukfm-milling`

###### 回收的小麦胚乳面粉（`recovered_flour`）

仅记录整理机实际分离回收且可用的 Product 出口，保留接收方、湿质量、质量状态及含水率。独立称量，不套固定粉麸比。其 gross 物理数量保留在联合终端且有自身负荷归属；不计入麸皮 Q，也不设饲料替代信用。若真实弃置则记录实际废物路径，不与此出口重复。

- 选定流：麸皮整理回收的小麦胚乳面粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_products`
- 来源：`modern-mills-2023`; `ilcd-2010-allocation`

##### 废物流

###### 弃置干麸皮清扫物（`discarded_sweepings`）

这是失败批、除杂或地面清扫实际收集的一项废物，测量整份湿质量并记录污染。其他批麸皮可作饲料不意味着本流自动具有 Product 身份。保留一个实际处理接收方及 origin-W 分区；整份废物与实测组分分区不得相加。

- 选定流：弃置干小麦麸皮清扫物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`modern-mills-2023`

###### 弃置捕集麸尘（`captured_bran_dust`）

仅记录实际分开捕集并作为废物移出的麸尘。在收尘处称量，将捕集、内部回收、对外 Product 回收及弃置作为互斥去向核对。可用回收料需有独立实际 Product 出口；不作为负粉尘排放，也不自动成为可销售共产品。

- 选定流：送弃置的小麦麸皮捕集粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`modern-mills-2023`

###### 实际清洗废水（`cleaning_effluent`）

仅纳入有真实水、悬浮物和去向证据的整份清洗废水。保留实测 gross 排放量及一个实际处理方。COD、总氮、TOC 和悬浮物是指标，不是已命名分子；独立测量的溶解或气态物种需有各自卡片，并与整份废水建立非叠加桥接。

- 选定流：小麦麸皮设备清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`modern-mills-2023`

###### 排出的废润滑油（`drained_oil`）

仅纳入单独记录制剂实际排出的废油。保留整份废物质量、水/固体污染、接收方及继承事件历史；向环境介质真实泄漏是另一项具体交换。废油体积及密度均不借用清水或新油默认值。

- 选定流：废矿物润滑油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`modern-mills-2023`

###### 拆出的不锈钢筛网（`removed_screen`）

仅纳入真实拆出的筛网，记录净质量、牌号/污染和去向。与新更换筛网投入以及进入产品、捕集废物或空气的真实磨损颗粒区分。无自动回收信用；维修失败也不删除真实更换量。

- 选定流：废不锈钢筛网
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`modern-mills-2023`

##### 基本流

###### 实际未捕集麸皮颗粒入空气（`airborne_bran_dust`）

以独立采样或有依据的排放测量记录实际来源/介质特定颗粒质量；不把设备能力或全部捕集粉尘质量当作排放。总粉尘与 PM 粒级是非叠加替代视图。这一物理颗粒混合物不是纯碳、淀粉、蛋白或单分子排放。未测量是未知而非零。

- 选定流：进入空气的小麦麸皮颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`modern-mills-2023`

###### 实际水蒸气交换（`water_vapour`）

仅纳入有独立进出含水观测或蒸气测量及状态证据的真实水分释放。gross 释放与真实吸收分开；干式机械整理不隐含反应水或化学干燥。不用一项质量残差求两个未知水量，也不把总粉尘换算为水。

- 选定流：进入空气的水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`modern-mills-2023`

### 过程：原批群成品服务（`fg_service`）

#### 输入

##### 产品流

###### 原批次已放行麸皮进入保管（`released_bran_to_custody`）

按原批号/批群 Qc 追踪内部 Q、已放行期初 FG 及真实退回麸皮。这是已有负荷产品的物理保管，不是再次采购或新增生产；合并终端匹配并抵消内部制造 Q。外部退回保留原交付冲销及任何真实新增服务。历史公开 ILCD Product 流将 Wheat bran／麦麸描述为制粉时剥离的小麦籽粒外层。其分类是 Materials production / Food and renewable raw materials；该原件没有 CPC 01112 分类，也未声明饲料级或工厂生产混合状态。营养文字不建立动物生产性能等效或固定组成。索引 0 的参考属性为 Mass，meanValue 为 1，经所声明质量单位组链接到参考单位 kg。通用身份本身不能证明实际批次未造粒、未复配、未发酵或达到饲用级别；这些 PCR 限定信息以及麦种、含水率、粒度、污染、供方与放行终端须独立核实。不得将未放行中间料、面粉、整粒谷物、淀粉残渣、酒糟、复合饲料或木屑颗粒绑定为放行参考产品。历史身份证据不证明当日平台可用性。

- 选定流：麦麸 `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`modern-mills-2023`

###### 保管与装运用电（`custody_electricity`）

计量声明 H 内真实麸仓存储、装袋/散装装运、搬运、清扫、失败发运及返工服务用电。真实新增事件归属于原放行批群 Qc，不按净销量归属。H 定义观察覆盖期，不是第二分母。同一计量区间不再向整理过程重复计费。

- 选定流：电力
- 流属性/单位：Energy / MJ
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`modern-mills-2023`

###### 保管清洗或返工新增用水（`service_water`）

仅纳入放行后清洗或返工真实加入的水。以具有质量/状态及后续去向的 F 记录，不作为删除早前调质水重复量的 X。改变麸皮路线或饲用状态的处理需要重新评估，而所有真实作业仍保留在事实账中。

- 选定流：过程用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`modern-mills-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 原批麸皮 gross 实物发运（`gross_bran_dispatch`）

逐原批群测量真实 gross 发运产品质量，排除单列包装。发运、复验及退回后重交付均不新增 Q。服务平衡保留已放行期初/期末 FG、外部收回/送回、取样、损失及历史负荷向量；不以净开票销量代替 gross 实物发运。历史公开 ILCD Product 流将 Wheat bran／麦麸描述为制粉时剥离的小麦籽粒外层。其分类是 Materials production / Food and renewable raw materials；该原件没有 CPC 01112 分类，也未声明饲料级或工厂生产混合状态。营养文字不建立动物生产性能等效或固定组成。索引 0 的参考属性为 Mass，meanValue 为 1，经所声明质量单位组链接到参考单位 kg。通用身份本身不能证明实际批次未造粒、未复配、未发酵或达到饲用级别；这些 PCR 限定信息以及麦种、含水率、粒度、污染、供方与放行终端须独立核实。不得将未放行中间料、面粉、整粒谷物、淀粉残渣、酒糟、复合饲料或木屑颗粒绑定为放行参考产品。历史身份证据不证明当日平台可用性。

- 选定流：麦麸 `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`modern-mills-2023`

##### 废物流

###### 保管中弃置的麸皮（`service_discarded_bran`）

逐项记录真实变质、搬运失败、退回批弃置或样品弃置，保留原批群、实测质量、含水率、污染及一个实际接收方。即使旧 FG 承接历史负荷或当前 Q 为零，也保留 gross 废物。本流不与整理清扫物及真实 Product 发运重叠。

- 选定流：成品保管弃置小麦麸皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`modern-mills-2023`

###### 保管清洗废水（`service_effluent`）

仅纳入单独记录的新增服务用水所形成的真实废水，保留整流实测量、悬浮料及接收方。按真实边界报告实际分子物种或处理服务，不与整流重复相加，也不假装 COD 或总氮是一种物质。

- 选定流：小麦麸皮仓储装运清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`modern-mills-2023`

##### 基本流

###### 实际装运粉尘入空气（`service_dust`）

仅纳入原批群 Qc 的仓储/装袋/散装装运独立实测颗粒排放。其来源及接收空气区室与整理粉尘、捕集废物区分。任何实际化学物种另列，不从整份麸皮组成或总污染指标推造。

- 选定流：进入空气的小麦麸皮颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`modern-mills-2023`

### 过程：包装件池（`packaging_pool`）

#### 输入

##### 产品流

###### 新购聚丙烯编织麸皮袋（`pp_sack_purchase`）

仅真实新购外部包装质量进入采购负荷；期初存量和内部复用不是采购。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：聚丙烯编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

###### 收到外部退回：聚丙烯编织麸皮袋（`pp_sack_return_in`）

按原包装身份及附着/可复用存量追踪真实外部空包装退回；内部复用相消。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：聚丙烯编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

###### 新购聚酯封袋缝线（`sewing_thread_purchase`）

仅真实新购外部包装质量进入采购负荷；期初存量和内部复用不是采购。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：聚酯缝包线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

###### 收到外部退回：聚酯封袋缝线（`sewing_thread_return_in`）

按原包装身份及附着/可复用存量追踪真实外部空包装退回；内部复用相消。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：聚酯缝包线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 随 gross 发运外出：聚丙烯编织麸皮袋（`pp_sack_shipment`）

记录随 gross 实物发运外出的本包装，区别于麸皮净质量和净开票销量；附着期末 FG 的包装保留在存量侧。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：聚丙烯编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

###### 对外送回：聚丙烯编织麸皮袋（`pp_sack_return_out`）

追踪真实独立对外送回包装；不重复已随 gross 发运外出的同一件包装。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：聚丙烯编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

###### 随 gross 发运外出：聚酯封袋缝线（`sewing_thread_shipment`）

记录随 gross 实物发运外出的本包装，区别于麸皮净质量和净开票销量；附着期末 FG 的包装保留在存量侧。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：聚酯缝包线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

###### 对外送回：聚酯封袋缝线（`sewing_thread_return_out`）

追踪真实独立对外送回包装；不重复已随 gross 发运外出的同一件包装。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：聚酯缝包线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

##### 废物流

###### 废弃聚丙烯编织麸皮袋（`pp_sack_waste`）

一项真实包装废物流，保留质量及接收方；内部复用既不是废物，也不是共产品或信用。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：废聚丙烯编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

###### 废弃聚酯封袋缝线（`sewing_thread_waste`）

一项真实包装废物流，保留质量及接收方；内部复用既不是废物，也不是共产品或信用。 仅在实际使用且供方核实该具体包装件组成时纳入。初级来源证明有袋装，不证明所有袋子均为聚丙烯或均用聚酯线缝合。若真实使用其他袋、内衬、标签、封口件、托盘或缠绕物，数据集出具前逐一增加具体供货件。采用实测质量或同规格已核实的件数/长度桥接；无默认袋质量。

- 选定流：废聚酯缝包线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用第8节该原子交换的唯一归一化结果；保留原始数量，不再除一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`modern-mills-2023`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_scope | 需要分配的归因研究 | 仅在归因建模确需分配时采用本层级。对专属麸皮收集/整理/包装作业独立归属，并在证据允许时对联合制粉及剩余整理过程进行实际或虚拟细分。检查并仅承接一次上游供方分配，不隐式重复，也不脱离终端及假设直接接受。 | ilcd-2010-allocation |
| a_causality | 每项剩余交换 | 逐项非功能交换判断是否存在真正决定其数量与某一共功能关系的物理因果。记录物质归入、设备功能、实测材料/状态关系及证据；真实情况不同时采用不同因果驱动。麸皮或面粉质量、干物质、蛋白、热量及销售价值不是可任意互换的选项，也不规定统一物理比例。 | ilcd-2010-allocation |
| a_residual | 真正未解的共同过程流 | 只有细分及决定性物理因果之后的真实剩余量，才可采用真实共产品在共同过程终端、实际状态下的同期市场价值。匹配时期、地域、币种和终端；价格比较剔除下游服务。说明缺失或失真价格及敏感性。不替代为固定价格、廉价麸皮零负荷、通用质量比例或自动物理/经济选择器。 | ilcd-2010-allocation |
| a_conservation | 全部共产品及存量账 | 在全部真实共产品、保留 WIP/FG 及实际损失/服务去向间核对完整负荷向量。经济归属改变归属量 A，不改变 gross V、Q、废物、水或元素闭合。内部转移保留继承向量。失败/Q0 作业和真实返工投入仍保留；本方法不提供替代信用、废物标签豁免或动物营养功能等效。 | ilcd-2010-allocation; modern-mills-2023 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | bran_finishing | released_bran | 批次称量及饲用放行 | 麦种; 原料批; 成品批; 首次放行时间; 净湿质量; 皮重; 含水分数; 独立干物质; 粒度分布; 外来物; 饲用状态; 合格期末 FG | 用经校准设备称量净放行麸皮，保留代表性取样、含水测量方法及独立干物质/质量观测。仅汇总唯一首次放行。汇总语义：保留未除原始批质量；仅第8节归一化。 | kg | 逐批及首次放行 | 完整声明批群含留置及失败批 | 一个声明整理场址及小麦供应状态 | 每 1 kg 参考流 | 校准; 皮重; 样品; 放行签署; 质量结果 |
| cp_upstream | bran_finishing | raw_bran_fraction | 供方交接及存量账 | 上游批群; 原粮麦种; 接收小麦; 清理和调质步骤; 水; 联合制粉出口; 原 Qc; 中间料湿质量; 组成桥接; 分配论证; 逐交换继承向量; 原料/WIP 期初期末 | 独立称量真实筛分至整理交接流。取得供方联合物理平衡、所链接小麦供应及运输、原分母和完整分配记录。物理存量质量与继承环境向量分开；上游向量只承接一次。汇总语义：原始观测和供方向量保持未除。 | kg | 每次交接及存量结算 | 具有历史的完整上游及前景批群 | 上游全厂及精确整理交接点 | 每 1 kg 参考流 | 地磅; 流程图; 供方清单; 存量与分配核对 |
| cp_utilities | bran_finishing | individual utility | 计量及供应记录 | 表计编号; 供方; 电压; 气体组成; 压力; 温度; 密度证据; 累计量或真实速率; 空转及清扫时间; 热载体质量与焓; 真实回流 | 对真实电/水/空气或新增公用工程采用校准读数差。换算前保留原始 kWh 或质量/体积；仅对真实速率积分一次。需要密度时独立测量同物质同状态密度。热扩展保留一个 MJ 主账及非叠加载体桥接。汇总语义：原始和及真实分配驱动均未除；第8节归一化一次。 | kWh; kg; MJ | 每个计量区间及真实事件 | 全部真实作业含失败 Q0 空转及清扫 | 精确计量供应及接收终端 | 每 1 kg 参考流 | 校准; 账单; 状态及供应约定 |
| cp_maintenance | bran_finishing | individual material replacement | 材料接收及维修记录 | 件或整份制剂; 供方; 牌号; 质量; 零件边界; 保有量; 真实更换事件; 失败维修; 拆出去向; 继承向量 | 称量每项单独供货材料或件，保留整份配方/组件包含关系及实际维修时序。不推定合金数量，也不再次采购内含组分。汇总语义：真实原始采购与存量保持未除。 | kg | 每次接收维修及库存结算 | 整个批群及实际失败作业 | 真实整理设备及供方终端 | 每 1 kg 参考流 | 供方组成; 称量; 工单; 废物收据 |
| cp_products | bran_finishing | recovered_flour | 共产品称量及质量 | 实际面粉批; 净湿质量; 含水率; 接收方; 质量; 原共同终端; 分配驱动; 首次放行; 期初期末存量 | 独立称量真实回收面粉 Product，核实可用性及去向。保留其原始 gross 物理量及完整继承/新增负荷份额；不设固定粉比例，也不从麸皮物理废物扣减。汇总语义：共产品数量及向量保持未除。 | kg | 每个真实回收批 | 相同共同过程时期及存量历史 | 真实整理回收终端 | 每 1 kg 参考流 | 称量; 质量; 接收方及核对 |
| cp_waste | bran_finishing | each actual waste stream | 废物转移记录 | origin-W; 整流; 湿质量; 污染; 组分分区; 相态; 接收方; 处理边界; 期初期末保管; 原批群 | 独立称量每个真实废物出口，每事件保留一个真实接收/处理方。弃置捕集粉尘、Product 回收及空气释放区分。整份废物与实测 origin-W 分区为非叠加替代视图；不从污染指标推分子质量。汇总语义：原始 gross 废物 V 保持未除。 | kg | 每个真实废物事件 | 全部失败清扫维修及存量历史 | 真实废物及处理交接点 | 每 1 kg 参考流 | 地磅; 分析; 接收方收据 |
| cp_species | bran_finishing | individual actual environmental exchange | 独立测量及平衡 | 物种或已定义颗粒混合物; 来源; 适用时 CAS; 相态; 接收介质; 质量; 浓度; 体积或真实速率; 状态; 独立水分数据; gross 吸收及释放 | 采用真实来源特定采样，以足够独立观测核对质量及物种。总粉尘/粒级、整份废水/物种桥接不叠加；有证据才区分游离/相态/结构/反应水。汇总语义：保留未除 gross V 及原单位；采集时不除 Q。 | kg | 每个真实排放或吸收区间 | 完整真实整理批群 | 真实来源及接收环境区室 | 每 1 kg 参考流 | 取样; 校准; 独立状态及化验 |
| cp_fg | fg_service | original-cohort custody and real service | 批次保管服务及冲销记录 | 原批 Qc; 期初期末 FG; 原负荷向量; 内部 Q; gross 发运; 外部退回; 原交付冲销; 真实新增水能材料 F; 废物; 物种; H | 将每项真实服务及物理转移追踪至原批 Qc，含历史期初 FG。称量实际退回、样品、损失及新增投入；保留原负荷及冲销，不创造新增产品。实际服务废水/物种需独立测量。汇总语义：原始 gross 事件与继承向量保持；第8节仅用原 Qc 一次；H 只作观察期。 | kg; kWh | 每次转移服务及存量结算 | 声明 H 及全部相关原批群历史 | 真实麸仓储存装袋及装运终端 | 每 1 kg 参考流 | 批次账; 原放行; 冲销交易; 服务表计 |
| cp_packaging | packaging_pool | each actual packaging article | 包装件保管及存量记录 | 包装件编号; 供方组成; 核实单位质量; 期初空包装; 期初附着 WIP/FG; 可复用存量; 新购; 收到外部退回; 期末存量; 随 gross 发运外出; 对外送回; 废物; 内部复用 | 逐真实包装/封口件称量，或采用同件已核实的件数/长度桥接。附着与可复用状态及每个接收方分开。内部复用相消；包装质量不计入麸皮 Q。汇总语义：采集完整未除的原始包装件物理账；第8节归一化一次。 | kg | 每次接收发运退回及存量结算 | 批群生产及全部服务 H | 真实包装保管边界 | 每 1 kg 参考流 | 供方规格; 称量; 存量账; gross 发运收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_total | released_bran | Q = 唯一首次饲用放行批实测净湿质量 q_lot 之和。合格期末 FG 仅计一次。发运、复验、历史期初 FG、退回及重交付不新增 Q。未放行拒收料不计 Q。 | q_lot; 唯一放行账; cp_release | Q | modern-mills-2023 |
| moisture_bridge | released_bran; raw_bran_fraction; recovered_flour | 对独立实测湿基水质量分数 w，干质量 = 湿质量乘以 (1-w)。保留独立干物质结果及取样不确定性作核对。整份湿流为主账；水/营养化验不叠加。不提供固定含水率、密度或组成。 | 湿质量; 独立 w; 独立干物质; cp_release; cp_upstream | 非叠加干物质桥接 | modern-mills-2023; nzfma-milling |
| raw_units | all inventory rows | 分配前将真实原始观测换算到各行单位：电量 kWh 乘 3.6 得 MJ；直接称量质量或同物质同状态密度乘实测体积。仅对真实速率积分一次；累计体积不乘时间。完整外购配方只进入一次，化验保留子账。 | 原始观测; 换算证据; cp_utilities; cp_species | 原生单位原始 V_i | modern-mills-2023 |
| upstream_handoff | raw_bran_fraction | 保留供方原始全厂物理事件及原上游分母 Qc。在有证据的分配层级后，仅链接一次归属原麸的继承交换向量。整理内不重复小麦种植、原粮调质水或制粉用电，也不删除任何真实上游损失或共产品负荷。供方单位化负荷先恢复为实际接收批向量再进入前景账。 | 供方全厂平衡; 原 Qc; 接收批质量; 供方负荷向量; cp_upstream | 接收继承向量及上游 gross 审计 | ilcd-2010-allocation; modern-mills-2023 |
| physical_manufacture | bran_finishing | 期初原料及 WIP 质量 + 真实外部 F + 真实物理转入 + 真实环境吸收 = 期末原料及 WIP 质量 + 首次放行 Q + 实际回收面粉 + 其他真实外部退回/Product 转出 + gross 废物 + 真实基本流释放。质量账排除能量单位。保留所有整份湿流，相关干物质/元素/物种分别平衡；内部循环相消。 | 期初期末原料/WIP; F; 转移; Q; 回收面粉; gross 废物及物种 | 未分配制造物理闭合 | modern-mills-2023; nzfma-milling |
| inherited_vectors | all inventory rows | 逐交换保留期初 WIP 继承向量，加真实新增已换算且归属的事件，减期末 WIP 继承向量，并核对全部共产品及真实去向向量。先细分，再逐交换决定性物理因果，仅真正剩余量才用共同终端市场价值。物理存量及 gross V 分开。失败/空转/清扫/返工及 Q0 负荷保留；Q0 不产生单位结果。 | 期初继承向量; 真实新增事件; 期末继承向量; 分配证据 | 归属 A_i 及保留历史 | ilcd-2010-allocation |
| physical_fg | fg_service | 期初 FG + 内部 Q + 真实 gross 外部退回麸皮 + 新增维修/返工材料或水 F + 真实吸收 = 期末 FG + gross 实物发运 + 真实独立对外送回 + 服务废物 + 服务基本流释放。保留原交付冲销及逐批继承向量。复验不创造质量或首次放行。 | FG 存量; 内部 Q; gross 转移; 新增 F; 服务废物及物种; cp_fg | 未分配 FG 物理闭合 | modern-mills-2023 |
| combined_gate | bran_finishing; fg_service | 相加制造与 FG 物理终端，再抵消相同内部 Q 及其他匹配内部转移。合格期末 FG 留在存量侧。不论经济归属、历史负荷所有权或净销量，均保留 gross 废物、水、更换件及物种。 | 制造闭合; FG 闭合; 匹配内部转移 | 合并物理闭合 | modern-mills-2023 |
| duplicate_guard | all inventory rows | F 是真实新增外部事件。X 仅删除同一账同一侧、经证明为同一事件的重复表征。真正新增维修、清洗水、能源及更换件为 F，不是 X。整份湿材料/制剂及组分化验采用一个主账与非叠加桥接。 | 事件编号; 收据证据; 同侧重复证明 | 去重原始事件 | ilcd-2010-allocation |
| normalize_once | all inventory rows | 对实际正批群分母，唯一归一化为归属清单 n_i = A_i / Q，以及独立非叠加 gross 物理视图 g_i = V_i / Q。原批群服务在同一操作中采用原 Qc；原供方 gross 审计保留原供方 Qc。先换算单位并形成真实分配/继承 A_i。卡片及协议汇总复用此结果，不再除一次。H 不是分母；Q0 保留事件且不产生单位结果。 | A_i; V_i; Q; 原 Qc | n_i; g_i | ilcd-2010-allocation |
| package_balance | packaging_pool | 每种包装件分别：期初空包装 + 期初附着 WIP/FG + 期初可复用 + 新购 + 收到外部退回 = 全部期末存量 + 随 gross 发运附着外出 + 对外送回 + 废物。内部复用相消。包装不计净麸皮 Q。负荷归属与物理保管视图非叠加，并按适当原批群 Q/Qc 归一化一次。 | 各包装件原始存量及转移; cp_packaging | 各包装闭合 | modern-mills-2023 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 所有过程 | 锁定真实麦种/批号、原料交接点、最终饲用状态、干法辊式路线和未造粒未复配未发酵状态。来源技术综合不声称各来源是同一 SKU 或同一工厂清单。 | 供方记录; 流程图; 实际批质量 |
| dq_native | 带 UUID 麸皮行 | 保留全部原生命名/备注、Product 类型、ILCD 分类及精确属性单位链。通用原件不提供饲料级或现场供方资格；独立核实实际批次适配性。不推定 CAS 或营养等效。中间料、废物及包装 UUID 缺口明示；不借用成品绑定。 | 历史公开原生对象; 链接属性及单位对象; 实际批次质量证据 |
| dq_measurement | 参考批及物理终端 | 独立实测湿质量、含水率/干物质、粒度及外来物，配合校准取样/测量支持 Q 及质量核对。不规定固定产率、组成、密度、能耗、价格、配料或每袋质量。 | 秤及取样校准; 实验室方法 |
| dq_history | 全部账 | 物理原料/WIP/FG 存量与逐交换继承环境向量分开。按批群保留完整上游交接、首次放行账、失败 Q0 作业、真实服务及 gross 包装移动。 | 原始事件; 存量/批次账; 负荷核对 |
| dq_gaps | 所有数据集使用 | 未知活动/供方或辅助 UUID 缺口不等于零，也不自动否定产品方法。实际核心产品/终端不匹配、上游联合负荷缺失、因果分配无支持或材料平衡未解时，保留受影响数据集。披露实测与未知，不把草稿称作覆盖。 | 缺口账; 供方及物理证据 |
| dq_sources | 全部方法证据 | 制造原件支持定性过程/终端事实；ILCD 仅支持适用的有条件归因分配方法。工程检查和片段核验均不建立科学审查、翻译审查或发布。保留造粒/复合饲料反例。 | 来源适用性; 独立原件; 审查元数据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_product | released_bran | 核实具有真实未造粒干法辊式来源、完整整理至放行终端的饲用小麦麸皮。排除仅食用零售麸皮、整粒谷物、淀粉湿渣、复合饲料、发酵及颗粒。通用 Product 身份和全部独立取证的必需限定信息须对应同一真实批。 | modern-mills-2023; un-cpc3-2025; kahl-bran-pelleting |
| v_handoff | raw_bran_fraction | 要求真实上游小麦/清理/调质/联合制粉质量及归属负荷仅交接一次。保留主粉、每项真实共产品/废物去向及原上游分母。上游负荷缺失是真正核心数据集保留条件，不是残余物零负荷惯例。 | modern-mills-2023; ilcd-2010-allocation |
| v_q | 所有过程 | 显式参考链接仅选 released_bran。首次放行 Q 已含合格期末 FG 一次。内部保管/发运行不创造 Q。保留历史期初 FG 负荷及原交付冲销。Q0 不出单位结果，但保留真实事件。 | modern-mills-2023 |
| v_balance | 所有物理终端 | 核对上游交接、制造、FG 及合并 gross 物理终端，并逐包装件平衡。精确抵消内部 Q 及真实循环。独立核对干物质、相关元素及真实物种；不用经济归属缩减废物/水/物理流，也不用残差拟合多个未知。 | modern-mills-2023; nzfma-milling |
| v_normalize | 所有清单行 | 原始采集保持未除。原生单位换算、有论证逐交换分配及继承向量核对先于唯一 A/Q 操作；卡片复用其结果。gross V/Q 单独且非叠加。原服务/审计采用真实原 Qc；H 永不成为额外分母。 | ilcd-2010-allocation |
| v_atomic | 所有过程 | 每项真实供货、整份配方、单件包装、更换件、能量载体、废物流及环境物种均为原子项并绑定来源/介质。不支持的 UUID 留空且保留具体名称；拒绝泛集合及隐藏其他/零流。在 typed 可消费 context 核对全部原生限制。 | modern-mills-2023 |
| v_allocation | 多功能阶段 | 独立检查专属/细分作业、逐交换决定性物理因果，以及仅真实剩余量的共同终端实际状态同期市场价值。核对完整负荷向量并披露敏感性。不向廉价/废物标签麸皮授予零负荷或替代饲料信用。 | ilcd-2010-allocation |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 具有已披露上游及整理终端的声明未造粒饲用小麦麸皮供货 |
| allowed_use | 具有已核实原料交接和完整负荷/物理历史的相容麦种/批次及饲用状态 |
| excluded_use | CPC39120 全叶自动覆盖; 食用零售或复合饲料清单; 动物营养等效; 淀粉湿渣/酒糟; 造粒制造; 零负荷或替代默认 |
| required_metadata | 全部参考限定信息; 原料筛分至整理交接; 上游联合物理/负荷证据; Q/Qc/H; 原生限制; 单件包装及真实废物/物种去向 |
| required_quality_disclosure | 真实测量与未知活动; 辅助/供方缺口; 真正核心保留条件; 分配及存量假设; 科学和翻译审查状态 |
| update_trigger | 麦种/路线/状态变化; 造粒发酵或复配; 原料交接改变; 供方/原生记录变化; 实际过程扩展; Q 终端或批群历史变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD. CPC Ver.3.0 Explanatory Notes, 30 June 2025, complete PDF pp102/104/199–200. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅39120及相邻面粉/复合饲料/淀粉/糖/酿造分类标题；不作 LCA 废物或制造假设 |
| modern-mills-2023 | literature | Modern Mills Company. Prospectus dated 31 December 2023; PDF pp129–135, printed76–82; sections4.9.2.3–4.9.3.2.1. https://www.saudiexchange.sa/Resources/IPO/PDF/IPO_ENG_2024-02-12_10-59-00_1.pdf | 初级小麦供应及联合面粉制粉顺序；麸皮整理机/麸仓及散装/袋装饲用麸皮终端；下游饲料配方及颗粒作为分离反例；无默认数量或 LCA 分配 |
| nzfma-milling | extension_guidance | New Zealand Flour Millers Association. Flour Milling Process, undated publisher page and linked process diagram. https://flourinfo.co.nz/learn/flour-milling-process | 清理调质辊磨/筛分顺序及独立麸皮/胚芽/面粉/次粉出口；仅行业说明；无统一设备数量或用量 |
| ukfm-milling | extension_guidance | UK Flour Millers. The milling process, undated publisher page and linked simplified diagram. https://www.ukflourmillers.org/flour-milling/the-milling-process | 胚乳/麸皮/胚芽联合分离及相对的重组全麦粉；定性工艺图；不是麸皮包装规格，也不声称观看视频 |
| kahl-bran-pelleting | literature | AMANDUS KAHL. Bran & husk, undated publisher technical page. https://www.akahl.com/en/industries/by-products-processing/bran-husk/ | 独立新增麸皮压实/造粒路线及物理形态改变；反驳所有麸皮均为颗粒供货的假设 |
| ilcd-2010-allocation | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, sections7.9.2–7.9.3; complete original PDF. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 有条件归因细分/虚拟细分；逐交换决定性物理因果；真实剩余量共同终端市场价值及负荷核对；无固定比例或自动饲料信用 |
| engelke-feed-bran | literature | Gebr. Engelke. Animal feed，无日期工厂网页。https://www.gebr-engelke.de/en/animal-feed/ | 独立初级实例：面粉筛分副产麦麸散装供饲用；同时提到食用用途，故须核实批次饲用状态；无现场活动或组成默认值 |
| cefetra-wheat-bran-2025 | literature | Cefetra Ltd. R7-04A Product Data Sheet – Animal Feeds, Wheat Bran，2025年8月生效第4版，第1–2页。https://cefetra.co.uk/wp-content/uploads/2025/08/Wheat-Bran-Africa-MSDS-Rev-4-Aug-2025.pdf | 干法制粉饲料原料来源；粉状/颗粒状态区分及散装供货；不复用明确为非合同的组成示例；不提供通用法规、安全或处置指令 |
