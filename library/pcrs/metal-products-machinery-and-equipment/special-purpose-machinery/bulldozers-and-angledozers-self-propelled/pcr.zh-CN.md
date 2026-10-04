---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bulldozers-and-angledozers-self-propelled
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 自行式推土机及侧铲推土机

## 1. 范围与适用性

本候选约束工厂门口交付的新制完整自行式推土机，包含实际主机、行走装置及交付铲配置。履带及轮式机器仅在实际主要产品为推土机时适用；装临时铲的装载机、农业拖拉机、平地机、铲运机、挖掘机、单售铲或替换件不能仅凭附件适用。后续土方服务、移动土方、运行燃料、维护及报废单独建模。来源：`un-cpc3-dozers`；`cat-d6xe`；`komatsu-d61`；`shantui-de17`。

制造商示例证实不同架构：Komatsu 描述柴油静液压履带驱动及出厂控制装备；Caterpillar D6 XE 将柴油发动机与电牵引结合；山推 DE17-X 描述 LFP 电池、电机及控制器、温控及履带尺寸。仅有电驱字样不得排除柴油发动机或证明动力电池。实际电池混动路线保留两套安装系统及实测充电或燃料。山推叙述与参数表电池能量数字不同：任何表列容量、营销节省、工作质量或运行时间均不作为清单因子。Caterpillar 824 证实轮式柴油动力换挡替代方案，含液力变矩器及实际制动或车桥装备。履带或车轮路线、铲几何、推臂、油缸及控制选件按实际交付清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bulldozers-and-angledozers-self-propelled |
| classification_refs | CPC 3.0 44421 |
| covered_products | 新制完整自行式推土机或侧铲推土机，含实际交付装备 |
| excluded_products | 单售铲和零件；装载机、平地机、农业拖拉机；土方服务 |
| representative_product | 有声明铲配置的柴油静液压履带推土机；不限定其他已验证架构 |
| production_route | 实际自制外购；条件性制造和表面处理；按动力架构装配；厂内验收 |
| market_state | 新制验收机器，工厂门口，运输包装单列 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明配置推土机的制造，不是土方功能服务 |
| How much | 1 kg 同一配置验收完整机器 |
| How well | 实际动力、行走、铲及安全验收；质量不保证不同推土能力功能等效 |
| How long or cycle | 一次制造及出厂验收周期，无通用使用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自动推动推土机和侧铲推土机 `d1abf37d-4e2e-4caa-b6c2-009245d4f4f3` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；履带或轮式；柴油机械、静液压、柴电、纯电或电池混动；电池化学；铲及推臂油缸交付范围；自制外购；已安装选件；净质量；流体留存；工厂和期间；验收；地域电压 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| material_basis | physical material and species records | Mass | kg | 每个物料及物种项使用自身含量及干湿基；不得以总金属质量代替含铁等物种质量。 |
| energy_basis | electricity and fuels | Net calorific value | MJ | 1 kWh = 3.6 MJ；燃料需实际热值；额定功率不是工厂用电。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供应商实际完成材料或部件进入工厂 |
| starting_condition_role | foreground_input |
| product_classification_scope | 完整自行式推土主机及实际交付工作装置 |
| recursive_input_rule | 外购同类机器或完成主机作为上游产品一次进入；不得重建其内含制造；披露组装、改装或返工性质 |
| upstream_dataset_requirement | 匹配完成工序、牌号、部件、状态、供应接口、地域和年份；明确缺口 |
| disclosure | 交付清单、各件自制外购、选件、流体和电池、测试及工装边界 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_factory | 纳入实际接收、厂内制造装配、供应商产品上游、厂内测试和返工及包装；不含后续土方运行。 | un-cpc3-dozers |
| boundary_make_buy | 发动机、变速器、终传动、电机、电池、驾驶室、电子及铲逐件核对自制外购。外购总成内含材料、供应商油和工序不再前景计入；厂内制造改录实际原料及过程。 | cat-d6xe; komatsu-d61; shantui-de17 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 底盘及工作装置制造 | conditional | 实际厂内制造；外购成品总成留在上游。 | foreground | 1 kg reference flow |
| surface | 表面及热处理 | conditional | 工单指定的实际厂内处理。 | foreground | 1 kg reference flow |
| assembly | 动力传动、行走装置及主机装配 | required | 实际推进架构及交付装备。 | foreground | 1 kg reference flow |
| test_pack | 出厂验收、初装及交付 | required | 仅厂内测试；后续土方服务单独建模。 | foreground | 1 kg reference flow |
| shared | 未分配公共服务 | conditional | 仅过程分配后可归属的剩余量。 | foreground | 1 kg reference flow |

卡片代表条件性单项交换，不是固定配方。实际切割气、填料牌号、热处理或淬火液、涂料化学、电池、轮胎、制冷剂物种、外购液压阀块、轴承、制动及松土器或绞车选件在存在时各需独立具体交换。记录缺席为 not_applicable，不得把未知变零或因 UUID 未解决排除实际路线。热处理、机加工及涂装仅在实际前景作业发生时纳入；供应商完成工序留在上游。

### 过程：底盘及工作装置制造（`fabrication`）

#### 输入

##### 产品流

###### S355J2 结构钢板（`s355_plate`）

条件性经证书确认的 S355J2 框架板；其他实际牌号需独立交换，不是假定配方。

- 选定流：S355J2 结构钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### AR400 耐磨钢板（`ar400`）

条件性实际厂内铲耐磨板；外购铲的材料仅在上游计入一次。

- 选定流：AR400 耐磨钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### ER70S-6 钢焊丝（`wire`）

仅当实际合格工艺使用该填料；实际替代品需独立牌号行。

- 选定流：ER70S-6 钢焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 氩气保护气体（`argon`）

保护气中实际氩气组分；记录混合气证书并单列其他组分。

- 选定流：氩气保护气体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 二氧化碳保护气体（`shield_co2`）

实际保护气组分，与燃烧二氧化碳分开。

- 选定流：二氧化碳保护气体
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 水混合型矿物油切削液浓缩液（`cutting_fluid`）

条件性实际机加工浓缩液，记录安全数据表及配方；稀释水单列。

- 选定流：水混合型矿物油切削液浓缩液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 工艺水（`water_fab`）

仅实际新水；内部回用转移相消。

- 选定流：工艺水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 交流电（`electricity_fabrication`）

仅相符中国 1–35 kV 电网平均用户供电；其他地域或电压需自身匹配身份。实际分配计量工厂需求，适用时含试验充电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分选钢机加工废料（`scrap`）

计量各牌号及各自含量、切屑和边角料；保留拒收及返工负担。

- 选定流：分选钢机加工废料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 废矿物油切削乳化液（`spent_emulsion`）

实际水、油、金属浓度及外部处理接口。

- 选定流：废矿物油切削乳化液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

##### 基本流

### 过程：表面及热处理（`surface`）

#### 输入

##### 产品流

###### 天然气（`gas`）

仅实际燃气热处理，记录组成及热值。

- 选定流：天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 钢丸喷砂磨料（`abrasive`）

实际喷砂路线及补充量，不反复计入整个循环库存。

- 选定流：钢丸喷砂磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 溶剂型环氧涂料（`paint`）

条件性实际环氧配方，记录逐物种安全数据表及固体比例；实际替代涂料另设行。

- 选定流：溶剂型环氧涂料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 二甲苯稀释剂（`xylene`）

仅实际单独加入的二甲苯；涂料内含溶剂不重复加入。

- 选定流：二甲苯稀释剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 交流电（`electricity_surface`）

仅相符中国 1–35 kV 电网平均用户供电；其他地域或电压需自身匹配身份。实际分配计量工厂需求，适用时含试验充电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 环氧涂料污泥（`paint_sludge`）

实际湿质量、水及各内含溶剂或金属含量和处置。

- 选定流：环氧涂料污泥
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 捕集的含铁喷砂粉尘（`dust`）

捕集废物自身含量及干湿基；未捕集空气颗粒按实际物种单列。

- 选定流：捕集的含铁喷砂粉尘
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

##### 基本流

###### 向空气排放的二甲苯（`xylene_air`）

仅实测或经产品留存、回收、销毁及非空气废物核对的实际物种空气排放。

- 选定流：向空气排放的二甲苯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

### 过程：动力传动、行走装置及主机装配（`assembly`）

#### 输入

##### 产品流

###### 完整柴油发动机总成（`engine`）

仅柴油机械、静液压或柴电配置；记录精确型号及排放后处理。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：完整柴油发动机总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 完整静液压传动总成（`transmission`）

仅实际静液压路线；动力换挡替代方案需独立成品总成行。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：完整静液压传动总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 完整动力换挡传动总成（`powershift`）

仅实际动力换挡路线，含实际供应的液力变矩器；已确认柴电替代架构中不存在时不适用。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：完整动力换挡传动总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 柴电牵引发电机（`generator`）

仅柴电路线；电驱不证明纯电推进。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：柴电牵引发电机
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 电牵引电机（`motor`）

实际柴电或纯电驱动，精确电机规格；外购总成的绕组和磁体在上游计入。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：电牵引电机
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 牵引逆变器总成（`inverter`）

实际电牵引路线，记录硬件及接口。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：牵引逆变器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 磷酸铁锂动力电池组（`battery`）

仅已确认 LFP 纯电配置；记录电池组化学、内含模块、管理及温控系统。其他化学需独立身份。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：磷酸铁锂动力电池组
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 行星终传动总成（`final_drive`）

实际交付驱动接口及数量，排除已内含于外购传动的部件。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：行星终传动总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 钢制履带总成（`track`）

仅履带配置；核对履带板、链、滚轮、导向轮及链轮与外购包范围。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：钢制履带总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 橡胶充气推土机轮胎（`tyre`）

仅轮式推土机；实际尺寸、结构、数量及轮辋边界。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：橡胶充气推土机轮胎
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 钢制轮辋（`rim`）

仅轮式路线，且未内含于外购车轮总成。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：钢制轮辋
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 工作装置液压泵（`pump`）

实际铲或工作装置液压；与静液压牵引泵分开，除非有文档的合并总成。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：工作装置液压泵
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 铲液压油缸（`cylinder`）

实际提升、倾斜或转角油缸供应范围；记录各型号，排除内含于外购铲包的油缸。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：铲液压油缸
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 增强液压软管（`hose`）

实际安装软管规格及连接件；完成软管上游负担一次。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：增强液压软管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 完整推土机驾驶室（`cab`）

实际防翻滚或防落物驾驶环境；敞篷替代品单列。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：完整推土机驾驶室
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 推土机电子控制单元（`ecu`）

实际控制及交付的卫星定位或遥控选件；不假设通用选装硬件。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：推土机电子控制单元
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 推土机线束（`harness`）

实际安装电线束；完整驾驶室内含线束留在上游。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：推土机线束
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 推土机冷却散热器总成（`radiator`）

实际冷却总成，区分发动机、液压和电池温控回路接口。外购成品负担一次；厂内自制路线改为记录实际分牌号材料及工序。

- 选定流：推土机冷却散热器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 推土机或侧铲推土机的铲（`blade`）

仅交付清单中实际外购完整铲；定义推臂、框架、耐磨件及油缸包范围，不重复内含部件。

- 选定流：推土机或侧铲推土机的铲 `e2bc45f7-c072-4426-814c-f254a6b821ce`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 交流电（`electricity_assembly`）

仅相符中国 1–35 kV 电网平均用户供电；其他地域或电压需自身匹配身份。实际分配计量工厂需求，适用时含试验充电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：出厂验收、初装及交付（`test_pack`）

#### 输入

##### 产品流

###### 超低硫柴油燃料（`diesel`）

实际工厂柴油测试或交付油箱留存燃料，分开记录；无后续土方燃料。

- 选定流：超低硫柴油燃料
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### ISO VG 46 矿物液压油（`hydraulic_oil`）

仅实际牌号初装或消耗试验油；供应商预填部件及返回试验台油不是新消耗。

- 选定流：ISO VG 46 矿物液压油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### SAE 15W-40 发动机润滑油（`engine_oil`）

仅实际柴油主机规定的初装油；实际其他牌号单列。

- 选定流：SAE 15W-40 发动机润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 乙二醇发动机冷却液（`coolant`）

实际规定配方，水比例在平衡中分开；供应商填装不重复。

- 选定流：乙二醇发动机冷却液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 尿素水溶液尾气处理剂（`urea`）

仅实际装 SCR 的工厂测试或初装；声明浓度及溶液质量。

- 选定流：尿素水溶液尾气处理剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 锯切针叶木包装材（`wood`）

实际交付支撑，不计入机器净质量。

- 选定流：锯切针叶木包装材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 低密度聚乙烯包装膜（`film`）

实际交付防护，单独称量。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 交流电（`electricity_test_pack`）

仅相符中国 1–35 kV 电网平均用户供电；其他地域或电压需自身匹配身份。实际分配计量工厂需求，适用时含试验充电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 自动推动推土机和侧铲推土机（`finished_machine`）

验收交付配置，含有文档的安装铲及选件。

- 选定流：自动推动推土机和侧铲推土机 `d1abf37d-4e2e-4caa-b6c2-009245d4f4f3`
- 流属性/单位：Mass / kg
- 数量规则：1 千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

##### 废物流

##### 基本流

###### 向空气排放的化石二氧化碳（`test_co2`）

实际试验燃料碳和完整碳平衡或适用实测测试证据；无使用阶段因子。

- 选定流：向空气排放的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 向空气排放的一氧化碳（`test_co`）

工厂试验物种特定实际测量或适用因子；碳平衡本身不能推出 CO。

- 选定流：向空气排放的一氧化碳
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### 向空气排放的氮氧化物（`test_nox`）

实际工厂测试证据规定 NO 或 NO2 惯例及参考物种；无额定功率替代。

- 选定流：向空气排放的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`cat-d6xe`; `komatsu-d61`; `shantui-de17`

### 过程：未分配公共服务（`shared`）

#### 输入

##### 产品流

###### 工艺水（`water_shared`）

仅所有过程用水分配后的未分配剩余水需求。

- 选定流：工艺水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_shared。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared`
- 来源：

###### 交流电（`electricity_shared`）

仅相符中国 1–35 kV 电网平均用户供电；其他地域或电压需自身匹配身份。仅未分配剩余量，禁止把全厂总表加到过程分表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_shared。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含金属工艺废水（`wastewater`）

实际湿质量、水比例、各物种浓度及接收处理者。

- 选定流：含金属工艺废水
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_shared。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation_separate | 先按配置工单及分表分离；共享消耗按实测因果驱动分配。禁止按额定主机功率、铲容量或土方量替代工厂实测。 |  |
| allocation_losses | 保留拒收和返工、生产废料、捕集废物负担；验收分母不含拒收、包装或不匹配配置。废物接实际处理者；不默认抵扣原生材料。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | reference_product | weighing_record | 型号；配置；序列号；验收净质量 M；验收数量 N | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | per accepted unit | 同一生产期 | 实际交付主机及已安装装备和规定留存流体 | 每台验收净质量 | 校准、皮重、配置、流体留存及验收记录 |
| cp_fabrication | fabrication | atomic_exchanges | production_record | 交换身份；Q；N；配置；期间；表计单位；期初期末库存；各自含量；干湿基；供应者；路线 | 表计、校准称重、采购、工单、取样和处理者单据；包含拒收返工，测试燃料、充电及留存分开。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 同一工厂交付配置 | 分配交换量 / 验收机器数量 | 计量、取样、库存、分配、供应及不确定度 |
| cp_surface | surface | atomic_exchanges | production_record | 交换身份；Q；N；配置；期间；表计单位；期初期末库存；各自含量；干湿基；供应者；路线 | 表计、校准称重、采购、工单、取样和处理者单据；包含拒收返工，测试燃料、充电及留存分开。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 同一工厂交付配置 | 分配交换量 / 验收机器数量 | 计量、取样、库存、分配、供应及不确定度 |
| cp_assembly | assembly | atomic_exchanges | production_record | 交换身份；Q；N；配置；期间；表计单位；期初期末库存；各自含量；干湿基；供应者；路线 | 表计、校准称重、采购、工单、取样和处理者单据；包含拒收返工，测试燃料、充电及留存分开。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 同一工厂交付配置 | 分配交换量 / 验收机器数量 | 计量、取样、库存、分配、供应及不确定度 |
| cp_test_pack | test_pack | atomic_exchanges | production_record | 交换身份；Q；N；配置；期间；表计单位；期初期末库存；各自含量；干湿基；供应者；路线 | 表计、校准称重、采购、工单、取样和处理者单据；包含拒收返工，测试燃料、充电及留存分开。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 同一工厂交付配置 | 分配交换量 / 验收机器数量 | 计量、取样、库存、分配、供应及不确定度 |
| cp_shared | shared | atomic_exchanges | production_record | 交换身份；Q；N；配置；期间；表计单位；期初期末库存；各自含量；干湿基；供应者；路线 | 表计、校准称重、采购、工单、取样和处理者单据；包含拒收返工，测试燃料、充电及留存分开。 | MJ for energy; kg for mass | per batch and meter interval | 同一生产期 | 同一工厂交付配置 | 分配交换量 / 验收机器数量 | 计量、取样、库存、分配、供应及不确定度 |

对同一配置及共同生产期，Q 为包含拒收或返工负担的各项可归属期间交换，N 为验收数量，D 为经校准验收净质量之和，M = D/N，q_item = Q/N。应用 normalize_mass 得 q_ref = Q/D。库存、在制品及留存流体与该配置核对；D 排除包装及拒收质量。禁止平均不同履带、轮式或动力配置，或使用额定工作质量。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

同一期间及单位核对场址公用工程：进口加实际自发电减出口及储能变化，等于已分配制造、处理、装配、测试交付需求加未分配剩余量和有证据转换损失。共享行仅承载实测因果分配剩余量。禁止全厂总量加分表；负剩余量调查期间单位对齐、校准及综合分配不确定度，禁止截断为零。自发电燃料、水及物种一次记录；成对内部电力转移相消，不再外购电力。测试充电记录输入、回收或输出能量及储能变化，不用电池容量或充电机额定功率。

使用各项实际输入水分、稀释清洗或冷却液水、产品或流体留存水、湿废料污泥、废水、蒸发、库存及实际反应产耗水闭合水平衡。边界内成对内部回用相消。各含金属或物种按输入、验收产品、废料、熔渣、捕集粉尘、污泥、废水、排放及库存各项自身实测含量、浓度、干湿转换和数量闭合；纳入改变物种的反应。物料总质量不得等于含元素质量。依据实际综合计量、取样及分配不确定度调查差异；不设通用容差、成品率或虚构平衡系数。

对各实际溶剂，在计算实测物种特定空气排放前区分涂料内含及另加溶剂、产品留存、回收、捕集介质、库存、实际销毁及非空气剩余物。试验燃烧实际燃料碳及全部含碳输出约束碳闭合，但不能推出 CO 或 NOx；各需物种特定测试测量或适用有证据因子及声明物种惯例。制冷剂泄漏、未捕集金属气溶胶及其他排放实际存在时需独立物种或环境介质记录及匹配证据。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_config | reference and inventory | 相同实际配置、交付范围、验收期间和净质量；真实自制外购及供应接口。 | 交付清单、校准称重、工单及供应记录 |
| quality_gaps | each exchange | 逐行已采集、计算、不适用、未知或缺失；披露 UUID、范围和源缺口；未知不等于零。 | 路线矩阵、身份审查、取样及不确定度 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_configuration | 确认自行式推土产品语义、履带或轮式及动力架构，参考及全部清单与同一交付清单一致；单售铲及后续使用分开。 | un-cpc3-dozers; cat-d6xe; komatsu-d61; shantui-de17 |
| validate_measurement | 要求正验收数量和质量、有限交换、明确转换；复核返工损耗、逐项水和物种平衡、共享剩余量及实际不确定度。 |  |
| validate_identity | 仅采用直读确认类型、正式双语名、参考属性单位、状态供应接口和适用地域的 UUID；未解决身份及范围须披露并发布前审查。 |  |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_denominator | 每一配置同一期间 Q 包含拒收返工负担，N 是验收数量，D 是经校准验收净质量之和，M = D/N，q_item = Q/N，q_ref = Q/D；分母排除包装拒收及其他配置，库存在制品按相同期间核对。 |  |
| validate_utility_residual | 同一期间单位，进口加实际自发电减出口储能变化，等于已分配制造、处理、装配、测试交付需求加未分配剩余及转换损失；公共行仅分配剩余。禁止总表加分表；负剩余调查校准和综合不确定度，不截零。 |  |
| validate_charging_balance | 测试充电核对输入、回收输出、储能变化及实际转换损失。柴油电驱不是纯电；不以电池容量或额定充电功率代替计量；内部转移相消，自发电燃料及排放一次计入。 |  |
| validate_water_closure | 各实际输入水分、稀释清洗冷却液水，等于产品流体留存水、湿废料污泥水、废水、蒸发、库存变化并调整反应产耗水；内部回用成对相消，各项自身水含量，差异按实际综合取样计量不确定度调查。 |  |
| validate_contained_species | 逐金属或物种将各项自身实测含量、浓度及干湿转换乘各自数量，覆盖输入、产品、废料、熔渣、粉尘、污泥、废水、排放和库存，并纳入物种改变反应；总质量不等于元素质量。不设普适容差。 |  |
| validate_solvent_combustion | 溶剂供料核对产品留存、回收、捕集介质、库存、实际销毁及非空气剩余后确认物种空气排放。实际燃料碳闭合不能证明 CO 或 NOx；各需物种测试测量或适用有证据因子和明确物种惯例。 |  |
| validate_foreground_route | OEM 产品装备仅证明架构选项，不能证明工厂牌号及制造配方。自制外购、每项牌号、切割焊接热处理涂装路线及实际测试须工单、证书、安全数据表、供应商和前景计量证据；不适用不等于未知或零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明配置制造前景包及其过程或生命周期模型投影 |
| excluded_use | 土方服务或通用功率、容量、寿命等效；无审查配置替换 |
| required_metadata | 交付清单；推进和行走架构；各件自制外购；净质量与流体；工厂期间；能源接口；测试及验收 |
| required_quality_disclosure | 未知 UUID 及范围；源冲突；路线缺口；计量和分配不确定度 |
| update_trigger | 架构、配置、供应商、化学牌号、工厂路线或能源接口变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-dozers | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, 44421 and 44429: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 主机与铲分类边界；不是工艺配方 |
| cat-d6xe | handbook | Caterpillar D6 XE, standard/optional equipment: https://h-cpc.cat.com/cmms/v2?cid=406&f=product&gid=323&it=product&lid=en&nc=1&pid=15969752&sc=X350 | 柴油电驱、终传动、驾驶室及条件性装备；非通用排放或能耗因子 |
| komatsu-d61 | handbook | Komatsu D61EXi/PXi-24: https://www.komatsu.eu/en/crawler-dozers/d61exipxi-24 | 柴油静液压及工厂控制系统替代示例；非所有机器配置 |
| cat-wheel-824 | handbook | Caterpillar 824 Wheel Dozer Technical Specifications, AEXQ3632-01 (11-2024), replaces AEXQ3632-00, standard/optional equipment page 6: https://s7d2.scene7.com/is/content/Caterpillar/CM20240214-bacd2-f3c9d | 轮式柴油动力换挡、制动及驾驶室装备选项，不采用功率或质量因子 |
| shantui-de17 | handbook | Shantui DE17-X, technical features and specifications: https://www.shantui.com/product/pro-detail-3892996.htm | LFP 纯电、温控及履带装备替代；电池能量表述冲突，不采用数值因子 |
