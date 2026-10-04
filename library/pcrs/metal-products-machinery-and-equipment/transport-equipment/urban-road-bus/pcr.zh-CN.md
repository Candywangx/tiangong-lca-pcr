---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.urban-road-bus
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 单层纯电城市道路客车制造

## 1. 范围与适用性

完整新单层纯电城市载客道路客车，声明钢制承载车身骨架路线。声明刚性/铰接布局、型号/VIN、车身/底盘自制外购、客舱布置、电池化学体系/容量/内含包边界、电驱、辅助系统及实际交付流体/SOC状态。本范围窄于CPC49112；参考功能是制造交付。

仅底盘/裸车身供货；旅游/城际、双层、柴油/混合动力/燃料电池/无轨电车及铝/复材承载骨架路线。排除客运服务、人公里、驾驶员/乘客/载荷质量、场站充电器/基础设施、线路运行、寿命期换电池、维护及寿命终结。出厂验收充电/测试及返工仍属制造；发运包装/独立备用包排除M并另行披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.urban-road-bus |
| classification_refs | CPC:3.0:49112; narrower |
| covered_products | 完整新单层纯电城市载客道路客车，声明钢制承载车身骨架路线。声明刚性/铰接布局、型号/VIN、车身/底盘自制外购、客舱布置、电池化学体系/容量/内含包边界、电驱、辅助系统及实际交付流体/SOC状态。本范围窄于CPC49112；参考功能是制造交付。 |
| excluded_products | 仅底盘/裸车身供货；旅游/城际、双层、柴油/混合动力/燃料电池/无轨电车及铝/复材承载骨架路线。排除客运服务、人公里、驾驶员/乘客/载荷质量、场站充电器/基础设施、线路运行、寿命期换电池、维护及寿命终结。出厂验收充电/测试及返工仍属制造；发运包装/独立备用包排除M并另行披露。 |
| representative_product | 一台完整配置单层钢骨架电动城市客车，含放行客舱及安装牵引储能/驱动；化学体系、容量、铰接及车身架构为不同变型，不是可互换千克。 |
| production_route | 钢车身切割/成形/连接；实际防腐/涂装；行走/驱动；电池/电气集成；内装/辅助；出厂测试/充电/验收；实际发运防护。外包及外购底盘/车身替代对应场内作业。 |
| market_state | 制造放行的验收完整车辆，声明安装电池/SOC及流体状态，无驾驶员/乘客/载荷或运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并出厂验收一种声明完整城市客车配置。 |
| How much | 1 kg验收净完整车辆，是整台验收设备的归一化份额，不是独立客运服务。 |
| How well | 实际放行车身/底盘/物料清单、电池、电气/高压、制动、门/玻璃/内装及其他型号特定验收；仅实际具备时记录准入/批准标识，不规定通用认证、容量、测试限值/路试距离。 |
| How long or cycle | 一个制造/验收周期；客运寿命、线路里程及寿命换件周期不用于归一化。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整单层纯电城市道路客车 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号/VIN/物料清单修订；单层布局/铰接；钢骨架材质/接头；底盘/车身自制外购；尺寸；座位/站位/车门；包化学体系/比例/容量/数量/位置/质量/供应商内含范围；电机/桥/逆变器拓扑；空调/制冷剂/冷却液规范；安装附件；声明交付SOC/液位；净实测M；场址/时期；实际测试/返工；表计/供应方/运输/处理边界；独立备件/包装排除 |

质量参考身份未解决；可用整车身份采用台数，客车出行身份采用乘客距离。两者均不作为质量流。产品元数据保留具体完整车辆配置。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | body_electricity; coating_electricity; chassis_electricity; electrical_electricity; interior_electricity; release_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 归一化前按3.6 MJ/kWh换算壁端实测kWh，记录供电电压/供应方；电池容量/储能为配置限定，不是整车质量。 |
| gas_volume | natural_gas | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留实测供应方气体体积及参考温度/压力/可追溯修正，无通用密度/热值换算。 |

使用校准整车秤称量已验收完整安装客车，无驾驶员/乘客/载荷及发运包装。单独交付状态记录将安装电池及具体SOC、安装备件/附件及规定留存冷却液/制冷剂/润滑剂绑定至同一VIN/配置；可回收测试水排除。记录毛读数、皮重排除及有依据可追溯修正。样本整备质量、总重、桥额定值、电池容量不能替代实测M。不同液位/SOC/配置须独立记录，不虚构标准质量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 客车制造厂接收声明钢型材/板、配方涂装品及外购底盘/部件/子总成；炼钢/轧制、电芯及供应商部件在上游。 |
| starting_condition_role | 声明制造前景模块起点。 |
| product_classification_scope | 完整新单层纯电城市载客道路客车，声明钢制承载车身骨架路线。声明刚性/铰接布局、型号/VIN、车身/底盘自制外购、客舱布置、电池化学体系/容量/内含包边界、电驱、辅助系统及实际交付流体/SOC状态。本范围窄于CPC49112；参考功能是制造交付。 |
| recursive_input_rule | 不能以外购完整客车替代各部件。外购涂装车身/底盘/包止于记录具体供货边界，替代内含物料/工艺；内部骨架/模块为转移，不新增采购；包/电芯不能并计。 |
| upstream_dataset_requirement | 扩展评价连接相容实际钢材、涂装、底盘、电池/其他部件供应商、外包、场际/入厂运输、公用工程及废物处理；UUID是身份，不是供应商清单/数值因子；仅前景不是完整从摇篮到工厂门。 |
| disclosure | 声明全部参与场址/时期、自制外购边界、化学体系变型、留存交付状态、测试/返工、回收循环、公用工程载体、供应方/排除；充电投入与留存能量分开，避免重复。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacturing | Daimler2019钢骨架eCitaro案例支持车身连接、防腐、装备安装、电池集成及出厂验收的观察路线；当前工厂记录决定化学品/测试参数，不将历史配方/数量通用化。 | daimler-ecitaro-manufacture-2019 |
| boundary_sites | supplier_scope | Solaris2024场址角色佐证分开的钢骨架制造及电部件/电池集成；保留场际交接/实际供货范围；场址角色不是活动总量/分摊权重。 | solaris-sustainability-2024 |
| boundary_service | transport | 排除客运运行/场站基础设施；纳入实际制造验收测试消耗/回收；无驱动尾气不等于工厂零排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| body | 钢制车身准备与连接 | required | 钢管/板结构实际切割/成形/连接路线；外购子骨架替代内含场内原料/作业；外包时供应方轧制/骨架制造在上游。 | foreground_production | 每 1 kg 参考流 |
| coating | 防腐与车身涂装 | required | 实际声明涂装路线；清洗、磷化、电泳、固化为条件场内步骤，不是通用配方；披露外包涂装/场际转移，不重复涂料投入。 | foreground_production | 每 1 kg 参考流 |
| chassis | 车桥、车轮与驱动安装 | required | 安装实际放行转向/驱动桥、车轮/驱动件；供应商总成边界控制内含电机/制动/悬架重复；外购完整底盘替代各单项投入。 | foreground_production | 每 1 kg 参考流 |
| electrical | 牵引储能与电气集成 | required | 各变型安装一种规定电池体系及实际线束/冷却；采购时包/电芯制造在上游；场内模块至包作业须自有明确投入/实测公用工程清单。 | foreground_production | 每 1 kg 参考流 |
| interior | 客舱、玻璃与辅助系统 | required | 安装实际座椅、玻璃、车门、空调及放行内装；选配另行具体定义；供货空调内含制冷剂不重复作充注投入。 | foreground_production | 每 1 kg 参考流 |
| release | 调试、验收与称量 | required | 实际高压/电气、制动/淋雨/路试及最终放行方案；记录壁端充电、水补给、回收、缺陷/返工及声明交付SOC/液位；不假定标准路试距离/损失比例。 | foreground_production | 每 1 kg 参考流 |
| packing | 发运防护 | conditional | 仅实际分项计量防护物料；独立备件排除整车M并披露另供边界。 | foreground_production | 每 1 kg 参考流 |

卡片定义单个候选交换，不是完整通用客车物料清单。声明覆盖前补齐各实际车辆物料/路线：逐项增加未内含于采购总成的不同悬架、制动、转向、轴承、变速箱、驾驶座、地板/侧/顶板、扶手、窗、灯、控制器、低压电池、充电口、电缆、加热器、流体、连接化学品及测试废液。分别选择化学体系；缺席条件行须有依据记不适用。捕集尘/污泥/送处理液是废物，不是基础排放。各实际实测排放物种/接收介质单列。HFC-134a无官方中文baseName，保留规范化学代码，不虚构官方译名。

### 过程：钢制车身准备与连接（`body`）

钢管/板结构实际切割/成形/连接路线；外购子骨架替代内含场内原料/作业；外包时供应方轧制/骨架制造在上游。

#### 输入

##### 产品流

###### 客车承载骨架焊接矩形钢管 （`steel_tube`）

实际放行钢牌号、截面、壁厚及供管状态；外购骨架替代内含钢管。

- 选定流： 客车承载骨架焊接矩形钢管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 冷轧低碳钢客车车身薄板 （`steel_sheet`）

各车身板实际图纸牌号/厚度及冷轧供货，保留净领用/排样损失。

- 选定流： 冷轧低碳钢客车车身薄板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 实心低合金钢MIG焊丝 （`welding_wire`）

条件实际MIG路线一种牌号/直径；电阻或其他连接另记实际耗材，不假定填丝。

- 选定流： 实心低合金钢MIG焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 氩焊接保护气 （`argon`）

仅一种放行焊接路线实际纯氩供货；氩/CO2混气为另种具体配气，不是本行。

- 选定流： 氩焊接保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 交流电 （`body_electricity`）

实际低于1kV电网用户切割/成形/连接/通风需求，不以激光铭牌功率当耗能。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_scrap`）

实际干燥未处理分流钢边角料外排，内部可复用管仍为转移，无避免钢材抵扣。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

##### 基本流

###### 颗粒物，粒径未特指 （`weld_pm`）

条件实际控制后室外空气焊接/切割颗粒，粒径/子介质未特指；仅实测出口量，不是滤尘。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

### 过程：防腐与车身涂装（`coating`）

实际声明涂装路线；清洗、磷化、电泳、固化为条件场内步骤，不是通用配方；披露外包涂装/场际转移，不重复涂料投入。

#### 输入

##### 产品流

###### 自来水 （`wash_water`）

实际外部市政清洗/漂洗补给，内部循环不重复采购。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 氢氧化钠溶液，50% （`sodium_hydroxide`）

条件具体50%供货清洗成分质量，不是NaOH活性质量或50%操作槽液；SDS决定实际配方。

- 选定流： 氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 磷酸锌转化涂覆溶液 （`zinc_phosphate`）

条件实际供应商配方/浓度及供液质量；其他磷酸盐/预处理另列。

- 选定流： 磷酸锌转化涂覆溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 水性环氧阴极电泳底漆 （`epoxy_primer`）

仅实际环氧配方底漆及供货固含/溶液基准；外包已涂车身替代对应场内底漆。

- 选定流： 水性环氧阴极电泳底漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 配方聚氨酯客车车身面漆 （`pu_topcoat`）

实际供货混合涂料，声明树脂/溶剂/固化剂比例/固含；分别采购时拆分各化学产品。

- 选定流： 配方聚氨酯客车车身面漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 无溶剂型聚氨酯胶粘剂 （`pu_adhesive`）

条件实际依供应商组分的湿气固化无溶剂零VOC聚氨酯胶；不自动视为零排放或套用固化CO2因子。

- 选定流： 无溶剂型聚氨酯胶粘剂 `669d2f68-79e9-47c2-96fa-316fc7d33b62`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 交流电 （`coating_electricity`）

实际低于1kV泵、涂覆、风机及电固化需求，含废品/返工。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 客车涂层固化用天然气 （`natural_gas`）

条件采购炉气以明确计费/参考状态及当前供气组分m3实测，不用通用密度/热值。

- 选定流： 客车涂层固化用天然气
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

#### 输出

##### 废物流

###### 送处理的客车车身废碱洗液 （`wash_effluent`）

实际分流碱槽废液送处理，记录组分/湿质量；不是基础水排放。

- 选定流： 送处理的客车车身废碱洗液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 湿磷酸锌预处理污泥 （`phosphate_sludge`）

条件实际磷酸锌槽污泥湿质量、干固体/处理方，不是通用漆渣。

- 选定流： 湿磷酸锌预处理污泥
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 废弃聚氨酯面漆过喷料 （`paint_waste`）

仅一种实际未用未回收配方面漆残渣送处理，记录留存溶剂/含水基准。

- 选定流： 废弃聚氨酯面漆过喷料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

##### 基本流

###### 二氧化碳（化石源） （`fossil_co2_air`）

条件实际场内固化/胶黏剂碳平衡或监测的即时化石CO2至室外未特指空气，不假定车辆尾气。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 二甲苯（所有异构体） （`xylene_air`）

条件控制后实测全部二甲苯异构体至室外未特指空气；SDS/组分测定建立身份，不是总VOC或纯间二甲苯。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

### 过程：车桥、车轮与驱动安装（`chassis`）

安装实际放行转向/驱动桥、车轮/驱动件；供应商总成边界控制内含电机/制动/悬架重复；外购完整底盘替代各单项投入。

#### 输入

##### 产品流

###### 成品客车前转向桥总成 （`front_axle`）

一种放行客车转向桥，记录供应商内含制动/悬架范围，避免重复。

- 选定流： 成品客车前转向桥总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_chassis`

###### 成品电动客车驱动桥总成 （`drive_axle`）

一种实际电驱桥规范，声明是否内含轮边电机/逆变器；独立电机仅另供时列。

- 选定流： 成品电动客车驱动桥总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_chassis`

###### 独立客车牵引电机 （`traction_motor`）

条件另供电机实际拓扑/额定及质量；排除驱动桥内含电机。

- 选定流： 独立客车牵引电机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_chassis`

###### 客车牵引逆变器总成 （`inverter`）

实际一种放行牵引直流至交流逆变器供货/冷却边界，不用电缆或开关柜代替。

- 选定流： 客车牵引逆变器总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_chassis`

###### 新硫化子午线充气客车轮胎 （`bus_tyre`）

实际轮胎尺寸/负荷等级/供货净质量，仅放行物料清单安装/备胎；不用胎体/未硫化胎代替。

- 选定流： 新硫化子午线充气客车轮胎
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_chassis`

###### 成品钢制客车车轮 （`steel_wheel`）

一种实际车轮图纸/表面/质量，排除轮胎及另供车桥。

- 选定流： 成品钢制客车车轮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_chassis`

###### 交流电 （`chassis_electricity`）

实际低于1kV车桥/车轮/传动安装需求。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_chassis`

### 过程：牵引储能与电气集成（`electrical`）

各变型安装一种规定电池体系及实际线束/冷却；采购时包/电芯制造在上游；场内模块至包作业须自有明确投入/实测公用工程清单。

#### 输入

##### 产品流

###### 新磷酸铁锂牵引电池包 （`lfp_pack`）

条件实际完整LFP电池包，含电芯/壳/BMS及冷却边界、质量/容量；不是活性正极粉。

- 选定流： 新磷酸铁锂牵引电池包
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

###### 新镍锰钴锂离子牵引电池包 （`nmc_pack`）

条件实际NMC化学体系/比例包，完整声明BMS/壳范围；不是LFP/NCA或回收降级粉。

- 选定流： 新镍锰钴锂离子牵引电池包
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

###### 新镍钴铝锂离子牵引电池包 （`nca_pack`）

条件实际单独识别NCA包；化学体系仅由供应商放行记录建立，不用混合电池类型行。

- 选定流： 新镍钴铝锂离子牵引电池包
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

###### 成品绝缘铜客车线束 （`vehicle_harness`）

一种放行安装线束零件号，含实际绝缘/连接器/长度/质量，不用纯铜代理。

- 选定流： 成品绝缘铜客车线束
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

###### 配方50%质量分数乙二醇电池冷却液 （`coolant`）

条件实际含缓蚀配方50%乙二醇水预混供货质量；测试液排空/回收另记，仅交付充注纳入M。

- 选定流： 配方50%质量分数乙二醇电池冷却液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

###### 交流电 （`electrical_electricity`）

实际低于1kV电池/线束安装及冷却系统检漏需求；供应商预充属于上游。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_electrical`

### 过程：客舱、玻璃与辅助系统（`interior`）

安装实际座椅、玻璃、车门、空调及放行内装；选配另行具体定义；供货空调内含制冷剂不重复作充注投入。

#### 输入

##### 产品流

###### 成品客车乘客座椅总成 （`passenger_seat`）

一种放行座椅零件号及实际框架/包面/约束范围/质量，驾驶座另列。

- 选定流： 成品客车乘客座椅总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_interior。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_interior`

###### 成品夹层客车风窗 （`windscreen`）

一种成形成品放行夹层风窗，含供货夹层/加热，记录质量/尺寸；其他玻璃另列。

- 选定流： 成品夹层客车风窗
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_interior。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_interior`

###### 成品动力客车乘客门总成 （`passenger_door`）

一种放行车门零件号/执行机构范围，不同车门各自定量。

- 选定流： 成品动力客车乘客门总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_interior。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_interior`

###### 空调机 （`air_conditioner`）

仅实际另供成品电动客车空调机，记录型号/质量/内含制冷剂边界；加热器/风道另列，无通用HVAC组合。

- 选定流： 空调机 `a38dcbe4-4dd1-4ce8-a67b-5455ff82e9e0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_interior。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_interior`

###### 工厂充注用R134a制冷剂 （`r134a_charge`）

条件实际纯R134a工厂净供应，核对充注/回收/质量；外购机内含时省略；其他制冷剂另列。

- 选定流： 工厂充注用R134a制冷剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_interior。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_interior`

###### 交流电 （`interior_electricity`）

实际低于1kV车门/玻璃/座椅/内装需求。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_interior。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_interior`

### 过程：调试、验收与称量（`release`）

实际高压/电气、制动/淋雨/路试及最终放行方案；记录壁端充电、水补给、回收、缺陷/返工及声明交付SOC/液位；不假定标准路试距离/损失比例。

#### 输入

##### 产品流

###### 自来水 （`rain_test_water`）

仅实际外部淋雨测试/洗车补给，循环测试水不重复采购；废液/处理另列。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### 交流电 （`release_electricity`）

实际低于1kV壁端充电含损失、高压检查、淋雨/制动/出厂路试；避免重复把电池放电能量计为投入。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

#### 输出

##### 产品流

###### 完整单层纯电城市道路客车 （`finished_machine`）

1kg完整验收客车归一化份额，含安装电池/客舱及声明交付流体/SOC状态；乘客/驾驶员/载荷/发运包装排除M。

- 选定流： 完整单层纯电城市道路客车
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 基本流

###### HFC-134a （`hfc_air`）

条件实际工厂R134a充注/测试回收后室外未特指空气实测泄漏；无默认损失、寿命泄漏或高空假定。

- 选定流： HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

### 过程：发运防护（`packing`）

仅实际分项计量防护物料；独立备件排除整车M并披露另供边界。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`pe_film`）

条件实际PE发运防护及供应商配方/厚度/质量，不规定整车包裹，排除M。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

###### 瓦楞纸板 （`corrugated_board`）

条件实际依身份的C/E/F楞纤维≥80%含再生纸板，否则另列具体纸板；包装排除M。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_demand | shared_operations | 优先按场址/配置/工单及cp_allocation实测需求细分；共享切割/连接、槽/炉、总装/测试按实测因果负载/时间或可归属消耗分摊，核对总表/排除负载；无默认千克、座位数/人公里分配。 |  |
| allocation_variants | bus_variants | 包化学体系/容量、铰接、车身/涂层及供货底盘变型分开；后备质量/经济法须实测依据、敏感性/审查；验收废品/返工负担归合格产出。 |  |
| allocation_recovery | outputs | 内部复用钢/水/漆/充电能量转移不获避免生产抵扣；记录外排废料/实际处理，无自动回收/模块D抵扣；真正可销售共产品须明确质量/数量及审查处理。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | release | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每VIN/配置或可追溯同质批次 | 相同制造时期 | 相同场址及验收完整交付状态 | 每台验收净质量 | 整车秤校准；无载荷称量；绑定交付状态记录；签署放行 |
| cp_body | body | 各原子过程行 | measurement | 管/板牌号/图纸/尺寸；领用/退回；接头图/焊丝/气体规范；切割/连接时间/kWh；废料质量；捕集尘；控制后颗粒浓度/体积 | 各物料净领用/分流废料称量，追溯图纸/排样/连接，计量电及实际气体；按采样条件测室外出口颗粒，不用铭牌或默认焊接因子。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；放行供应商/物料；库存/台数闭合；缺失数据 |
| cp_coating | coating | 各原子过程行 | measurement | 供应商配方/SDS/浓度/固含；槽补给/废液/回收；涂层留存干质量；kWh/气体参考状态；污泥含水；处理方；二甲苯组分；化石碳留存/排放 | 各供液/涂料/湿废物分测，核对槽库存/留存膜；计实际固化载体；测控制后二甲苯组分/气量/时间，CO2用实际化石碳平衡或直接监测；不假定历史槽体积/固化温度/配方。 | kg; MJ; m3 | 每工单/批次/VIN；每月闭合 | 完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；放行供应商/物料；库存/台数闭合；缺失数据 |
| cp_chassis | chassis | 各原子过程行 | measurement | 供应方车桥/驱动/车轮/轮胎零件号；供货质量；内含电机/制动/悬架范围；扭矩/安装记录；kWh；废品 | 核对放行安装物料清单/单件质量及采购底盘/子总成边界，不以轨道/挂车代替，不把台数UUID当kg；计实际总装含返工。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；放行供应商/物料；库存/台数闭合；缺失数据 |
| cp_electrical | electrical | 各原子过程行 | measurement | 包供应商/化学体系/比例/型号/质量/容量/SOC；电芯/模块与完整包边界；BMS/冷却/线束范围；冷却液配方/留存充注/回收；kWh；检漏/高压结果 | 追溯各安装包/内含冷却/BMS清单及实际领退/预充边界；称流体供应/回收/留存；计安装/测试公用工程；场内包总装增列具体壳/连接件/热材料操作，不猜测电芯制造。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；放行供应商/物料；库存/台数闭合；缺失数据 |
| cp_interior | interior | 各原子过程行 | measurement | 各座椅/门/玻璃/空调零件号/质量；内含制冷剂/冷却液；净充注/回收；实际地板/饰板/风道/扶手/驾驶座物料清单；kWh | 各成品安装项称量或用可追溯供应商质量；区分玻璃面积/质量、未成座椅/放行座椅；核对另供制冷剂及内含充注，避免重复。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；放行供应商/物料；库存/台数闭合；缺失数据 |
| cp_release | release | 各原子过程行 | measurement | VIN/配置/测试方案/结果；壁端充电kWh及始末SOC；入厂预充；淋雨水补给/废液；充电/制冷剂回收/泄漏；制动/路试；留存流体；M | 保留实际验收及壁端计量充电/测试需求含充电损失/返工，不二次计电池放电投入；测新淋雨水及扣回收实际制冷剂损失；无载荷秤记录绑定具体交付SOC/流体/物料清单。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；放行供应商/物料；库存/台数闭合；缺失数据 |
| cp_packing | packing | 各原子过程行 | measurement | PE配方/厚度/质量；纸板楞型/纤维/再生含量/质量；领退；独立备件供货 | 各实际防护称量排除M，单独披露独立备件/包，其他实际包装为原子交换。 | kg | 每工单/批次/VIN；每月闭合 | 完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；放行供应商/物料；库存/台数闭合；缺失数据 |
| cp_allocation | manufacturing | shared_load | measurement | 总供给需求；分表负载/时间；服务变型；排除负载 | 测各交换特定因果需求/时间及服务工单，证明分摊驱动并将全部份额核对总表。 | MJ; m3; h | 每共享批次；每月核对 | 相同生产时期 | 全部服务场址/变型 | 分摊实测因果需求；可归属数量 / 验收设备数量 | 总表闭合；敏感性；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_tube; steel_sheet; welding_wire; argon; body_electricity; steel_scrap; weld_pm; wash_water; sodium_hydroxide; zinc_phosphate; epoxy_primer; pu_topcoat; pu_adhesive; coating_electricity; natural_gas; wash_effluent; phosphate_sludge; paint_waste; fossil_co2_air; xylene_air; front_axle; drive_axle; traction_motor; inverter; bus_tyre; steel_wheel; chassis_electricity; lfp_pack; nmc_pack; nca_pack; vehicle_harness; coolant; electrical_electricity; passenger_seat; windscreen; passenger_door; air_conditioner; r134a_charge; interior_electricity; rain_test_water; release_electricity; hfc_air; pe_film; corrugated_board | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item由同变型/时期净领用或可归属公用工程/废物/物种除验收台数得到，保留库存变化/废品返工处理。按实测M归一化，保持kg、MJ或燃气m3分子。实际按件供应量须实测具体零件每件质量并另录换算；不能复用件数/面积/能量参考UUID作质量身份。壁端充电、外购包预充能量/留存交付SOC为不同记录。相容变型仅分别归一化后以披露质量权重/不确定性汇总。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | flows | 核实实际供材/状态/化学体系/部件边界/参考属性单位；电池粉/电芯/包及客运服务/整车不同。 | 供应商规范；state100身份/属性/单位审计 |
| quality_complete | bus | 全部安装物料件/留存流体核对完整实测M；不按残差虚构未知零件质量；声明完整前补齐实际路线/供应方/废物/运输覆盖。 | 整车秤；VIN物料清单；清单/库存平衡 |
| quality_acceptance | release | 保留实际放行高压/电气/制动/检漏/门等相关测试参数/结果，不继承制造商批准或通用限值。 | 签署放行；校准仪器；实际具备的准入记录 |
| quality_period | records | 声明参与场址/匹配代表时期、自制外购/变型、一手覆盖/分摊不确定性/来源年龄；历史架构不是当前数值清单。 | 工单；供应商版本；总表闭合；不确定性 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1kg参考输出及cp_mass实测完整设备M；无载荷称量绑定具体VIN/物料及交付流体/SOC状态；不用总重/样本整备值/乘客距离/电池容量作分母。 |  |
| validation_basis | inventory | 各适用非参考行明确应用normalize_mass，连接协议及相同验收台数/时期/配置；单位/参考属性匹配一种原子交换。 |  |
| validation_supply | assemblies | 检查外购车身/底盘/包边界、桥内电机、空调内制冷剂及内部子总成/回收，避免重复投入；三种包体系为条件独立变型，不是要求三者的配方。 |  |
| validation_emissions | elementary | 要求实测或实测平衡控制后颗粒、二甲苯物种、即时化石CO2及工厂R134a泄漏及具体接收介质；捕集尘、送处理废水、生物CO2/总VOC不替代；无默认泄漏/尾气/寿命速率。 |  |
| validation_coverage | dataset | 区分实测/计算/估算/缺失/排除/不适用；报告未决身份/供应方/数量及遗漏路线；结构检查通过不批准科学方法或建立完整从摇篮到工厂门。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明场址/时期具体配置钢骨架单层电动城市客车制造模块，扩展上游建模仅独立评价供应方/运输/处理完整性后采用。 |
| excluded_use | 人公里/寿命客运比较、通用客车平均、运行/充电基础设施、其他结构/动力路线或无依据完整从摇篮到工厂门声明。 |
| required_metadata | PCR标识；VIN/型号/物料；车身/底盘/包供货边界；钢结构/铰接；客舱布局；化学体系/容量/包质量；驱动/空调/流体/SOC状态；实测M；场址/时期；实际测试/返工；公用工程/供应方/运输/废物；分配；包装/排除；来源版本。 |
| required_quality_disclosure | 一手实测覆盖；未决身份/供应方/数量；自制外购/遗漏路线；平衡/回收；来源年龄/限制；分配/单位修正；排放测量不确定性/审查状态。 |
| update_trigger | 车身/底盘结构、电池体系/容量/供货边界、驱动、内装/空调、交付状态/测试变化；供应方/场址/公用工程修订；新代表时期/缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| daimler-ecitaro-manufacture-2019 | handbook | Daimler Truck，2019年5月9日，曼海姆eCitaro制造；车身骨架、阴极浸涂、安装、总装、完工及测试具名章节。https://www.daimlertruck.com/en/newsroom/pressrelease/completely-integrated-into-the-production-process-the-manufacture-of-the-mercedes-benz-ecitaro-at-the-bus-plant-in-mannheim-43250877 | 仅历史钢车身工序分解、安装电池/冷却/验收架构；当前前景决定实际配方/拓扑/参数；不采用温度、槽体积、膜厚、包数、质量、路试距离、排放/周期时长。 |
| solaris-sustainability-2024 | handbook | Solaris2024可持续性报告，PDF/印刷第5页，Solaris场址，截至2024年12月31日。https://www.solarisbus.com/public/assets/content/firma/esg/2025/Sustainability_at_Solaris_2024.pdf | 独立制造商钢骨架/电部件/电池集成场址角色，不是数值清单、通用工厂路线、分配权重/方法批准。 |
