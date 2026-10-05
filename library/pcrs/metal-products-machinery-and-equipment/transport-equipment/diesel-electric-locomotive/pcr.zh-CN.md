---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-electric-locomotive
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 新干线交流牵引柴油电力机车制造

## 1. 范围与适用性

一种完整新纯柴油干线重载交流感应牵引柴油电力机车制造：实际底架车体制造、表面处理、供货铁路柴油主机/主发电机及整流直流环节逆变链安装、转向架轮对牵引电机制动装配、司机室冷却电气舾装、有界厂内静态验收测试及修正净质量放行。选择一种实际放行机车号轨距轴及动轴布置安装配置。本范围窄于CPC49512。

排除直流牵引机车、外电机车、电池混合牵引、气柴双燃料、柴油液压机械传动、调车机、动车组、独售件大修再制造；安装辅助起动电池纳入，不表示混合牵引。排除商业列车牵引吨公里运行燃料维护轨道机务段报废；实际制造支持转移验收运行须明确实测起终点负载时间覆盖；服务燃油砂库存非制造消耗净输出质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-electric-locomotive |
| classification_refs | CPC:3.0:49512; narrower |
| covered_products | 一种完整新纯柴油干线重载交流感应牵引柴油电力机车制造：实际底架车体制造、表面处理、供货铁路柴油主机/主发电机及整流直流环节逆变链安装、转向架轮对牵引电机制动装配、司机室冷却电气舾装、有界厂内静态验收测试及修正净质量放行。选择一种实际放行机车号轨距轴及动轴布置安装配置。本范围窄于CPC49512。 |
| excluded_products | 排除直流牵引机车、外电机车、电池混合牵引、气柴双燃料、柴油液压机械传动、调车机、动车组、独售件大修再制造；安装辅助起动电池纳入，不表示混合牵引。排除商业列车牵引吨公里运行燃料维护轨道机务段报废；实际制造支持转移验收运行须明确实测起终点负载时间覆盖；服务燃油砂库存非制造消耗净输出质量。 |
| representative_product | 一台验收新纯柴油干线机车，实际交流感应牵引链具体动轴轨距供货车体转向架发动机安装表，无通用功率重量。 |
| production_route | 底架与车体制造; 表面前处理与涂覆; 柴油电力牵引系统安装; 转向架轮对及制动装配; 冷却司机室及电气舾装; 工厂试验与净质量验收 |
| market_state | 完整配置验收机车，安装装备及声明技术油冷却液电解液一次含净M；燃料撒砂人员物料独立备件包装临时试具排除。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造验收一种完整具体配置新柴油电力交流牵引机车。 |
| How much | 1 kg验收净机车制造输出，从每验收完整台实际M kg获得。 |
| How well | 放行机车设计当前配置特定验收试验方案，披露实际轨距制动绝缘动力铁路资质依据，无牵引性能等效。 |
| How long or cycle | 一次制造集成验收周期，无假定寿命维护周期商业里程。 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 内燃电力传动机车 `ee6ef3e3-ee4c-4116-977a-8f715c974cf6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机车标识型号；放行设计修订轨距轴动轴布置；底架车体钢牌号厚度炉号证书焊接路线；自制外购预处理范围；供货铁路机型号件数独立实际干安装kg；发电机整流直流环节逆变器电机电压类型模块内含；转向架构架轮对齿轮制动悬挂配置独立实测质量；司机室安全冷却辅助电池电气安装表；实际涂料SDS；供货预充另加技术流体；净交付油柜砂技术流体状态；场址时期验收台；实际试负载时间燃料退耗；当前校准轨道称重方法完整轴轮记录及签署净修正M；不确定性质量平衡；供货运输公用处理覆盖 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | structure_power; finish_power; traction_power; running_power; outfit_power; acceptance_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际低于1kV电网用户计量电：1kWh =3.6MJ；保留能量，无燃料热值质量换算，其他电压供货独立。 |
| engine_count | diesel_engine | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 实际供货装配铁路机按Item(s)计q_item；独立实测接收安装机kg核完整机车质量；不将数量改Mass或按额定功率件数推kg；道路推进43123排除铁路，非道路43110铁路适用另核。 |

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| glass_area | cab_glass | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 据可追溯切割尺寸测实际供货平窗单面面积，不双面倍计；保留m2分子除M；独立称供货安装窗kg闭合整台质量，无理论玻璃密度换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际放行结构钢及供货机交流牵引转向架舾装件在声明场接收；炼轧机电电子件制造上游，除非明确场内实测制造，供货就绪状态声明。 |
| starting_condition_role | foreground_manufacturing_module |
| product_classification_scope | 一种完整新纯柴油干线重载交流感应牵引柴油电力机车制造：实际底架车体制造、表面处理、供货铁路柴油主机/主发电机及整流直流环节逆变链安装、转向架轮对牵引电机制动装配、司机室冷却电气舾装、有界厂内静态验收测试及修正净质量放行。选择一种实际放行机车号轨距轴及动轴布置安装配置。本范围窄于CPC49512。 |
| recursive_input_rule | 无外购完整机车作为车体发动机料递归；外购壳转向架动力司机室包替代内含物料作业，内部转移按具体交接供货范围一次计。 |
| upstream_dataset_requirement | 扩展评价须相容实际钢化学机转向架电气件制造公用外包涂覆入厂支持运输废物处理数据及供货版本覆盖；仅实测此前景非完整摇篮到门。 |
| disclosure | 机车标识型号；放行设计修订轨距轴动轴布置；底架车体钢牌号厚度炉号证书焊接路线；自制外购预处理范围；供货铁路机型号件数独立实际干安装kg；发电机整流直流环节逆变器电机电压类型模块内含；转向架构架轮对齿轮制动悬挂配置独立实测质量；司机室安全冷却辅助电池电气安装表；实际涂料SDS；供货预充另加技术流体；净交付油柜砂技术流体状态；场址时期验收台；实际试负载时间燃料退耗；当前校准轨道称重方法完整轴轮记录及签署净修正M；不确定性质量平衡；供货运输公用处理覆盖 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | manufacturing | 声明场实际制造模块安装集成测试返工纳入；次序外购自制按实际工单，移动固定装配非必需技术选择或数值分配规则。 | wabtec-moving-2024 |
| boundary_tests | acceptance | 仅有界制造验收试运行支持转移纳入，实际轨道起终点负载时间，试耗燃料留存交付分开；外部试线拖运服务须实测供货范围燃公用覆盖，不重复服务内含消耗，轨道非自动纳入设施。 |  |
| boundary_packages | traction; running | 具体机发电机动力转向架供货内含控制去重；外购完整动力转向架时省其内含构架轮对电机齿轮制动分供卡，改具体实测完整架；内部完架转移非第二输出参考。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| structure | 底架与车体制造 | required | 接收实际放行钢材，按图切成焊底架车体；供货已切材料外购车壳替代内含作业。 | foreground | 内部转移；验收完整机车参考 |
| finish | 表面前处理与涂覆 | conditional | 在执行处纳入实际前处理逐供货涂层；已处理供货替代内含场内作业，无必需磨料漆配方。 | foreground | 内部转移；验收完整机车参考 |
| traction | 柴油电力牵引系统安装 | required | 按具体放行设计安装实际主机发电机整流直流逆变电机齿轮接口；供货完整动力包替代内含分列部件。 | foreground | 内部转移；验收完整机车参考 |
| running | 转向架轮对及制动装配 | required | 装配分供构架轮对悬挂铁路制动件，车体转向架落成；外购完整动力转向架替代内含构架轮对电机齿轮制动物料，实际替代供货须自身完整产品卡。 | foreground | 内部转移；验收完整机车参考 |
| outfit | 冷却司机室及电气舾装 | required | 安装具体冷却司机室辅助起动电池布线控制安全件；外购司机室模块内部不重复。 | foreground | 内部转移；验收完整机车参考 |
| acceptance | 工厂试验与净质量验收 | required | 实际放行压力制动电气静态有界验收运行返工及当前称重净质量放行，无商业牵引清单假定试验负载。 | foreground | finished_machine |

### 过程：底架与车体制造（`structure`）

接收实际放行钢材，按图切成焊底架车体；供货已切材料外购车壳替代内含作业。

#### 输入

##### 产品流

###### 热轧低合金结构钢机车板 （`body_plate`）

各卡实际放行牌号厚度状态；底架车体称领退，供货已切状态明确。

- 选定流： 热轧低合金结构钢机车板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`

###### 热轧结构角钢 （`body_angle`）

一种实际角钢牌号截面，其他型材分列，无建筑结构代理。

- 选定流： 热轧结构角钢
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`

###### 实心碳钢埋弧焊丝 （`weld_wire`）

条件实际埋弧丝牌号径程序，净耗质量，其他焊接路线分列。

- 选定流： 实心碳钢埋弧焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`

###### 熔炼颗粒埋弧焊剂 （`weld_flux`）

条件一种实际焊剂配方补质量，回收内部。

- 选定流： 熔炼颗粒埋弧焊剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`

###### 交流电 （`structure_power`）

实际低于1kV电网用户切成焊吊通风能量含返工。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_scrap`）

出场干未处理分流钢边角，含油漆钢另表征，内部可用库存转移。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`

###### 固体埋弧焊熔渣 （`weld_slag`）

条件分流称焊剂熔渣，非丝头捕尘。

- 选定流： 固体埋弧焊熔渣
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`

##### 基本流

###### 颗粒物，粒径未特指 （`particle_air`）

条件有据控制后制造颗粒即时空气未特指子介质粒级；实测粒级替代通用行，捕尘废物独立。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`

### 过程：表面前处理与涂覆（`finish`）

在执行处纳入实际前处理逐供货涂层；已处理供货替代内含场内作业，无必需磨料漆配方。

#### 输入

##### 产品流

###### 铸钢喷丸 （`blast_shot`）

条件实际规范补量，内部回收钢丸非新供。

- 选定流： 铸钢喷丸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 配方工业环氧防腐底漆 （`epoxy_primer`）

条件一种实际混合供货底漆；基料固化剂分购分卡，配方SDS固含实测。

- 选定流： 配方工业环氧防腐底漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 配方工业聚氨酯面漆 （`topcoat`）

条件具体供货产品状态留干膜，非木器漆纯树脂。

- 选定流： 配方工业聚氨酯面漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 自来水 （`finish_water`）

条件实际市政产品水清洗，体积转换实际密度，无直接资源替代。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 交流电 （`finish_power`）

实际低于1kV喷丸涂抽固需求，直接燃烧固化另实际燃料物种。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

#### 输出

##### 废物流

###### 废钢喷丸 （`spent_shot`）

条件分称钢丸表征污染，漆滤污泥另列。

- 选定流： 废钢喷丸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 废涂料残渣 （`paint_residue`）

实际产生分流涂料过喷残渣，排除滤材水质污泥。

- 选定流： 废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

##### 基本流

###### 二甲苯（所有异构体） （`xylene_air`）

条件实测二甲苯CAS1330-20-7控制后即时空气未特指子介质，非总VOC。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

### 过程：柴油电力牵引系统安装（`traction`）

按具体放行设计安装实际主机发电机整流直流逆变电机齿轮接口；供货完整动力包替代内含分列部件。

#### 输入

##### 产品流

###### 柴油发动机 （`diesel_engine`）

一种实际供货装配铁路主机型号，保留物品数量；独立实测供货安装机kg核整台M，发电机预充内含明确；43110非道路铁路发动机适用性核实，43123道路发动机明确排除铁路。

- 选定流： 柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_traction。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_traction`

###### 成品机车主牵引发电机 （`main_alternator`）

具体供货交流发电机型号独立实测质量，非另一柴油机完整机组，安装内含明确。

- 选定流： 成品机车主牵引发电机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_traction。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_traction`

###### 成品机车牵引整流模块 （`rectifier`）

一种实际整流直流环节供货总成型号实测质量；非供货完整包则与逆变器分列，无电容重复。

- 选定流： 成品机车牵引整流模块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_traction。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_traction`

###### 成品IGBT机车牵引逆变器 （`traction_inverter`）

一种实际牵引额定模块型号质量，控制冷却按声明内含，无光伏BOS替代。

- 选定流： 成品IGBT机车牵引逆变器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_traction。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_traction`

###### 牵引电机 （`traction_motor`）

一种实际供货交流感应牵引电机设计型号实测kg，与转向架分供否则不重复；公开原件专家质量份额不用作清单。

- 选定流： 牵引电机 `c1704402-e49d-43aa-baef-c84209588243`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_traction。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_traction`

###### 成品机车牵引减速齿轮组 （`gear_set`）

实际轮对电机齿比材质实测供货质量内含，无内部齿轮重复。

- 选定流： 成品机车牵引减速齿轮组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_traction。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_traction`

###### 交流电 （`traction_power`）

实际低于1kV机电安装电集成检查公用，供货电机制备上游。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_traction。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_traction`

### 过程：转向架轮对及制动装配（`running`）

装配分供构架轮对悬挂铁路制动件，车体转向架落成；外购完整动力转向架替代内含构架轮对电机齿轮制动物料，实际替代供货须自身完整产品卡。

#### 输入

##### 产品流

###### 成品钢制机车转向架构架 （`bogie_frame`）

一种实际外购构架设计材质供货质量，排除轮电机悬挂；自制改钢连接交换无外购构架重复。

- 选定流： 成品钢制机车转向架构架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_running`

###### 成品钢制机车轮对 （`wheelset`）

一种实际配置车轴装轮轮廓轨距实测质量，轴箱齿轮仅明确供货内含时纳入。

- 选定流： 成品钢制机车轮对
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_running`

###### 成品机车轴箱轴承总成 （`axlebox`）

具体实际轴承箱密封供货范围质量，非通用制动总成。

- 选定流： 成品机车轴箱轴承总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_running`

###### 成品钢制机车悬挂螺旋弹簧 （`spring`）

一种放行弹簧规范称供量，其他悬挂件分列。

- 选定流： 成品钢制机车悬挂螺旋弹簧
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_running`

###### 空气泵或真空泵，空气或其他气体压缩机 （`air_compressor`）

一种完整实际机车制动气压缩机型号实测质量，电机驱动内含明确，上游类别不推铁路资质。

- 选定流： 空气泵或真空泵，空气或其他气体压缩机 `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_running`

###### 成品机车气动制动控制阀 （`brake_valve`）

一种具体铁路阀型号额定供货质量，制动缸管盘为不同交换，非部件集合。

- 选定流： 成品机车气动制动控制阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_running`

###### 成品机车气动制动缸 （`brake_cylinder`）

一种实际供货缸型号范围称质量，供货完整转向架制动内含则排重复。

- 选定流： 成品机车气动制动缸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_running`

###### 交流电 （`running_power`）

实际低于1kV转向架轮对制动装配车体落成电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_running`

### 过程：冷却司机室及电气舾装（`outfit`）

安装具体冷却司机室辅助起动电池布线控制安全件；外购司机室模块内部不重复。

#### 输入

##### 产品流

###### 成品机车柴油机冷却散热器 （`radiator`）

实际回路型号材质实测供货，风泵仅声明内含，非室暖散热器。

- 选定流： 成品机车柴油机冷却散热器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 成品绝缘铜机车动力电缆 （`copper_cable`）

实际电压导体绝缘供货kg，铁路资质实际，无能量转质量假定。

- 选定流： 成品绝缘铜机车动力电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 （`switchboard`）

一种实际完整辅助控制配电盘额定至多1000V，具体供货配置质量，高压牵引柜独立。

- 选定流： 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 成品铅酸机车起动蓄电池 （`starter_battery`）

实际化学容量型号供货kg电解液内含，辅助起动非混合牵引储能。

- 选定流： 成品铅酸机车起动蓄电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 夹层玻璃 （`cab_glass`）

实际供货平面夹层司机窗结构厚度中间层及按供货切割尺寸实测单面m2，保留公开面积；独立称供货安装窗kg核整车M，无目录密度厚度猜质量；实际铁路资质另核。

- 选定流： 夹层玻璃 `78005a08-9828-4750-8aec-1526a2abd288`
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 岩棉 （`insulation`）

条件实际司机室声热保温等级密度粘结覆面kg，内含省略，覆面分购分列。

- 选定流： 岩棉 `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 交流电 （`outfit_power`）

实际低于1kV司机室冷却电缆控制安装需求含返工。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

### 过程：工厂试验与净质量验收（`acceptance`）

实际放行压力制动电气静态有界验收运行返工及当前称重净质量放行，无商业牵引清单假定试验负载。

#### 输入

##### 产品流

###### 柴油 （`test_diesel`）

有界厂内静态验收运行消耗实际化石燃料，实测领减退留，供货牌号硫碳独立有据，无服务燃油库存当试验消耗。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 配方矿物柴油机润滑油 （`engine_oil`）

一种实际等级配方供货预充之外另加kg，核对留耗移。

- 选定流： 配方矿物柴油机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 配方乙二醇机车冷却液 （`coolant`）

实际实测配方浓度状态，非纯乙二醇；预充与场内追加明确，留存回路流体质量核对。

- 选定流： 配方乙二醇机车冷却液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 自来水 （`test_water`）

实际市政冲洗测试产品水，新补内部回用分开，体积密度实测，冷却液内含水不重计。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 干燥分级硅质机车撒砂 （`test_sand`）

条件实际实测验收粘着试验耗砂，粒度含水供货干燥记录；交付砂箱库存排除M及试耗。

- 选定流： 干燥分级硅质机车撒砂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 交流电 （`acceptance_power`）

实际低于1kV岸检查试验台称量需求，内生柴油电试验能量为内部转移，非另购电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

#### 输出

##### 产品流

###### 内燃电力传动机车 （`finished_machine`）

1kg实际验收配置完整新柴油干线重载交流牵引机车份额，实测修正净M，供货机交流链转向架车体安装表完整。

- 选定流： 内燃电力传动机车 `ee6ef3e3-ee4c-4116-977a-8f715c974cf6`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

###### 废润滑油 （`used_oil`）

实际分流废矿物试机油，非冷却水混合留存注入。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 送处理的机车回路冲洗废水 （`test_wastewater`）

条件实际表征水质冲洗流，乙二醇油浓度路线记录，浓缩废冷却液独立。

- 选定流： 送处理的机车回路冲洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

##### 基本流

###### 二氧化碳（化石源） （`fossil_co2_air`）

条件实际试验化石CO2 CAS124-38-9即时空气未特指子介质实测排放，无商业牵引因子。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 一氧化氮 （`nitric_oxide_air`）

条件分测实际NO CAS10102-43-9即时空气未特指子介质，NO2/N2O总NOx不可互换。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_causal | shared_operations | 先按验收机车配置阶段细分工单；共享切焊涂吊混型装配试验台按cp_allocation各交换实际计量因果需求负载时间分配，全部服务作业核对总供给；无通用安装质量额定功率线速台数份额。 | wabtec-moving-2024 |
| allocation_rework | configurations | 实际废件返工负担归属验收建造；各配置保留独立实测M匹配分子，按披露实测验收质量汇总前各归一；剩余物理经济后备须实际驱动成本市场记录敏感性审查，无杜撰百分比。 |  |
| allocation_recovery | outputs | 内部回收钢磨料焊剂水为转移，非自动共产品避免生产；出场废物保留状态处理责任；可售共产品须实际质量市场审查分配，无未来机车回收抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 每验收机车 | 当前完成验收周期 | 相同完整安装交付配置 | 每台验收净质量 | quality_weighing实际校准轨道轴轮称记录舱液净修正安装表质量平衡不确定性 |
| cp_structure | structure | 各原子过程行 | measurement | 钢牌号炉号厚度库存领退切成焊工单丝剂实际能量边角熔渣颗粒治理 | 测各实际物理供货领减退库存变动独立表征外排流及归属计量工单需求；追件模块内含返工匹配验收台，仅有据时采控制后物种气流时间。 | kg; MJ | 每机车工单报告库存表闭合 | 完整声明制造含返工 | 全部纳入制造装配试验场外包作业 | 可归属交换数量 / 验收设备数量 | 校准供货安装表件标实际库存工单测试验收记录不确定性 |
| cp_finish | finish | 各原子过程行 | measurement | 表面配方SDS固含底面漆供货磨料补回留膜残渣水能量控制后二甲苯流浓度时间 | 测各实际物理供货领减退库存变动独立表征外排流及归属计量工单需求；追件模块内含返工匹配验收台，仅有据时采控制后物种气流时间。 | kg; MJ | 每机车工单报告库存表闭合 | 完整声明制造含返工 | 全部纳入制造装配试验场外包作业 | 可归属交换数量 / 验收设备数量 | 校准供货安装表件标实际库存工单测试验收记录不确定性 |
| cp_traction | traction | 各原子过程行 | measurement | 发动机型号件数独立实测供货kg交流链电压型号质量供货包预充范围对中布线测试实际公用 | 测各实际物理供货领减退库存变动独立表征外排流及归属计量工单需求；追件模块内含返工匹配验收台，仅有据时采控制后物种气流时间。 | kg; MJ; Item(s) | 每机车工单报告库存表闭合 | 完整声明制造含返工 | 全部纳入制造装配试验场外包作业 | 可归属交换数量 / 验收设备数量 | 校准供货安装表件标实际库存工单测试验收记录不确定性 |
| cp_running | running | 各原子过程行 | measurement | 转向架构架轮对轴箱齿轮簧制动件标识供货安装质量完整模块内含轨距轴轮记录装配公用 | 测各实际物理供货领减退库存变动独立表征外排流及归属计量工单需求；追件模块内含返工匹配验收台，仅有据时采控制后物种气流时间。 | kg; MJ | 每机车工单报告库存表闭合 | 完整声明制造含返工 | 全部纳入制造装配试验场外包作业 | 可归属交换数量 / 验收设备数量 | 校准供货安装表件标实际库存工单测试验收记录不确定性 |
| cp_outfit | outfit | 各原子过程行 | measurement | 司机室冷却电池缆盘窗保温安装表供货质量电压配方内含流体实际安装需求 | 测各实际物理供货领减退库存变动独立表征外排流及归属计量工单需求；追件模块内含返工匹配验收台，仅有据时采控制后物种气流时间。 | kg; MJ; m2 | 每机车工单报告库存表闭合 | 完整声明制造含返工 | 全部纳入制造装配试验场外包作业 | 可归属交换数量 / 验收设备数量 | 校准供货安装表件标实际库存工单测试验收记录不确定性 |
| cp_acceptance | acceptance | 各原子过程行 | measurement | 机车配置当前放行方案试验负载时间轨道燃料领退留油冷却液柜状态实际气物种流废物轴轮称重校准整台M签署修正 | 测各实际物理供货领减退库存变动独立表征外排流及归属计量工单需求；追件模块内含返工匹配验收台，仅有据时采控制后物种气流时间。 | kg; MJ | 每机车工单报告库存表闭合 | 完整声明制造含返工 | 全部纳入制造装配试验场外包作业 | 可归属交换数量 / 验收设备数量 | 校准供货安装表件标实际库存工单测试验收记录不确定性 |
| cp_allocation | manufacturing | shared_load | measurement | 总供给实际表负载时间全部服务配置排除作业 | 实测各交换全部服务作业因果需求，记驱动核对份额总供給，留不确定性敏感性。 | MJ; h | 每共享批次报告时期 | 相同建造时期 | 全部服务场配置 | 分摊实测因果需求；可归属数量 / 验收设备数量 | 总表工单闭合驱动依据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | body_plate; body_angle; weld_wire; weld_flux; structure_power; steel_scrap; weld_slag; particle_air; blast_shot; epoxy_primer; topcoat; finish_water; finish_power; spent_shot; paint_residue; xylene_air; diesel_engine; main_alternator; rectifier; traction_inverter; traction_motor; gear_set; traction_power; bogie_frame; wheelset; axlebox; spring; air_compressor; brake_valve; brake_cylinder; running_power; radiator; copper_cable; switchboard; starter_battery; cab_glass; insulation; outfit_power; test_diesel; engine_oil; coolant; test_water; test_sand; acceptance_power; used_oil; test_wastewater; fossil_co2_air; nitric_oxide_air | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为领退库存返工核对后实测归属同配置交换除匹配验收台；保留kg MJ供货窗m2或实际机Item(s)分子，独立实测机kg闭合安装质量，不把件数加kg；体积密度件数质量供货配方浓度换算须实际同产品状态依据不确定性；无额定功率转质量假定目录重。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | cp_mass要求当前实际验收完整机车用适用校准轨道秤或可追溯轮轴载荷测量系统称量；保留原始号配置日期仪器校准皮重全部轮轴标识读数复测及实际静动态方法条件；签署结果每轴一次，支持总质量无轮轴求和重复，并修正有记录实际燃料撒砂试具其他排除库存。独立核供货安装发动机车体转向架牵引件舾装留存技术流体与完整安装表实际实测修正不确定性；缺实际称或修正交付状态依据阻断使用；目录运行粘着重轴限乘轴数额定功率满油重猜残差不能代M。 | calibration and original locomotive-specific axle/wheel weighing; independent installed BOM |
| quality_delivery | finished_machine | 参考输出含完整声明安装车体转向架牵引司机室冷却制动安全辅助起动电池及留存技术油冷却液电解液一次；排除服务燃料砂库存人员货物包装独立备件临时试验台负载箱及放行产品之外运输附件；识别安装配置永久设计压载仅实际实测质量；记录干湿件及逐实测柜净修正，无假定空满柜。 | released fit-list; supplier containment; measured tank/correction and acceptance state |
| quality_engine | diesel_engine | 保留实际供货机件数公开物品数量及独立实测接收干安装kg型号机号；铁路主机43110不同于排除铁道电车的道路推进43123；供货内含发电机起动冷却流体须核独供件整M，无包内第二机电重复；分类来源只支持区分，非机重铁路性能批准。 | un-engine-scope; supplier model/serial and independent engine weighing |
| quality_identity | flows | 要求实际牌号化学配方路线状态电压供货配置，保留公开属性；牵引电机公开专家质量份额案例非本机清单；缆电池能量属性不能改kg，须同产品换算依据否则保留身份缺口；矿物油非PAO配方冷却非纯乙二醇干撒砂非未合格硅砂；颗粒二甲苯化石CO2/NO须物种CAS来源即时空气介质依据，无总NOx代NO总VOC代二甲苯。 | supplier certificates/SDS; outlet samples and physical identity records |
| quality_tests | acceptance | 留实际当前放行厂方案结果焊尺寸电绝缘控制主机牵引链制动漏气冷却及适用静态负载验收运行试验，具体负载时间起终点返工；当前法定运营批准仅实际建立时；Progress案例排放等级维护间隔功率油容运行重非通用验收阈寿命规则；分试耗留存交付燃料技术注入，无假定排放因子。 | released configuration-specific test records; progress-sd70ace |
| quality_coverage | dataset | 各实际安装表路线交换须实测计算估算缺失排除不适用披露；实际追加车钩缓冲气罐管软管排气消声实际安装后处理电阻栅风机控制安全司机件连接化学独立废冷却包装外包支持处理各加具体卡，无混合集合行；完整数据摇篮到门声明前须前景记录相容上游模块。 | complete fit-list/work orders; coverage and stock/meter closure; uncertainty |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1kg验收完整配置输出同台cp_mass实际称净修正及独立安装质量平衡；有限声明q_item/M检查非物理称科学批准。 |  |
| validation_basis | inventory | 匹配配置验收数报告周期分子单位连接采集与normalize_mass；机Item(s)须保留独立实际kg依据，无件属性改写。 |  |
| validation_packages | manufacturing | 核机发电机动力架司机室供货范围预充与独立安装物料；拒重复缺供接口；使用前核交流感应与直流混合双燃料排除服务路线差异。 | progress-sd70ace |
| validation_release | elementary | 核实际治理后物种CAS化石来源介质子介质时间测试边界；NO非NO2/N2O总NOx，捕尘非空气排放废水非淡水资源；测实际追加排放则扩，不把条件排放全必需。 |  |
| validation_completeness | dataset | 保持未决身份缺物理记录明确；使用前完整实际称修正路线验收记录安装表供货公用运输处理覆盖；结构通过不授方法批准完整摇篮到门覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 一种完整新纯柴油干线重载交流感应牵引柴油电力机车制造：实际底架车体制造、表面处理、供货铁路柴油主机/主发电机及整流直流环节逆变链安装、转向架轮对牵引电机制动装配、司机室冷却电气舾装、有界厂内静态验收测试及修正净质量放行。选择一种实际放行机车号轨距轴及动轴布置安装配置。本范围窄于CPC49512。 |
| excluded_use | 排除直流牵引机车、外电机车、电池混合牵引、气柴双燃料、柴油液压机械传动、调车机、动车组、独售件大修再制造；安装辅助起动电池纳入，不表示混合牵引。排除商业列车牵引吨公里运行燃料维护轨道机务段报废；实际制造支持转移验收运行须明确实测起终点负载时间覆盖；服务燃油砂库存非制造消耗净输出质量。 |
| required_metadata | 机车标识型号；放行设计修订轨距轴动轴布置；底架车体钢牌号厚度炉号证书焊接路线；自制外购预处理范围；供货铁路机型号件数独立实际干安装kg；发电机整流直流环节逆变器电机电压类型模块内含；转向架构架轮对齿轮制动悬挂配置独立实测质量；司机室安全冷却辅助电池电气安装表；实际涂料SDS；供货预充另加技术流体；净交付油柜砂技术流体状态；场址时期验收台；实际试负载时间燃料退耗；当前校准轨道称重方法完整轴轮记录及签署净修正M；不确定性质量平衡；供货运输公用处理覆盖 |
| required_quality_disclosure | 实际配置轨距轴包边界；校准整台称重原件条件修正净M不确定性；供货机件数独立质量技术注入；完整安装物料；场址时期验收数返工；有界试验库存公用闭合分配依据敏感性上游缺口未决身份科学审查状态。 |
| update_trigger | 机车驱动发动机交流链轨距轴架司机配置，钢涂连接供货自制外购范围，厂试称路线时期，交付流体状态物理依据身份变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| progress-sd70ace | handbook | Progress Rail SD70ACe Freight Locomotive，文档16-0096.4，无日期官方留存册，PDF1—2页，产品架构Features and Benefits。https://s7d2.scene7.com/is/content/Caterpillar/CM20170915-63120-28925 | 案例柴油主机控制交流牵引及可选变型，不采用数值重量轴数功率油容运行因子排放批准维护寿命，须当前放行配置试验。 |
| wabtec-moving-2024 | handbook | Wabtec On the Move，2024年12月4日，官方HTML，Contagem混型装配段，无分页。https://www.wabteccorp.com/trains-of-thought/on-the-move | 独立制造商配置特定共享装配架构，须实际工单需求分配；无移动线必需线速因子场址要求固定负担份额。 |
| un-engine-scope | official_guidance | UNSD ISIC第4版2811发动机轮机制造（航空车辆自行车发动机除外），解释含船用铁路发动机及详细结构CPC43110链接；无分页官方分类HTML。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/en/27/2811 | 历史分类区分配合公开原件范围支持铁路道路推进机适用性分别核实；不推制造清单机重当前铁路批准数值换算。 |
