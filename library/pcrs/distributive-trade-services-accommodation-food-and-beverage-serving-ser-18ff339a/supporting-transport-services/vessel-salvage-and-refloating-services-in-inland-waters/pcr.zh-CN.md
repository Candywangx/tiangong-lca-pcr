---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.vessel-salvage-and-refloating-services-in-inland-waters
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 内河船舶打捞与复浮：回收任务

## 1. 范围与适用性

适用于内河湖泊运河等内陆水域遇险沉没船舶及其已识别货物回收，包括起浮、扶正倾覆船舶及搁浅船舶复浮。定义实际回收终点及保管移交。调动调查稳定、按需减载、潜水、吊升浮力、排水及切割仅在实际回收范围内纳入；不强制采用单一设备路线。[来源：`un-cpc-67532`；`usace-mcalpine-salvage`]

本方法覆盖明确的非独立拖带回收子集。排除独立交付运输性推拖、沿海远洋救捞67531、救生艇搜救、海事消防、警务公共秩序、普通运输及独立销售拆船或清污。实际回收移交所必需拖移作为已识别支持阶段或购买过程计一次；不证明独立销售拖带的归类。

原船货是被回收的客户资产，不是新制造产出。以保管台账保留身份初始状态数量移交。其既往制造不重复作为本服务输入，回收不自动形成避免污染避免制造或废钢替代抵扣。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.vessel-salvage-and-refloating-services-in-inland-waters |
| classification_refs | CPC3.0 67532；较窄非独立拖带回收范围 |
| covered_products | 具有明确回收移交的内河船货打捞起浮扶正搁浅复浮 |
| excluded_products | 独立拖带推送；沿海救捞；救生消防警务；普通运输；独立拆船清污 |
| representative_product | 对明确船货及声明成功终点完成的一次验收内河回收任务 |
| production_route | 调查建立初始状态 → 实际稳定回收阶段 → 状态保管移交核验 → 归属清场返回 |
| market_state | 完成的明确回收服务；原财产回收另行核算 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 将已识别内河事故对象回收起浮扶正或复浮至约定状态移交 |
| How much | 一次验收任务，声明船货身份初始状态及确切完成范围 |
| How well | 符合实际方案的稳定浮态回收移交验收判据，不设通用成功比例 |
| How long or cycle | 从完整任务至验收终点，包括实际待命失败尝试天气高水位延误调动返回 |
| reference_flow_link | `recovery_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成且限定信息齐全的内河船舶或货物回收任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 任务对象编号；船型尺寸排水量及货物身份质量；遇险沉没倾覆搁浅初始状态；深度流速水位能见度；实际受纳水体/类型/位置及适用时实测盐度；底床污染基线；桥闸通达约束；阶段计划实际路线；船起重泵潜水切割设备；实际功率载荷时间；待命失败尝试；成功终点保管交接；支持拖移供应商边界 |

item为正式Item(s)的单数别名，导出使用Item(s)。明确回收任务不是通用一艘一吨一拖带或一次起吊。仅货物整船扶正复浮任务须分别保留范围状态情景。合同整任务完成只计一次，不按每次吊升抽水小时回收组件重试另算。部分失败工作保留负荷并披露终点，不虚构成功完整产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `task_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_task绑定初始状态回收阶段验收终点保管交接；不同实物范围任务不因计数相同而等价。 |
| `fuel_mass` | diesel; petrol | 质量 | kg | 按实际发动机泵起重工况测量燃料并记录相应载荷时间；铭牌功率或事故对象质量不是实测燃料或能量。 |
| `water_origin` | oily_water; sediment; benzene_water | 质量；体积 | kg; m3 | 区分初始事故污染背景回收污染物及打捞新增释放；保留干湿及浓度基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已调查内河事故对象及记录的作业前污染底床状态；实际可用回收资产 |
| starting_condition_role | foreground_start |
| product_classification_scope | 明确内河打捞回收复浮子集；排除独立拖带及公共救援功能 |
| recursive_input_rule | 采购回收阶段及必要支持拖移按确切终点进入一次；不重复整项目及分包活动 |
| upstream_dataset_requirement | 实际燃料电力气体材料供应、工作船设备寿命份额、接收处理及支持运输 |
| disclosure | 初始事故污染河流条件；实际阶段设备；完成接口；原财产保管；新增释放；供应商上游缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_recovery` | 纳入实际调查调动稳定卸载减重吊升扶正复浮排水必要支持拖移保管交接清场返回；按真实阶段方案选择，不作为通用作业配方。 | usace-mcalpine-salvage |
| `boundary_diving` | 仅实际使用时纳入专业潜水资源，记录真实项目设备气体能源时间条件；本清单不规定潜水切割操作程序。 | hse-inland-diving |
| `boundary_casualty` | 初始船货油以独立身份保管污染台账记录，不是新制造共产品。分别记录回收量残留状态接收方及实际新增环境释放。 |  |
| `boundary_actual` | 筛查全部实际能源、起吊/潜水/切割气体和材料、支持拖移、索具/围油栏及资产份额、水土扰动、各废物及物种释放，每个实际交换分别增加原子行。对排入水体的释放，识别真实受纳水体。依据实际受纳环境、有记录的流库定义及LCIA适用性选择各排放区室。内河服务分类不意味着淡水，盐度本身也不足以将内陆湖认定为海洋区室。区室映射或表征未解决时保留物理受纳环境及实测释放量，不强制归入淡水/海水，也不把未知影响当零。 | fao-water-areas |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| recovery | 调查支持完成明确内河回收 | required | 实际回收项目移交，含共享资源及整任务核算 | foreground_production | 每参考流 |
| lifting | 按实际计划吊升扶正浮力辅助或排水 | conditional | 实际设备路线；并非每任务均须各步骤 | foreground_production | 每参考流 |
| diving | 实施实际专业潜水贡献 | conditional | 仅实际潜水阶段 | foreground_production | 每参考流 |
| cutting | 实施实际记录切割贡献 | conditional | 实际指定切割路线；不假设水上水下方法互换 | foreground_production | 每参考流 |

### 过程：按实际计划吊升扶正浮力辅助或排水 (`lifting`)

#### 输入

##### 产品流

###### 钢丝起吊吊索 (`steel_sling`)

实际索具材料寿命份额；保留额定配置记录，不假设通用起吊能力。

- 选定流：钢丝起吊吊索
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 增强橡胶充气起浮袋 (`lift_bag`)

实际浮力辅助路线时适用；分别记录气袋结构及供气，不预设起浮体积。

- 选定流：增强橡胶充气起浮袋
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 浮式打捞起重机 (`floating_crane`)

实际起重路线时适用；声明起重机浮台动力总成边界，避免重复已含船艇组件。

- 选定流：浮式打捞起重机
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 潜水排水泵 (`pump`)

实际排水时适用；保留泵能力工况及上游制造份额；电力燃料另行实测。

- 选定流：潜水排水泵
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

### 过程：实施实际专业潜水贡献 (`diving`)

#### 输入

##### 产品流

###### 呼吸级压缩空气 (`breathing_air`)

仅外供呼吸空气；记录组成质量及气瓶质量衡算。内部压缩空气不能在压缩机能源之外再次当外购输入。其他实际混合气须具体另列。

- 选定流：呼吸级压缩空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 商用水面供气潜水系统 (`diving_system`)

实际专业潜水时适用；记录配置压缩机舱室覆盖及有依据利用；不预设气体或深度。

- 选定流：商用水面供气潜水系统
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

### 过程：实施实际记录切割贡献 (`cutting`)

#### 输入

##### 产品流

###### 工业氧气 (`oxygen`)

实际记录的切割气体时适用；与呼吸气区分，记录气瓶退回库存。

- 选定流：工业氧气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 乙炔 (`acetylene`)

仅工作计划记录的实际水上氧乙炔切割路线；不规定此气体用于水下切割。其他工具气体按实际另列。

- 选定流：乙炔
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 水上氧乙炔切割装置 (`cutting_rig`)

实际切割设备时适用；记录工况寿命份额；不假设所有沉船均须切割。

- 选定流：水上氧乙炔切割装置
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

### 过程：调查支持完成明确内河回收 (`recovery`)

#### 输入

##### 产品流

###### 石油基柴油 (`diesel`)

仅实际打捞支持船起重机发电机或泵；记录中区分各发动机工况燃料规格。事故船原有燃料不是采购运行输入。

- 选定流：石油基柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 石油基汽油 (`petrol`)

实际汽油泵或支持艇运行时适用；与柴油及事故船回收燃料区分。

- 选定流：石油基汽油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 交流电 (`electricity`)

实际外购岸电充电支持用电；柴油内部发电不能作为另一外购输入。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 自来水 (`water`)

仅实际新鲜清洁工艺水；从事故船抽出的河水另有来源体积记录。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 矿物液压油 (`hydraulic_oil`)

实际起重绞车泵液压油净消耗；区分原船油品及供应商已含维护。

- 选定流：矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 聚丙烯吸油垫 (`sorbent`)

实际用于打捞围控的吸油垫时适用；分别测量领用回收及吸附污染物。

- 选定流：聚丙烯吸油垫
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 浮式围油栏 (`boom`)

实际部署围油栏时适用；声明复合设计部署时长及有依据寿命使用份额，不预设一次性。

- 选定流：浮式围油栏
- 流属性/单位：长度 / m
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 内河打捞支持工作船 (`workboat`)

实际工作船制造大修退役份额，明确船体、发动机及舾装边界；排除事故船制造。

- 选定流：内河打捞支持工作船
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

#### 输出

##### 产品流

###### 已完成内河回收任务 (`recovery_service`)

在声明回收状态保管接口验收的一次任务。整项目废物释放行保留真实产生阶段来源，不表示释放仅发生于完成时。

- 选定流：已完成且限定信息齐全的内河船舶或货物回收任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_task`
- 来源：

##### 废物流

###### 含油打捞排水废水 (`oily_water`)

实际收集排水流，明确原有新增污染来源组成处理。不得将全部抽排河水视为危险废物或污染释放。

- 选定流：含油打捞排水废水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 回收河床底泥污泥 (`sediment`)

回收时实际移除材料时适用；记录干湿基污染及接收方，与原位再悬浮区分。

- 选定流：回收河床底泥污泥
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废矿物液压油 (`spent_oil`)

仅打捞设备实际维护废物；保管处理与事故船油品分开。

- 选定流：废矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 饱含油的聚丙烯吸油垫 (`oily_sorbent`)

实际废垫及吸附液体；记录组分衡算接收方，不重复回收油。

- 选定流：饱含油的聚丙烯吸油垫
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废钢丝起吊吊索 (`waste_sling`)

实际退役索具材料及实际回收处理；不自动钢材替代抵扣。

- 选定流：废钢丝起吊吊索
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废碳钢切割边角料 (`cut_offcut`)

仅合同内实际弃置切割残料；作为客户财产移交的原船回收段不是新钢材共产品。

- 选定流：废碳钢切割边角料
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`co2_air`)

仅运营方实际燃料切割碳氧化；不设负的避免事故排放抵扣。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 一氧化碳，排入空气 (`co_air`)

实际运营方发动机切割物种，须实测或有明确活动特定系数依据。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 一氧化氮，排入空气 (`no_air`)

运营方物种分辨释放；以二氧化氮计的氮氧化物总量须先有组分划分依据。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 二氧化氮，排入空气 (`no2_air`)

实际二氧化氮与一氧化氮分开；保留来源发动机工具及空气环境。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 二氧化硫，排入空气 (`so2_air`)

采用实际燃料硫氧化或尾气证据；不预设硫含量。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 空气动力学直径小于2.5微米的颗粒物，排入空气 (`pm25_air`)

运营方实际燃烧或切割产生的、按粒径分辨的颗粒组分；金属物种分开，避免与总颗粒物重叠。

- 选定流：空气动力学直径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

###### 苯，排入淡水 (`benzene_water`)

仅在区分背景/事故污染后，实际测得且归属打捞的新增苯释放进入真实受纳水体，并有流/区室映射依据支持该水体为淡水时适用。实际受纳介质不同须另设苯/区室流行，保留独立受纳环境证据及必要的未解决绑定，不得沿用本淡水卡。不推定每船含苯或全部回收油为苯。

- 选定流：苯，排入淡水
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_project` | 优先阶段设备仪表日志；共享调动待命高水位延误重试按有记录实际项目活动分配至验收任务范围；不得按救助报酬或货值分配。 |  |
| `allocate_assets` | 按有依据寿命利用实际任务使用分配工作船起重浮台泵潜水切割装置吊索浮袋；供应商总体资产与已含组件不可同时计入。 |  |
| `allocate_custody` | 回收船货是原财产，不是新生产共产品。回收量去向不能自动按收入分配或抵扣避免制造；后续回收拆解研究边界独立建模。 |  |
| `allocate_pollution` | 既有事故污染与运营方燃烧新增溢漏扰动释放分别记录。移除污染物质量不是负排放，不默认避免未来释放。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | recovery | recovery_service | 前景记录 | 任务对象货物编号；初始状态质量；深度流速水位；桥闸限制；方案阶段；设备；实际活动；尝试；验收移交；实际水体编号/类型/位置；适用时水文连通性及带单位的盐度 | 核对调查实际方案设备阶段日志及签认回收状态保管移交；明确保留未完成失败范围。 | item | 每阶段任务 | 同一声明任务报告期 | 实际内河回收场址及指定设备 | 每参考流 | 调查；照片；阶段记录；签认移交；受纳水体表征 |
| cp_energy | recovery | diesel; petrol; electricity | 前景记录 | 发动机工具编号；燃料库存；领用退回；岸电；实际功率载荷时间；待命重试行驶；份额 | 逐来源计量运营方实际燃料外购电；核对完整周期，不把事故原燃料当采购供应。 | kg; kWh | 工况区间任务 | 同一声明任务报告期 | 实际内河回收场址及指定设备 | 每参考流 | 仪表校准；燃料衡算；工况日志 |
| cp_material | recovery | water; hydraulic_oil; sorbent; steel_sling; breathing_air; oxygen; acetylene | 前景记录 | 具体物质产品；组成；气瓶库存质量；领用退回；消耗退役；任务阶段来源 | 采用实际库存气瓶称量或可追溯供应量；区分呼吸切割气及内部生成供应；记录材料寿命份额。 | kg; m3 | 领用事件及期间 | 同一声明任务报告期 | 实际内河回收场址及指定设备 | 每参考流 | 库存气瓶记录；组成；供应商边界 |
| cp_asset | recovery | boom; workboat; lift_bag; floating_crane; pump; diving_system; cutting_rig | 前景记录 | 资产编号配置；上游边界；实际使用；维护退役；寿命证据；任务份额 | 工作设备关联上游制造退役；记录物理寿命实际阶段利用，已含组件不重复。 | item; m | 资产事件期间 | 同一声明任务报告期 | 实际内河回收场址及指定设备 | 每参考流 | 资产维护台账；利用寿命证据 |
| cp_waste | recovery | oily_water; sediment; spent_oil; oily_sorbent; waste_sling; cut_offcut | 前景记录 | 具体废物；原有新增来源；数量；水油固体组成；干湿基；接收处理；份额 | 逐收集流及保管计量；区分回收客户财产原污染物运营废物处理排水。 | kg; m3 | 每次收集转移 | 同一声明任务报告期 | 实际内河回收场址及指定设备 | 每参考流 | 废物联单；采样；接收记录 |
| cp_release | recovery | co2_air; co_air; no_air; no2_air; so2_air; pm25_air; benzene_water | 前景记录 | 来源阶段；基线；实际物种/粒径组分；燃料尾气或浓度流量；实际接收介质/水体/类型/位置；相关盐度/水文证据；流库区室定义及LCIA映射/适用性；滞留移除污染物；证据系数单位 | 测量实际运营方排放或相对基线的新增释放，或使用明确且有依据的来源/活动系数；区分既有污染。按boundary_actual将各释放匹配实际受纳环境及有依据的流库区室，记录映射和LCIA适用性或未解决缺口。benzene_water仅用于有依据的淡水接收，其他接收介质须另设具体行。未解决质量衡算差值仍保留为缺口。 | kg | 事件工况任务 | 同一声明任务报告期 | 实际内河回收场址及指定设备 | 每参考流 | 基线/排放测试；质量衡算；系数适用性；受纳环境表征；有记录的区室/LCIA映射及局限 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_denominator | recovery_service | N = 确切初始状态终点范围的验收完成回收任务数，须为正值。组成吊升回收吨数不增加任务数。 | cp_task | N |  |
| exchange_allocation | 所有清单行 | 按有记录物理驱动将各实测分子分配至实际阶段设备完整任务活动，再除以N；保留失败尝试待命返回。 | cp_task; cp_energy; cp_material; cp_waste | 每参考流交换量 |  |
| asset_allocation | boom; workboat; lift_bag; floating_crane; pump; diving_system; cutting_rig | 按有依据寿命利用实际任务份额分配制造维护退役；保留浮台起重船共享边界，归属数量除以N。 | cp_asset; cp_task | 每参考流资产份额 |  |
| source_release | co2_air; co_air; no_air; no2_air; so2_air; pm25_air; benzene_water | 按来源特定的测量、衡算或有依据的系数，解析实际运营方排放或新增物种/粒径组分释放，区分背景/事故来源及收集质量，再将归属数量除以N。不得把回收污染转为负排放。 | cp_release; cp_waste; cp_task | 每参考流物种量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_object | recovery_service | 初始船货身份状态内河地理验收回收终点保管完整；不得静默选择独立拖带。 | cp_task |
| dq_route | 所有清单行 | 实际吊升排水潜水切割路线及能源气体设备日志，不采用通用打捞物料清单或寿命。 | cp_energy; cp_material; cp_asset |
| dq_pollution | oily_water; sediment; benzene_water | 作业前基线、实际收集/释放污染物及物种具有受纳水体/区室证据。记录流库及LCIA映射适用性，包括未解决的内陆半咸水/咸水情景；区分未知与零。 | cp_waste; cp_release |
| dq_identity | 所有清单行 | 关联数据生产前核定流属性单位支持；归档计数支持不是新流确认。 | 身份直读核验 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_scope` | 要求明确内河船货回收起浮扶正复浮终点；拒绝沿海独立运输拖带公共救生警务消防独立拆船清污。 | un-cpc-67532 |
| `validate_reference` | 要求唯一recovery_service为1 item及正值N，实际初始状态阶段设备签认移交完整；不重复阶段整任务或回收财产制造产出。 |  |
| `validate_release` | 要求原污染与新增释放证据分开，明确各具体物质及实际受纳环境、有依据的流库区室映射与实际废物去向。淡水苯卡仅用于有依据的淡水接收，其他介质须独立具体行。拒绝从内河分类推定淡水或仅凭盐度归入海洋，拒绝预设避免污染、废钢替代及把整油视为单物种捷径。未解决的区室/LCIA覆盖须披露。 |  |
| `validate_coverage` | 要求实际来源关联燃料气体资产及完整周期分配；基线阶段处理覆盖未知须披露。目标检查通过不是安全打捞潜水切割批准。 |  |
| `validate_unit_export` | item仅为数量属性正式单位Item(s)的本地单数别名。导出时使用Item(s)，保留同一数值计数及完整限定的服务定义；更换显示符号不得改变流属性、服务范围或归一化分母。不得通过改写单位将服务项转换成时间、质量、距离或另一服务族，也不得对已按参考流归一化的数量再次归一化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程内河船货回收任务；较窄非独立拖带范围 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同一实际回收子型初始状态内河场址条件设备验收终点保管边界 |
| excluded_use | 独立拖带；沿海公共救援；通用每艘每吨回收系数；避免污染钢材抵扣；未限定回收再生 |
| required_metadata | 全部任务限定信息；N；阶段工况气体能源；资产寿命；原船货保管；污染基线；废物接收；实际受纳水体/类型/位置及相关盐度/水文证据；释放测量及有记录的流区室/LCIA映射或未解决缺口 |
| required_quality_disclosure | 较窄范围独立拖带排除；UUID缺口；实际路线范围；基线新增释放不确定性；处理上游缺失 |
| update_trigger | 初始事故河流状态回收成功终点方法设备污染基线供应商边界或重要数据质量变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-67532 | official_guidance | UNSD CPC3.0 67532. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67532 | 明确内河回收起浮扶正复浮范围及公共救援排除；不选择独立拖带。 |
| usace-mcalpine-salvage | official_guidance | USACE Louisville District, Salvage efforts to retrieve sunken barges continue at McAlpine Dam (2019). https://www.lrd.usace.army.mil/Media/News/Article/3637047/salvage-efforts-to-retrieve-sunken-barges-continue-at-mcalpine-dam/ | 观测内河分阶段回收减载起重切割及水位变化；仅案例证据，不采用通用设备数燃料得率工期。 |
| hse-inland-diving | official_guidance | HSE, Commercial diving projects inland/inshore, L104 second edition2014, official scope description. https://www.hse.gov.uk/pubns/books/l104.htm | 仅内河商用潜水适用性筛查；不推定完整规程程序法律合规或数值气体深度要求。 |
| fao-water-areas | official_guidance | FAO CWP渔业统计手册，Main water areas，Marine and inland waters，读取于2026-10-26。https://www.fao.org/cwp-on-fishery-statistics/handbook/general-concepts/main-water-areas/en/ | 仅支持内陆/海洋地理分类与淡水/咸水条件并非同一维度。该渔业统计指导不规定CPC适用范围、LCI/LCIA区室、盐度阈值或表征系数；真实受纳环境映射仍须具有所声明流库与影响方法证据。 |
