---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.general-cargo-vessel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 完整钢质柴油普通货船制造

## 1. 范围与适用性

完整新钢质干货普通货船制造，采用柴油机械推进及声明定距桨：船体分段制造/合拢、实际表面处理、外购推进/管路集成、货舱闭合及舾装集成、下水、港内/海上验收试验及净质量验收。选择一种实际船号、放行设计及交付配置。本方法窄于CPC49314。

排除油轮、仅集装箱船、滚装/客船、自卸船、非动力驳船、渔船/作业/军船、LNG/混合/电推进、独售船体/零件、修理再制造。货物/乘客、商业航行/吨公里、使用阶段加油、维护拆解及港口服务设施排除制造；实际建造转移拖航/验收海试属制造支持，须明确有界实测模块；不假定寿命/运货性能等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.general-cargo-vessel |
| classification_refs | CPC:3.0:49314; narrower |
| covered_products | 完整新钢质干货普通货船制造，采用柴油机械推进及声明定距桨：船体分段制造/合拢、实际表面处理、外购推进/管路集成、货舱闭合及舾装集成、下水、港内/海上验收试验及净质量验收。选择一种实际船号、放行设计及交付配置。本方法窄于CPC49314。 |
| excluded_products | 排除油轮、仅集装箱船、滚装/客船、自卸船、非动力驳船、渔船/作业/军船、LNG/混合/电推进、独售船体/零件、修理再制造。货物/乘客、商业航行/吨公里、使用阶段加油、维护拆解及港口服务设施排除制造；实际建造转移拖航/验收海试属制造支持，须明确有界实测模块；不假定寿命/运货性能等效。 |
| representative_product | 一艘新验收空载干货普通货船，具体船体/船舶柴油机械定距推进/货舱闭合及安装舾装；无通用尺寸载重量功率发动机数。 |
| production_route | 船体分段制造合拢；实际前处理涂层；推进系统舾装集成；下水转移；验收海试修正净质量放行。 |
| market_state | 完整验收空载船，声明留存技术流体/安装装备；货物人员燃油压载消耗物料临时测试装置独立备件排除净M。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造验收一种具体配置完整干货普通货船。 |
| How much | 1 kg验收净船制造输出，从每完整验收台实际M kg获得。 |
| How well | 放行设计/当前逐船验收检验方案及实际具备船级旗国依据；制造不建立运货服务等效。 |
| How long or cycle | 一次制造验收周期，无假定服务时长/商业航程。 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他货船及其他客货两用船 `8a495278-8b08-411f-942e-0c01d3e678ac` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 船号/型号；批准放行图纸/修订；船板型材牌号证书/厚度/自制外购；货舱/二层甲板/舱盖设计/安装吊货设备；船机供货型号/件数及独立实测质量/齿轮轴桨范围；机组泵管阀供货内含；电压/电缆雷达配置；安全舱室保温安装清单；实际涂料配方/路线；船厂场址/场际拖航/时期验收台数；当前逐船轻船检验/静水力参考位置依据；受控验收净M/修正；空货舱/液舱交付状态；留存技术油冷却液与排除燃油压载物料；供货预充范围；检验测试仪器/不确定性；上游公用工程运输处理覆盖 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | hull_power; finish_power; machinery_power; outfit_power; trial_power | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际低于1kV电网用户电按能量计；1kWh =3.6MJ；无质量换算/假定热值；其他电压供应方另匹配。 |
| engine_count | diesel_engine | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 实际供货装配船机件数为q_item，保留件分子除M；另取可追溯实际机质量kg用于安装质量核对；不将公开数量改Mass或以件数功率推机重。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明船厂接收实际供货船板型材及放行外购船机舾装；轧制发动机桨制造及公用工程属上游，除非明确实测场内模块；声明供货切割成形涂层状态。 |
| starting_condition_role | foreground_manufacturing_module |
| product_classification_scope | 完整新钢质干货普通货船制造，采用柴油机械推进及声明定距桨：船体分段制造/合拢、实际表面处理、外购推进/管路集成、货舱闭合及舾装集成、下水、港内/海上验收试验及净质量验收。选择一种实际船号、放行设计及交付配置。本方法窄于CPC49314。 |
| recursive_input_rule | 同类别外购完整船不能代分段投入或递归完整船制造；外购分段装备替代内含场内物料作业；内部块系统转移一次计；接收/供货边界决定。 |
| upstream_dataset_requirement | 扩展评价须相容实际钢化学推进舾装公用工程外包涂层入厂场际运输拖航废物处理数据及供应方版本覆盖；仅此前景非完整从摇篮到工厂门。 |
| disclosure | 船号/型号；批准放行图纸/修订；船板型材牌号证书/厚度/自制外购；货舱/二层甲板/舱盖设计/安装吊货设备；船机供货型号/件数及独立实测质量/齿轮轴桨范围；机组泵管阀供货内含；电压/电缆雷达配置；安全舱室保温安装清单；实际涂料配方/路线；船厂场址/场际拖航/时期验收台数；当前逐船轻船检验/静水力参考位置依据；受控验收净M/修正；空货舱/液舱交付状态；留存技术油冷却液与排除燃油压载物料；供货预充范围；检验测试仪器/不确定性；上游公用工程运输处理覆盖 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_configuration | finished_machine | 完整船限定为声明钢船体干货普通货船、船舶柴油机械推进及定距桨配置；Damen案例架构支持货舱推进具体性，不是通用尺寸功率运货额定节油因子；实际当前放行图纸决定，可选混合电池生物柴油路线在此排除。 | damen-cf5000 |
| boundary_manufacture | manufacturing | 实际制造表面舾装下水支持验收试验返工在执行处纳入；次序依场址，供货切材外包分段涂层下水前后安装须声明；各其他作业须自身物理交换，不用占位集合。 | bodewes-build |
| boundary_trials | trials | 仅声明试验起止负载与制造转移拖航内实际燃料实测排放纳入；独立外包拖轮服务须实测航次时间起终点实际供应方/燃料公用覆盖，不将其燃料重复至船海试；无商业服务清单/假定满载油柜。 | bodewes-build |
| boundary_water | sea_resource | 直接海水资源取用不同于外购市政水；实际冷却压载试验按记录盐度温度核对实测取用留存回水；回水实际介质组分温度状态各自交换；产品海水候选不建立基础资源；含油舱底处理及有依据最终排放另记。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| hull | 船体分段制造与合拢 | required | 接收实际船板型材；记录供货安装就绪范围与场内排样切割成形；按放行图纸焊板/分段、船体上建合拢；实际外购分段替代内含场内物料作业，不是另一完整船参考。 | foreground | 内部转移；验收完整船参考 |
| finish | 表面前处理及涂覆 | conditional | 纳入实际场内/外包前处理及逐种供货涂层；钢丸环氧防污卡为条件案例，非通用必需配方；已处理分段替代内含作业；处理可在合拢下水前后。 | foreground | 内部转移；验收完整船参考 |
| machinery | 推进及船舶系统安装 | required | 安装实际船舶柴油机械传动/轴桨/机组及声明泵管；供货内含装备流体不另计场内追加；外购部件须相容上游模块。 | foreground | 内部转移；验收完整船参考 |
| outfit | 货舱与船舶舾装 | required | 安装具体舱盖闭合/舵系/电气导航/舱室安全设计；列卡初始化各交换，实际追加如舵叶锚链救生艇舱壁各自明确实测后方可声称数据集完整。 | foreground | 内部转移；验收完整船参考 |
| trials | 下水、验收试验与净质量放行 | required | 记录实际下水方法/转移拖航模块/港内海试作业返工及验收船；读取受控当前检验生成净质量验收记录，无虚构整船秤；试验消耗与留存交付库存商业运营分开。 | foreground | finished_machine |

### 过程：船体分段制造与合拢（`hull`）

接收实际船板型材；记录供货安装就绪范围与场内排样切割成形；按放行图纸焊板/分段、船体上建合拢；实际外购分段替代内含场内物料作业，不是另一完整船参考。

#### 输入

##### 产品流

###### 热轧船用钢板 （`hull_plate`）

各卡一种实际图纸合格船用牌号/厚度/状态；接收可追溯板质量，声明切割就绪与场内排样范围；不假定Q345与AH36等效。

- 选定流： 热轧船用钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 热轧船用球扁钢 （`hull_profile`）

一种实际合格球扁截面/牌号，测领用减退回；其他角钢/扁钢各独立卡。

- 选定流： 热轧船用球扁钢
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 实心碳钢埋弧焊丝 （`weld_wire`）

条件实际埋弧焊丝牌号/直径及合格作业程序；净供丝及熔敷/回收核对；其他连接路线另记。

- 选定流： 实心碳钢埋弧焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 熔炼颗粒埋弧焊剂 （`weld_flux`）

条件一种实际埋弧焊剂配方；新补与外排熔渣分称，内部回收不重复；无通用焊剂配方。

- 选定流： 熔炼颗粒埋弧焊剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 交流电 （`hull_power`）

实际低于1kV电网用户分表船体切割成形、焊接、通风、吊运合拢电力含返工；更高电压另识别。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_scrap`）

实际出场干燥未处理分流船体机加工成形边角；复用库存内部转移；含漆/油废钢另记。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

###### 固体埋弧焊熔渣 （`weld_slag`）

条件实际分流熔融焊剂熔渣出场，排除焊丝头/粉尘；独立称。

- 选定流： 固体埋弧焊熔渣
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

##### 基本流

###### 颗粒物，粒径未特指 （`particle_air`）

条件有依据控制后船体制造颗粒即时至室外空气，子介质/粒径未特指；捕集尘为废物不是排放；测得粒径分级时替代。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_hull。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_hull`

### 过程：表面前处理及涂覆（`finish`）

纳入实际场内/外包前处理及逐种供货涂层；钢丸环氧防污卡为条件案例，非通用必需配方；已处理分段替代内含作业；处理可在合拢下水前后。

#### 输入

##### 产品流

###### 铸钢喷丸 （`blast_shot`）

条件实际表面前处理钢丸规范及补充质量；回收钢丸内部；开放矿物喷砂须不同磨料行。

- 选定流： 铸钢喷丸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 配方环氧船舶防腐底漆 （`epoxy_primer`）

条件一种实际混合供货底漆；基料/固化剂分购时各列，实测配方固含/留存干膜。

- 选定流： 配方环氧船舶防腐底漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 配方氧化铜船舶防污涂料 （`antifoul_coat`）

条件实际供货涂料配方，不是纯氧化铜；不规定通用防污剂/面积；不同涂层分列。

- 选定流： 配方氧化铜船舶防污涂料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 自来水 （`finish_water`）

条件实际市政产品水清洗需求，排除直接海水取用/循环水；体积须实测密度温度；无固定淡水假设。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 交流电 （`finish_power`）

实际低于1kV喷丸/涂漆/抽风/干燥可归属电；直接燃烧固化如实际执行另计燃料/排放。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

#### 输出

##### 废物流

###### 废钢喷丸 （`spent_shot`）

条件独立实测实际废钢丸及声明涂层污染；排除漆房滤材，另表征列卡。

- 选定流： 废钢喷丸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 废涂料残渣 （`paint_residue`）

实际产生分流配方漆过喷/残渣，无滤材/污泥合并；留存涂层非废物。

- 选定流： 废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

##### 基本流

###### 二甲苯（所有异构体） （`xylene_air`）

条件实测二甲苯异构体CAS1330-20-7控制后即时至空气未特指子介质；不以总VOC代二甲苯或假定水中防污释放。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

### 过程：推进及船舶系统安装（`machinery`）

安装实际船舶柴油机械传动/轴桨/机组及声明泵管；供货内含装备流体不另计场内追加；外购部件须相容上游模块。

#### 输入

##### 产品流

###### 柴油发动机 （`diesel_engine`）

实际一种供应商/型号已装配船舶推进柴油机；保留物品数量，计供货发动机件数；独立实测安装机重核对M，识别内含流体/齿轮箱；非道路43110用于船舶，不用于道路车。

- 选定流： 柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

###### 成品船舶减速齿轮箱 （`reduction_gear`）

条件另供具体齿轮箱质量/传动比/接口；发动机包内含则省略；直接传动架构明确声明。

- 选定流： 成品船舶减速齿轮箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

###### 成品钢制船舶螺旋桨轴 （`propeller_shaft`）

一种实际轴图纸材质/实测供货质量，排除轴承/螺旋桨；无风机主轴替代。

- 选定流： 成品钢制船舶螺旋桨轴
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

###### 船只螺旋桨及其桨叶 （`propeller`）

一种实际完整定距金属船桨，实际合金/图纸/直径/供货质量；独立桨叶不另重复；相容时上游砂铸PCR仅支持外购桨制造。

- 选定流： 船只螺旋桨及其桨叶 `8f01d846-f812-4209-a4c1-9f2daa531e79`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

###### 完整船用柴油发电机组 （`diesel_genset`）

一种实际完整接收发电机组配置/净质量，声明内含发动机/发电机/底架；不另计内含发动机/铜绕组。

- 选定流： 完整船用柴油发电机组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

###### 成品船用离心压载水泵 （`ballast_pump`）

具体泵零件号/壳材/供货电机内含及实测质量；舱底/消防泵各不同列。

- 选定流： 成品船用离心压载水泵
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

###### 无缝碳钢船舶系统管 （`steel_pipe`）

各卡一种实际牌号/直径壁厚/涂层供货，测质量长度/实测换算；管件另记。

- 选定流： 无缝碳钢船舶系统管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

###### 成品钢制船用蝶阀 （`butterfly_valve`）

具体放行阀体/口径压力/执行器内含及供货质量；不同阀功能各列。

- 选定流： 成品钢制船用蝶阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

###### 交流电 （`machinery_power`）

实际低于1kV吊装/安装/轴系对中/管焊电；内部产压缩空气一次计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_machinery。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_machinery`

### 过程：货舱与船舶舾装（`outfit`）

安装具体舱盖闭合/舵系/电气导航/舱室安全设计；列卡初始化各交换，实际追加如舵叶锚链救生艇舱壁各自明确实测后方可声称数据集完整。

#### 输入

##### 产品流

###### 成品钢制货舱舱盖 （`hatch_cover`）

具体完整舱盖配置/密封执行器内含/供货质量；场内制盖改实际钢/连接交换不重复。

- 选定流： 成品钢制货舱舱盖
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 完整船舶液压舵机 （`steering_gear`）

一种实际放行舵机子总成范围/零件号/质量；非内含另装舵叶排除，声明供货预充。

- 选定流： 完整船舶液压舵机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 成品钢制船舶水密门 （`watertight_door`）

一种放行门规范/实测供货质量，若规定含框/密封；其他闭合件各列。

- 选定流： 成品钢制船舶水密门
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 岩棉 （`insulation`）

条件实际岩棉等级密度/粘结/覆面及声明安装位置净称量；覆面分购则另记，无推定必需防火等级限值。

- 选定流： 岩棉 `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 成品绝缘铜船用动力电缆 （`copper_cable`）

一种电压/绝缘导体规范/实际供货质量，记录路线防火资质；无能量电缆向质量猜测。

- 选定流： 成品绝缘铜船用动力电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 （`switchboard`）

一种实际完整不超过1000V船舶配电盘，实际零件型号质量/内含开关；上游类别身份不是船用认证。

- 选定流： 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 成品船舶导航雷达 （`navigation_radar`）

一种实际放行完整雷达零件号/干质量，声明天线显示内含；独立无线电导航辅助各列。

- 选定流： 成品船舶导航雷达
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

###### 交流电 （`outfit_power`）

实际低于1kV舱室舾装/集成公用电；外购总成替代其内含物料作业。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_outfit`

### 过程：下水、验收试验与净质量放行（`trials`）

记录实际下水方法/转移拖航模块/港内海试作业返工及验收船；读取受控当前检验生成净质量验收记录，无虚构整船秤；试验消耗与留存交付库存商业运营分开。

#### 输入

##### 产品流

###### 柴油 （`trial_fuel`）

实际称量场内港内验收海试消耗化石柴油；独立记录牌号/硫/碳来源/供货；通用身份不给热值/燃烧因子；留存交付服务燃油与制造消耗分开。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

###### 配方矿物船机润滑油 （`engine_oil`）

实际一种配方等级/净加称量；机供货预充油内含不重复；留存与消耗废油核对。

- 选定流： 配方矿物船机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

###### 自来水 （`trial_water`）

实际市政产品水冲洗测试/声明留存技术回路，无海水资源替代；库存/排水另核对。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

###### 交流电 （`trial_power`）

实际低于1kV岸电试验检查电；船上发电改机组燃料排放一次计，内部电为转移。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

##### 基本流

###### 验收试验从海洋取用的海水 （`sea_resource`）

条件实际测试压载冷却直接海洋取水/海洋资源输入；实测体积及实际海水密度盐度温度换kg；不用市政产品水身份。

- 选定流： 验收试验从海洋取用的海水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

#### 输出

##### 产品流

###### 其他货船及其他客货两用船 （`finished_machine`）

1kg实际完整验收新钢船体柴油机械推进干货普通货船份额，具体船号配置/修正净M；限定信息约束较宽类别身份，非通用船舶生产混合/运输服务。

- 选定流： 其他货船及其他客货两用船 `8a495278-8b08-411f-942e-0c01d3e678ac`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

###### 废润滑油 （`used_oil`）

实际调试返工单独收集废矿物润滑油，非油柜库存/含油舱底水/交付留存油。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

###### 送处理的含油舱底废水 （`oily_bilge`）

条件一种分测海试舱底水质废物流送记录处理，规定水油浓度，排除回收油/清洁压载；直接处理出水物种须独立依据。

- 选定流： 送处理的含油舱底废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

##### 基本流

###### 二氧化碳（化石源） （`fossil_co2_air`）

条件实际海试化石CO2 CAS124-38-9即时室外空气未特指子介质排放，实测特定物种出口依据；无运营航行排放/默认渔船因子。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

###### 一氧化氮 （`nitric_oxide_air`）

条件分测NO CAS10102-43-9即时空气未特指子介质海试排放；以NO2计总NOx不替代；有依据NO2/N2O各独立实测行。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trials。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_trials`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_causal | shared_operations | 先场址工单按船设计阶段细分；共享切焊喷涂吊运坞岸试验公用工程用cp_allocation各交换实际实测因果负载时间需求并核对总供给排除作业；无默认载重量GT功率船面积份额。 |  |
| allocation_variants | hulls | 各船配置保留自身实测M及分子，返工废品负担归属验收建造；汇总须分别归一化及披露实测权重；后备物理经济分配须实际因果记录敏感性审查，不造百分比。 |  |
| allocation_recovery | outputs | 场内回收钢丸焊剂钢水为转移，无自动共产品避免生产抵扣；外排废钢废物保留实测状态处理责任；可售共产品须实际质量市场记录/审查处理；无未来拆船回收抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | trials | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每验收船号 | 当前完成验收周期 | 相同具体交付配置 | 每台验收净质量 | quality_survey当前原始重量检验；签署修正表；安装清单独立质量平衡；不确定性 |
| cp_hull | hull | 各原子过程行 | measurement | 图纸牌号炉号证书；板型领退；切割库存排样；焊接程序丝剂领用；分段转移；电；边角熔渣粉尘/实测室外颗粒 | 逐牌号耗材/分流出场称量，核对库存分段领退，计实际工单需求；记录供货切割范围；有排放时才采控制后物种气量时间/粒径覆盖。 | kg; MJ | 每船号工单；各报告时期库存表计闭合 | 完整声明建造周期含返工；验收船数匹配 | 所有实际纳入船厂外包作业 | 可归属交换数量 / 验收设备数量 | 校准；供货安装清单；工单；领退验收记录；缺失记录 |
| cp_finish | finish | 各原子过程行 | measurement | 表面积位置；实际磨料涂层配方/SDS固含混合；供给回收膜；水电；废物组分；二甲苯物种气流时间 | 各实际供货配方产品/不同废物分测，核对库存补给回收/留存涂层；体积换质量须同产品实测密度状态；控制后逐排放物种核实，不造制造防污剂水中释放。 | kg; MJ | 每船号工单；各报告时期库存表计闭合 | 完整声明建造周期含返工；验收船数匹配 | 所有实际纳入船厂外包作业 | 可归属交换数量 / 验收设备数量 | 校准；供货安装清单；工单；领退验收记录；缺失记录 |
| cp_machinery | machinery | 各原子过程行 | measurement | 供货零件型号；发动机实际件数/独立实测干安装质量；齿轮轴桨机组泵管阀范围质量；预充清单；对中安装记录；电 | 按Item(s)计实际供货装配船机，保留公开属性；独立称或取得实际可追溯机重记录核对完整船质量；其他件供货/另加流体逐项实测，内含与安装配置核对逐船物料。 | kg; MJ; Item(s) | 每船号工单；各报告时期库存表计闭合 | 完整声明建造周期含返工；验收船数匹配 | 所有实际纳入船厂外包作业 | 可归属交换数量 / 验收设备数量 | 校准；供货安装清单；工单；领退验收记录；缺失记录 |
| cp_outfit | outfit | 各原子过程行 | measurement | 舱盖舵机闭合型号质量；实际保温覆面；缆规范质量；盘电压内含；雷达范围；安全舱室安装表实测质量；电 | 各实际放行安装件供货实测；不同产品规范拆分，去外购模块内含重复；电缆能量属性无实际供货特定换算依据不能改质量；所有实际追加安装交换各自另记。 | kg; MJ | 每船号工单；各报告时期库存表计闭合 | 完整声明建造周期含返工；验收船数匹配 | 所有实际纳入船厂外包作业 | 可归属交换数量 / 验收设备数量 | 校准；供货安装清单；工单；领退验收记录；缺失记录 |
| cp_trials | trials | 各原子过程行 | measurement | 船号配置批准验收方案；下水转移拖航范围；试验燃油领退留存；油预充回路状态；计量水/实际海水取用密度及回水化学；试验时间负载；出口气物种流量时间；废油舱底水；放行返工；签署轻船检验净修正 | 记录实际试验方案结果/实测燃料水电含返工；取得签署当前轻船检验原始读数静水力计算/实测增减项，随后记录净交付修正；完整依据保留quality_survey；计量分物种实际气排放，总NOx不是NO质量。 | kg; MJ | 每船号工单；各报告时期库存表计闭合 | 完整声明建造周期含返工；验收船数匹配 | 所有实际纳入船厂外包作业 | 可归属交换数量 / 验收设备数量 | 校准；供货安装清单；工单；领退验收记录；缺失记录 |
| cp_allocation | manufacturing | shared_load | measurement | 总供给需求；实际分表负载时间；服务船号；排除作业 | 实测各交换因果需求时间及全部服务工单；记录驱动/全部份额核对实际总供给。 | MJ; h | 每共享批次/报告时期闭合 | 相同建造时期 | 全部服务场址船号 | 分摊实际因果需求；可归属数量 / 验收设备数量 | 总表闭合；敏感性；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | hull_plate; hull_profile; weld_wire; weld_flux; hull_power; steel_scrap; weld_slag; particle_air; blast_shot; epoxy_primer; antifoul_coat; finish_water; finish_power; spent_shot; paint_residue; xylene_air; diesel_engine; reduction_gear; propeller_shaft; propeller; diesel_genset; ballast_pump; steel_pipe; butterfly_valve; machinery_power; hatch_cover; steering_gear; watertight_door; insulation; copper_cable; switchboard; navigation_radar; outfit_power; trial_fuel; engine_oil; trial_water; sea_resource; trial_power; used_oil; oily_bilge; fossil_co2_air; nitric_oxide_air | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为实际同船配置交换经领退库存废物回收返工核对后的可归属量除匹配验收台数；各分子保留kg、MJ或发动机Item(s)，独立实测件重另闭合船安装表，不将机件数数值加入kg；任何体积密度/件数质量/浓度配方质量换算须实际同产品状态测量及声明不确定性，无假定密度/样本重；检验到净M推导为下列独立物理依据规则，不是normalize_mass追加代数条款。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_survey | finished_machine | cp_mass验收记录须源于合格责任人当前实际逐船轻船/重量检验；保留有日期船号吃水干舷位置原始读数复测、水密度、核实参考几何及实际纵倾横倾变形条件静水力模型、检查测深舱液/实测增减项；留存可追溯仪器计算软件版本签署/传播不确定性，核对完整放行安装表/独立称量库存件质量平衡；单一排水量不足；NMA2020仅支持方法架构，不是当前法规合规或数值阈值；缺物理检验修正依据阻断数据集使用。 | nma-lightship-2020 |
| quality_delivery_mass | finished_machine | 检验轻船状态与PCR净交付状态须明确核对；实际安装船体舾装及声明留存技术油冷却液一次含M；货物人员燃油压载物料临时脚手架试重包装独立备件排除；各修正据实际测量数量状态记录，缺安装项最终验收前补齐或独立核实实际安装质量；燃油满载重载重量总净吨设计样本轻船估计/猜残差不能替代M；不假定整船台秤。 | current survey; signed delivery correction; independent measured fit-list |
| quality_prefill | components | 独立实测发动机干安装质量/接收模块内含预充须核对整船M；另领油冷却液仅计供货内含之外追加；试验消耗移除流体/留存技术注入分开；润滑油不经机与试验重复；机组内含机不重复为推进机。 | supplier scope; weighing/fill records; hull BOM |
| quality_identity | flows | 要求实际牌号化学配方供货路线状态/供货内含件范围，保留公开参考属性；颗粒二甲苯化石CO2/NO须实际即时空气子介质物种依据；直接海水资源与产品水含油废水分开；无未测默认燃碳硫排放寿命。 | supplier certificates/SDS; outlet samples and calibration; identity audit |
| quality_acceptance | trials | 保留当前船体焊检水密压力系统对中舵电安全及实际港内海试验收记录，按放行设计执行；实际具备法定船级批准须可追溯；制造商营销不建立合规数值通过限或通用试验负载。 | released vessel plan; actual survey/test approvals; bodewes-build |
| quality_coverage | dataset | 各安装表路线交换声明实际实测计算估算缺失排除不适用；所有实际装备化学排放/外购拖航处理扩展原子行；记录一手覆盖不确定性供货版本缺口；来源提供架构不是完整厂清单。 | work orders; meter/stock closure; complete fit-list; coverage register |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1kg完整验收输出/同船受控净M及quality_survey/quality_delivery_mass物理依据，不接受虚构秤样本载重量吨位或仅排水量代理；有限计量检查核对声明q_item/M关系，不是实际检验充分性。 | nma-lightship-2020 |
| validation_basis | inventory | 验收船数建造期配置/分子单位与normalize_mass声明协议匹配；发动机Item(s)须独立质量核对，不覆盖属性或假定功率换质量。 |  |
| validation_modules | manufacturing | 核对供货分段推进机组舾装内含预充/安装物料；实际缺装备与其他处理连接支持路线须独立原子清单；查海试商业运营范围及外包拖航燃料重复。 |  |
| validation_releases | elementary | 核实物种CAS/实际介质子介质时间控制后；NO非以NO2计NOx或N2O；化石CO2须实测化石来源；粒级替代未特指重复；清洁海水回水热交换处理出水实际污染各自有依据，不全当含油舱底或海洋排放。 |  |
| validation_completeness | dataset | 保持身份物理数据缺口明确；使用前完整实际检验修正生产记录安装表供应运输公用处理覆盖/适用验收；结构检查通过不授科学批准或完整摇篮到门覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 完整新钢质干货普通货船制造，采用柴油机械推进及声明定距桨：船体分段制造/合拢、实际表面处理、外购推进/管路集成、货舱闭合及舾装集成、下水、港内/海上验收试验及净质量验收。选择一种实际船号、放行设计及交付配置。本方法窄于CPC49314。 |
| excluded_use | 排除油轮、仅集装箱船、滚装/客船、自卸船、非动力驳船、渔船/作业/军船、LNG/混合/电推进、独售船体/零件、修理再制造。货物/乘客、商业航行/吨公里、使用阶段加油、维护拆解及港口服务设施排除制造；实际建造转移拖航/验收海试属制造支持，须明确有界实测模块；不假定寿命/运货性能等效。 |
| required_metadata | 船号/型号；批准放行图纸/修订；船板型材牌号证书/厚度/自制外购；货舱/二层甲板/舱盖设计/安装吊货设备；船机供货型号/件数及独立实测质量/齿轮轴桨范围；机组泵管阀供货内含；电压/电缆雷达配置；安全舱室保温安装清单；实际涂料配方/路线；船厂场址/场际拖航/时期验收台数；当前逐船轻船检验/静水力参考位置依据；受控验收净M/修正；空货舱/液舱交付状态；留存技术油冷却液与排除燃油压载物料；供货预充范围；检验测试仪器/不确定性；上游公用工程运输处理覆盖 |
| required_quality_disclosure | 当前放行设计供货内含安装表；检验原始方法读数计算版本不确定性；修正净M交付流体；机件数独立实际质量；船厂时期海试返工库存平衡；实际缺交换/供货上游拖航处理缺口；分配敏感性；未决身份来源限制科学审查状态。 |
| update_trigger | 船体设计船板牌号推进货舱舾装配置供货自制外购涂层路线船厂公用海试方法时期检验交付状态物理依据身份解决变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| damen-cf5000 | handbook | Damen Combi Freighter5000，无日期官方HTML，产品说明及Performances / Capacities章节，无分页。https://www.damen.com/vessels/cargo/multi-purpose-cargo-vessels/combi-freighter-5000 | 仅案例架构：箱货舱定距推进/机组；不采用尺寸重量吨位功率服务时长节油合规数值；可选电池生物柴油不定义此路线。 |
| bodewes-build | handbook | Royal Bodewes How we build，无日期官方HTML，Design & engineering、Building process、Christening and Launching、Seatrials and Delivery，无分页。https://royalbodewes.com/how-we-build/ | 独立制造商次序：供货预制板型材分段装焊表面下水海试；场内切割自制外购下水技术须实际记录；无通用作业数量地点认证限或寿命推断。 |
| nma-lightship-2020 | official_guidance | 挪威海事局KS-0179-1E OTI，挪威船舶轻船排水量/重心测定程序，Rev07.01.2020，PDF/印刷4—7页，2及3.1—3.4节。https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf | 历史方法架构：责任检验完整性增减状态舱液依据水密度及修正吃水静水力参考位置；非当前法规批准数值纵倾舱液限或实际船M；PCR净交付调整须独立前景依据。 |
