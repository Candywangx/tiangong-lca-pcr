---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.sacks-and-bags-of-plastics
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 吹膜法未印刷单层LDPE开口底封袋

## 1. 范围与适用性

制造透明空的未印刷、未涂覆、未复合、非泡孔单层LDPE平口袋，具有一个开口与热封底。从实际原生薄膜级LDPE粒料及每份真实整份供应制剂开始，纳入接收储存、在接收储存水分证据要求时的真实调湿干燥、供料、螺杆塑化、环形模头吹膜管挤出、充气/空气冷却、压平牵引、实际临时收放卷、底热封切断、检验及新增首次放行。识别的清洁内部边料经真实回用保留继承负荷。外购成品膜/袋不能代替这些操作。`hmel-blown-film-2022`; `yongfong-bag-process`; `lyb-lupolen-2420k-2026`

本方法明确综合HMEL的一般PE操作、完整Lupolen2420K资料中的真实LDPE粒料/薄膜级示例，以及Yong Fong的袋热封/出厂检验。来源不同，不声称共同SKU/订单/工厂配方。HMEL供应牌号表属于LLDPE/HDPE，不是LDPE规格。原料资料排除医疗/制药用途；典型值不是限值。不规定工厂用量、配方、设定、密度换算或物种排放因子。

排除HDPE/LLDPE共混、PP/PVC/PET/可堆肥聚合物、外购再生料、编织纺织袋、纸袋、泡孔、多层共挤、复合、印刷/电晕、折边/提手/阀口/拉链/抽绳、所装货物及袋使用/末端处置。改变路线需另审，不能藏入零值。这是CPC36410内收窄的产品/方法选择，不声称分类规定该路线。原始CPC解释资料区分纺织包装制品27150、纸袋32152、半成品膜36330及其他塑料包装制品36490；未给额外36410解释条款。`un-cpc3-notes-2025`

Q为新增首次质量放行袋净质量，同批期末成品已计入Q。真实放行后包装、仓储、搬运和发运保留独立匹配批次服务账，补充项单独披露。合并物理工厂门抵消内部Q，采用真实发运/库存/损失，不能将期末成品加到产量。1千克生产参考不证明袋容量、载荷性能或复用寿命等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.sacks-and-bags-of-plastics |
| classification_refs | CPC3.0 36410；较窄候选；本稿无已接受映射。 |
| covered_products | 第1节完整粒料转化的透明空平口单层原生LDPE开口底热封袋。 |
| excluded_products | 第1节全部排除项；树脂和未制袋膜是不同终端产品。 |
| representative_product | 一种规定的无印刷平口袋，实测尺寸/厚度并声明验收性能；不假定SKU质量。 |
| production_route | 粒料供料塑化→环形模头单层吹膜管→空气冷却压平牵引→实际收放卷→底热封切断→检验新增放行；后续供应服务另账。 |
| market_state | 客户装货/封顶前首次质量放行的空单只开口袋；袋净质量排除可移除运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产具有声明尺寸与容纳性能的空袋。 |
| How much | 1千克同一规定结构的新增首次质量放行袋净质量。 |
| How well | 声明LDPE/添加剂牌号；宽长厚度公差；底封完整性/强度及外观缺陷/预期载荷验收与试验条件。不自动赋予食品接触认证。 |
| How long or cycle | 一个声明生产报告期及包装用途；无默认寿命/复用次数。 |
| reference_flow_link | released_bag |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 透明空平口袋; 仅LDPE牌号及整份添加制剂; 原生外购树脂及可识别内部回料; 单层无涂覆复合; 未印刷未处理表面; 开口与底热封; 宽长厚度及公差; 封口与预期载荷试验验收条件; 电塑化及电热封路线; 新增首次净放行门Q; 真实场址供方及报告期; 期初期末在制品及继承交换向量; 成品及退回历史; 每种包装身份及独立供应服务范围; 真实接收树脂供货形态与水分包装 |

原生身份为包装/运输/储存用聚乙烯袋，CAS9002-88-4，工厂生产混合的Product流，唯一属性Mass。未固定牌号、密度类别、膜结构、路线、规格、地理、供货地点或寿命。其36490其他包装制品分类与其余一致的袋身份不符：披露为元数据瑕疵，不能据此覆盖箱/封口件。可消费完整背景须同时限定真实LDPE单层吹膜管、未印刷未复合、开口底封、首次净放行门和场址/SKU。此身份不是背景清单，也不证明性能等效。

全部必需限定信息须在元数据参考备注或等效可消费产品背景声明。缺限定使数据包不完整，聚合物家族名不能替代。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 热封切断检验后测新增首次放行Q，排除可移除包装。已放行期末成品已属Q；复验移库发运不造生产。 |
| count_mass | reference product | Mass | kg | 只数记录须对同SKU厚度批次代表性验收袋校准称重并记录不确定性；汇总Q前以核实只数乘实测平均袋质量。几何或手册密度不是袋重。 |
| native_conversion | all inventory rows | row-specific physical property | native unit | 保留原单位。仅对真实速率按匹配时段积分；已积分气液体积不再乘时间。体积换质量须独立物质组成状态密度。1kWh=3.6MJ仅为能量单位等式，不是燃料清单。 |
| single_division | all inventory rows | row numerator and bag mass | row unit per kg | 采集未相除原始观测；在第8节唯一除法前完成单位换算、库存向量归属及有据分配。协议卡片基准标签只引用该操作。Q=0保留真实负荷且无单位结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收原生LDPE粒料及每份真实整份制剂；全部膜袋制造在前景内。 |
| starting_condition_role | foreground collection boundary |
| product_classification_scope | 仅第1节CPC3.0 36410薄膜袋子集。 |
| recursive_input_rule | 购入成品膜袋须单独输入身份及改变边界审查，不替代本制造。内部回喂抵消但保留负荷；退回保留原历史。 |
| upstream_dataset_requirement | 连接真实牌号组成形态地点兼容的树脂制剂公用工程包装背景。UUID身份不是供方清单；上游负荷仍须纳入。 |
| disclosure | 场址期间供货来源；整份制剂；阶段计量；真实冷却充气收卷热封；在制品成品退回；全部失败返工闲置清理；放行制造与已观察供应服务补充项。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | bag_line | 纳入第1节至新增验收成形袋全部操作及真实外包背景。仅收卷或包装购入袋不足。综合过程仍须阶段批次记录。 | hmel-blown-film-2022; yongfong-bag-process |
| boundary_actual | all inventory rows | 卡片是具体采集交换，不是通用配方。not_applicable须真实不存在证据；缺UUID或表不作零。定量完整前为每项实际未列制剂化学品材料燃料制冷剂公用工程包装废物物种和去向增单独原子行。产品路线改变须适用性审查。 | hmel-blown-film-2022; lyb-lupolen-2420k-2026 |
| boundary_release | released_bag | Q是新增首次净放行产量并校正关联真实撤销。已放行期末成品已计Q，不再加或作为在制品扣除。保留期初期末在制品数量组成阶段及完整逐交换原单位向量；纳入消耗期初在制品负荷，结转期末向量。保留全部零产出启停闲置失败清理返工活动。 | ilcd-allocation-2010 |
| boundary_service | bag_line | 真实放行后包装仓储搬运发运以独立批次服务账保留，含旧成品及退回。旧批服务不除新期Q。明确结转当前未交付批次义务负荷；未来未观察服务标未测不作零。合并物理门抵消内部Q返工交接，采用真实外部发运库存损失。复验重发不造新Q。 | ilcd-allocation-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bag_line | 吹膜制袋综合制造及独立服务账 | required | 仅第1节路线；保留阶段批次账 | foreground | 1 kg reference flow |

保留独立制造放行门、成品服务门及合并物理门。放行结果及独立服务补充保留各自范围；无第二袋生产输出或旧服务除新Q。条件交换须真实存在不存在记录，按boundary_actual补每项实际未列交换。

### 过程：LDPE吹膜袋综合线（`bag_line`）

#### 输入

##### 产品流

###### 外购LDPE薄膜树脂（`ldpe`）

一份真实供应的原生LDPE薄膜级粒料，含供方已加添加剂。称量接收领用退料和库存变化。原生身份仅固定低密度PE粒料及Product/Mass，未给CAS同义词注释、固定牌号反应器再生比例、地理供货地点或额外属性。连接背景前确认实际牌号整份组成和供方。Lupolen2420K是独立无添加剂粒料示例，不是指定工厂牌号。已含添加剂进组成子账，不另采购。此粒料不能用于成品袋、松散回料片、HDPE或LLDPE。

- 选定流：低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：`lyb-lupolen-2420k-2026`; `hmel-blown-film-2022`

###### 实际使用的芥酸酰胺爽滑母料（`slip_mb`）

仅在真实BOM及供方组成确认时纳入一份整份外购芥酸酰胺/LDPE制剂。整份质量仅采购一次，活性分数载体化验进子账。HMEL仅一般支持可选母料，不支持本化学品剂量。不同制剂或厂内配制须真实各外购原料及配制能耗损失。

- 选定流：LDPE载体芥酸酰胺爽滑母料
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：`hmel-blown-film-2022`

###### 实际使用的二氧化硅防粘母料（`antiblock_mb`）

一份实际整份外购二氧化硅/LDPE制剂，须独立确认组成、二氧化硅结构粒子级别、载体和水分。纯二氧化硅或硅砂不证明该整份配方。不推定必加或用量，已含二氧化硅水不再采购。

- 选定流：LDPE载体二氧化硅防粘母料
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：`hmel-blown-film-2022`

###### 实际使用的LDPE载体清机料（`purge`）

仅实际生产线使用的已识别整份商业清机料。采集供应配方牌号整份投料及启机换料去向污染，其中树脂不另采购。排障说明不证明使用；不用该产品的机械清理须不存在记录。

- 选定流：LDPE载体挤出机清机料
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：

###### 真实电力供应（`electricity`）

计量接收真实电调湿干燥供料驱动料筒模头加热、气泡风机冷却、牵引收卷、热封切断、抽排质检和边料粉碎。真实冷机空压生成与放行后服务按批次分开。保留启机闲置失败清理返工。不同电压路线须不同交换及兼容供方；不假定国家电压发电结构蒸汽锅炉。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_energy
- 来源：`hmel-blown-film-2022`; `yongfong-bag-process`

###### 新鲜工业供水（`water`）

按来源水质计量实际外部新鲜补水清理水。闭路循环属内部流，不重复采购。制剂已含水不单独采购。气泡空气冷却不证明水接触。真实自然取水须其单独基本输入和真实来源区室。

- 选定流：工业供水
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：`hmel-blown-film-2022`

###### 存在时的外部循环冷却供水（`cooling_water_in`）

仅实际跨外部冷却接口的水。保留质量计量时段水质温压焓及供方水量与冷却能量约定。区别新鲜补水厂内循环，核对实际回水损失。不编造蒸汽凝结水。

- 选定流：外部供应冷却水
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：

###### 存在时的异丙醇水性清洁剂（`ipa_cleaner`）

纳入操作真实使用的一份整份异丙醇水清洁制剂，含浓度载水使用位置回收损失。不规定必须溶剂清理。真实厂内配制须用各外购原料及混合能耗损失替代整份采购行。

- 选定流：异丙醇水溶液清洁制剂
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：

###### 实际消耗的矿物液压油（`hydraulic_oil`）

真实补充换油、系统存量、黏度配方和设备归属及废油泄漏去向。闭路充注不每循环消耗。确认整份供货配方供方。

- 选定流：矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：

###### 钢挤出滤网更换（`screen`）

一件真实更换滤网，金属牌号质量与附着聚合物子账分开。采集更换间隔及废弃去向；排障表不提供滤网重量。

- 选定流：钢丝编织挤出机滤网
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：`hmel-blown-film-2022`

###### 实际使用的热封钳口隔离带（`sealer_tape`）

仅真实供应使用的整件涂覆玻纤带。称量更换库存废弃去向，PTFE玻纤胶为组成，不重复输入。一般热封说明不证明必用该制品。

- 选定流：PTFE涂覆玻璃纤维热封钳口带
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：

###### 临时纸板收卷芯（`core`）

一只真实圆筒纸板芯，含已加胶，与膜分开称重。原生身份为纸板筒芯、Product/Mass、工厂生产混合；未给CAS固定尺寸牌号纤维比例地理供货地点或额外属性。确认真实整件纸板结构供方。不是金属芯轴整卷盘或全部包装，也不暗示每袋耗芯。内部复用抵消，不每循环重购同芯。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`hmel-blown-film-2022`

###### 整件运输纸箱（`carton`）

按包装BOM有条件纳入的一只实际整件外购箱。保留结构真实纤维胶组成和皮重，纸胶不再采购。固定16.6%原生83.4%再生纤维的原生候选不用于未核实的不同或未知比例。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 整份供货纸标签（`label`）

一份供货纸标签制品，含真实胶与离型底纸。称量整份供货，附着标签和移除底纸分组成子账。真实不同底膜材质须其身份卡。

- 选定流：自粘纸标签
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 整份供货包装胶带（`tape`）

一份真实PP背材压敏胶带，含供货纸板芯。整份采购与附着胶带保留芯废物核对，胶不购两次。

- 选定流：聚丙烯压敏包装胶带
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 实际使用的木托盘（`pallet`）

一件真实整托盘，记录结构处理所有权采购退回接收库存破损。可复用交接不是袋质量、内部每循环重购或自动共产品。

- 选定流：木托盘
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 新增首次质量放行袋（`released_bag`）

原生身份为包装/运输/储存用聚乙烯袋，CAS9002-88-4，工厂生产混合的Product流，唯一属性Mass。未固定牌号、密度类别、膜结构、路线、规格、地理、供货地点或寿命。其36490其他包装制品分类与其余一致的袋身份不符：披露为元数据瑕疵，不能据此覆盖箱/封口件。可消费完整背景须同时限定真实LDPE单层吹膜管、未印刷未复合、开口底封、首次净放行门和场址/SKU。此身份不是背景清单，也不证明性能等效。 Q在热封切断检验后对每次合格首次放行仅计一次，排除可移除箱标签胶带托盘和临时芯。此为唯一生产参考，库存发运退回袋复验另为交接服务事件。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：method_formula
- 采集协议：cp_release
- 来源：`yongfong-bag-process`; `hmel-blown-film-2022`

###### 真实外部热冷却回水（`cooling_water_return`）

仅与cooling_water_in匹配的真实外部回水，记录质量时段温压焓及水质。核对补水泄漏蒸发库存。水冷却能量按供方约定，不自动热抵扣或将冷热焓抵消。厂内循环内部抵消。

- 选定流：返回冷却水
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：

###### 对外退还纸板芯（`returned_core`）

仅真实对外部所有者退回的一只整件可复用圆筒纸板芯，采用与输入相同原生Product/Mass工厂混合、未固定尺寸牌号纤维比例地理供货地点额外属性的限制。确认结构供方并称重追踪交接。不预设退回，不计袋产量废物或避免生产抵扣。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 瓦楞纸板箱外发（`out_carton`）

真实随毛实物发运的整件箱，保留组成皮重批次；与Q分开，不是新共产品。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 自粘纸标签外发（`out_label`）

仅真实附着纸胶，排除移除底纸及未用库存；核对供货标签组件。

- 选定流：自粘纸标签
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 聚丙烯压敏包装胶带外发（`out_tape`）

真实附着胶带胶，排除保留废弃芯；匹配整份采购，不再采购。

- 选定流：聚丙烯压敏包装胶带
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 木托盘外发（`out_pallet`）

真实外发整托盘，区分毛发运交接和对外部所有者退还去向，不重复移动。核对复用库存，不计袋输出。

- 选定流：木托盘
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 实际可售清洁LDPE回料（`sale_regrind`）

仅独立规格并实际转移的次级产品，确认组成粒子形态污染水分及市场状态。内部回喂抵消，送处理废料为废物。分负荷前保留完整物理输出，不设固定经济比例或原生替代抵扣。

- 选定流：清洁LDPE薄膜回料
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`ilcd-allocation-2010`

##### 废物流

###### LDPE薄膜废边料（`waste_ldpe`）

真实袋膜废料，逐污染类别去向拆分。内部回喂售出回料分开；废批保留负荷，不是负树脂输入。

- 选定流：LDPE薄膜废边料
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：

###### 废LDPE载体清机料（`waste_purge`）

真实排出清机料及夹带树脂污染子账；平衡残差不是实测清机质量。

- 选定流：废LDPE载体清机料
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：

###### 袋线水性清理废液（`wastewater`）

一股真实独立收集水性废液，含实测水溶解悬浮组成及真实处理方。COD为需氧指标，不是编造特定化学质量。不同流去向另行。

- 选定流：袋线水性清理废液
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：

###### 废异丙醇水溶液清洁剂（`spent_ipa`）

真实使用回收后异丙醇水废液，含化验组成去向，与水性废液及向空气异丙醇分开。

- 选定流：废异丙醇水溶液清洁剂
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：

###### 废矿物液压油（`waste_oil`）

真实独立排油及污染储存去向；闭路充注不每批袋都报废。

- 选定流：废矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：

###### 聚合物污染的钢挤出滤网（`waste_screen`）

一件废滤网及金属附着聚合物子账；同一附着聚合物不再作独立边料重复计。

- 选定流：聚合物污染的钢挤出滤网
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：

###### 废PTFE涂覆玻璃纤维热封钳口带（`waste_sealer_tape`）

仅真实更换废带及涂层玻纤胶污染去向。PTFE含量不证明含氟气体排放。

- 选定流：废PTFE涂覆玻璃纤维热封钳口带
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：

###### 废纸板收卷芯（`waste_core`）

真实丢弃整芯；复用对外退回芯不每循环重新报废。

- 选定流：废纸板收卷芯
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 废瓦楞纸板箱（`waste_carton`）

真实破损丢弃整箱及组成去向；区分空或附着期末库存及外发交接。

- 选定流：废瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 废硅涂层纸标签底纸（`waste_label_liner`）

仅实际从供货标签移除的硅涂层纸底纸。不同底膜聚合物或丢弃附着标签须自身原子身份卡。

- 选定流：废硅涂层纸标签底纸
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 废纸板胶带芯（`waste_tape_core`）

来自整份供货制品的真实废弃胶带芯，排除已计胶带；保留组成污染。

- 选定流：废纸板胶带芯
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

###### 废木托盘（`waste_pallet`）

真实破损托盘送处理，含木水分处理金属子账。复用对外部所有者退还不是废物。

- 选定流：废木托盘
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：

##### 基本流

###### 聚乙烯颗粒物向空气排放（`pe_air`）

真实捕集后搬运挤出粉碎粉尘，测粒径分数。废物制品中捕集粉尘不再排放。 有条件物种，不声称必有或用量。保留真实有组织无组织区室采样状态及逐出口。定量完整前补每种其他真实物种去向。

- 选定流：聚乙烯颗粒物
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`lyb-lupolen-2420k-2026`

###### 水蒸气向空气排放（`water_air`）

实际清理冷却净蒸发，扣背景湿度并核对水平衡。游离水相变不是反应水。 有条件物种，不声称必有或用量。保留真实有组织无组织区室采样状态及逐出口。定量完整前补每种其他真实物种去向。

- 选定流：水蒸气
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：

###### 异丙醇向空气排放（`ipa_air`）

仅实际清洁剂逸出异丙醇，分开捕集回收剩余液。 有条件物种，不声称必有或用量。保留真实有组织无组织区室采样状态及逐出口。定量完整前补每种其他真实物种去向。

- 选定流：异丙醇
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：

###### 甲醛向空气排放（`formaldehyde_air`）

仅独立识别定量的实际加工热封甲醛；VOC不是甲醛质量。 有条件物种，不声称必有或用量。保留真实有组织无组织区室采样状态及逐出口。定量完整前补每种其他真实物种去向。

- 选定流：甲醛
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`lyb-lupolen-2420k-2026`

###### 乙醛向空气排放（`acetaldehyde_air`）

仅独立识别定量乙醛；总VOC不变成假定的某种醛。 有条件物种，不声称必有或用量。保留真实有组织无组织区室采样状态及逐出口。定量完整前补每种其他真实物种去向。

- 选定流：乙醛
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`lyb-lupolen-2420k-2026`

###### 乙烯向空气排放（`ethylene_air`）

仅独立识别定量乙烯；无默认残余单体或降解产率。 有条件物种，不声称必有或用量。保留真实有组织无组织区室采样状态及逐出口。定量完整前补每种其他真实物种去向。

- 选定流：乙烯
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`lyb-lupolen-2420k-2026`

###### 一氧化碳向空气排放（`co_air`）

仅独立识别定量CO；区分降解及真实燃烧，存在则增真实燃料空气物种路线。 有条件物种，不声称必有或用量。保留真实有组织无组织区室采样状态及逐出口。定量完整前补每种其他真实物种去向。

- 选定流：一氧化碳
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`lyb-lupolen-2420k-2026`

###### 二氧化碳向空气排放（`co2_air`）

真实过程CO2净量，识别大气背景及碳来源。电力背景排放不在前景再次排放。 有条件物种，不声称必有或用量。保留真实有组织无组织区室采样状态及逐出口。定量完整前补每种其他真实物种去向。

- 选定流：二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：实测未相除原始批次分子；按第8节唯一报告操作每参考流报告一次，保留本卡范围原单位。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`lyb-lupolen-2420k-2026`

## 7. 分配与共产品处理

仅适用于所述归因情景多功能过程，区别于多功能产品QFD。真实完整物理账先于负荷份额。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_context | bag_line | 仅用于目标情景明确且确需划分的归因研究。工业指南支持过程事实，不支持LCA分配。不任意选分配替代，不声称完整ILCD/PEF符合。后果型或多功能产品比较须另审方法。 | ilcd-allocation-2010 |
| alloc_subdivide | all inventory rows | 先归属专属材料计量活动批次服务；细分可分操作，再按真实技术关系有据虚拟细分。分开新生产与旧成品服务，按原因归属失败返工闲置。解释剩余不可分及可细分而未做的失真。 | ilcd-allocation-2010 |
| alloc_physical | all inventory rows | 逐剩余共享交换独立识别定量对真实共功能的决定性物理因果：嵌入树脂、实测驱动加热增量响应或有据并行服务占用可以不同。质量吞吐机时能量不是可互换默认键；相关性同聚合物名不证明决定性因果。保留致损活动。 | ilcd-allocation-2010 |
| alloc_residual | all inventory rows | 仅真实剩余且无法确定物理关系的负荷，按同一共享出口真实共产品状态数量的同期市场价值处理。记录水分污染质量价格币种时间分离点。未交易中间品须有据修正后续加工包装运输以推价，不套清洁终端价。份额仅用于剩余向量，不缩放完整实物输出；无固定比例自动抵扣。 | ilcd-allocation-2010 |
| alloc_scrap | sale_regrind | 内部回喂保留全部原负荷及真实粉碎再熔能耗损失，合并抵消，不是新采购产袋。送处理废料保留明确废物处理。真实可售次级输出须其实际状态规格及上述层级；负价废物不硬分正共产品份额。本稿无原生替代回收或假设未来复用抵扣。 | ilcd-allocation-2010 |
| alloc_closure | all inventory rows | 逐共享交换，分配给全部真实共功能的清单之和须等于未分配清单。核实剩余份额之和为一但不预设份额；对可比交换保持系统一致并披露有据差异不确定性。物理流仍为完整未缩放记录。 | ilcd-allocation-2010 |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

协议采集原单位未相除原始观测。aggregation_rule仅为最终报告基准，引用唯一report_once操作；采集不相除。制造匹配服务分子分账，物理账不分配。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | bag_line | released_bag | weighing_release | SKU; 批次; 尺寸厚度; LDPE添加状态; 封口缺陷载荷试验; 验收规格; 放行撤销编号时间; 毛皮净重; 只数及同SKU实测袋重; 校准; Q | 排除可移除包装校准称净重，核对切断热封检验后的唯一首次放行。只数须真实同结构样本质量不确定性。汇总Q前保留原质量撤销；复验发运不是放行。 | kg | 逐放行撤销 | 含失败Q=0时段完整匹配期 | 放行门及关联库存批次 | 每 1 kg 参考流 | 秤皮重; 验收试验; 放行台账; 重复审查 |
| cp_material | bag_line | ldpe; slip_mb; antiblock_mb; purge; ipa_cleaner; hydraulic_oil; screen; sealer_tape | raw_stock | 逐整件制品制剂; 供方牌号COA; 原质量单位; 期初接收领用退回期末; 组成含量水分; 批次时间阶段; 厂内实际配制损失; 接收供货形态包装及真实调湿需求 | 整份材料校准称重及供货凭证核对库存。归属前采集库存调整真实消耗；载体活性化验子账不重复采购。 | kg | 逐批领用退回盘点 | 完整同期及期初历史 | 全部纳入材料仓阶段 | 每 1 kg 参考流 | BOM; 凭证COA; 称重; 库存闭合 |
| cp_energy | bag_line | electricity | meter_states | 表起止单位; 时段; 供电电压供方; 设备阶段; 运行启停闲置失败返工清理时间; kWh; 冷机空压; 制造服务批次 | 读表核对购电分表。真实功率速率按匹配日志时间积分一次。保留工况及制造服务归属。真实发电机燃料热源须原子补充及适用审查。 | kWh | 逐时段工况变化 | 含零产出活动完整期 | 生产线公用工程及独立后服务 | 每 1 kg 参考流 | 表; 账单; 工况日志; 归属证据 |
| cp_water | bag_line | water; cooling_water_in; cooling_water_return; wastewater | water_thermal_interface | 水身份接口; 原质量积分体积; 真实速率时间; 独立密度温压; 供回焓; 循环存量; 补水蒸发漏损配方水; 废液化验; 供方约定 | 用质量表或真实积分体积及独立状态物质密度。分开新供外回内循环和逐真实接口。不假定蒸汽反应水或每溶液均水密度。 | kg | 逐匹配供排时段 | 同期同接口 | 真实冷却清理废液出口 | 每 1 kg 参考流 | 表; 密度化验; 温度; 供货合同; 闭合 |
| cp_pack | bag_line | core; returned_core; carton; label; tape; pallet; out_carton; out_label; out_tape; out_pallet; waste_core; waste_carton; waste_label_liner; waste_tape_core; waste_pallet | article_custody | 逐制品组件; 皮重组成; 期初期末空或附着在制成品或复用库存; 外购外退接收; 毛实物发运; 对外部所有者退还; 废物; 内复用; 批次时间去向 | 称整件供货制品及组件子账，逐身份核对采购附着交接退还复用废物。只数换量须真实制品皮重。追踪全部毛实物发运包装含旧退回批，不只净Q。 | kg | 逐包装交接事件盘点 | 生产及后服务分别匹配 | 全部空附着复用包装库存 | 每 1 kg 参考流 | 皮重试验; 包装BOM; 库存退回废物凭证 |
| cp_waste | bag_line | sale_regrind; waste_ldpe; waste_purge; spent_ipa; waste_oil; waste_screen; waste_sealer_tape | outlet_composition | 逐真实产品废物身份; 原质量单位; 组成水分污染; 库存; 批次时间; 接收去向; 实际销售规格; 返工退回来源 | 称独立出口核对转移库存凭证。分配前保留完整实物量。捕集物种废物制品组成不重复输出。残差不自动VOC水共产品。 | kg | 逐出口转移盘点 | 全部正常失败返工清理期 | 逐真实废物产品接口 | 每 1 kg 参考流 | 称量单; 化验; 接收处理凭证; 真实产品规格 |
| cp_air | bag_line | pe_air; water_air; ipa_air; formaldehyde_air; acetaldehyde_air; ethylene_air; co_air; co2_air | species_compartment | 物种CAS; 有无组织区室; 浓度干湿基; 温压; 积分体积或真实速率时间; 背景; 捕集回收; 检出限不确定性; 物种原质量; 工况 | 用代表性真实物种测量及兼容体积浓度状态。浓度乘已积分气量一次，仅真实流量才积分。一般降解气味警示不识别物种因子用量；未检出受真实检出限约束。 | kg | 逐代表工况出口 | 有据采样覆盖完整期 | 真实烟道无组织捕集出口 | 每 1 kg 参考流 | 采样物种; 气量状态; 检出限不确定性 |
| cp_cohort | bag_line | all inventory rows | WIP_FG_history | 期初期末原料在制成品数量组成阶段批次; 完整继承交换向量及原单位; 内回料; 放行撤销; 毛发运D; 退回关联原发运撤销; 真实增量返工; 损失; 服务计量交接 | 分别核对实物移动及逐继承交换向量，不用单一影响分值代清单。成品在服务退回中保留制造历史，不重造生产。真实增量作业仅归原批一次；缺历史使定量数据不完整。 | native units by exchange | 逐批移动及期末 | 匹配当期历史截点 | 制造及独立成品服务账 | 每 1 kg 参考流 | 移动记录; 历史向量; 关联撤销; 服务计量 |
| cp_allocation | bag_line | all inventory rows | exchange_attribution | 专属活动; 细分; 实测共享交换响应; 真实共功能数量状态; 共同出口; 剩余向量; 同期价格币种; 门后修正; 份额敏感性 | 逐交换应用第7节，实物账完整保留并展示每个原分子归属。剩余市场价值前，论证专属虚拟细分及决定性物理因果后的不可分剩余。 | native units and currency | 逐共享过程共功能变化 | 同批同期市场期 | 后续整理服务前真实共同出口 | 每 1 kg 参考流 | 技术响应; 计量价格合同; 状态修正; 敏感性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_q | released_bag | Q=合格新增首次质量放行袋净质量之和并校正关联真实撤销。只数记录先以核实只数乘同SKU验收袋实测均重，不假定单袋千克密度。发运复验期末成品不增产量。 | cp_release | Q | yongfong-bag-process |
| raw_conversion | all inventory rows | 归属前将真实原观测换到各交换分子单位：库存调整材料重、kWh表差、浓度乘兼容积分气量、仅真实速率积分、体积换质量用独立实测物质状态密度。逐物理身份出口分开，此步不除Q。 | cp_material; cp_energy; cp_water; cp_pack; cp_waste; cp_air | converted raw exchange amounts | hmel-blown-film-2022 |
| manufacturing_vectors | all inventory rows | 未相除批次分子A_i由真实当期归属交换加消耗期初在制品完整继承负荷，减期末在制品结转对应完整向量。校正原料库存变化，抵消内部回喂交接，保留失败启停闲置清理返工，对共享负荷用第7节。已放行成品不作为在制品扣除。向量逐交换原单位，非单一影响。已放行退回成品另保留原制造，仅真实增量作业归属一次。 | cp_cohort; cp_release; cp_material; cp_energy; cp_water; cp_allocation | A_i | ilcd-allocation-2010 |
| physical_gates | raw physical ledgers | 制造：期初原料在制品+外部输入+独立识别退回料=期末原料在制品+新增Q+全部真实其他产品废物排放输出+分开的已放行旧批返工转移；内回料抵消。成品：期初成品+内部Q接收+客户真实退回=实际毛发运D+期末成品+实际成品损失废物+转返工。合并抵消内部Q返工，以真实外部发运库存损失替代，绝非Q+期末成品+D。完整质量相关元素独立于负荷分配核对。完整空气平衡一致纳入真实载气进出口，净排放扣背景。不以一残差求两个未知损失物种。 | cp_cohort; cp_release; cp_material; cp_pack; cp_waste; cp_water; cp_air | reconciled physical gates | ilcd-allocation-2010 |
| water_species | raw physical ledgers | 总质量碳及其他相关元素独立于实测物种水证据。普通LDPE熔融固化为物理过程，不是预设产水硫化聚合。分开制剂水、游离水相变、独立证实反应水和真实结合结构水。不从干湿残差推反应结合水。无独立化学换算证据时COD/VOC仍是指标。 | cp_water; cp_air; cp_material; cp_waste | separate element and species/water evidence | lyb-lupolen-2420k-2026 |
| packaging_balance | each packaging identity | 逐制品组件：期初空+期初附着在制成品+期初复用+外购+外部退回接收=期末空+期末附着在制成品+期末复用+随毛实物发运外出+对外部所有者退还+废物。组件核对整件供应制品。区分随货及对外退还去向，不重复移动。内部附着复用抵消，不计净Q重购或自动共产品。 | cp_pack; cp_cohort | independent balanced packaging ledgers | ilcd-allocation-2010 |
| service_vectors | post-release services | 按真实放行批次建立包装仓储搬运发运独立原服务分子，保留完整继承成品历史。仅在真实交易撤销时冲回关联原服务发运。复验重发不重造生产。增量退回返工服务仅归属一次，旧批活动不除当前新Q。对当前放行Q>0，以同一唯一报告操作将匹配服务分子另列补充。未来未观察服务是未测范围，不是零。 | cp_cohort; cp_pack; cp_energy; cp_allocation | matched service A_i and disclosed service scope | ilcd-allocation-2010 |
| report_once | all non-reference exchanges | x_i=A_i/Q；A_i为逐行原单位的完整归属原始批次分子；Q为匹配新增首次质量放行袋净质量，单位千克。仅在单位换算库存向量核对有据分配后除一次。参考输出1千克。制造及另列匹配服务向量经同一操作，不再归一；协议卡片基准标签仅引用它。Q=0保留负荷且无单位结果。 | A_i; Q; cp_release | x_i | ilcd-allocation-2010 |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核实真实整份产品制剂形态路线地点供方与属性兼容；宽UUID不提供用量供方清单。保留原生限制。 | COA/BOM; 真实供方身份依据 |
| dq_coverage | bag_line | 代表性完整期包含失败Q=0启停闲置清理返工外包。缺表物种历史是缺口，不是不存。 | 阶段工况日志与完整性台账 |
| dq_measurement | all inventory rows | 保留校准皮重采样检出不确定性及独立密度单位依据。不由几何气味残差推袋重蒸发物种收率能耗因子。 | 原计量实验室报告 |
| dq_history | bag_line | 结转完整在制成品逐交换向量及关联放行发运退回冲回。分开增量作业原制造，以及放行结果与已观察服务补充截点。 | 批次库存向量交接记录 |
| dq_method | all inventory rows | 披露分配层级剩余价值证据及来源限制，不固定物理经济偏好抵扣或路线等同。定量完整前须真实数据供方匹配。 | 技术响应; 剩余价格状态证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | bag_line | 以真实BOM供货阶段验收证据核实第1节每限制及第3节每限定。相似分类名称不覆盖编织纸袋原膜其他聚合物或购袋包装。 | un-cpc3-notes-2025; hmel-blown-film-2022; yongfong-bag-process |
| validate_reference | released_bag | 经reference_flow_link确认唯一成品Product输出、确切袋身份及Mass/kg。Q是新增首次净放行，排除包装重复发运数追加期末成品。不支持计量或Q=0无通过单位结果。 | yongfong-bag-process |
| validate_physical | bag_line | 审查制造成品合并物理门、材料相关元素平衡、真实物种水证据、逐包装整件组件账及分负荷前完整未缩放产品废物出口。以不确定性调查残差，不编第二未知反应水特定VOC。 | lyb-lupolen-2420k-2026; ilcd-allocation-2010 |
| validate_vectors | all inventory rows | 核实原换算先于库存向量核对逐交换分配。每制造匹配服务分子仅除同批Q一次。旧退回历史增量返工分开，内交接抵消，零产出负荷保留。 | ilcd-allocation-2010 |
| validate_completeness | all inventory rows | 定量使用前核实每真实流存在不存在物种去向身份供方限制及协议分配证据。辅UUID空缺须身份工作，不编绑定或删负荷。缺必要证据不能给完整定量结果；工程检查不批科学翻译映射发布。 | hmel-blown-film-2022; ilcd-allocation-2010 |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明LDPE袋制造供应链；已观察放行后服务为独立批次补充项。 |
| allowed_use | 兼容结构路线期间供方；上游真实处理只链接一次。 |
| excluded_use | 不覆盖全CPC，不代树脂膜，不推容量等效食品医疗认证后果型抵扣或未观察未来服务零。 |
| required_metadata | 第3节全部限定; 原转换单位; Q门; 阶段库存边界; 真实背景供方兼容; 制造及独立服务期批次。 |
| required_quality_disclosure | 校准采样不确定性; 在制成品历史; 失败退回; 未解供方物种; 分配剩余价格; 来源限制及未测服务范围。 |
| update_trigger | 树脂整份制剂结构尺寸封口性能路线冷却公用工程供方回收分配证据Q门或服务覆盖变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| hmel-blown-film-2022 | handbook | HMEL, Technical Guide to Blown Film Process & Polysure Products, February2022, pp.3-10/13-15. https://www.hmel.in/wp-content/uploads/2025/08/technical_guide_to_blown_film_process__polysure_products-Final.pdf | 一般PE粒料塑化环形挤出空气冷却定向压平收卷、可选母料、失败及不同聚合物多层背景。所供LLDPE/HDPE表不是本LDPE牌号限值场址用量排放或LCA分配。 |
| yongfong-bag-process | extension_guidance | Yong Fong Packaging Sdn. Bhd., Manufacturing process, undated primary page. https://yongfongpkg.com/Process.php | PE袋挤出热封底制袋及原接收到出厂质控。更宽聚合物印刷袋型能力为背景，不是本无印刷路线。嵌入印刷图非整线图。不声称同SKU工厂配方用量分配。 |
| lyb-lupolen-2420k-2026 | handbook | LyondellBasell, Lupolen2420K Technical Data Sheet,10/15/2026, complete3-page edition. https://productsafety.lyondellbasell.com/DirectRequest?ProductGuid=79326e74-b73c-4977-9f56-b9e12367c004&ResponseTypeGuid=f1e32c20-d810-4db0-b25e-8e23a59f3733 | 真实无添加剂LDPE粒料薄膜级示例及热封适用，典型试验限制降解细粉储存警示。排除医疗制药意图。不指定牌号通用密度设定物种因子或证明制袋商使用此供方。 |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA — Detailed guidance, first edition March2010, sections7.9.2/7.9.3, printedpp.255-272/PDF275-292 complete context. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因多功能过程层级：专属虚拟细分、逐交换决定性物理因果、再对真实剩余按实际共同出口状态同期市场价值。QFD多功能产品例不同。不是配方固定份额回收抵扣完整符合声明。库存与仅一次报告规则为前景协议的明确PCR操作要求。 |
| un-cpc3-notes-2025 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, pp.126/147/177-178 and same-edition original repository structure CSV. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 塑料袋36410及相邻纺织包装27150纸袋32152原膜36330其他包装36490原始层级标题。无额外36410解释条款；分类不规定本收窄LDPE方法或接受映射。 |
