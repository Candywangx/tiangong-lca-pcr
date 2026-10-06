---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.forestry-harvester
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 轮式柴油液压林业采伐机制造

## 1. 范围与适用性

新制完整自走轮式柴油液压单握短材林业采伐机，含匹配吊臂与采伐头。覆盖范围内实际零件制造、供应完整组件、液压动力控制头集成、实际工厂调试验收、净质量核验条件运输保护。须明确所选配置；为 CPC 44198 较窄方法，非覆盖所有农业机械。

排除集材运输机集材拖车作物收获机完整农业拖拉机单独头替换件仅挖掘机附件承载车履带伐倒集束机削片机电池电动未声明动力路线翻新机械林场采伐木材产量使用燃料排放运输服务维护报废。外购成品组件为投入，非声称实测其制造前景。

公开厂商说明约束产品供应状态解释，不建立工厂数量普遍验收阈值。PONSSE 目录仅历史配置制造背景；Komatsu 目录选项近似重非实测净 M。须实际生产物料表验收称重安全数据单供应原件。候选科学待审。未有匹配核验上游数据时，接收到验收运行前景非完整从摇篮到厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.forestry-harvester |
| classification_refs | CPC 3.0 44198 其他未列农业机械；较窄所选林业路线；仅背景 |
| covered_products | 新制完整自走轮式柴油液压单握短材林业采伐机，含匹配吊臂与采伐头。覆盖范围内实际零件制造、供应完整组件、液压动力控制头集成、实际工厂调试验收、净质量核验条件运输保护。须明确所选配置；为 CPC 44198 较窄方法，非覆盖所有农业机械。 |
| excluded_products | 排除集材运输机集材拖车作物收获机完整农业拖拉机单独头替换件仅挖掘机附件承载车履带伐倒集束机削片机电池电动未声明动力路线翻新机械林场采伐木材产量使用燃料排放运输服务维护报废。外购成品组件为投入，非声称实测其制造前景。 |
| representative_product | 一台验收完整配置单握轮式柴油液压林业采伐机 |
| production_route | 条件结构制造；承载吊臂液压控制装配；匹配头集成；条件清洁；工厂功能质量验收；条件保护 |
| market_state | 声明厂门新制验收完整配置设备，无木材载荷 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造指定完整配置林业采伐机 |
| How much | 1 kg 验收设备净质量；按台记录用实测 M 归一化 |
| How well | 实际匹配头吊臂动力液压控制配置生产者放行准则；等质量不建立等锯切能力安全性 |
| How long or cycle | 一次制造验收周期；无林场使用寿命木材体积运行小时服务 |
| reference_flow_link | finished_harvester |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整轮式柴油液压单握林业采伐机 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号场址时期；整机序列物料表修订；轮桥胎配置可选履带；发动机燃料动力路线供应辅助件；底盘吊臂头旋转器修订供应完整性；实际液压驾驶室控制安装流体牌号加注；自产接收部件外包门点；实际验收校准；同配置实测净 M kg 秤皮重不确定性燃料载荷保护排除；库存仪表试验废物平衡；实际分配驱动上游链接缺口 |

实际数据集元数据说明须声明限定；缺失使参考不完整。M 含匹配头吊臂轮动力驾驶室控制验收状态记录安装流体。排除木材游离试验燃料架包装临时夹具松散备件。目录运行重运输毛重油箱容量不能替代净 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 适用校准车辆平台称量系统实体称重验收完整配置设备含头吊臂；保留实际读数校准不确定性实测皮重序列物料表安装流体签字放行。交付拆下头吊臂另称时，保留各实际实体计量、不重叠质量核对至同验收整机。移除游离试验燃料或量化实际另测皮重；不以目录容量乘猜测密度扣除。同配置汇总须实际验收数量可追溯单台质量原件。 |
| `energy_units` | 各电力行 | Net calorific value | MJ | 用核验能量单位换算 1 kWh = 3.6 MJ。保留实际供应商装配机加调试仪表边界；无铭牌功率猜测利用率替代实测。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收可追溯库存及指定供应完整组件 |
| starting_condition_role | 接收到验收运行制造前景 |
| product_classification_scope | 新制完整自走轮式柴油液压单握短材林业采伐机，含匹配吊臂与采伐头。覆盖范围内实际零件制造、供应完整组件、液压动力控制头集成、实际工厂调试验收、净质量核验条件运输保护。须明确所选配置；为 CPC 44198 较窄方法，非覆盖所有农业机械。 |
| recursive_input_rule | 不以同完整采伐机作自身制造投入。成品底盘吊臂头替代所含库存上游制造；内部转移非第二采购 |
| upstream_dataset_requirement | 匹配实际组件完整性材料牌号发动机非道路路线头旋转器配置油化学状态场址时期原流属性单位。缺失不匹配链接保留缺口 |
| disclosure | 制造者型号场址时期；整机序列物料表修订；轮桥胎配置可选履带；发动机燃料动力路线供应辅助件；底盘吊臂头旋转器修订供应完整性；实际液压驾驶室控制安装流体牌号加注；自产接收部件外包门点；实际验收校准；同配置实测净 M kg 秤皮重不确定性燃料载荷保护排除；库存仪表试验废物平衡；实际分配驱动上游链接缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | 所有工序 | 含实际接收范围内制造外包门点装配加注冲洗调试验收返工保护。声明实际排除长期工厂设施工装；可透明补另追溯资本贡献。林场使用木材生产后续交付维护排除。外包服务所含交换不重复计。 |  |
| `boundary_actual_exchanges` | 实际路线清单 | 卡为具体条件起始交换，非完整通用物料表。适用时补各实际机加冷却液涂料成分保护气组分安装冷却润滑剂冷媒电池软管紧固件试验木材物种目的刀具磨耗过滤残渣实测排放。化学环境介质分开。记录有证据不适用与缺失；无自动焊烟尾气物种挥发排放。实际全物料表操作核对前不称完整清单。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `structure` | 条件结构件制造 | conditional | 仅实际厂内底盘吊臂结构制造 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `assembly` | 承载车辆动力驾驶室液压装配 | required | 完整轮式柴油液压承载车辆 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `head` | 匹配单握采伐头集成 | required | 整机实际匹配采伐头 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `cleaning` | 条件装配清洁 | conditional | 仅实际装配表面清洁 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `acceptance` | 配置整机功能质量验收 | required | 每台验收完整配置采伐机 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `packing` | 条件厂门保护 | conditional | 仅实际供应运输保护 | foreground | 一台验收同配置成品设备，使用 M 归一化 |

条件结构制造或接收成品结构供承载车辆装配，后匹配头集成实际清洁调试验收。保护条件。成品零件所含库存不重复。各条件卡须实际路线安全数据单计量证据。

### 过程：条件结构件制造 (`structure`)

声明接收与自产钢结构。实际切割成形机加夹具接合焊检返工遵循生产者图纸规程。外购成品结构替代所含库存制造。目录工厂说明不规定普遍钢牌号焊接配方热处理。

#### 输入

##### 产品流

###### 未镀覆低合金结构钢板 (`steel_plate`)

仅实际图纸牌号厂内底盘吊臂板消耗；须供应状态净领退。排除成品组件所含板。

- 选定流：未镀覆低合金结构钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`ponsse`

###### ER70S-6 碳钢焊丝 (`welding_wire`)

仅实际鉴定焊规使用该规格时；精确净领退。其他填料规格须独立行。

- 选定流：ER70S-6 碳钢焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`ponsse`

###### 气态氩焊接保护供应 (`argon`)

仅实际纯气态氩供应的实测净消耗。厂内混配所单独采购的纯气体须分别建立投入行及各自交付记录。外购保护气预混物须作为一个组成明确的供货混合物交换，保留实际领用、退回及交付证据；不能再将所含组分记录为纯气体采购。不采用默认气体密度或液氩替代。

- 选定流：气态氩焊接保护供应
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`ponsse`

###### 工厂进线交流电 (`structure_electricity`)

实际仪表归属供应，kWh 换 MJ；识别电压供应因果运行待机驱动，无额定功率乘猜测小时。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`ponsse`

#### 输出

##### 废物流

###### 低合金钢制造边角废物 (`steel_scrap`)

仅实际称重分选边角至记录目的，无自动回收抵扣。

- 选定流：低合金钢制造边角废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_structure。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`ponsse`

### 过程：承载车辆动力驾驶室液压装配 (`assembly`)

按配置物料表安装实际匹配发动机传动桥轮驾驶室吊臂液压控制。记录供应装配状态所含内容，避免加计组件内已含材料。实际加注冲洗软管连接紧固外包装配在范围内。不得将道路航空发动机与该非道路动力互代。

#### 输入

##### 产品流

###### 成品轮式林业采伐机底盘组件 (`chassis`)

仅接收配置成品底盘；删除所含制造投入，记录供应门点净质量。

- 选定流：成品轮式林业采伐机底盘组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 成品林业采伐机液压吊臂组件 (`boom`)

仅实际匹配接收吊臂含指定整体油缸；排除重复所含钢油缸。

- 选定流：成品林业采伐机液压吊臂组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 非道路压燃柴油发动机组件 (`engine`)

实际林机柴油供应状态辅助件。不替代道路航空发动机推进涡轮泛排除分类。不默认排量安装质量。

- 选定流：非道路压燃柴油发动机组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 林业采伐机静液压传动组件 (`transmission`)

实际匹配供应传动；所含泵马达计一次，无泛齿轮箱替代。

- 选定流：林业采伐机静液压传动组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 林业采伐机驱动桥组件 (`axle`)

实际指定驱动桥净质量数量及声明所含内容。

- 选定流：林业采伐机驱动桥组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 林业充气车轮组件 (`wheel`)

一个指定轮辋安装充气林业胎，记录实际数量尺寸；所含胎辋不另加。可选履带须独立交换匹配配置 M。

- 选定流：林业充气车轮组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 成品封闭林业采伐机驾驶室组件 (`cab`)

实际供应驾驶室完整性含声明玻璃座椅控制；无重复零件输入。实际另加冷媒仅另安装时且须精确物种。

- 选定流：成品封闭林业采伐机驾驶室组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 轴向柱塞林业工作液压泵组件 (`pump`)

仅未含于传动吊臂头的另供工作泵；实际压力流量匹配。

- 选定流：轴向柱塞林业工作液压泵组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 林业采伐机电子控制模块 (`controller`)

实际安装硬件模块，非软件服务泛电气集合。

- 选定流：林业采伐机电子控制模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 绝缘铜整机线束 (`harness`)

仅独立安装指定线束；保留连接器绝缘供应制造状态。

- 选定流：绝缘铜整机线束
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 矿物液压油配方加注品 (`hydraulic_oil`)

实际供应牌号黏度添加配方净加注冲洗平衡；验收设备内润滑质量与试验消耗废冲洗油区分。

- 选定流：矿物液压油配方加注品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

###### 工厂进线交流电 (`assembly_electricity`)

实际仪表归属供应，kWh 换 MJ；识别电压供应因果运行待机驱动，无额定功率乘猜测小时。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

#### 输出

##### 废物流

###### 废矿物液压冲洗油 (`flush_oil_waste`)

仅实际另转移用后冲洗油，具沾染目的；非必然泄漏。

- 选定流：废矿物液压冲洗油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly`
- 来源：`komatsu`

### 过程：匹配单握采伐头集成 (`head`)

含指定单握头旋转器送料辊去枝刀锯切单元计量控制接口。将接收头作为一个实体组件安装，其所含锯链电机钢非额外上游输入。实际另安装项目须独立身份。头目录干重非整机 M。

#### 输入

##### 产品流

###### 成品单握林业采伐头组件 (`harvester_head`)

一个匹配接收头含配置旋转器送料辊刀锯控制；删除已含金属电机锯链。实际另供旋转器改变本身份。

- 选定流：成品单握林业采伐头组件
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_head。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_head`
- 来源：`ponsse`

###### 工厂进线交流电 (`head_electricity`)

实际仪表归属供应，kWh 换 MJ；识别电压供应因果运行待机驱动，无额定功率乘猜测小时。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_head。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_head`
- 来源：`ponsse`

### 过程：条件装配清洁 (`cleaning`)

记录实际水性溶剂清洁，分别含配方安全数据单净领用回收残留。水 IPA 行为独立条件案例，非必需通用配方。实际外包涂装厂内喷漆须在发生时补充成分明确实测交换；无未识别涂料必然挥发物行。

#### 输入

##### 产品流

###### 工艺用水 (`cleaning_water`)

仅实际技术圈供应工艺水按 kg 实测；自然取水处理废液独立。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：

###### 无水异丙醇清洗溶剂 (`isopropanol`)

仅实际 CAS67-63-0 无水 IPA 净领回，非稀释消毒剂。

- 选定流：无水异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：

###### 工厂进线交流电 (`cleaning_electricity`)

实际仪表归属供应，kWh 换 MJ；识别电压供应因果运行待机驱动，无额定功率乘猜测小时。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：

#### 输出

##### 废物流

###### 含油水性整机清洗废液 (`effluent`)

仅实际处理转移具实测组成目的，非环境水流。

- 选定流：含油水性整机清洗废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：

#### 输出

##### 基本流

###### 异丙醇 (`isopropanol_air`)

仅 CAS67-63-0 物种实测排放或闭合溶剂平衡，即时未指定空气；非全部领用水土室内长期释放。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_cleaning。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cleaning`
- 来源：

### 过程：配置整机功能质量验收 (`acceptance`)

记录生产者放行准则实际转向制动行驶液压泄漏吊臂头控制检查计量校准适用防护安全检查。工厂运行燃料尾气仅实际消耗释放时属于此处。校准试验与林场运行分开，无木材产量功能单位。用校准实体计量称量完整配置含匹配头吊臂设备。

#### 输入

##### 产品流

###### B0 化石柴油工厂试验燃料 (`diesel`)

仅实际记录 B0 化石试验燃料，实测退回库存后净消耗。生物混合须独立身份化石生物核算。无林场使用燃料。

- 选定流：B0 化石柴油工厂试验燃料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`komatsu`

###### 工厂进线交流电 (`acceptance_electricity`)

实际仪表归属供应，kWh 换 MJ；识别电压供应因果运行待机驱动，无额定功率乘猜测小时。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`komatsu`

#### 输出

##### 产品流

###### 验收完整轮式柴油液压单握林业采伐机 (`finished_harvester`)

一台配置完整新机含匹配头吊臂承载车轮动力驾驶室控制安装流体；排除游离试验燃油木材载荷运输保护夹具松散备件。

- 选定流：验收完整轮式柴油液压单握林业采伐机
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`komatsu`

### 过程：条件厂门保护 (`packing`)

分别记录实际保护项；保护运输架排除净 M。不假定托盘量周转架寿命。后续道路林场运输服务排除。

#### 输入

##### 产品流

###### 瓦楞纸板箱 (`carton`)

仅实际供应实测箱排除 M。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD） (`protective_film`)

仅实际 LDPE 保护膜净领用排除 M。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 工厂进线交流电 (`packing_electricity`)

实际仪表归属供应，kWh 换 MJ；识别电压供应因果运行待机驱动，无额定功率乘猜测小时。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | 共用资源 | 直接归属序列物料表工单领退阶段仪表调试含实际返工。不可分资源用实测因果工位设备占用实际负荷：份额 = 工单驱动量 / 覆盖工单驱动量之和。记录覆盖时期待机分母；等设备数目录重额定液压功率非自动驱动。 |  |
| `allocation_tests` | 生产调试鉴定 | 实际单台调试归该验收设备。独立研发原型林场演示与生产分开。共用鉴定须原适用性覆盖工单实际因果驱动敏感性。破坏设备不合格组件非验收输出；不假定工厂试验日程摊销寿命。 |  |
| `allocation_recovery` | 废料返工 | 追溯各实际废料回收流体废物转移一次。内部返工随生产库存平衡。不能仅凭可回收作避免金属抵扣；实际可售共产品分配须原因果经济证据敏感性。本制造参考不含林场采伐木材共输出。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | 验收实体称重记录 | 型号；配置；序列号；验收净质量 M；件号修订；整机秤读数；夹具皮重；头吊臂轮配置安装流体游离燃料状态；校准不确定性；图纸；签字放行 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 逐验收台 | 实际制造验收时期 | 声明整机验收门点 | 每台验收净质量 | 实际校准实体整机称重实测皮重受控图纸放行 |
| `cp_structure` | `structure` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际图纸库存领退制造工单接合鉴定规程仪表分选废物转移 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_assembly` | `assembly` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取序列物料表供应配置装配加注冲洗工单校准领用仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_head` | `head` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取头旋转器序列修订供应所含物料表匹配连接校准仪表记录 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_cleaning` | `cleaning` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际清洁安全数据单配方净领用回收残留平衡实测物种废物转移 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_acceptance` | `acceptance` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际试验验收质量记录配置设备序列校准秤仪表燃料领退实际尾气计量 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_packing` | `packing` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际保护净领退皮重周转架流转 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 须 mass_record_provenance 实际配置整机含匹配头吊臂实体称量，适用校准秤实测皮重正 M kg。核对序列物料表安装流体移除游离燃料木材保护夹具。拆卸交付组件须实际不重叠实体记录。目录最小典型重运行质量不能建立 M。缺实际原件须科学数据审查。 | 实际称量皮重校准序列配置签字验收 |
| `quality_identity` | 所有交换 | 核验一个精确实体化学身份供应完整性路线实际公开参考属性单位。完整头非泛农业机械；矿物配方油非基础原油；游离试验燃料非安装润滑剂；技术水非自然资源废液。保留物种介质实际浓度。不匹配身份具体保留未决。 | 实际供应物料表规格安全数据单公开流属性单位原件 |
| `quality_configuration` | cp_assembly; cp_head; cp_acceptance | 须匹配头旋转器吊臂承载桥轮配置动力液压控制匹配实际生产者放行准则。保留检查校准原件实际返工。目录列可能设备，非验收物料表；头干重额定功率不代配置净重试验消耗。不推断普遍安全载荷压力阈值试验木材需求。 | 实际配置物料表工厂试验校准放行 |
| `quality_balance` | 材料流体燃料水物种 | 核对实测库存领退所含组件制造损耗返工废物。分开 M 内含油工厂冲洗废油运行消耗。试验燃料须实测库存退回声明化石生物分数。实际尾气二氧化碳氮氧化物颗粒须另实测化学物种介质后加身份；不以 NOx 作 NO2 或全部柴油作排放 CO2。IPA 空气须实际物种计量或回收保留后闭合溶剂平衡。水供应处理废液独立。 | 实际阶段材料溶剂燃料物种平衡废物目的 |
| `quality_coverage` | 数据集上游链接 | 区分实测计算缺失有证据 not_applicable。核对实际全物料表操作，发生时含涂装加注冷媒电池工具尾气，不仅本候选卡。披露资本排除分配不确定性。完整从摇篮到厂门须核验匹配上游数据。契约检查不建立完成实际工厂数据科学批准。 | 实际完整物料表操作透明缺口登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考及 finished_harvester | 精确参考产品名等于 finished_harvester 输出。当前正同配置 M kg 用 cp_mass 及 normalize_mass。空候选 UUID 必须在 unresolved_flow_identities 登记该精确输出行。须实体净质量记录完整匹配头吊臂配置；无目录重。 |  |
| `validate_basis` | 所有行协议 | 须双语相同有序小写行规则协议标识实际投影引用。明确 q_item 按验收设备、M kg、同配置数量换算须一致。不得为强配身份改写公开数量面积能量属性为 Mass。 |  |
| `validate_route` | 装配试验 | 须实际供应所含物料表制造范围非道路柴油液压路线匹配头旋转器实际调试放行记录。试验燃料单物种尾气交换仅有证据时。厂商目录背景非本工厂实证清单。缺路线计量原件须审查。 |  |
| `validate_use` | 数据集用途 | 披露配置净质量证据供应门点缺实际交换未决身份上游匹配。等 kg 非等锯切能力林场生产率安全寿命。候选非发表科学批准。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际完成审查后为 secondary_dataset 和 background_dataset |
| downstream_use | 配置林业采伐机制造投入独立边界生命周期模型 |
| allowed_use | 制造比较匹配配置供应门点，披露实际 M 上游缺口 |
| excluded_use | 排除集材运输机集材拖车作物收获机完整农业拖拉机单独头替换件仅挖掘机附件承载车履带伐倒集束机削片机电池电动未声明动力路线翻新机械林场采伐木材产量使用燃料排放运输服务维护报废。外购成品组件为投入，非声称实测其制造前景。 |
| required_metadata | 制造者型号场址时期；整机序列物料表修订；轮桥胎配置可选履带；发动机燃料动力路线供应辅助件；底盘吊臂头旋转器修订供应完整性；实际液压驾驶室控制安装流体牌号加注；自产接收部件外包门点；实际验收校准；同配置实测净 M kg 秤皮重不确定性燃料载荷保护排除；库存仪表试验废物平衡；实际分配驱动上游链接缺口 |
| required_quality_disclosure | 实测计算缺失数据实际称重验收物料表原件身份计量缺口资本排除分配不确定性；候选科学待审 |
| update_trigger | 实际底盘吊臂头旋转器轮动力路线供应完整性油燃料配方调试质量方法厂门上游变化 |


## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `ponsse` | literature | [PONSSE Product Line](https://cdn-ponsse.contenthub.fi/api/v1/cdn/19280643) | PDF 第3页，印刷4–5：工厂组件制造模块装配配置记录；PDF 第7页，印刷12–13：匹配头吊臂控制胎选项。PDF 元数据2023年2月，仅历史定性背景，非当前工厂要求数值清单。不采用目录重寿命功率部件比例生产强度。 |
| `komatsu` | literature | [Komatsu 931-4 wheeled harvester](https://www.komatsuforest.com/forest-machines/our-wheeled-harvesters/931-4) | HTML Engine、Boom、Heads、Hydraulic system、Transmission、Weight、General information：柴油液压匹配整机配置明确市场设备限制。未标日期当前页为说明，非普遍必需设备净验收称重。不采用近似重压力燃油容量功率排放因子。 |
