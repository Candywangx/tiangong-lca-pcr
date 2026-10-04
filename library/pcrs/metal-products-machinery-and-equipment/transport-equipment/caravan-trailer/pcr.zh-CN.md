---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.caravan-trailer
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 硬壁牵引式旅居挂车制造

## 1. 范围和适用性

本候选 PCR 覆盖新制完整硬壁牵引杆牵引式旅居挂车制造，声明固定旅居内装，窄于 CPC3.0 49222。排除第五轮半挂车、自行式旅居车／宿营车、帐篷／升顶挂车、固定建筑、货运／工具／农业挂车、独立交易底盘／车身／备件及翻修。各实际底盘、墙板、铺位、管路／电器／电池选装配置分别建模。纳入实际场内制造、车身板粘接、柜体、车壳／行走机构装配、固定内装、工厂试验及可归属返工／废物。排除牵引车生产／使用、道路行驶、营地居住、客户公用设施及维护、假定寿命和报废。不提供住宿夜或牵引距离功能单位。本 PCR 中每台合格成品设备指一辆完整配置挂车，与英文 accepted finished unit 同义。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.caravan-trailer |
| classification_refs | CPC3.0 49222；较窄产品背景，不是已接受映射 |
| covered_products | 完整硬壁牵引杆式旅居挂车，配置固定旅居内装 |
| excluded_products | 第五轮／半挂车、自行式旅居车／宿营车、帐篷／升顶及货运／农业挂车、固定建筑、备件及翻修 |
| representative_product | 一辆完整验收洁净空载配置明确旅居挂车 |
| production_route | 接收实际坯料或成品底盘／墙板；条件性底盘、夹层板及家具制造；行走底盘／车壳装配；固定旅居内装；实际工厂试验、排水及验收 |
| market_state | 新制合格洁净空载挂车，含已装旅居内装、实际安装电池／选装及声明保留服务工作液；水箱／热水器排空，排除液化气瓶／燃料及散装设备 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能 | 提供配置完整合格硬壁牵引杆式旅居挂车 |
| 数量 | 采用实测净质量 M 表示同一完整合格配置设备的 1 kg |
| 质量要求 | 符合实际图纸及配置特定签字验收准则，包括连接器／车轴／车轮／制动、车壳接缝及排水、已装家具／开口、道路灯、电气绝缘／接地、管路密封及各实际电器检查。记录条件、仪表、时长及结果。原型冷室等级、目录载荷、质保或目录法规引用不作为规定工厂限值或制造数量。 |
| 时间或周期 | 一次制造交付；不假定牵引或露营使用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 用于居住或宿营的大棚车式挂车和半挂车 `fc37f9b4-d36f-4b33-8cf1-ac2d4af0800e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号／序列号／批次；牵引杆／硬壁状态；车轴数量、底盘／表面／连接器／制动供应商边界；车壳蒙皮／芯材／框架／胶／地板组成及几何；铺位布局及实际已装家具／寝具；管路／电器、电池及选装；供应商模块包含；保留服务工作液；洁净空载、水箱／热水器排水及无液化气瓶／燃料；实测 M；实际工厂／场址／期间／路线／试验及交付防护范围 |

以校准秤称量同一完整验收洁净空载设备。包含已装旅居内装、实际安装电池和附件及声明保留服务工作液；排除人员、牵引车、载荷、散装露营设备、液化气瓶／燃料、搬运夹具及出货防护。工厂试验后水箱及热水器排空。目录 MRO、MTPLM、个人用品或电池／液化气预留量不是 M；目录空载及散装件边界不同。一千克归一化不建立铺位容量、牵引性能或居住舒适性等效。宽泛公开成品名称受这些限定收窄，不纳入半挂车或其他排除变型。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `energy_units` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表单位；以精确定义 1 kWh = 3.6 MJ 转为 MJ。不将电力属性名称解释为燃烧清单。 |
| `volume_units` | 地下水行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留实测体积及条件；不得杜撰气体密度、水密度或热值进行质量／能量替换。 |

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `tyre_count_units` | tyre | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 采用 cp_assembly 记录每台合格设备实际安装相符挂车胎数量。保留公开数量参考属性，以 q_item/M 归一化至每 kg 挂车的 Item(s)。单独实测轮胎质量仅用于实体质量核对，不改写公开属性。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从已声明供应商边界接收材料及配置部件，前景不隐含上游炼钢或部件制造 |
| starting_condition_role | 完整合格整机制造投入边界 |
| product_classification_scope | 较宽 CPC49222 背景下完整硬壁牵引杆式旅居挂车 |
| recursive_input_rule | 购入完整设备作为投入时，作为单独声明的上游产品，不递归重建本类别；区分新制与翻修 |
| upstream_dataset_requirement | 连接与材料、成品部件边界、地区、电压及处理状态相符的投入特定上游数据集。缺失链接保留为覆盖缺口 |
| disclosure | 披露前景工厂阶段、外包工序、部件内容、来料运输覆盖、交付防护包装边界、资本设备政策及所有排除；未核验上游及物流闭合时不声称完整摇篮到门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | 纳入从声明的接收投入到工厂验收之间所有实际工序及可归属返工；区分采购零件与场内制造以避免重复，使用已记录路线。 |  |
| `conditional_fabrication` | fabrication | 仅启用有记录底盘／墙板／家具制造及实际材料／胶配方。制造商示例建立可能结构及替代路线，不是通用场内路线或配方。 |  |
| `exclude_customer_camping` | camping_service | 排除牵引车、道路旅行、客户露营及住宿服务、公用设施及维护／报废。纳入实际工厂试验及独立识别材料、能量、废水及实测排放；仅记录实际电器点火。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `empty_delivery_configuration` | reference | 实际安装电池及已装附件纳入实测 M，目录电池预留不是测量。水／热水器／便器箱排空，排除液化气瓶／燃料、散装接电线、踏步及露营设备。单独供货件须独立产品清单，不隐藏纳入整车 M。拆卸交付须校准逐件质量核对至同一完整验收配置。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 可选底盘坯料制造 | conditional | 仅实际场内坯料制造，排除采购底盘已含零件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `panels` | 条件性夹层板裁切及粘接 | conditional | 仅实际场内指定墙板制造，排除采购成品板已含组成 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `cabinetry` | 条件性家具板制造 | conditional | 仅实际场内家具制造，采购成品柜排除供应商裁切 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `assembly` | 行走底盘及旅居车壳装配 | required | 每台完整合格挂车；仅启用实际已装供货模块 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `fitout` | 配置固定旅居内装 | required | 每台完整合格挂车；各电器行仅实际安装时启用 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `acceptance` | 工厂验收及净质量测定 | required | 每台完整合格挂车；试验、水、点火及排放仅实际记录条件下纳入 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `packaging` | 工厂门出货防护 | conditional | 仅实际出货防护在声明边界内 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |

各工序记录是同一最终合格输出的独立贡献，不是七种独立交易参考产品。保留可追溯内部零件转移和物料清单记录；内部转移在前景内抵消，不重复承接上游负荷。以下卡片是明确受路线条件约束的交换。实际存在的每项其他零件、化学品、燃料、包装件、废水流或实测基本流物质须分别以独立身份行补充；缺少卡片不构成截断许可。外包底盘、墙板或家具制造时，用精确采购部件或服务记录替代对应场内材料及能量，披露供应商边界。

### 过程：可选底盘坯料制造（`forming`）

#### 输入

##### 产品流

###### 冷弯非合金钢旅居挂车底盘槽材（`steel_channel`）

仅计场内实际加工坯料；记录牌号、厚度、锌／表面状态及称量领用扣未用退回量。采购成品镀锌底盘排除本组成投入及其供应商制造。场内镀锌须有独立完整原子路线，不设假定镀层量。

- 选定流: 冷弯非合金钢旅居挂车底盘槽材
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 实心碳钢焊丝（`solid_wire`）

仅计实际合格底盘支架焊接；记录焊丝型号、成分及称量丝盘消耗。药芯焊丝身份不同，不规定采购螺栓连接底盘必需焊接。

- 选定流: 实心碳钢焊丝
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 纯氩焊接气体（`argon`）

仅计记录焊接路线实际供货纯氩气，以气瓶净质量计量。混合保护气及液氩供货状态不同；存在时独立采集。

- 选定流: 纯氩焊接气体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 交流电（`forming_electricity`）

计量实际坯料切割、钻孔、焊接及可归属抽排。身份仅适用于外购用户侧电网平均1–35kV供电。内部低压电路不是新增采购能量。其他电压、自发光伏及合同可再生供电须独立适用身份和覆盖。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

#### 输出

##### 废物流

###### 工业后钢废料（`steel_offcut`）

仅计实际场内制造分流、未经处理外送工业后钢边料；称量并记录合金／镀层比例和去向。内部循环及含油切屑不是本外送废物。

- 选定流: 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

### 过程：条件性夹层板裁切及粘接（`panels`）

#### 输入

##### 产品流

###### 成品玻璃纤维增强聚酯旅居挂车蒙皮板（`grp_skin`）

仅计供应商确认、场内墙板制造使用已固化聚酯 GRP 板；记录树脂、玻纤增强、表面、几何及领用质量。Swift 支持 GRP 结构，不指定聚酯组成。原玻纤或平板玻璃不是成品复合板；供应商树脂固化不属于本边界。

- 选定流: 成品玻璃纤维增强聚酯旅居挂车蒙皮板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_panels。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_panels`
- 来源: `swift-caravans-2026`

###### 成品膨胀聚苯乙烯硬质旅居挂车保温板（`ps_core`）

仅计供应商确认实际 EPS 板；记录聚合物、添加剂、发泡状态、尺寸、密度证据及质量。宣传册指定聚苯乙烯，不统一指定 EPS 或 XPS。采购夹层墙板已含芯材，不重复计数。

- 选定流: 成品膨胀聚苯乙烯硬质旅居挂车保温板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_panels。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_panels`
- 来源: `swift-caravans-2026`

###### 成品硬质聚氨酯旅居挂车车身框架型材（`pu_frame`）

仅计场内墙板制造安装、供应商确认实际硬 PU 框架型材。记录组成、填料、几何及质量；不将硬结构产品识别为未指定软泡沫，不规定所有旅居挂车无木骨架。

- 选定流: 成品硬质聚氨酯旅居挂车车身框架型材
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_panels。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_panels`
- 来源: `swift-caravans-2026`

###### 水基聚醋酸乙烯酯分散体墙板胶粘剂（`pvac_adhesive`）

仅计供应商／安全数据表及接头记录确认、实际合格 PVAc 配方；记录供货湿质量、固含量、添加剂及水分、领用扣退回量。Bailey 支持水基墙板胶，不指定 PVAc 树脂或必需配方。双组分 PU 胶须独立组分行，不替换。

- 选定流: 水基聚醋酸乙烯酯分散体墙板胶粘剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_panels。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_panels`
- 来源: `bailey-manufacturing`

###### 交流电（`panel_electricity`）

计量实际裁切、涂胶、压机／真空设备及电控固化；记录时长／温度及实际配方。结构证据不规定必需水刀、热压、GRP 成型或通用固化能量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_panels。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_panels`

#### 输出

##### 废物流

###### 分流干燥膨胀聚苯乙烯板裁切废料（`eps_offcut`）

仅计实际分流、已表征未经处理外送 EPS 边料；称量并识别涂层／胶污染及去向。混合粘接板废料不同。

- 选定流: 分流干燥膨胀聚苯乙烯板裁切废料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_panels。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_panels`

###### 已固化玻璃纤维增强聚酯板裁切废料（`grp_offcut`）

仅计同一已表征固化板的分流废物；称量并识别树脂、玻纤、表面组成及处理。这是废物转移，不是必然苯乙烯或大气颗粒物排放。

- 选定流: 已固化玻璃纤维增强聚酯板裁切废料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_panels。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_panels`

###### 未固化水基聚醋酸乙烯酯胶粘剂残留废物（`adhesive_residue`）

仅计声明胶的实际独立收集残留；称量供货状态湿废物、表征固含量及处理。已固化粘接板中胶属于安装质量或独立复合废物流。

- 选定流: 未固化水基聚醋酸乙烯酯胶粘剂残留废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_panels。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_panels`

### 过程：条件性家具板制造（`cabinetry`）

#### 输入

##### 产品流

###### 纸饰面胶合板旅居挂车家具板（`furniture_board`）

仅计实际指定纸饰面胶合板；按质量记录树种、层／树脂／饰面结构、水分及领用扣退回。Bailey 支持纸饰面家具胶合板，不支持竹、热带木材或通用刨花板替代。采购完整柜体已含该材料。

- 选定流: 纸饰面胶合板旅居挂车家具板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_cabinetry。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cabinetry`
- 来源: `bailey-manufacturing`

###### 交流电（`cabinet_electricity`）

按声明采购能量条件计量实际家具板裁切、铣削、封边及捕集粉尘抽排。记录工具及领退；外包成品家具排除本供应商工序的场内前景。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_cabinetry。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cabinetry`

#### 输出

##### 废物流

###### 分流纸饰面胶合板家具板边料废物（`plywood_offcut`）

称量独立收集已表征边料，记录纸、木材、粘结剂及污染／去向。不将复合体称纯木或基本流粉尘；捕集细尘及混合板废物须独立行。

- 选定流: 分流纸饰面胶合板家具板边料废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_cabinetry。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cabinetry`

### 过程：行走底盘及旅居车壳装配（`assembly`）

#### 输入

##### 产品流

###### 完整镀锌钢制牵引杆式旅居挂车底盘（`chassis`）

单个实际采购成品配置底盘；记录钢／锌表面、几何、质量及车轴／连接器／支撑件内容。供应商制造／镀锌不是场内前景。已含内容不再计独立模块或坯料。动力卡车底盘不是代理。

- 选定流: 完整镀锌钢制牵引杆式旅居挂车底盘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 挂车车轴（`axle`）

本行限定为实际完整带制动扭力悬架挂车车轴，模块内容须有记录。仅计采购底盘之外实际单供挂车车轴；声明壳体、悬架弹性体、轮毂／轴承／制动内容、质量及数量。其他钢板弹簧／空气悬架须独立模块行，不假定通用车轴数量。

- 选定流: 挂车车轴 `e1bf60f6-8831-49e2-ad46-9bad63ff50a3`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整机械惯性制动旅居挂车牵引连接器（`coupler`）

仅计底盘／车轴模块之外实际供货牵引连接器；记录牵引球接口、惯性机构、脱挂／驻车联动及实测质量。这些功能属于单个配置实体总成，不重复另算交换。

- 选定流: 完整机械惯性制动旅居挂车牵引连接器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 轮胎（`tyre`）

仅用于与公开其他新轮胎类别相符的实际成品新充气橡胶挂车胎。记录配方、增强层、尺寸、负荷／等级及实体安装数量；按每台合格设备 Item(s) 采集 q_item，以 q_item/M 归一化并保留公开物品数量属性。单独实测轮胎净质量仅用于安装质量核对，排除轮辋。未硫化乘用车轮胎、废轮胎或胶粉不是替代。

- 选定流: 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品钢制旅居挂车轮辋（`rim`）

仅计实际供货钢制轮辋，记录涂层、尺寸及净质量；轮胎和轮毂不属于本单个实体件，明确改用完整胎轮模块时除外。

- 选定流: 成品钢制旅居挂车轮辋
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品 GRP 蒙皮聚苯乙烯芯旅居挂车夹层墙板（`wall`）

单个实际供货成品粘接墙板；记录确切树脂／蒙皮、芯材聚合物／发泡状态、框架、胶、表面及模块质量。不重复计上游组分／固化场内投入。其他蒙皮和芯材须不同实体行。

- 选定流: 成品 GRP 蒙皮聚苯乙烯芯旅居挂车夹层墙板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `swift-caravans-2026`

###### 成品 GRP 蒙皮聚苯乙烯芯旅居挂车夹层顶板（`roof`）

单个实际供货顶板，核验蒙皮／芯材／框架／胶组成、开口及质量。已装通风及顶部附件须独立记录，模块已含者除外。不重复组分坯料，不推断通用增强层。

- 选定流: 成品 GRP 蒙皮聚苯乙烯芯旅居挂车夹层顶板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `swift-caravans-2026`

###### 成品胶合板上面 GRP 底面旅居挂车保温地板（`floor`）

单个实际成品供货地板；声明胶合板树种／粘结剂、GRP 树脂、供应商确认保温聚合物、框架／粘接及质量。不由 Swift 地板品牌歧义名称指定 PU 或 XPS 化学组成。不设通用厚度或密度因子。

- 选定流: 成品胶合板上面 GRP 底面旅居挂车保温地板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `swift-caravans-2026`

###### 单组分硅烷改性聚合物旅居挂车接缝密封胶（`sealant`）

仅计供应商确认实际合格 SMP 胶，记录粘结剂／添加剂、筒领用扣退回、固化保留及废物。结构不强制 SMP；硅酮、丁基胶带及多组分产品须独立身份。

- 选定流: 单组分硅烷改性聚合物旅居挂车接缝密封胶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整双层亚克力旅居挂车窗（`window`）

仅计实际安装供应商确认 PMMA 窗总成；记录透明板／框／密封／五金组成、几何及净质量。安全玻璃、聚碳酸酯或原亚克力板不代表本成品模块。

- 选定流: 完整双层亚克力旅居挂车窗
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整保温旅居挂车入口门（`door`）

单个实际安装配置门，声明蒙皮／芯材／框架、透明板、锁及铰链并实测质量。完整门投入已含这些组成，不在材料或窗行重复。

- 选定流: 完整保温旅居挂车入口门
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 交流电（`assembly_electricity`）

按声明采购条件计量底盘、车壳、地板、顶板及开口安装工具、压机及可归属提升／公用设施。纳入可归属返工，记录水分／接缝验收。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

### 过程：配置固定旅居内装（`fitout`）

#### 输入

##### 产品流

###### 完整纸饰面胶合板旅居挂车厨房柜（`cabinet`）

单个实际配置供货成品柜；记录胶合板树种、纸、粘结剂、五金、尺寸及质量。不重复家具板组成或供应商裁切能量。其他已装衣柜须独立行。

- 选定流: 完整纸饰面胶合板旅居挂车厨房柜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 完整聚氨酯泡沫旅居挂车床垫（`mattress`）

仅计泡沫、覆面及增强组成核验的实际已装成品床垫；记录交付尺寸及质量。品牌或铺位数量不建立 PU 组成。验收安装配置外可拆露营床垫排除于 M。

- 选定流: 完整聚氨酯泡沫旅居挂车床垫
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 点火接线装置和其他用于车辆、航空器或船只的点火接线装置（`harness`）

以公开类别其他车辆布线部分表示单个实际供货非点火旅居挂车线束；声明导体、绝缘、连接器、电路、道路灯／控制内容及实测质量。保留官方中文名称，不要求点火或发动机系统。排除完整电器内部已含布线。

- 选定流: 点火接线装置和其他用于车辆、航空器或船只的点火接线装置 `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 完整密封 AGM 铅酸旅居挂车辅助蓄电池（`battery`）

仅计供应商确认实际已装玻璃纤维吸附式密封铅酸电池；记录型号、容量、充液状态、质量及外壳边界。目录电池预留量不是质量证据。锂包及富液启动电池须独立身份，不重复充液电解液。

- 选定流: 完整密封 AGM 铅酸旅居挂车辅助蓄电池
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 完整旅居挂车市电电源及电池充电器（`charger`）

单个实际组合实体供货电源单元，不是可选清单；声明已装变换／充电器、板卡、外壳、控制／布线边界及实测质量。独立变换器或控制器须另行记录。

- 选定流: 完整旅居挂车市电电源及电池充电器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 完整电动压缩式旅居挂车冰箱（`fridge`）

仅计实际已装电动压缩式单元；记录型号、保温、交付质量、压缩机及制冷剂种类／充注量／边界。工厂预充制冷剂属于本成品，不重复原料投入或必然排放。吸收／液化气冰箱路线不同。

- 选定流: 完整电动压缩式旅居挂车冰箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 完整电动旅居挂车热水器（`water_heater`）

仅计实际已装电热单元；声明容器、元件、控制、管／接头边界及排空交付质量。燃气或组合产品须独立模块身份。保留服务乙二醇仅在模块未含时独立声明。

- 选定流: 完整电动旅居挂车热水器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 完整丙烷旅居挂车灶具（`hob`）

仅计供应商确认实际已装兼容丙烷炊具；记录燃烧器、调压／控制包含、质量及验收模式。天然气及电热灶具不同。燃料不属于交付空载参考状态。

- 选定流: 完整丙烷旅居挂车灶具
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 成品不锈钢旅居挂车厨房洗涤槽（`sink`）

仅计实际指定槽，附钢牌号、表面、排水／接头边界及实测质量。已含该槽的采购厨房模块排除此独立行。

- 选定流: 成品不锈钢旅居挂车厨房洗涤槽
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 成品聚乙烯旅居挂车清水箱（`tank`）

仅计实际已装 PE 箱；记录聚合物牌号、成型状态、容量、盖／阀边界及排空净质量。废水箱为独立产品。试验水不属于空箱质量。

- 选定流: 成品聚乙烯旅居挂车清水箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 成品聚乙烯旅居挂车饮用水管（`water_pipe`）

仅计实际单供 PE 管，记录树脂、尺寸及称量安装质量；接头及水泵须独立行。完整水系统模块已含时不重复计数。

- 选定流: 成品聚乙烯旅居挂车饮用水管
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 成品铜制旅居挂车丙烷管（`gas_pipe`）

仅计电器外实际供货铜气管；记录合金、尺寸、表面及安装质量。完整调压器、软管及接头须独立身份。工厂燃气试验消耗不是管材。

- 选定流: 成品铜制旅居挂车丙烷管
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 完整旅居挂车盒式卫生便器（`toilet`）

单个实际已装成品盒式系统；声明便器／盒、聚合物、水泵、密封及布线内容、排空交付质量。不假定交付便器药剂或废物；实际工厂试验介质须独立行。

- 选定流: 完整旅居挂车盒式卫生便器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

###### 交流电（`fitout_electricity`）

按声明采购能量条件计量实际固定家具、寝具、布线、管路及电器安装，含可归属泄漏修复及不合格品。采购成品电器保留供应商边界。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fitout。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fitout`

### 过程：工厂验收及净质量测定（`acceptance`）

#### 输入

##### 产品流

###### 工艺用水（`supplied_water`）

仅计工厂水／管路试验及清理实际领用外购处理工艺水；测量供货质量、处理状态及未用退回。不是资源取水，不重复供应商取水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

###### 丙烷（`propane`）

仅计记录工厂电器点火试验实际采用、由气瓶液化状态供应化石来源丙烷；采集气瓶净质量消耗、组成、退回／保留气及时间。不替换未指定液化气或天然气。空载参考排除气瓶／燃料；仅压力或电气验收不规定燃料消耗。 须有供应商确认化石组成及液态交付状态，不从公开候选推断密度或标准声明。

- 选定流: 丙烷
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

###### 交流电（`test_electricity`）

计量实际工厂灯、绝缘／接地、充电器／电池、水泵／热水器、冰箱、漏检设备及调整／返工。记录实际安装配置、试验时长、电池起终荷电状态及热水器排水。目录电流或功率不是能量。露营接电及牵引车不属于制造边界。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

##### 基本流

###### 地下水（`well_water`）

仅计工厂试验实际采用场址直接地下取水；计量总 m3 并识别水井／国家，资源／水资源／来自水的可再生物质资源。不将同一水量再计外购工艺水。不规定必需水井或稀缺声明。

- 选定流: 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

#### 输出

##### 产品流

###### 用于居住或宿营的大棚车式挂车和半挂车（`finished_machine`）

同一完整验收洁净空载配置硬壁牵引杆式旅居挂车的一千克。包含实际已装底盘／车轴／连接器、车壳／地板／开口、柜体、固定寝具、电气／管路／电器、已装电池／选装及保留服务工作液。箱及热水器排空。排除牵引车、人员、载荷、散装露营设备、液化气瓶／燃料、夹具、出货防护及散装备件。宽泛背景中的半挂车、帐篷挂车及自行式旅居车变型均排除。

- 选定流: 用于居住或宿营的大棚车式挂车和半挂车 `fc37f9b4-d36f-4b33-8cf1-ac2d4af0800e`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mass`

##### 废物流

###### 水基旅居挂车水压试验排水废物（`test_effluent`）

仅计声明试验实际收集外送水基废物流；称量、表征添加剂／污染并识别接收处理。厂内回用箱排水为内部转移；淡水资源或环境水排放不是本废物身份。

- 选定流: 水基旅居挂车水压试验排水废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

##### 基本流

###### 二氧化碳（化石源）（`co2_air`）

仅计前景工厂丙烷点火实际实测化石碳二氧化碳（CAS124-38-9），即时向室外空气释放且无法论证更具体子介质：排放／大气排放／未指定。保留校准物质特定浓度及气流／时间、温度／压力和实际质量转换。不采用土壤、水、仅室内或长期大气记录或生物源身份。不假定燃烧因子或必需点火／排放，其他观察物质独立清单。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

### 过程：工厂门出货防护（`packaging`）

#### 输入

##### 产品流

###### 聚乙烯薄膜（`pack_film`）

仅计实际聚乙烯出货薄膜；称量所用防护，不纳入验收净挂车质量。废膜独立表征，不隐藏为降低整车 M。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packaging。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging`

###### 瓦楞纸板旅居挂车防护垫（`pack_board`）

仅计实际供货瓦楞垫，声明纤维配比、再生成分及质量。不预设纤维指定成品箱识别未指定防护垫。

- 选定流: 瓦楞纸板旅居挂车防护垫
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packaging。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `direct_attribution` | shared_operations | 优先使用工单及分表直接归属。仍使用公共总表时，须对识别工序采用实测因果驱动量，如机时，并披露全部参与工单及空载负荷；质量归一化前，按同一配置合格台数确定每台可归属数量。 | `ghg-product-allocation-2011` |
| `coproduct_decision` | saleable_outputs | 不预设废钢为共产品，披露去向及法律／产品状态。实际产生多个可销售共产品时，优先细分；论证物理关系，无法建立时采用有记录的经济或其他分配并作敏感性分析。不规定通用质量份额或避免炼钢抵扣。 | `ghg-product-allocation-2011` |
| `rework_scrap` | manufacturing_losses | 保留合格报告批次可归属的返工及不合格品负荷。内部回收材料仅计一次，外送废物另列。分别披露上游再生含量方法及下游处理以避免双重抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | 验收净质量 | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收 | 报告期间内完整批次 | 同一型号及配置 | 每台验收净质量 | 校准、称重及签字验收记录 |
| `cp_forming` | `forming` | 可选底盘坯料制造 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单及签字验收检查采集安装数量，单独称量轮胎质量用于实体核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_panels` | `panels` | 条件性夹层板裁切及粘接 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单及签字验收检查采集安装数量，单独称量轮胎质量用于实体核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_cabinetry` | `cabinetry` | 条件性家具板制造 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单及签字验收检查采集安装数量，单独称量轮胎质量用于实体核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_assembly` | `assembly` | 行走底盘及旅居车壳装配 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单及签字验收检查采集安装数量，单独称量轮胎质量用于实体核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_fitout` | `fitout` | 配置固定旅居内装 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单及签字验收检查采集安装数量，单独称量轮胎质量用于实体核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_acceptance` | `acceptance` | 工厂验收及净质量测定 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件；实际连接器／制动／道路灯和电气／管路／电器试验准则／结果／时长；水领用、退回及排水；电池安装质量和起终荷电状态；丙烷瓶质量／组成／退回；实测化石 CO2 浓度及室外排气量／时间／条件；保留服务工作液 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单及签字验收检查采集安装数量，单独称量轮胎质量用于实体核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 在 cp_mass 前排水并核对实际用水试验。计量包含充电器损耗的交流输入，不重复电池放电。记录实际丙烷点火及实测物质排放数量，不用通用燃烧因子；不以露营载荷或目录质量替代。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_packaging` | `packaging` | 工厂门出货防护 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3，实体计数成品轮胎用 Item(s)。由领退、物料清单及签字验收检查采集安装数量，单独称量轮胎质量用于实体核对。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3、Item(s) | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

finished_machine 输出固定为 1 千克，不再次相除。对每个其他适用行使用同一配置及批次进行转换，数量分子单位保持不变。不同配置须拆分，不按台数混合平均后套用目录质量。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `configuration_trace` | all rows | 将各投入追溯至安装物料清单、路线及合格整机；供应商成品零件不重复承担坯料负荷。其余部件在补充独立原子记录前披露为覆盖缺口。 | 图纸、物料清单、供应商单据 |
| `basis_quality` | cp_mass | M 必须是正的实测净质量，交付配置、工作液状态及验收边界与全部采集交换相同。 | 校准及称重记录 |
| `coverage_quality` | all processes | 记录完整批次时间覆盖、仪表重叠、不合格品、返工、库存变化、外包阶段及未测排放。缺失记录为未知，不是零或 not_applicable。 | 台账、覆盖表及测量不确定度 |
| `chemistry_quality` | panels; cabinetry; assembly; fitout | 逐供货配方化学品核验配方、浓度及安全数据表；表征各外送废物流并将处理与环境排放分开。 | 配方、安全数据表、化验及联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 拒绝限定信息缺失、液化气／水／载荷装载质量或运输毛重替代、非正 M 或配置、cp_mass 与 finished_machine 不一致。要求 1 千克输出及各非参考适用行明确应用 normalize_mass。 |  |
| `validate_atomic` | inventory | 逐行要求一个物理交换、所填公开身份已核验、属性／单位正确、中文流名及介质相符。UUID 未解决不授权代理替代或混合行。 |  |
| `validate_balance` | coverage | 按实际物料清单核对安装质量、坯料、废物、保留工作液及采购零件；独立核对已装底盘／车壳／墙板／胶／柜体／电器／电池内容及保留工作液与实测物料质量；核对试验水领用、内部回用及排水、丙烷消耗及实测室外大气排放。逐阶段核对公用设施，内部转移抵消。结合记录的测量不确定度解释差异，不杜撰数值允差。 |  |
| `validate_completeness` | dataset | 逐条件阶段核对路线证据。声称清单完整前，须分列并采集缺失化学品、零件、试验介质及实际排放；上游或功能覆盖不完整时禁止摇篮到门或服务比较。 |  |
| `validate_allocation` | shared_operations | 要求完整驱动量记录及分配、废钢处理依据；其他可辩护分配可能改变结果时记录敏感性。 | `ghg-product-allocation-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确完整合格旅居挂车的制造前景过程 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为配置一致、上游覆盖已披露的旅居挂车供应模型投入 |
| excluded_use | 牵引、客户露营／住宿服务，或未另做功能建模的跨铺位／布局、底盘及电器配置比较 |
| required_metadata | 型号、配置、空载状态、M、保留工作液、制造商／场址、报告期间、工艺路线、电压／地区、供应商边界、运输／包装范围及分配 |
| required_quality_disclosure | 实测及估算数量；未解决身份；未测排放及部件；上游链接完整性；不确定度、数据年份及配置限制 |
| update_trigger | 底盘／车轴／制动、车壳／芯材／框架／胶组成、地板／家具布局、电器／电池／选装、供应商模块边界、试验／点火／排水、能源组合、验收或质量协议变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `swift-caravans-2026` | handbook | Swift Group, Touring Caravans2026 brochure, PDF p.4 / printed pp.6–7 SMART construction diagram; PDF p.17 / printed pp.32–33 specification and MRO footnotes. https://www.swiftgroup.co.uk/media/rs5dz3ji/2026_swift_caravan_brochure.pdf | 版次特定定性 GRP／聚苯乙烯／PU 框架及胶合板地板结构；品牌地板保温组成未解决。质量脚注明确目录 MRO 包含散装设备／液化气预留，不作为 M。不规定厚度、原型试验限值、质保／寿命或材质牌号。 |
| `bailey-manufacturing` | handbook | Bailey of Bristol, Sustainable Manufacturing, undated publisher HTML, Green Products manufacturing-material paragraph. https://www.baileyofbristol.co.uk/why-bailey/sustainable-manufacturing/ | 独立定性水基墙板胶及纸饰面胶合板家具板实例。不建立 PVAc 树脂、树种、等级或必需无木设计。不采用假日碳比较、可回收比例、供电声明或废物比例。 |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 历史分配层级；须有实际因果驱动量记录，不声称现行完整符合性。 |
