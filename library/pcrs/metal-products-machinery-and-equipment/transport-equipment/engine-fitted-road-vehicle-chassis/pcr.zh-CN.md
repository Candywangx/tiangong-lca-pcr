---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.engine-fitted-road-vehicle-chassis
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 柴油带发动机无车身梯形车架公路客车底盘制造

## 1. 范围与适用性

覆盖采用独立常规钢梯形车架的新柴油带发动机、无驾驶室无车身公路客车滚动底盘制造，在制作车身前作为完整底盘总成验收。本较窄CPC49121边界处理发动机位置、传动行走机构供货完整性、螺栓连接车架集成及实测净底盘交付。排除完整客车卡车、驾驶室车身、承载式乘用车平台、一体车身结构、电池电动混合动力燃气或火花点火推进、非公路机器、挂车、散装车架发动机、不完整套件及翻新。现有实质机动车车身PCR明确排除带发动机底盘；其车身制造规则不能替代本滚动底盘集成方法。前后发动机位置、变速箱悬架及制动设计须按一种配置声明，不能默认平均。奔驰2022年2月及沃尔沃页脚2019-11-26为历史型号专属结构交付实例，不是当前法规证明或工厂配方。下游制车身、公路运输服务、乘客载荷、使用燃油、维护寿命及报废在范围外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.engine-fitted-road-vehicle-chassis |
| classification_refs | CPC 3.0 49121; 较窄候选；不声明已接受映射 |
| covered_products | 新完整柴油无车身钢梯形车架公路客车底盘总成 |
| excluded_products | 完整车辆车身；承载式一体车身平台；其他推进非公路挂车路线；散件套件；使用服务 |
| representative_product | 一种验收螺栓连接梯形车架底盘，含柴油发动机声明变速箱车桥空气悬架气动鼓式制动车轮液压转向及实际供货电系统液体 |
| production_route | 收货自制外购控制；条件坯料制造精整；车架收货装配；动力传动行走电系统集成；实际填充检查验收；发运保护 |
| market_state | 声明工厂边界验收净完整底盘、待制车身；不声明道路适驶性 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种声明完整柴油带发动机无车身客车底盘配置 |
| How much | 1 kg 验收净完整机器；一台验收完整机器由物理实测 M kg 表示 |
| How well | 满足实际制造商图样清单检查计划，包括车架接头对中、发动机变速箱桥安装、转向制动连接、电检查及实际泄漏功能试验。保留实际准则结果；不设通用螺栓扭矩压力公差试验时数 |
| How long or cycle | 一次底盘制造交付；不采用客公里公路里程寿命循环单位 |
| reference_flow_link | `finished_chassis` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 机动车辆使用的发动机的底盘 `78532304-4355-400e-8bab-e2f6858050db` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号序列图样清单修订；梯形车架材料接头；无车身无驾驶室完整性；实际发动机位置柴油规格；变速箱传动桥；悬架制动车轮转向设计；电尾气冷却范围外购已含内容；液配方实际填充余留燃油；验收几何及运输配置区分；实测正值M及秤皮重验收；临时座椅控制工装散装备件包装排除；场址期间件数边界实际检查结果 |

在数据集元数据或等效过程流注释声明全部限定。本PCR的一台完整机器指一套完整验收带发动机底盘总成，虽然制作车身前道路车辆仍不完整。运输套件、空车架或目录总重额定值不是本参考。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `delivery_configuration` | complete chassis | 质量 | kg | 纳入实际制造商验收安装底盘系统及余留工作液燃油；永久供货随车固定存放车轮仅在声明验收底盘配置时纳入。排除车身驾驶室人员试载临时运输驾驶座控制工装散装工具备件包装。记录实际交付范围。目录行驶状态重量可能含满燃油备胎工具，不能提供本M。运输缩短拆卸底盘须保留验收完整配置称重及可追溯分件；不能替代为运输重量或杜撰零件质量。 |
| `electrical_energy` | electricity_fabrication; electricity_finishing; electricity_frame; electricity_integration; electricity_acceptance | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留表计kWh并按1 kWh =3.6 MJ换算。发动机额定功率设备安装额定值不能确定工厂电力。 |
| `component_count` | bus_tyre | 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 保留公开件数及各单一轮胎设计实际安装数。实际批次实测kg/件乘安装数仅核对物理清单质量，不改变交换属性。不默认轮数目录轮胎重量。 |
| `hydraulic_volume` | hydraulic_oil | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留表计净配方液体体积；按1 L =0.001 m3换算。仅为核对M内物理余留质量，使用记录温度实测密度及m = rho乘V。不设默认密度额定储液填充。 |
| `water_resource_volume` | groundwater | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 以含水层场址国家依据计量符合限定可再生淡水地下水；不是自来水废水。 |
| `material_mass` | other inputs/wastes/emissions | 质量 | kg | 称量各指定组件配方废物或测量各排放物种。体积换质量须实际密度温压依据。NO、NO2和N2O不能互换；采购混合液内组分质量不是另一收货。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定采购梁车架柴油推进发动机滚动底盘组件及实际本地坯料耗材收至底盘工厂 |
| starting_condition_role | 前景收货边界；上游制造来料运输单独链接 |
| product_classification_scope | CPC49121无驾驶室无车身柴油钢梯形车架客车底盘子集 |
| recursive_input_rule | 采购完整车架发动机桥替代已含件及供货本地工序。本地在制品转移不产生外部收货 |
| upstream_dataset_requirement | 匹配车架精整几何、公路推进发动机用途、桥地区制动范围、组件状态属性、油燃油配方、电力来源及实际废物接收方 |
| disclosure | 仅配置底盘前景制造；披露本地外购外包工序及缺失上游运输接收链接。不声明完整摇篮到工厂门 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_frame` | fabrication; finishing; frame | 车架收货或实际螺栓装配必需，非强制本地原钢制造。本地切割成形钻孔精整仅按执行纳入；采购成形已涂梁或完整车架排除其本地坯料上游工序。奔驰第2页支持一种螺栓梯形车架实例，不强制焊接LNE500紧固件规格粉末涂层。覆盖声明前须展开实际螺母垫圈支架湿漆溶剂加工液喷砂热烘炉燃料外包等独立原子卡片。 | mercedes-of1721-chassis-2022 |
| `boundary_integration` | integration | 必需收货清单核验及实际发动机变速箱传动、桥悬架车轮、转向制动回路和供货冷却尾气电系统安装连接填充调整。每总成一种供货边界防止重复压缩机启动发电机、制动油线束。代表鼓式空气弹簧路线非通用；实际盘式制动钢板弹簧、不同箱轮辋或发动机位置须展开限定自身卡片。本范围不安装车身驾驶室。 | mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019 |
| `boundary_acceptance` | acceptance | 底盘验收必需。实物泄漏制动转向传动电试验及发动机运行仅按实际制造商作业记录纳入，含真实准则结果时数载荷加注退回及监测排放。不假设路试里程法规排放限值轮数燃耗率。回用支撑架临时驾驶控制及试载为工厂工装；实际应归属更换服务负担须独立依据。下游车身制造商轴距延伸及客户使用在范围外。 |  |
| `boundary_emissions` | finishing; acceptance | 仅记录治理后各物质实际直接排放。分开地下水资源供货水收集废水、排放颗粒捕集粉尘、试验消耗余留燃油及化石生物碳。实际其他空气子介质实测粒径分级或水土物种须相符卡片。缺失卡片不证明零排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 本地纵横梁制造 | conditional | 仅实际坯料切割成形钻孔 | 前景阶段；内部在制品 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `finishing` | 本地钢表面精整 | conditional | 仅实际本地预处理及声明粉末涂层路线 | 前景阶段；内部在制品 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `frame` | 车架收货或螺栓连接装配 | required | 收货完整车架或装配实际纵横梁 | 前景阶段；内部在制品 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `integration` | 动力传动及滚动底盘集成 | required | 集成声明完整带发动机无车身底盘 | 前景阶段；内部在制品 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `acceptance` | 工厂检查及底盘验收 | required | 实际制造商检查；发动机制动传动实物试验仅按执行 | 前景阶段；内部在制品 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packout` | 发运保护 | conditional | 仅实际供货保护 | 前景阶段；内部在制品 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

### 过程： 本地纵横梁制造 (`fabrication`)

#### 输入

##### 产品流

###### 经证实热轧高强度低合金钢板 (`hsla_plate`)

仅用于本地纵横梁制造实际证书声明的单一牌号、厚度和交付状态。称量净领用与退回。奔驰LNE500是历史型号实例，不是通用牌号。采购成品梁或车架替代本坯料及本地工序。

- 选定流： 经证实热轧高强度低合金钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 低压电网电力 (`electricity_fabrication`)

计量应归属阶段电力，包括实际返工待机。公开身份为用户端低于1kV电网平均交流电；不同电压或自发电须相符独立卡片。采购工序不能重复计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 未处理洁净高强度低合金钢边角料 (`steel_offcut`)

仅用于一种经证实合金声明洁净状态的实际分类外运。称量送接收方质量并记录油水污染。内部回用不是外运废物；含油切屑须另一卡片。不自动抵扣避免钢生产。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 洁净高强度低合金钢钻削切屑 (`steel_chip`)

仅用于一种经证实合金声明洁净状态的实际分类外运。称量送接收方质量并记录油水污染。内部回用不是外运废物；含油切屑须另一卡片。不自动抵扣避免钢生产。

- 选定流： 钢废料，机加工切屑 `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 本地钢表面精整 (`finishing`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_finishing`)

计量应归属阶段电力，包括实际返工待机。公开身份为用户端低于1kV电网平均交流电；不同电压或自发电须相符独立卡片。采购工序不能重复计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 一种聚酯粉末涂料配方 (`polyester_powder`)

仅在实际本地精整使用本单一供货证实聚酯粉末时纳入。称量净新领用、退回回收及固化涂层；采购已涂梁车架排除本地涂层。公开Mass粉末身份限定为本配方；不是涂覆服务。其他实际精整须各自配方卡片。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 树脂结合氧化铝磨料砂盘 (`abrasive_disc`)

用于本地梁边去毛刺或精整的一种实际砂盘设计。称量应归属更换及库存平衡，保留磨粒结合剂尺寸；不假设每底盘消耗完整砂盘。

- 选定流： 树脂结合氧化铝磨料砂盘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 外供饮用水等级清洗水 (`water_finishing`)

仅用于水基清洗实际饮用水等级自来水补加。称量或按实测温度密度计量。内部循环及采购混合液已含水不是新增收货。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

##### 基本流

###### 取用的可再生淡水地下水 (`groundwater`)

仅用于含水层场址国家核验为可再生淡水的实际工厂井取水。计量m3并展开泵送处理。同一水不能又当采购自来水。

- 选定流： 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_water_resource。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_water_resource`
- 来源：

#### 输出

##### 废物流

###### 废树脂结合氧化铝磨料砂盘 (`spent_disc`)

仅用于本单一指定废物实际独立收集外运。按声明基准称量干湿质量，记录油水固体组成及接收处理。回收粉水是内部回用；不推定直接排水。

- 选定流： 废抛光介质 `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 捕集干燥高强度低合金钢去毛刺粉尘 (`captured_dust`)

仅用于本单一指定废物实际独立收集外运。按声明基准称量干湿质量，记录油水固体组成及接收处理。回收粉水是内部回用；不推定直接排水。

- 选定流： 捕集干燥高强度低合金钢去毛刺粉尘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 收集废聚酯粉末过喷 (`powder_waste`)

仅用于本单一指定废物实际独立收集外运。按声明基准称量干湿质量，记录油水固体组成及接收处理。回收粉水是内部回用；不推定直接排水。

- 选定流： 收集废聚酯粉末过喷
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 收集废钢清洗水基溶液 (`cleaning_water`)

仅用于本单一指定废物实际独立收集外运。按声明基准称量干湿质量，记录油水固体组成及接收处理。回收粉水是内部回用；不推定直接排水。

- 选定流： 收集废钢清洗水基溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 空气颗粒，粒径未特指 (`air_dust`)

仅用于本地钢精整实测治理后颗粒排放，粒径未特指且即时空气子介质未特指。按相同条件配对浓度排气体积。捕集粉尘为独立废物；实测特定粒径或子介质须不同身份。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

### 过程： 车架收货或螺栓连接装配 (`frame`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_frame`)

计量应归属阶段电力，包括实际返工待机。公开身份为用户端低于1kV电网平均交流电；不同电压或自发电须相符独立卡片。采购工序不能重复计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 成品螺栓连接钢制客车梯形车架总成 (`frame_assembly`)

一种实际采购设计，在收货安装时测量。采购完整车架排除其独购纵横梁及本地制造装配；本地螺栓连接车架使用实际纵横梁紧固件及工装电力。记录涂层钻孔连接及供货完整性；其他尺寸设计须独立卡片。

- 选定流： 成品螺栓连接钢制客车梯形车架总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022

###### 成品成形钢制客车车架纵梁 (`rail`)

一种实际采购设计，在收货安装时测量。采购完整车架排除其独购纵横梁及本地制造装配；本地螺栓连接车架使用实际纵横梁紧固件及工装电力。记录涂层钻孔连接及供货完整性；其他尺寸设计须独立卡片。

- 选定流： 成品成形钢制客车车架纵梁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022

###### 成品钢制客车车架横梁 (`crossmember`)

一种实际采购设计，在收货安装时测量。采购完整车架排除其独购纵横梁及本地制造装配；本地螺栓连接车架使用实际纵横梁紧固件及工装电力。记录涂层钻孔连接及供货完整性；其他尺寸设计须独立卡片。

- 选定流： 成品钢制客车车架横梁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022

###### 成品六角头钢制车架螺栓 (`frame_bolt`)

用于螺栓连接车架接头的一种实际独供螺栓设计牌号涂层尺寸。称量安装质量及净领用；排除采购完整车架已含件。螺母垫圈是不同物理交换。不从制造商手册推定通用紧固件等级数量扭矩。

- 选定流： 钢紧固件 `cad280ce-7850-46a1-9060-4f8b68bf5532`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022

###### 成品钢制六角车架螺母 (`frame_nut`)

一种实际独供且匹配记录车架接头的螺母设计。称量安装净质量；与垫圈螺栓及外购车架已含件分开。不预设件数质量。

- 选定流： 钢紧固件 `cad280ce-7850-46a1-9060-4f8b68bf5532`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

#### 输出

### 过程： 动力传动及滚动底盘集成 (`integration`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_integration`)

计量应归属阶段电力，包括实际返工待机。公开身份为用户端低于1kV电网平均交流电；不同电压或自发电须相符独立卡片。采购工序不能重复计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 成品公路客车推进柴油发动机 (`road_engine`)

一种实际独供公路车辆推进压燃活塞发动机，匹配CPC43123公开Mass身份。称量交付净发动机并记录已含喷油、启动发电机压缩机及液体。不能使用CPC43110非机动车发动机，也不假设本地铸造加工采购发动机内部件。

- 选定流： 车辆用压燃式活塞内燃机，铁道或电车轨道车辆除外 `2bc283a7-36f3-40f7-9e15-54851b888d33`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 成品自动公路客车变速箱总成 (`gearbox`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品自动公路客车变速箱总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 成品钢制公路客车传动轴总成 (`propshaft`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品钢制公路客车传动轴总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品橡胶客车悬架空气弹簧气囊 (`air_bellows`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品橡胶客车悬架空气弹簧气囊
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 成品液压客车悬架减振器 (`damper`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品液压客车悬架减振器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 成品钢制公路客车车轮轮辋 (`wheel_rim`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品钢制公路客车车轮轮辋
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 成品液压公路客车转向器 (`steering_gear`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品液压公路客车转向器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 成品铸铁公路客车制动鼓 (`brake_drum`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品铸铁公路客车制动鼓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022

###### 成品气动弹簧驻车制动气室 (`spring_brake_chamber`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品气动弹簧驻车制动气室
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022

###### 成品气动行车制动控制阀 (`brake_valve`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品气动行车制动控制阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制公路客车气制动管 (`brake_pipe`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品钢制公路客车气制动管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制公路客车柴油箱 (`fuel_tank`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品钢制公路客车柴油箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品铝制公路客车发动机散热器 (`radiator`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品铝制公路客车发动机散热器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： volvo-b8r-chassis-2019

###### 成品柴油机SCR尾气处理总成 (`aftertreatment`)

仅用于声明底盘清单中的一种实际独购设计。称量安装净质量并保留材料设计接口供货已含内容。排除采购发动机桥车架已含件。初始卡片须展开其他实际件及替代设计；本地等价件以实际坯料工序替代收货。

- 选定流： 成品柴油机SCR尾气处理总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： volvo-b8r-chassis-2019

###### 中国供货成品转向前桥总成 (`front_axle`)

一种实际独供中国车桥设计，将公开外购机动车桥身份限定使用。称量安装净质量，记录轮毂、存在时差速器、制动完整性及供货边界。已含制动鼓零件不能重复；其他地区须另一身份。排除挂车行走机构桥。

- 选定流： 车轴总成 `b5183f5e-96ba-4fae-a49f-20c222b9a6ee`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 中国供货成品后驱动桥总成 (`rear_axle`)

一种实际独供中国车桥设计，将公开外购机动车桥身份限定使用。称量安装净质量，记录轮毂、存在时差速器、制动完整性及供货边界。已含制动鼓零件不能重复；其他地区须另一身份。排除挂车行走机构桥。

- 选定流： 车轴总成 `b5183f5e-96ba-4fae-a49f-20c222b9a6ee`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 一种新充气橡胶公路客车轮胎设计 (`bus_tyre`)

计数一种设计实际安装新客车轮胎及退回，保留公开件数。以校准称重取得实际批次净kg/件，仅用于物理清单M核对。不设通用轮数轮胎质量，也不替换为翻新胎。排除供货已含车轮轮胎。

- 选定流： 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位： 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_count。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_count`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 成品发动机驱动制动空气压缩机 (`air_compressor`)

用于气制动系统的一种实际独购空气压缩机，将较宽成品空气压缩机类别限定使用。称量安装质量；不能重复发动机已含压缩机。制冷压缩机、场址外供压缩空气和本地产生试验空气是不同交换。

- 选定流： 空气泵或真空泵，空气或其他气体压缩机 `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢增强硫化橡胶转向软管 (`hydraulic_hose`)

一种实际液压转向软管设计，将橡胶液压软管身份限定使用。称量净安装软管；独供端接头须独立卡片。排除发动机转向总成已含件；不假设长度压力。

- 选定流： 液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 终检电测前成型低压底盘铜线束 (`wiring_harness`)

一种在公开中间边界实际采购已捆扎缠绕套管成型线束，随后在底盘集成验收安装电检。称量收货安装质量并记录连接器套管完整性；不采用公开注释假设1:1传递作为数量因子。原绝缘线及发动机已含线束不是新增投入。

- 选定流： 成型线束 `795e6116-d121-486f-aa8f-fa78448351f0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品发动机皮带驱动公路客车交流发电机 (`alternator`)

一种声明设计实际独供启动发电组件，将公开内燃机电设备类别限定使用。称量安装净质量并记录电额定值及供货已含内容。排除发动机已含装置；风力发电机或混合照明启动套件不是本原子组件。

- 选定流： 用于内燃机的电点火或起动设备，用于与内燃机配用的发电机及断电器，脚踏车或机动车辆用电力照明设备或信号设备（白炽灯或放电灯除外）、风挡刮水器、去霜器和去雾器 `46a4d7e0-db60-4f6d-a637-28140132c05d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品公路客车电启动电机 (`starter`)

一种声明设计实际独供启动发电组件，将公开内燃机电设备类别限定使用。称量安装净质量并记录电额定值及供货已含内容。排除发动机已含装置；风力发电机或混合照明启动套件不是本原子组件。

- 选定流： 用于内燃机的电点火或起动设备，用于与内燃机配用的发电机及断电器，脚踏车或机动车辆用电力照明设备或信号设备（白炽灯或放电灯除外）、风挡刮水器、去霜器和去雾器 `46a4d7e0-db60-4f6d-a637-28140132c05d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品已充电铅酸启动蓄电池 (`starter_battery`)

一种实际独立安装启动电池设计。称量含外壳内装电解液净电池，记录荷电组成容量供货边界。实际交付独立用电器电池须展开。本地充电使用独立计量电力；不设通用电池数寿命。

- 选定流： 成品已充电铅酸启动蓄电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### 一种配方矿物油转向液压液 (`hydraulic_oil`)

仅用于实际证实一种至少70%石油油分的矿物基液压配方。保留公开体积m3；计量净新填充退回回收，记录实际交付余留体积。实测密度温度可核对M内kg，不改变交换属性，也不假设储液容量等于填充。

- 选定流： 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_oil_volume。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_oil_volume`
- 来源：

###### 一种配方矿物发动机润滑油 (`engine_oil`)

仅在本精确证实单一配方实际新供声明安装发动机变速箱底盘系统时纳入。称量净填充补加退回，记录实际浓度余留质量。排除供货预充液及回收试验液；不重复采购混合液组分，也不规定所有型号使用本配方填充。

- 选定流： 一种配方矿物发动机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 一种配方矿物自动变速箱液 (`gearbox_oil`)

仅在本精确证实单一配方实际新供声明安装发动机变速箱底盘系统时纳入。称量净填充补加退回，记录实际浓度余留质量。排除供货预充液及回收试验液；不重复采购混合液组分，也不规定所有型号使用本配方填充。

- 选定流： 一种配方矿物自动变速箱液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 一种质量分数50%乙二醇水基发动机冷却液 (`coolant`)

仅在本精确证实单一配方实际新供声明安装发动机变速箱底盘系统时纳入。称量净填充补加退回，记录实际浓度余留质量。排除供货预充液及回收试验液；不重复采购混合液组分，也不规定所有型号使用本配方填充。

- 选定流： 一种质量分数50%乙二醇水基发动机冷却液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 一种矿物油锂皂底盘润滑脂 (`grease`)

仅在本精确证实单一配方实际新供声明安装发动机变速箱底盘系统时纳入。称量净填充补加退回，记录实际浓度余留质量。排除供货预充液及回收试验液；不重复采购混合液组分，也不规定所有型号使用本配方填充。

- 选定流： 一种矿物油锂皂底盘润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 一种质量分数32.5%柴油尾气尿素水溶液 (`urea_solution`)

仅在本精确证实单一配方实际新供声明安装发动机变速箱底盘系统时纳入。称量净填充补加退回，记录实际浓度余留质量。排除供货预充液及回收试验液；不重复采购混合液组分，也不规定所有型号使用本配方填充。

- 选定流： 一种质量分数32.5%柴油尾气尿素水溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

### 过程： 工厂检查及底盘验收 (`acceptance`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_acceptance`)

计量应归属阶段电力，包括实际返工待机。公开身份为用户端低于1kV电网平均交流电；不同电压或自发电须相符独立卡片。采购工序不能重复计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 工厂发动机试验消耗的一种石油柴油牌号 (`test_diesel`)

仅用于本实际证实化石石油牌号，将未特指公开瓦斯油身份限定使用。分开核对称量或密度修正加注退回、试验消耗及最终余留。余留燃油kg纳入M，在本工厂边界不排放。制造商文献HVO生物柴油选项不证明化石碳；替代燃油须自身组成身份。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_fuel`
- 来源：

###### 验收底盘交付余留的一种石油柴油牌号 (`delivery_diesel`)

仅用于本实际证实化石石油牌号，将未特指公开瓦斯油身份限定使用。分开核对称量或密度修正加注退回、试验消耗及最终余留。余留燃油kg纳入M，在本工厂边界不排放。制造商文献HVO生物柴油选项不证明化石碳；替代燃油须自身组成身份。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_fuel`
- 来源：

#### 输出

##### 产品流

###### 验收完整柴油带发动机无车身公路客车底盘 (`finished_chassis`)

配置完整无驾驶室无车身钢梯形车架滚动底盘，含安装推进发动机传动桥悬架制动转向车轮声明电系统及实际余留液燃油。它是待制车身的不完整道路车辆，但为本参考的完整验收底盘总成。产出实测验收净M中的1kg；总重额定值或目录行驶状态重量均不能提供M。

- 选定流： 机动车辆使用的发动机的底盘 `78532304-4355-400e-8bab-e2f6858050db`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源： mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

##### 废物流

###### 收集废矿物转向液压油 (`spent_hydraulic_oil`)

仅用于实际独立外运使用并受污染石油基转向油。称量送接收方质量，记录组成含水及实际处理边界。回收试验油是内部回用；新油排出未用油不能自动套本废油身份。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 实际工厂发动机试验的化石二氧化碳 (`air_co2`)

仅用于本单一物质实际实测治理后排至即时空气，子介质未特指。在实际应归属试验期间积分相配浓度排气体积；CO2/CO核验化石碳并分开NO/NO2物种。NO2当量NOx、N2O、长期空气或法规限值不能提供本交换。不强制试验燃烧排放。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

###### 实际工厂发动机试验的化石一氧化碳 (`air_co`)

仅用于本单一物质实际实测治理后排至即时空气，子介质未特指。在实际应归属试验期间积分相配浓度排气体积；CO2/CO核验化石碳并分开NO/NO2物种。NO2当量NOx、N2O、长期空气或法规限值不能提供本交换。不强制试验燃烧排放。

- 选定流： 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

###### 实际工厂发动机试验的一氧化氮 (`air_no`)

仅用于本单一物质实际实测治理后排至即时空气，子介质未特指。在实际应归属试验期间积分相配浓度排气体积；CO2/CO核验化石碳并分开NO/NO2物种。NO2当量NOx、N2O、长期空气或法规限值不能提供本交换。不强制试验燃烧排放。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

###### 实际工厂发动机试验的二氧化氮 (`air_no2`)

仅用于本单一物质实际实测治理后排至即时空气，子介质未特指。在实际应归属试验期间积分相配浓度排气体积；CO2/CO核验化石碳并分开NO/NO2物种。NO2当量NOx、N2O、长期空气或法规限值不能提供本交换。不强制试验燃烧排放。

- 选定流： 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

### 过程： 发运保护 (`packout`)

#### 输入

##### 产品流

###### 纤维至少80%的C楞瓦楞纸板保护 (`cardboard`)

仅用于匹配公开含再生多层纤维板身份的实际C楞单一设计供货保护。单独称量净保护；从底盘M排除。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 非泡沫非自粘未增强LDPE保护膜 (`film`)

仅用于匹配公开非层压无支撑状态的实际单一LDPE发运保护膜。单独称量净膜，从M排除；回用运输工装不是新膜。

- 选定流： 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_causal` | shared_operations | 优先按配置工单直接分开测量。按实测因果物料处理量实际阶段时间负载服务工单核对共享梁精整车架集成试验电力耗材，含待机返工不合格负担。不同底盘不能默认按件均分。按实际前景记录保留驱动理由不确定性敏感性；不设通用质量时间因子。 |  |
| `allocation_receipts` | assemblies | 采购客户提供车架发动机变速箱桥带实际上游清单负担边界，不是零负担收货。其已含组件液替代独立投入本地制造。实际回用试验工装供气回收液须因果服务更换记录，不能每底盘当整件消耗。 |  |
| `allocation_balance` | batch_and_exports | 同一配置期间核对收货、余留安装净质量、在制品退回回收及各外运废物。实际轮胎实测kg/件及液密度仅核对物理质量；保留件数体积属性。分开试验消耗交付余留燃油。将不合格返工归属验收件。不自动抵扣避免材料处置；真实多产出制造须明确功能及有依据分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | reference_product | 校准净称重 | 型号；配置；序列号；验收净质量 M；秤皮重；安装系统；余留液燃油；验收几何；验收；临时包装排除 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每种完整验收配置 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 每台验收净质量 | 秤校准；净称重票；完整底盘验收 |
| cp_configuration | frame; integration; acceptance | configuration | 清单接口验收台账 | 型号序列图样修订；梯形车架接头；发动机位置规格；变速箱桥；悬架制动车轮转向；冷却尾气电；供货范围；运输及验收状态；场址期间；准则结果 | 将各实际清单项工序对应原子交换或有依据排除；核验车架自制外购及外购内部件。记录一种实际配置验收几何、排除临时座椅控制及余留液。目录行驶状态总重桥荷值不能提供M。 | kg | 每次装配修订验收 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 一种可追溯完整配置 | 签认清单图样；供货范围；检查试验结果 |
| cp_material | fabrication; finishing; integration; packout | single stock/consumable | 净领用及称重 | 单一牌号设计配方；状态；kg；领用退回回收；换算时实测密度条件；服务工单；验收数 | 分别称量各实际指定板粉末砂盘水发动机变速箱油冷却液脂尾气液保护。核对净新补加退回及余存。供货预充液及采购混合液组分不重复；不设通用密度浓度用量。 | kg | 每次领用退回批次 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 应归属净质量 / 同一配置的验收机器数 | 秤；安全数据表证书；库存服务工单台账 |
| cp_parts | frame; integration | single installed component | 组件称重及完整性 | 零件设计；收货安装kg；实际数；已含内部件液；国家供货边界；自制外购；验收数 | 称量各指定净车架纵横梁螺栓螺母、发动机变速箱轴、桥悬架制动转向轮辋、箱冷却尾气电组件，或用实际核验批次质量件数记录。排除供货已含内部件，完整性声明前展开实际缺失安装件轮毂支架储气筒过滤器管接头制动衬片传感器线束卡片。 | kg | 每批供货装配 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 应归属安装质量 / 同一配置的验收机器数 | 秤；组件设计证书；供货已含内容及清单 |
| cp_count | integration | bus_tyre | 设计专属件数 | 单一轮胎设计；安装数；收货退回；外购已含；批次实测kg/件；验收数 | 计数各选定设计实际安装轮胎，保留公开件数。以校准称重取得实际批次净kg/件，仅核对物理清单质量；不设通用轮数零件重量。 | Item(s) | 每批供货装配 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 应归属安装件数 / 同一配置的验收机器数 | 清单件数台账；校准零件称重 |
| cp_oil_volume | integration | hydraulic_oil | 净配方液体体积 | 配方油分；表计L或m3；填充退回回收；余留填充；物理质量实际密度温度；验收数 | 计量实际净矿物转向液供货并保留公开体积；按1 L =0.001 m3换算。核对填充退回回收余留。测量声明温度密度以核对M内物理kg，不改变体积或假设储液容量。 | m3 | 每次计量填充退回批次 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 应归属净液体体积 / 同一配置的验收机器数 | 表计校准；组成；密度温度及填充平衡 |
| cp_energy | fabrication; finishing; frame; integration; acceptance | electricity | 表计及因果分配 | 阶段；电压来源；kWh；时段；实际负载时间；待机返工；共享总量；验收数 | 计量实际阶段能量；按1 kWh =3.6 MJ换算并核对实际因果负载时间及共享实测总量。发动机额定功率客车工况或安装电机额定值不能证明工厂消耗。 | MJ | 每个计量时段批次 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 应归属电能 / 同一配置的验收机器数 | 表计校准；账单；因果负载台账 |
| cp_fuel | acceptance | test_diesel; delivery_diesel | 分开消耗余留燃油台账 | 单一石油牌号；化石生物证书；加注退回；消耗kg；余留kg；供货发动机燃油；体积时密度温度；实际试验时段；验收数 | 称量或按实际密度温度计量加注供货燃油退回最终余留，以实测平衡确定试验消耗。分开保留交付余留，将其kg纳入M并排除供货预充重复。无实测关系不能以额定功率乘时数估算燃油。 | kg | 每次实际发动机试验最终加注 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 分开应归属消耗余留kg / 同一配置的验收机器数 | 燃油表秤；组成平衡；试验验收记录 |
| cp_waste | fabrication; finishing; acceptance | single exported waste | 分类外运称重 | 单一废物；合金配方；干湿；油水金属含量；外运kg；回收；接收方；验收数 | 分别称量各实际边角料洁净切屑废砂盘捕集粉尘粉末过喷收集清洗液废转向油。记录组成及接收处理。内部回收液不是外运；实际直接水排放须逐物质介质卡片。 | kg | 每次外运批次 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 应归属外运废物质量 / 同一配置的验收机器数 | 秤；组成；接收处理凭证 |
| cp_emission | finishing; acceptance | single air species | 逐物质治理后监测 | 物质；化石生物来源；介质子介质；粒径；实测浓度排气体积时间；相同参考条件；治理背景；实际时段；验收数 | 按相同采样温压湿度条件实测治理后逐物质浓度排气体积，在实际应归属时段积分修正背景记录不确定性。选定时核验即时未特指空气及未特指粒径。分开实测NO与NO2；无物种分布的NO2当量NOx不足。CO2/CO须核验化石碳；不设按限值或必需排放数量。 | kg | 代表性实际排放时段 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 应归属实测物质质量 / 同一配置的验收机器数 | 监测；采样流量校准；碳物种介质依据 |
| cp_water_resource | finishing | groundwater | 井表计及含水层记录 | 场址国家；可再生淡水含水层；m3；时段；泵送处理；回用；验收数 | 计量实际符合限定工厂井取水，展开泵送处理并排除内部循环。证实含水层淡水可再生性；不重复自来水收货。 | m3 | 每个计量时段批次 | 同一声明生产期间；披露缺口 | 声明带发动机底盘工厂 | 应归属取水体积 / 同一配置的验收机器数 | 表计；含水层场址依据；水平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | 物理实测正值M与每个分子使用相同型号配置期间件数。核对车架发动机桥供货完整性、实际余留液燃油、轮胎件数物理质量、转向液体积密度及验收运输几何。目录净行驶状态总重额定值不能满足cp_mass。 | cp_configuration; cp_mass; cp_parts; cp_count; cp_oil_volume; cp_fuel |
| `quality_coverage` | inventory_and_links | 披露未解决身份、实际缺失清单路线卡片测量上游运输接收链接及不确定性。初始组件实例不是完整物料清单。按工厂依据确定本地外购钢精整、制动悬架发动机变型及试验工序。不设通用牌号产率零件质量填液密度轮数试验时数排放寿命分配因子。 | cp_configuration; cp_material; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | architecture_evidence | 奔驰OF1721L/59物理第1–2页且第2页印2022年2月、沃尔沃B8R4x2 Euro6第1–4页且第3–4页页脚2019-11-26，仅为历史型号专属依据。奔驰第2页给螺栓车架空气悬架鼓式制动及行驶状态重量所含内容；沃尔沃对比运输几何发动机制动电燃油选项。不证明通用梯形车架制造当前符合实际净M工厂数量寿命。不采用目录质量额定容量。 | mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求一种完整配置无车身无驾驶室柴油梯形车架公路客车底盘，正值物理实测M kg及cp_mass记录。参考产出1kg；以normalize_mass归一kg/MJ/m3/件数分子并保留公开属性。完整底盘不是完整道路车辆；保留实际交付排除及验收几何。 |  |
| `validation_bom` | inventory | 按图样清单供货边界核对实际纵横梁接头、发动机变速箱传动、桥悬架车轮、制动转向、燃油冷却尾气电系统液。区分车架收货本地装配、鼓盘制动、实际发动机位置、收货本地填液及消耗余留柴油。完整性声明前展开全部实际缺失卡片路线。 |  |
| `validation_identity` | all inventory rows | 核验公开类型材料配方设计、原参考属性单位组、路线状态完整性地区及官方双语名。公路发动机不是非推进发动机；挂车轮辋桥不能确定为客车件。NO不是NO2/N2O；化石碳不是生物碳、即时未特指空气不是长期土壤。地下水是资源自来水是产品收集水油是废物、排放粉尘不是捕集粉尘。 |  |
| `validation_claims` | dataset_claims | 无实际路线及链接上游运输接收覆盖不能声明完整摇篮到工厂门。制造质量不能确定等承载功能道路适驶性下游车身适配寿命或方法学批准。独立科学审查仍待完成。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置前景带发动机无车身客车底盘制造；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实测M放大的相同完整底盘配置制造，单独声明上游运输处理链接 |
| excluded_use | 完整车辆车身、公路客货服务、使用维护寿命报废、其他底盘推进路线及方法学批准 |
| required_metadata | 全部参考限定；图样清单序列；车架材料接头自制外购；发动机位置用途；传动制动悬架转向车轮电冷却尾气设计及供货已含；实际配方填充余留燃油；校准M皮重交付排除验收几何；实际检查结果；场址期间件数；供货接收边界因果分配 |
| required_quality_disclosure | 未解决身份清单路线测量链接；实际件数体积物理质量核对；不合格返工回收；分配不确定性历史依据限制 |
| update_trigger | 车架发动机变速箱桥制动悬架转向电设计、供货完整性、验收运输配置、液精整配方、实际制造试验计划场址期间分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| mercedes-of1721-chassis-2022 | handbook | Mercedes-Benz, OF1721L/59 technical sheet, Spanish, physical pp.1–2 (unnumbered); p.2 printed Fecha de impresión: Febrero 2022. https://www.mercedes-benz-bus.com/content/dam/mb/ar/es/models/interurbanos/of1721/OF%201721%20L%2059.pdf | 历史无车身前置发动机底盘及变速箱桥结构第1页；螺栓梯形车架空气悬架转向器鼓式气制动车轮电系统及空载行驶状态质量附注第2页。附注含满燃油备胎灭火器工具箱、不含驾驶员；目录质量不是本净M。不强制钢牌号本地焊接精整数量当前符合寿命。 |
| volvo-b8r-chassis-2019 | handbook | Volvo Buses, B8R4x2 Euro6 data sheet, printed/physical pp.1–4; footer BED 380858 2019-11-26 on pp.3–4 (URL filename2020 is not the printed edition). https://www.volvobuses.com/content/dam/volvo-buses/markets/master/coaches/chassis/volvo-b8r/specifications/Data-sheet-B8R-4-2-Euro-6-EN-2020.pdf | 历史无车身后置发动机实例及运输批准轴距区分第1页；实际发动机变速箱悬架燃油选项第2页；盘式制动转向冷却尾气及备胎轮辋选项第3页；独立启动用电器电路第4页。用于要求实际配置、避免通用鼓式制动发动机位置化石燃油电池数；不证明全部B8R为螺栓梯形车架。不采用额定载荷油箱尺寸目录质量换算因子试验配方当前排放符合寿命。 |
