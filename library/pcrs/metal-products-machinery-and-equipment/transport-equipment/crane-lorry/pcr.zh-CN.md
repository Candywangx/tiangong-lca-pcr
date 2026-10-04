---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.crane-lorry
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 完整柴油伸缩臂汽车起重机制造

## 1. 范围与适用性

覆盖新完整专用柴油公路汽车起重机制造，采用液压钢伸缩臂，底盘及上车作为一种配置整车交付。本较窄CPC49115边界排除带折臂装卸吊机的货运汽车、独立起重系统、非公路工场起重机、全地面越野履带及吊运机、电动混合动力牵引路线、翻新及单售部件。现有实质起重机卷扬PCR覆盖起重设备且明确排除完整起重汽车；本记录负责整车集成及完整整车质量，不是另一独立起重机PCR。区分实际底盘取力及独立非推进上车柴油发动机变型；不默认合并。公路行驶、起重服务、客户工时载荷循环、维护寿命及报废在范围外。Grove2020及Liebherr文件编码04-2023仅确定历史型号专属结构配置实例。不推定当前法规符合、标准载荷工况、燃油用量工厂数量机器质量寿命。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.crane-lorry |
| classification_refs | CPC 3.0 49115; 较窄候选范围；不声明已接受映射 |
| covered_products | 新完整柴油伸缩臂专用公路汽车起重机 |
| excluded_products | 货运装卸吊机汽车；独立起重机部件；非公路全地面越野履带起重机；其他牵引路线；使用服务 |
| representative_product | 一套带发动机公路底盘集成声明伸缩上车起重机、支腿卷扬绳钩控制及实际配重配置 |
| production_route | 收货及自制外购控制；条件钢制造精整；上车底盘集成实际填充；工厂检查试验验收；发运保护 |
| market_state | 声明工厂边界验收完整净交付整车 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种声明完整柴油伸缩臂公路起重机配置 |
| How much | 1 kg 验收净完整机器；一台验收完整机器由物理实测 M kg 表示 |
| How well | 满足实际制造商图样清单检查计划，适用结构装配液压、伸缩变幅回转卷扬、限制联锁、底盘制动转向及声明载荷检查。保留实际准则结果；不设通用试载超载比例公差验收阈值 |
| How long or cycle | 一次制造交付；不采用公路里程起重循环寿命单位 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 起重汽车 `3d73143c-e111-4f03-905c-82f7dcad0a1f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号序列图样清单修订；公路底盘完整性及柴油驱动；取力独立上车发动机；吊臂伸缩支腿回转卷扬绳钩操作室控制限制器设计；安装随车固定存放配重及所含副臂；外购内部件自制外购；实际液配方填充余留燃油；物理实测正值M及秤验收记录；实际试验准则结果；场址期间起止边界；人员试载散装备件运输保护排除 |

在数据集元数据或等效过程流注释声明全部限定。一台完整机器是有身份底盘及集成上车；额定起重能力公路总重桥荷限值及分离起重本体不是本净参考。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `delivery_configuration` | complete-machine delivery | 质量 | kg | 纳入实际安装随车固定存放且制造商验收交付起重部件、工作液及实测余留燃油。排除人员试载外部加载工装运输保护及不属验收整车的散装可选配重备件。记录独立包排除及实际完整性。发运拆下所含零件须保留验收完整整车称重及可追溯零件，不能用运输重量或杜撰额定质量替代。 |
| `electrical_energy` | electricity_fabrication; electricity_finishing; electricity_integration; electricity_acceptance | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留表计电力kWh并按1 kWh =3.6 MJ换算。记录来源电压实际阶段负载时间；额定安装功率不能证明工厂消耗。 |
| `component_count` | truck_tyre; upper_diesel_engine | 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 保留公开件数及各单一设计实际安装数。以实际批次实测kg/件及安装数核对物理清单质量；该核对不改变交换属性。排除外购底盘吊臂发动机总成已含项。 |
| `hydraulic_volume` | hydraulic_oil | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留公开体积及表计净液压液收货填充退回。按1 L =0.001 m3换算。仅为交付物理质量核对，以记录温度实测密度及m = rho乘V；不设默认密度油箱容积。 |
| `water_resource_volume` | groundwater | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 以含水层场址依据计量实际可再生淡水地下水。不是采购自来水或外运废水。 |
| `material_mass` | other stock/components/fluids/wastes/emissions | 质量 | kg | 称量各定义物质组件废物或测量一种排放物质。体积换质量要求实际密度温压依据；混合物不能重复其组分收货。NO、NO2、N2O不能互换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定带发动机底盘成品起重组件本地坯料耗材收至集成工厂 |
| starting_condition_role | 前景收货；供货制造及来料运输单独链接 |
| product_classification_scope | CPC49115专用柴油伸缩臂公路起重机子集 |
| recursive_input_rule | 采购底盘吊臂卷扬总成替代所含零件原料及供货本地工序；本地在制品转移不是新外部收货 |
| upstream_dataset_requirement | 匹配实际底盘完整性、推进及上车发动机角色、钢状态设计油组成体积基准、组件件数电力电压地区废物接收边界 |
| disclosure | 仅前景完整整车制造模块。声明自制外购外包及缺失上游运输接收链接；不声明完整摇篮到工厂门覆盖 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_fabrication` | fabrication; finishing | 仅纳入实际本地钢结构切割成形机加工焊接检查及声明精整。采购成品吊臂车架支腿排除其本地坯料制造；实际加工液接头滑轮回转驱动线束底盘零件外包服务须扩展初始卡片。粉末涂层是一种条件实例；实际湿漆溶剂喷砂制冷回路液压冲洗介质热处理及其他公用工程路线存在时须单独展开。不单凭手册结构推定必需工序。 | grove-tms800e-2020; liebherr-ltf1060-2023 |
| `boundary_integration` | integration | 纳入收货检查供货底盘安装接口检查、实际上车车架吊臂回转支腿卷扬控制安装调整、液压连接填充制动转向及完整机器集成。各项记录一种实际供货边界；自制底盘或缺失中间架伸缩缸配重安装线束限制器传感器须实际原子展开，不能用通用材料行。 | liebherr-ltf1060-2023 |
| `boundary_tests` | acceptance | 验收必需；物理载荷公路液压试验及发动机运行仅按制造商计划实际执行纳入。记录载荷幅度配置持续时间、试验燃油能量液体、监测时排放及可回用试验工装。试载是工厂设备不是消耗起重机质量；按服务工单实测记录归属更换。不杜撰强制超载百分比循环数排放。边界后客户行驶起重在范围外。 |  |
| `boundary_emissions` | finishing; acceptance | 仅监测实际直接排放。将治理后空气物质与收集废物采购液体分开，地下水资源与收集废水分开。化石CO2/CO要求燃油碳核验；NO/NO2要求实测物种分布。其他监测物质空气子介质或直接水土排放须独立相符原子卡片及依据。缺失卡片不能推定零排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 声明本地钢结构制造 | conditional | 实际本地切割成形机加工及合格焊接 | 前景阶段；在制品保持内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `finishing` | 声明本地表面精整 | conditional | 实际清洗打磨及声明粉末涂层路线 | 前景阶段；在制品保持内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `integration` | 底盘及上车起重系统集成 | required | 一种完整声明公路起重机配置 | 前景阶段；在制品保持内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `acceptance` | 工厂检查及完整整车验收 | required | 实际制造商检查试验计划；物理载荷公路试验仅按执行 | 前景阶段；在制品保持内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| `packout` | 发运保护 | conditional | 仅实际供货保护 | 前景阶段；在制品保持内部 | 每 1 kg 参考流；采集基准为每台验收成品机器 |

### 过程： 声明本地钢结构制造 (`fabrication`)

#### 输入

##### 产品流

###### 经证实热轧高强度低合金钢板 (`hsla_plate`)

仅用于本地车架吊臂支腿路线实际证书声明的单一牌号厚度交付状态。称量净领用及退回。不依据手册规定Q345/Q355、厚度或钢产率。采购成品结构替代其坯料及本地制造。

- 选定流： 经证实热轧高强度低合金钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源： grove-tms800e-2020; liebherr-ltf1060-2023

###### 实心ER70S-6钢焊丝 (`welding_wire`)

仅在实际合格焊接程序指定本单一实心焊丝时使用。称量净焊丝消耗并核对焊盘退回及熔敷飞溅。其他合金药芯焊丝程序须独立卡片；不设通用焊丝钢板比例。

- 选定流： 实心ER70S-6钢焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 纯气态二氧化碳焊接保护气 (`shielding_co2`)

仅用于记录焊接程序下实际纯CO2保护。称量钢瓶净消耗或按有依据密度参考条件计量气体。氩CO2混合气是另一配方。不设固定气体用量。

- 选定流： 纯气态二氧化碳焊接保护气
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

计量实际阶段电力及应归属返工待机。公开身份是用户端低于1kV电网平均交流电；其他电压自发电须独立相符交换。采购工序不能又计本地能耗。

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

仅用于本单一经证实合金洁净状态实际分类外运。称量送接收方质量并记录油水污染及分离。内部回用不是外运废物；不自动抵扣避免钢生产。含油切屑须另一卡片。

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

###### 洁净高强度低合金钢机加工切屑 (`steel_chip`)

仅用于本单一经证实合金洁净状态实际分类外运。称量送接收方质量并记录油水污染及分离。内部回用不是外运废物；不自动抵扣避免钢生产。含油切屑须另一卡片。

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

###### 分类高强度低合金钢焊接飞溅废物 (`weld_spatter`)

仅用于本指定焊接路线实际收集飞溅。称量外运金属并记录合金氧化物油污染；未捕集空气物质归属排放监测。

- 选定流： 分类高强度低合金钢焊接飞溅废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 声明本地表面精整 (`finishing`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_finishing`)

计量实际阶段电力及应归属返工待机。公开身份是用户端低于1kV电网平均交流电；其他电压自发电须独立相符交换。采购工序不能又计本地能耗。

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

仅用于本地实际一种供货证实聚酯粉末配方。称量净新粉及退回回收粉；记录固化涂层不合格捕集。公开粉末涂料Mass身份限定使用；其精整描述不确定处理服务或消耗数量。采购已涂结构替代本地涂层。

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

仅用于本地钢打磨实际一种砂盘设计。称量应归属更换及余存；记录磨粒结合剂尺寸。不假定每辆消耗完整可回用砂盘。

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

仅用于水基清洗路线实际饮用水等级自来水补加。称量水或按实际温度密度换算表计体积。采购混合液的稀释组分及内部循环不能增加采购量。

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

仅用于含水层场址国家确认可再生淡水的实际工厂井取水。计量m3并展开泵送处理。相同水不能又计自来水投入。

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

仅用于本单一指定废物实际独立收集外运。称量送接收方质量并记录固油水含量、干湿基及接收处理。回收粉水是内部回用不是外运。不推定直接排水。

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

###### 捕集干燥高强度低合金钢打磨粉尘 (`captured_dust`)

仅用于本单一指定废物实际独立收集外运。称量送接收方质量并记录固油水含量、干湿基及接收处理。回收粉水是内部回用不是外运。不推定直接排水。

- 选定流： 捕集干燥高强度低合金钢打磨粉尘
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

仅用于本单一指定废物实际独立收集外运。称量送接收方质量并记录固油水含量、干湿基及接收处理。回收粉水是内部回用不是外运。不推定直接排水。

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

仅用于本单一指定废物实际独立收集外运。称量送接收方质量并记录固油水含量、干湿基及接收处理。回收粉水是内部回用不是外运。不推定直接排水。

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

仅用于记录钢精整工序实测治理后排放，粒径未特指且即时空气子介质未特指。按同一采样基准配对浓度排气体积。捕集粉尘是废物；实测特定粒径子介质须另一身份。

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

### 过程： 底盘及上车起重系统集成 (`integration`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_integration`)

计量实际阶段电力及应归属返工待机。公开身份是用户端低于1kV电网平均交流电；其他电压自发电须独立相符交换。采购工序不能又计本地能耗。

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

###### 供货带发动机公路汽车起重机底盘 (`engine_fitted_chassis`)

实际供货带承载车辆柴油发动机底盘，符合公开中间底盘身份。称量交付净底盘；记录实际所含驾驶室传动桥制动轮胎电池及预充液。已含部件不能重复增加。客户提供底盘仍有真实清单负担，不能当零成本零影响投入。

- 选定流： 卡车底盘 `5e1faed0-6422-427c-a311-4e6e13d5f580`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： liebherr-ltf1060-2023

###### 成品钢制伸缩起重机吊臂总成 (`boom_assembly`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品钢制伸缩起重机吊臂总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： grove-tms800e-2020; liebherr-ltf1060-2023

###### 成品钢制伸缩支腿梁 (`outrigger_beam`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品钢制伸缩支腿梁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： grove-tms800e-2020; liebherr-ltf1060-2023

###### 成品钢制起重机回转支承 (`slew_bearing`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品钢制起重机回转支承
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： liebherr-ltf1060-2023

###### 成品钢制主卷扬吊钩组 (`hook_block`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品钢制主卷扬吊钩组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制主卷扬钢丝绳 (`steel_rope`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品钢制主卷扬钢丝绳
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品铸铁起重机配重块 (`counterweight`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品铸铁起重机配重块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： grove-tms800e-2020; liebherr-ltf1060-2023

###### 成品带玻璃钢制起重操作室 (`operator_cab`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品带玻璃钢制起重操作室
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： grove-tms800e-2020; liebherr-ltf1060-2023

###### 成品起重机力矩限制器控制板 (`moment_limiter`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品起重机力矩限制器控制板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： liebherr-ltf1060-2023

###### 成品钢制液压方向控制阀 (`direction_valve`)

仅用于完整整车清单中一种实际独立采购设计。称量安装净组件质量并记录供货完整性接口验收。排除采购底盘吊臂液压总成已含内容。本地制造等价件以实际坯料耗材制造替代收货；完整覆盖前须展开缺失内部件。

- 选定流： 成品钢制液压方向控制阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品双作用液压吊臂变幅缸 (`luff_cylinder`)

仅用于一种实际独立收货设计规格，将较宽公开组件类别限定使用。称量安装质量并记录牌号涂层尺寸及已含内部件。液压软管指指定软管本体；独供端接头须独立卡片。卷扬仅含供货声明马达齿轮制动。吊臂底盘已含内容不能重复；其他缸泵紧固件设计须独立卡片。

- 选定流： 线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： grove-tms800e-2020; liebherr-ltf1060-2023

###### 成品液压轴向柱塞泵 (`piston_pump`)

仅用于一种实际独立收货设计规格，将较宽公开组件类别限定使用。称量安装质量并记录牌号涂层尺寸及已含内部件。液压软管指指定软管本体；独供端接头须独立卡片。卷扬仅含供货声明马达齿轮制动。吊臂底盘已含内容不能重复；其他缸泵紧固件设计须独立卡片。

- 选定流： 泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品液压主卷扬机 (`main_winch`)

仅用于一种实际独立收货设计规格，将较宽公开组件类别限定使用。称量安装质量并记录牌号涂层尺寸及已含内部件。液压软管指指定软管本体；独供端接头须独立卡片。卷扬仅含供货声明马达齿轮制动。吊臂底盘已含内容不能重复；其他缸泵紧固件设计须独立卡片。

- 选定流： 复（式）滑车及起重机，箕斗提升机除外，卷扬机及绞盘，千斤顶 `7984041f-134f-4b73-89b9-30d9be48684f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： grove-tms800e-2020; liebherr-ltf1060-2023

###### 成品钢增强硫化橡胶液压软管 (`hydraulic_hose`)

仅用于一种实际独立收货设计规格，将较宽公开组件类别限定使用。称量安装质量并记录牌号涂层尺寸及已含内部件。液压软管指指定软管本体；独供端接头须独立卡片。卷扬仅含供货声明马达齿轮制动。吊臂底盘已含内容不能重复；其他缸泵紧固件设计须独立卡片。

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

###### 成品六角头钢螺栓 (`steel_bolt`)

仅用于一种实际独立收货设计规格，将较宽公开组件类别限定使用。称量安装质量并记录牌号涂层尺寸及已含内部件。液压软管指指定软管本体；独供端接头须独立卡片。卷扬仅含供货声明马达齿轮制动。吊臂底盘已含内容不能重复；其他缸泵紧固件设计须独立卡片。

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

###### 中国供货成品后驱动桥总成 (`drive_axle`)

仅用于实际独供且匹配本公开地区的中国后驱动桥设计，排除带发动机底盘已含车桥。称量安装净质量并保留实际差速制动完整性。前桥其他地区坯轴须另一相符卡片。

- 选定流： 车轴总成 `b5183f5e-96ba-4fae-a49f-20c222b9a6ee`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 一种新充气橡胶卡车轮胎设计 (`truck_tyre`)

仅用于采购底盘外一种设计实际独供新卡车轮胎。保留公开件数属性；计数安装轮胎退回，不规定轮数。实际批次实测kg/件仅用于完整机器质量清单核对，不将公开属性改成Mass。

- 选定流： 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位： 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_count。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_count`
- 来源：

###### 成品上车液压驱动非车辆推进柴油发动机 (`upper_diesel_engine`)

仅在声明双发动机设计实际使用本独供非车辆推进上车发动机时纳入。保留公开件数及非机动车发动机分类。记录实际安装数及实测净kg/件以核对质量。承载车辆推进发动机不能用本身份，通常已含于收货底盘；底盘取力路线排除额外上车发动机。

- 选定流： 柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位： 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_count。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_count`
- 来源： liebherr-ltf1060-2023

###### 成品已充电铅酸启动蓄电池 (`starter_battery`)

仅用于底盘发动机供货已含内容外一种实际独立安装启动电池设计。称量含内装电解液外壳净电池；记录荷电容量组成供货边界。本地充电实际电力是另一交换，不是另一电池。

- 选定流： 成品已充电铅酸启动蓄电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 一种配方矿物油液压液 (`hydraulic_oil`)

仅用于实际供货证实至少70%石油油分的矿物基液压配方，将公开润滑剂类别限定使用。保留公开体积m3。计量净新液填充补加、退回及工厂回收；交付余留油纳入实测M。实际密度温度可核对物理质量，但不能将Volume改成Mass。不假设额定油箱容积即填充量。

- 选定流： 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_oil_volume。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_oil_volume`
- 来源： grove-tms800e-2020

###### 一种配方矿物发动机润滑油 (`engine_oil`)

仅在实际制造商交付规格使用本单一配方浓度且未已含于底盘发动机时纳入。称量净填充补加退回回收液。交付余留质量纳入M；不设通用用量密度。其他实际配方须独立卡片。

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

###### 一种配方矿物传动润滑油 (`transmission_oil`)

仅在实际制造商交付规格使用本单一配方浓度且未已含于底盘发动机时纳入。称量净填充补加退回回收液。交付余留质量纳入M；不设通用用量密度。其他实际配方须独立卡片。

- 选定流： 一种配方矿物传动润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 一种矿物油锂皂润滑脂 (`grease`)

仅在实际制造商交付规格使用本单一配方浓度且未已含于底盘发动机时纳入。称量净填充补加退回回收液。交付余留质量纳入M；不设通用用量密度。其他实际配方须独立卡片。

- 选定流： 一种矿物油锂皂润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 一种质量分数50%乙二醇水基发动机冷却液 (`engine_coolant`)

仅在实际制造商交付规格使用本单一配方浓度且未已含于底盘发动机时纳入。称量净填充补加退回回收液。交付余留质量纳入M；不设通用用量密度。其他实际配方须独立卡片。

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

#### 输出

### 过程： 工厂检查及完整整车验收 (`acceptance`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_acceptance`)

计量实际阶段电力及应归属返工待机。公开身份是用户端低于1kV电网平均交流电；其他电压自发电须独立相符交换。采购工序不能又计本地能耗。

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

###### 工厂试验消耗经证实化石柴油 (`test_diesel`)

仅用于实际单一供货证实无生物成分且牌号匹配发动机的石油柴油。称量消耗燃油或按实测密度温度换算表计体积；核对加注交付余留退回。消耗与交付余留燃油分开。不用额定功率或手册燃油因子。

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

###### 交付余留经证实化石柴油 (`delivery_diesel`)

仅用于试验后同一声明单一牌号实际最终余留石油柴油。测量余留量并将质量纳入M；不能又当已消耗试验燃油或加满额定油箱。收货底盘内燃油应核对，不重复采购。

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

###### 一种质量分数32.5%尿素水基尾气处理液 (`diesel_exhaust_solution`)

仅用于实际装SCR且要求本确切交付配方发动机。台账分开称量实际工厂消耗及交付余留填充，含供货已含液。不能依据旧发动机选项推定SCR用量；其他浓度须独立卡片。

- 选定流： 一种质量分数32.5%尿素水基尾气处理液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源： grove-tms800e-2020

#### 输出

##### 产品流

###### 起重汽车 (`finished_machine`)

参考产出：一种完整验收专用公路柴油伸缩臂汽车起重机配置，含底盘及上车。称量交付净整车，含声明安装随车固定存放配重、所含吊钩副臂及余留工作液燃油。排除运输保护、人员试载、未安装可选配重及独立备件包。以制造商验收记录确定实际完整性；载荷表或公路总重数不能替代M。

- 选定流： 起重汽车 `3d73143c-e111-4f03-905c-82f7dcad0a1f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源： grove-tms800e-2020; liebherr-ltf1060-2023

##### 废物流

###### 收集废矿物液压油 (`spent_hydraulic_oil`)

仅用于工厂冲洗试验实际独立外运废矿物液压油，实测油水金属含量及接收路线。称量收集外运；回收可用油是内部循环。仅在废物收集范围符合本油时限定使用公开废润滑剂身份。

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

###### 化石源二氧化碳排至即时未特指空气 (`test_co2`)

仅用于声明空气子介质下实际实测逐物质治理后发动机试验排放。按相同条件配对浓度排气流量时间并修正背景。NO与NO2是单独物质：无实测物种分布不能拆分总NOx或NO2当量质量。须核验化石碳。不将法规限值发动机标准或必然排放因子当数量。

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

###### 化石源一氧化碳排至即时未特指空气 (`test_co`)

仅用于声明空气子介质下实际实测逐物质治理后发动机试验排放。按相同条件配对浓度排气流量时间并修正背景。NO与NO2是单独物质：无实测物种分布不能拆分总NOx或NO2当量质量。须核验化石碳。不将法规限值发动机标准或必然排放因子当数量。

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

###### 一氧化氮排至即时未特指空气 (`test_no`)

仅用于声明空气子介质下实际实测逐物质治理后发动机试验排放。按相同条件配对浓度排气流量时间并修正背景。NO与NO2是单独物质：无实测物种分布不能拆分总NOx或NO2当量质量。须核验化石碳。不将法规限值发动机标准或必然排放因子当数量。

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

###### 二氧化氮排至即时未特指空气 (`test_no2`)

仅用于声明空气子介质下实际实测逐物质治理后发动机试验排放。按相同条件配对浓度排气流量时间并修正背景。NO与NO2是单独物质：无实测物种分布不能拆分总NOx或NO2当量质量。须核验化石碳。不将法规限值发动机标准或必然排放因子当数量。

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

###### C型瓦楞纤维纸板发运保护 (`cardboard`)

仅用于本单一规格实际独立保护，排除于M。称量应归属净领用。纸板要求C型瓦楞且纤维至少80%；LDPE薄膜非自粘未增强。不杜撰整车包装量或一次性假设。

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

###### 非泡沫LDPE保护薄膜 (`ldpe_film`)

仅用于本单一规格实际独立保护，排除于M。称量应归属净领用。纸板要求C型瓦楞且纤维至少80%；LDPE薄膜非自粘未增强。不杜撰整车包装量或一次性假设。

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
| `allocation_causal` | shared_operations | 优先按配置工单直接分开测量。以实测因果阶段时间负载物料及服务工单核对共享制造精整集成试验电力气体领液及实际试验工装更换；含待机返工不合格负担。不同起重机不能默认每辆均分。记录驱动理由不确定性敏感性；用实际前景依据，不设通用质量时间分配因子。 |  |
| `allocation_receipts` | chassis_and_assemblies | 采购或客户提供底盘组件带有实际供货清单负担及边界。不能重复所供总成内组件制造原料收货及已含燃油液。内部在制品排出可回用试验油及回用试载工装不能每工单当新整件消耗。记录实际更换服务时段。 |  |
| `allocation_balance` | manufacturing_batch | 在同一期间配置核对收货净安装余留交付质量、在制品退回回收及各外运废物；分开试验消耗交付余留燃油。件数体积仅按实测零件质量密度核对物理质量。将不合格返工归属验收机器。废料在接收边界离开，不自动抵扣避免原材料或处置。真实多产出制造须明确功能及有依据分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | reference_product | 校准净称重 | 型号；配置；序列号；验收净质量 M；秤皮重；安装随车固定存放件；工作液余留燃油；验收；排除保护 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每种完整验收配置 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 每台验收净质量 | 秤校准；净称重票；完整整车验收 |
| cp_configuration | integration; acceptance | configuration | 清单接口验收台账 | 型号序列图样修订；底盘上车发动机角色；实际取力；吊臂支腿回转卷扬控制；配重副臂；供货完整性；场址期间；试验准则结果 | 将各实际清单项工厂工序对应原子交换或有依据排除。核验供货内部件底盘上车集成、实际试载幅度配置及交付液配重状态。目录作业重量法规额定值不能提供M或试验配方。 | kg | 每次装配修订验收 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 一种可追溯完整配置 | 签认图样清单；供货范围；实际检查试验结果 |
| cp_material | fabrication; finishing; integration; acceptance; packout | single stock/consumable | 净领用及称重 | 单一牌号设计配方；状态；净kg；领用退回；回收；换算时密度温压；服务工单；验收数 | 分别称量各指定坯料焊丝气体粉末砂盘水配方油冷却液脂尾气处理液保护。核对净新补加及余留退回。底盘发动机内已含液及采购溶液组分不能重复收货；不设通用密度浓度用量。 | kg | 每次领用退回批次 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 应归属净质量 / 同一配置的验收机器数 | 秤；安全数据表证书；净库存服务工单台账 |
| cp_parts | integration | single installed component | 组件称重及完整性 | 零件设计；交付安装kg；实际数；已含内部件液体；供货国家；收货本地路线；验收数 | 称量各净供货底盘吊臂支腿支承卷扬操作室控制螺栓软管缸泵桥电池设计或使用实际核验批次质量数量记录。记录已含边界；供货总成替代内部件及本地制造。声明完整性前展开实际缺失接头线束传感器其他清单项。 | kg | 每批供货装配 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 应归属安装质量 / 同一配置的验收机器数 | 秤；供货边界；零件设计证书清单 |
| cp_count | integration | truck_tyre; upper_diesel_engine | 设计专属件数 | 单一设计；安装数；收货退回；供货已含项；批次实测kg/件；上车发动机非推进用途；验收数 | 计数各选定单一设计实际安装件数并保留公开件数。以校准称重取得实际批次净零件kg/件，仅用于物理清单核对。排除采购底盘已含推进发动机轮胎；不设通用轮数发动机重量。 | Item(s) | 每批供货装配 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 应归属安装件数 / 同一配置的验收机器数 | 清单件数；收货退回台账；校准零件称重 |
| cp_oil_volume | integration | hydraulic_oil | 净配方液体体积 | 供货配方油分；表计L或m3；新填充补加；退回回收；余留填充；质量核对实际密度温度；验收数 | 计量实际净供货矿物液压液体积；按1 L =0.001 m3换算并保留公开体积。核对收货填充退回回收余留。仅为核对M内余留kg测量声明温度密度；额定油箱容积不是填充消耗。 | m3 | 每次计量填充退回批次 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 应归属净液体体积 / 同一配置的验收机器数 | 表计校准；组成；实际密度温度填充平衡 |
| cp_energy | fabrication; finishing; integration; acceptance | electricity | 表计及因果分配 | 阶段；电压来源；kWh；时段；实际负载时间；待机返工；共享总量；验收数 | 计量实际阶段能量，按1 kWh =3.6 MJ换算并以实际因果时间负载返工核对共享实测总量。额定安装功率手册起重工况发动机功率不能确定工厂电力。 | MJ | 每个实际计量时段批次 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 应归属电能 / 同一配置的验收机器数 | 表计校准；账单；因果负载台账 |
| cp_fuel | acceptance | test_diesel; delivery_diesel | 分开消耗余留燃油台账 | 单一石油牌号；化石生物证书；加注退回；试验消耗kg；余留kg；收货底盘燃油；体积时实测密度温度；实际发动机试验时段；验收数 | 称量或按实际密度温度计量全部加注供货余留最终余留退回。以核对实测燃油平衡确定试验消耗。单独记录交付余留并纳入M，防止重复收货底盘内燃油。无实测燃油关系不能以发动机额定功率乘时数计算。 | kg | 每次实际发动机试验最终加注 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 分开应归属消耗余留kg / 同一配置的验收机器数 | 燃油表秤；组成平衡；试验验收记录 |
| cp_waste | fabrication; finishing; acceptance | single exported waste | 分类外运称重 | 单一废物；合金配方；干湿；油水金属含量；外运kg；回收；接收处理；验收数 | 分别称量各实际边角料洁净切屑焊接飞溅废砂盘捕集粉尘粉末过喷收集清洗液废液压油。记录组成接收边界。内部回收液粉不是外运、空气粉尘不是捕集废物、直接排水要求逐物质介质卡片。 | kg | 每次外运核对批次 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 应归属外运废物质量 / 同一配置的验收机器数 | 秤；组成；接收处理凭证 |
| cp_emission | finishing; acceptance | single air species | 逐物质治理后监测 | 物质；化石生物来源；介质子介质；粒径；实测浓度排气体积时间；相同参考条件；治理背景；实际发动机精整时段；验收数 | 按相同采样温压湿度条件实测治理后逐物质浓度排气体积；在实际应归属时段积分修正背景记录不确定性。选定时核验即时未特指空气及未特指粒径。分别测量NO与NO2；无物种分布的NO2当量NOx不能提供两种物质。核验CO2/CO化石碳。不设必需排放或按标准推定数量。 | kg | 代表性实际排放时段 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 应归属实测物质质量 / 同一配置的验收机器数 | 监测；采样流量校准；碳物种介质依据 |
| cp_water_resource | finishing | groundwater | 井表计及含水层记录 | 场址国家；可再生淡水含水层；表计m3；时段；泵送处理；回用；验收数 | 计量实际符合限定工厂井取水并展开泵送处理；排除内部循环。记录含水层可再生淡水依据；同一水源不能又当自来水采购。 | m3 | 每个计量时段批次 | 同一声明生产期间；披露缺口 | 声明汽车起重机集成工厂 | 应归属取水体积 / 同一配置的验收机器数 | 表计；含水层场址依据；水平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | 物理实测正值M与每个分子使用相同型号配置生产期间验收数。核对底盘上车供货完整性、安装随车固定存放配重副臂、余留液燃油及实际实测零件质量件数体积换算。目录公路作业桥荷重量不能满足净称重规则。 | cp_configuration; cp_mass; cp_parts; cp_count; cp_oil_volume; cp_fuel |
| `quality_coverage` | inventory_and_links | 披露缺失实际清单路线卡片UUID测量供货运输接收链接及不确定性。以场址记录确定本地外购结构替代、实际粉末其他精整及实际发动机载荷试验。不设通用钢牌号产率组件重量液密度填充轮数试载时数排放寿命分配因子。 | cp_configuration; cp_material; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | architecture_evidence | Grove TMS800E版权2020第4–5页及物理第64页页脚、Liebherr LTF1060-4.1编码lwe-td-199-06-defisr04-2023第8、11、25页及物理第32页页脚是历史型号专属配置依据。不证明实际工厂坯料供货清单完整性当前发动机法规选项净M寿命。不采用载荷表桥荷限值油箱容积目录质量作为数量。 | grove-tms800e-2020; liebherr-ltf1060-2023 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求一种完整公路柴油伸缩起重机配置、底盘上车一起、正值物理实测M kg及cp_mass称重验收记录。参考产出为1kg；按normalize_mass归一kg、MJ、m3、件数分子并保留各公开参考属性。余留液燃油交付排除须可追溯。 |  |
| `validation_bom` | inventory | 按清单供货边界核对实际底盘中间上车架吊臂伸缩支腿回转卷扬绳钩配重副臂操作室控制传感器液压交付液。区分取力独立上车发动机、本地制造收货、试验消耗余留燃油及实际件数体积物理质量核对。完整覆盖声明前展开缺失实际项路线。 |  |
| `validation_identity` | all inventory rows | 核验公开类型化学配方设计路线完整性地区原参考属性单位组及官方本地化名。非推进上车发动机不是底盘发动机；单钢丝不是钢丝绳。NO不是NO2/N2O/NOx当量；即时空气不是长期空气土壤。地下水是资源、供货自来水是产品、收集废油水是废物、排放粉尘不是捕集粉尘。 |  |
| `validation_claims` | dataset_claims | 无实际路线及链接上游运输接收覆盖不能声明完整摇篮到工厂门。制造质量不能确定等起重工况公路载荷寿命服务性能法规符合或方法学批准。科学审查仍待完成。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置前景完整柴油伸缩臂汽车起重机制造；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实测M放大的相同完整整车配置制造；单独声明上游运输处理 |
| excluded_use | 公路行驶起重服务、客户作业维护寿命报废、独立起重机部件、其他车辆牵引路线及方法学批准 |
| required_metadata | 全部参考限定；型号序列图样清单；底盘上车供货边界发动机取力角色；安装随车固定存放配重副臂卷扬完整性；液配方实际填充余留燃油；实测M交付排除；实际制造精整试验路线准则结果；材料证书；场址期间件数；供货接收链接因果分配 |
| required_quality_disclosure | 未解决身份测量清单路线链接；实际件数体积质量核对；不合格返工回收；分配不确定性；历史制造商依据限制 |
| update_trigger | 整车吊臂配重发动机取力清单设计、供货完整性、本地外购路线、精整液配方、试验验收交付状态场址期间分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| grove-tms800e-2020 | handbook | Grove/Manitowoc, TMS800E Product Guide, pp.4–5 specifications; physical p.64 unnumbered footer: copyright2020, FormNo.TMS800E, PartNo.05-013-2M-0120. https://www.manitowoc.com/sites/default/files/media/divers/file/2020-04/TMS800E-ProductGuide-Combo.pdf | 历史伸缩上车液压卷扬变幅操作室及高强度低合金钢底盘支腿结构；型号专属配重及地区发动机尾气处理液选项。不采用工厂路线必需性钢牌号厚度组件数量质量填液燃油排放因子载荷表值法规验收寿命。 |
| liebherr-ltf1060-2023 | handbook | Liebherr, LTF1060-4.1 technical data, printed/physical pp.8,11,25; physical p.32 unnumbered footer code lwe-td-199-06-defisr04-2023. https://assets-cdn.liebherr.com/versions/201c3870-84a1-4347-b89d-a20060a9c08f/original/ | 历史标准客户提供卡车底盘、独立上车柴油驱动、焊接钢车架伸缩支腿回转卷扬安全控制结构及行驶配重配置区分。文件编码标识04-2023版本语境；URL元数据不作为出版日期。不采用通用供货底盘双发动机必需性能力重量试载比例当前符合或工厂消耗。 |
