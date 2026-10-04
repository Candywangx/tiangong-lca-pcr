---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dumpers-designed-for-off-highway-use
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 非公路翻斗车制造


## 1. 范围与适用性

本规则适用于工厂门口交付的新完整非公路翻斗车，包括实际刚性车架、铰接式运输车及紧凑型工地翻斗车，含已安装货箱、举升机构及交付配置。仅有非公路底盘或行驶场所不能确定主产品身份；道路运输卡车、洒水车、燃油服务车、牵引车、单独货箱、拖挂翻斗车和替换零件需按实际主功能另审。后续矿石或工地搬运服务、载荷、使用燃料、维修及寿命末端不属工厂制造。

Volvo A40 原文记载柴油发动机、变矩器和动力换挡传动、高强钢焊接车架、HB450 货箱板及液压举升；该货箱材料不能代替车架牌号。Cat 777F 原文提供含铸锻件的低碳钢刚性非公路车架和不同货箱或衬板的反例；不能据此认定铸造在本厂进行。Wacker DW15e 原文提供紧凑电动翻斗车、独立驱动和液压电机、蓄电池、车载充电器和制动能量回收，反驳仅柴油边界。实际柴油电力或混合动力若装有发动机与电系统须同时保留；不得从“电控”推断牵引电池。原厂例子只支持配置，不给本规则通用重量、厚度、制造能耗、成品率、寿命或排放因子；电动路线不能因 UUID 缺口而删除。来源：`volvo-a40-2025`；`wacker-dw15e`；`cat-777f`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dumpers-designed-for-off-highway-use |
| classification_refs | CPC 3.0 44428 |
| covered_products | 新完整刚性、铰接或紧凑非公路翻斗车 |
| excluded_products | 道路卡车；洒水或服务车辆；单独底盘、货箱及零件；搬运服务 |
| representative_product | 声明货箱及动力配置的柴油铰接翻斗车；保留真实刚性或紧凑电动路线 |
| production_route | 实际自制或外购、条件制造或处理、装配及验收 |
| market_state | 工厂门口验收新机器；运输包装单独计量 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明配置翻斗车的制造 |
| How much | 同一配置验收完整机器 1 kg |
| How well | 实际货箱、转向、举升、动力及安全验收；质量不保证跨载荷性能等价 |
| How long or cycle | 一次制造及工厂验收周期；无通用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 专用于越野的翻斗车 `ee6a6a71-ce11-4cd2-baa6-430c2e77a5a6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；刚性、铰接或紧凑型；主功能；柴油、柴油电力、电池电动或实际混合动力；货箱与衬板；蓄电池化学体系及供给界面；自制外购；选装件；净质量与保留液体；工厂及周期；验收；供电地域与电压 |

构建前景数据包时必须声明以上限定信息，缺失则参考流不完整。

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
| declared_starting_condition | 实际供应商完成的材料或组件进入工厂 |
| starting_condition_role | foreground_input |
| product_classification_scope | 完整非公路翻斗车及实际交付货箱和系统 |
| recursive_input_rule | 外购同类完整机器或主机在上游仅计一次；披露装配、转换或返工性质，不重复制造内含件 |
| upstream_dataset_requirement | 匹配实际牌号、模块边界、状态、供应界面、地域及年份；披露缺口 |
| disclosure | 逐件自制外购表、实际货箱、轮胎、动力及电池、液体、测试和包装 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_factory | 包含收货、真实制造或装配、上游采购、工厂试验及返工、包装；后续搬运服务单独处理。 | volvo-a40-2025; wacker-dw15e; cat-777f |
| boundary_make_buy | 对车架、货箱、发动机、传动、车桥、泵缸、电机、电池、轮胎及驾驶室逐件核对；完整采购模块内含材料、液体及操作在上游计一次。厂内自制记录真实各牌号或化学体系材料及操作，内部转移配对抵消。 | volvo-a40-2025; wacker-dw15e; cat-777f |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 车架和货箱制造 | conditional | 实际厂内切割、成形、机加工和焊接；供应商已完成总成留在上游。 | foreground | 1 kg reference flow |
| surface | 表面与热处理 | conditional | 实际工单指定处理；不默认所有机器均涂装或热处理。 | foreground | 1 kg reference flow |
| assembly | 按架构装配翻斗车 | required | 实际刚性、铰接或紧凑型的驱动、转向、举升和交付配置。 | foreground | 1 kg reference flow |
| test_pack | 工厂验收、首次加注与出厂 | required | 仅工厂验收，包括实际试验燃料或充电。 | foreground | 1 kg reference flow |
| shared | 未分配公共服务 | conditional | 仅各过程分配后的实测可归属剩余负荷。 | foreground | 1 kg reference flow |

卡片为条件原子交换，不为固定配方。实际浇铸、锻造、热处理、粉末或水性涂装、轮胎及电机电池制造若在本厂发生，应按真实工单添加各合金牌号、树脂、涂料、溶剂、电解液、铜导体、磁体、外壳、制冷剂、燃料及各废物或排放的独立具体行；不得将完整外购模块与内含材料同时计量。蓄电池组例子不限定整个类别，其他实际化学体系或供给型号须具体声明。区分不适用、未知、缺失及零；缺少 UUID 不删除真实路线。

### 过程：车架和货箱制造（`fabrication`）

#### 输入

##### 产品流

###### S355J2 结构钢板（`s355_plate`）

仅钢厂证书确认车架使用此牌号时纳入；其他实际牌号另设行。A40 高强钢车架说明不能证明 S355J2。

- 选定流：S355J2 结构钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### HB450 耐磨钢板（`hb450_plate`）

仅实际 HB450 货箱钢板，A40 示例支持此材料；该牌号不适用于所有货箱或车架。采集切割损失。

- 选定流：HB450 耐磨钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`volvo-a40-2025`

###### ER70S-6 钢焊丝（`wire`）

仅证书确认的焊接材料；采集领用和库存。

- 选定流：ER70S-6 钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 氩保护气（`argon`）

仅实际氩供给；匹配纯度、交付状态和实测用量。

- 选定流：氩保护气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 二氧化碳保护气（`shield_co2`）

实际单独供给的二氧化碳；供给量不等于基本流排放。

- 选定流：二氧化碳保护气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 水混溶矿物油切削液浓缩液（`cutting_fluid`）

仅实际 SDS 确认的浓缩液；稀释水另设交换。

- 选定流：水混溶矿物油切削液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`jrc-metalworking-2020`

###### 工艺水（`water_fab`）

实际清洗、稀释或冷却补水；采集含水量及配对内部返回。

- 选定流：工艺水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：

###### 交流电（`electricity_fabrication`）

仅匹配中国 1–35 千伏电网平均用户供给；其他供给需匹配身份。实际已分配过程需求，适用时含试验充电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
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

###### 分类钢机加工废料（`scrap`）

单独计量钢废料、自身油水含量及接收回收商。

- 选定流：分类钢机加工废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`jrc-metalworking-2020`

###### 废矿物油切削乳化液（`spent_emulsion`）

采集湿废物、自身水油组分及实际处理商。

- 选定流：废矿物油切削乳化液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`jrc-metalworking-2020`

##### 基本流

### 过程：表面与热处理（`surface`）

#### 输入

##### 产品流

###### 天然气（`gas`）

实际炉窑或热处理燃料条件行；使用交付气组成、热值和供应商，不用机器额定功率。

- 选定流：天然气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 钢丸喷砂磨料（`abrasive`）

仅实际钢丸预处理路线；记录循环、补充和捕集细粉。

- 选定流：钢丸喷砂磨料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 溶剂型环氧涂料（`paint`）

仅实际 SDS 确认配方；不得强加于粉末、水性涂装或未涂装件。

- 选定流：溶剂型环氧涂料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 二甲苯稀释剂（`xylene`）

仅实际添加二甲苯；另核对涂料内溶剂，确认异构体或规格。

- 选定流：二甲苯稀释剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 交流电（`electricity_surface`）

仅匹配中国 1–35 千伏电网平均用户供给；其他供给需匹配身份。实际已分配过程需求，适用时含试验充电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
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

条件湿废物，附自身固体、水和溶剂检测；实际处理商。

- 选定流：环氧涂料污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

###### 捕集的含铁喷砂粉尘（`dust`）

实际捕集粉尘、自身铁含量及干湿基准；捕集不等于向空气排放。

- 选定流：捕集的含铁喷砂粉尘
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

##### 基本流

###### 二甲苯向空气排放（`xylene_air`）

核对产品保留、回收、捕集介质、库存、实际销毁及非空气残余后的实际物种空气排放。

- 选定流：二甲苯向空气排放
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：

### 过程：按架构装配翻斗车（`assembly`）

#### 输入

##### 产品流

###### 完整翻斗车车架总成（`frame`）

仅外购完整车架；替代已包含的钢、焊接、机加工及涂装。

- 选定流：完整翻斗车车架总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`; `cat-777f`

###### 完整翻斗车货箱总成（`body`）

仅外购完整货箱；实际钢或橡胶衬板及尾门范围在上游仅计一次。

- 选定流：完整翻斗车货箱总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`; `cat-777f`

###### 完整柴油发动机总成（`engine`）

仅柴油或实际混合动力；供应商完成发动机及包含液体仅计一次。

- 选定流：完整柴油发动机总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`; `cat-777f`

###### 完整动力换挡变速器总成（`transmission`）

实际机械驱动路线，包括已声明的液力变矩器界面。

- 选定流：完整动力换挡变速器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`; `cat-777f`

###### 完整静液压传动总成（`hydrostatic`）

仅实际静液压路线；电驱动本身不排除液压。

- 选定流：完整静液压传动总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`wacker-dw15e`

###### 柴油电力牵引发电机（`generator`）

仅实际证实的柴油电力或混合动力配置，不从控制电子设备推断。

- 选定流：柴油电力牵引发电机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 电牵引电动机（`motor`）

实际外购牵引电机，区别于液压驱动电机；外购完整件不得再拆计内含铜或磁体。

- 选定流：电牵引电动机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`wacker-dw15e`

###### 液压驱动电动机（`hydraulic_motor`）

电配置中实际独立驱动液压的电动机。

- 选定流：液压驱动电动机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`wacker-dw15e`

###### 牵引逆变器总成（`inverter`）

实际供给的功率电子设备，声明技术及界面。

- 选定流：牵引逆变器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### DW15e 牵引蓄电池组（`battery`）

仅具体紧凑电动示例；必须记录实际化学体系、型号、供给外壳、BMS 和热管理范围。不从网页推断化学体系或通用电池质量。

- 选定流：DW15e 牵引蓄电池组
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`wacker-dw15e`

###### 车载牵引电池充电器（`charger`）

仅实际随车充电器；未在声明产品范围交付的客户外部充电器排除。

- 选定流：车载牵引电池充电器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`wacker-dw15e`

###### 完整翻斗车车桥总成（`axle`）

实际车桥、差速器或终传动范围；避免额外计入已包含的齿轮或制动器。

- 选定流：完整翻斗车车桥总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`

###### 铰接翻斗车旋转铰接总成（`hitch`）

仅铰接路线；实际枢轴、轴承及密封范围。

- 选定流：铰接翻斗车旋转铰接总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`

###### 橡胶充气非公路翻斗车轮胎（`tyre`）

实际交付轮胎胎体和胎面规格；非通用公路卡车轮胎。

- 选定流：橡胶充气非公路翻斗车轮胎
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 钢车轮轮辋（`rim`）

仅单独供给轮辋；完整车轮已含时不追加质量。

- 选定流：钢车轮轮辋
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 液压举升泵（`pump`）

实际外购泵，或实际厂内泵制造分支。

- 选定流：液压举升泵
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`

###### 液压货箱举升缸（`cylinder`）

实际举升缸数量及供油界面；不将示例数量推广至所有翻斗车。

- 选定流：液压货箱举升缸
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`; `cat-777f`

###### 液压转向缸（`steering`）

实际单独供给转向缸；区别于举升缸。

- 选定流：液压转向缸
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`

###### 增强液压软管（`hose`）

实际软管型号和接头；排除外购液压模块内已含件。

- 选定流：增强液压软管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 完整翻斗车驾驶室（`cab`）

实际驾驶室路线；紧凑型开放操纵台另记录，不虚构驾驶室。

- 选定流：完整翻斗车驾驶室
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`; `cat-777f`

###### 翻斗车开放式操纵台总成（`station`）

实际紧凑配置供给的操纵台、控制和防护结构。

- 选定流：翻斗车开放式操纵台总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`wacker-dw15e`

###### 翻斗车电子控制单元（`ecu`）

实际独立外购控制器，不为整个电子设备篮子。

- 选定流：翻斗车电子控制单元
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 翻斗车线束（`harness`）

实际线束总成；外购驾驶室或控制器内含线束在此排除。

- 选定流：翻斗车线束
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 翻斗车冷却散热器总成（`radiator`）

实际散热器或热管理配置；外购模块内含件仅计一次。

- 选定流：翻斗车冷却散热器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：

###### 交流电（`electricity_assembly`）

仅匹配中国 1–35 千伏电网平均用户供给；其他供给需匹配身份。实际已分配过程需求，适用时含试验充电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`; `wacker-dw15e`; `cat-777f`

###### 精加工钢车架铸件（`frame_casting`）

实际独立外购铸件，附证书确认合金及交付机加工状态；完整车架已含时排除。供应商铸造负荷留上游；实际厂内铸造另记录炉料、模具、炉窑、炉渣及物种。

- 选定流：精加工钢车架铸件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-777f`

###### 精加工钢车架锻件（`frame_forging`）

实际独立外购锻件，附自身合金或证书及加工状态；不默认 Cat 示例锻件数量。厂内锻造另计真实坯料、加热、锻压、氧化皮及能源。

- 选定流：精加工钢车架锻件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-777f`

###### 油气式翻斗车悬架缸（`suspension`）

仅实际刚性悬架设计，区别于举升或转向缸；外购预加注油和氮气留在上游仅计一次。

- 选定流：油气式翻斗车悬架缸
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-777f`

###### 液压回油过滤器总成（`filter`）

实际单独供给回油过滤器；外购液压模块内含时不再添加。

- 选定流：液压回油过滤器总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`volvo-a40-2025`

###### 橡胶货箱耐磨衬板（`liner`）

实际单独供给橡胶衬板，附配方或规格及安装范围；外购货箱已含时在此排除。

- 选定流：橡胶货箱耐磨衬板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`cat-777f`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂验收、首次加注与出厂（`test_pack`）

#### 输入

##### 产品流

###### 超低硫柴油燃料（`diesel`）

实际工厂试验耗用与交付保留燃料分别核对；换算单位时测量密度和热值。

- 选定流：超低硫柴油燃料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### ISO VG 46 矿物液压油（`hydraulic_oil`）

仅实际油规格；记录加注、排出回收及供应商预加注量，不用标称油箱容量。

- 选定流：ISO VG 46 矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### SAE 15W-40 发动机润滑油（`engine_oil`）

条件实际发动机润滑油；不同时另列真实牌号。

- 选定流：SAE 15W-40 发动机润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 乙二醇发动机冷却液（`coolant`）

仅实际声明冷却液配方及水含量；供应商预加注仅计一次。

- 选定流：乙二醇发动机冷却液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 尿素水溶液尾气处理剂（`urea`）

仅实际 SCR 工厂试验或保留加注；记录实际浓度，不假定使用阶段用量。

- 选定流：尿素水溶液尾气处理剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`volvo-a40-2025`

###### 锯制针叶木包装材（`wood`）

实际出厂木材，与验收净机器分母分开。

- 选定流：锯制针叶木包装材
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 低密度聚乙烯包装膜（`film`）

实际出厂膜单独计量；不用毛重分母。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 交流电（`electricity_test_pack`）

仅匹配中国 1–35 千伏电网平均用户供给；其他供给需匹配身份。实际已分配过程需求，适用时含试验充电。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`volvo-a40-2025`; `wacker-dw15e`; `cat-777f`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 专用于越野的翻斗车（`finished_machine`）

验收完整翻斗车，含实际货箱、安装系统或选装件及指定保留液体，排除载荷和运输包装。

- 选定流：专用于越野的翻斗车 `ee6a6a71-ce11-4cd2-baa6-430c2e77a5a6`
- 流属性/单位：质量 / kg
- 数量规则：1 千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`volvo-a40-2025`; `wacker-dw15e`; `cat-777f`

##### 废物流

##### 基本流

###### 化石二氧化碳向空气排放（`test_co2`）

实际试验燃料碳及完整碳输出，或适用的实测试验证据。

- 选定流：化石二氧化碳向空气排放
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 一氧化碳向空气排放（`test_co`）

工厂试验物种实测或适用因子；仅碳闭合不能确定 CO。

- 选定流：一氧化碳向空气排放
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

###### 氮氧化物向空气排放（`test_nox`）

工厂试验分别记录实际 NO、NO2 物种质量，或明确声明 NOx 按 NO2 当量报告及摩尔质量换算；当量质量不等于纯 NO2 的实际质量。具体投影按报告约定选匹配流，并保留物种组成。

- 选定流：氮氧化物向空气排放
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：

### 过程：未分配公共服务（`shared`）

#### 输入

##### 产品流

###### 工艺水（`water_shared`）

仅分配未归属水剩余量；不在制造水基础上再加全厂总量。

- 选定流：工艺水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_shared。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared`
- 来源：

###### 外购工艺蒸汽（`steam`）

仅实际进口蒸汽；供应焓、压力、温度或干度以及冷凝水返回采用共同基准。

- 选定流：外购工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_purchased_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：

###### 交流电（`electricity_shared`）

仅匹配中国 1–35 千伏电网平均用户供给；其他供给需匹配身份。仅各过程分配后可归属未分配剩余负荷。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
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

实际湿废水，附自身水含量、金属浓度及接收处理界面。

- 选定流：含金属工艺废水
- 流属性/单位：质量 / kg
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
| allocation_separate | 先以同配置工单和分表分离；仅以实测因果驱动分配公共负荷。载荷、额定功率及矿石吨公里不得替代制造采集。 |  |
| allocation_losses | 保留拒收、返工及废物负荷；验收分母排除拒收质量、包装及其他配置；废物连接实际服务商，不默认抵扣原生材料。 |  |


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
| cp_purchased_heat | shared | purchased_heat | meter_record | 供汽质量；返回质量；各自焓；共同焓基准；压力；温度；干度；热表；供给净热或毛热界面；周期；配置；N | 蒸汽及冷凝水表、校准质量或热表，供应商合同确认毛热或净热范围；排除自有锅炉内部供给。 | MJ | 每表计区间 | 同一生产期 | 实际供给及返回边界 | 可归属净蒸汽热量 / 验收机器数量 | 表计校准、热力状态、共用基准、供应合同及不确定度 |

对同一配置及共同生产期，Q 为包含拒收或返工负担的各项可归属期间交换，N 为验收数量，D 为经校准验收净质量之和，M = D/N，q_item = Q/N。应用 normalize_mass 得 q_ref = Q/D。库存、在制品及留存流体与该配置核对；D 排除包装及拒收质量。禁止平均不同刚性、铰接或紧凑型或动力配置，或使用额定工作质量。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| purchased_heat | steam | 供汽净热 = 供汽质量 × 供汽比焓 − 返回质量 × 返回比焓；各质量独立实测，各比焓从实际压力、温度或干度并采用同一焓零点确定，或使用校准净热表。先声明供应商毛热或净热界面，不同时采购两次；冷凝水在水闭合仅计一次，自有锅炉内部蒸汽不为外购。 | cp_purchased_heat | 净供热 / MJ |  |
| utility_closure | 各能源或水公用工程 | 同周期同单位的进口和实际厂内产出，减出口和储存变化，等于已分配制造、处理、装配、试验出厂负荷、未分配剩余量及实际转换损失。公共行仅分配剩余量；负剩余量核对周期、单位、表校准及实际综合测量采样分配不确定度，不截零；内部转移抵消，自发电不再外购。 | cp_fabrication; cp_surface; cp_assembly; cp_test_pack; cp_shared | 同周期公用工程闭合 |  |
| water_closure | 实物水记录 | 各输入水分及稀释清洗冷却补水，加实际反应产水，减反应耗水，等于产品或流体保留水、废料或污泥水、废水、蒸发及水库存变化。各项使用自身含水检测及干湿换算，内部返回配对抵消；以实际综合测量采样分配不确定度调查差异，不设通用容差。 | cp_fabrication; cp_surface; cp_assembly; cp_test_pack; cp_shared | 实际水闭合 |  |
| contained_species_closure | 实物材料及物种记录 | 每种实际金属或物种，各输入自身质量乘自身含量，加实际反应生成，减反应消耗，等于各产品、废料、炉渣、粉尘、污泥、废水、排放及库存变化的自身质量乘自身含量。逐项采用自己的取样、含水及干湿基准；内部转移抵消，毛质量不代替含元素质量，以真实综合不确定度调查。 | cp_fabrication; cp_surface; cp_assembly; cp_test_pack; cp_shared | 实际物种闭合 |  |
| solvent_closure | 实际溶剂记录 | 分别核对涂料内及添加溶剂、产品保留、回收、捕集介质、库存变化、真实销毁及非空气残余；捕集不等于销毁，不得将未解释残差指认为空气排放。物种空气释放需实测或适用证据支持；燃料碳闭合不能替代 CO 或 NOx 物种测量。 | cp_surface; cp_test_pack | 各物种已核对的去向 |  |

同一期间及单位核对场址公用工程：进口加实际自发电减出口及储能变化，等于已分配制造、处理、装配、测试交付需求加未分配剩余量和有证据转换损失。共享行仅承载实测因果分配剩余量。禁止全厂总量加分表；负剩余量调查期间单位对齐、校准及综合分配不确定度，禁止截断为零。自发电燃料、水及物种一次记录；成对内部电力转移相消，不再外购电力。测试充电记录输入、回收或输出能量及储能变化，不用电池容量或充电机额定功率。

使用各项实际输入水分、稀释清洗或冷却液水、产品或流体留存水、湿废料污泥、废水、蒸发、库存及实际反应产耗水闭合水平衡。边界内成对内部回用相消。各含金属或物种按输入、验收产品、废料、熔渣、捕集粉尘、污泥、废水、排放及库存各项自身实测含量、浓度、干湿转换和数量闭合；纳入改变物种的反应。物料总质量不得等于含元素质量。依据实际综合计量、取样及分配不确定度调查差异；不设通用容差、成品率或虚构平衡系数。

对各实际溶剂，在计算实测物种特定空气排放前区分涂料内含及另加溶剂、产品留存、回收、捕集介质、库存、实际销毁及非空气剩余物。试验燃烧实际燃料碳及全部含碳输出约束碳闭合，但不能推出 CO 或 NOx；各需物种特定测试测量或适用有证据因子及声明物种惯例。制冷剂泄漏、未捕集金属气溶胶及其他排放实际存在时需独立物种或环境介质记录及匹配证据。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_config | reference and inventory | 相同实际配置、交付范围、验收期间和净质量；真实自制外购及供应接口。 | 交付清单、校准称重、工单及供应记录 |
| quality_gaps | each exchange | 逐行已采集、计算、不适用、未知或缺失；披露 UUID、范围和源缺口；未知不等于零。 | 路线矩阵、身份审查、取样及不确定度 |

外购蒸汽供给和冷凝水返回须使用同一焓零点、实际压力、温度或干度及称量质量；净热量等于进口质量乘供给焓减返回质量乘返回焓。返回水在水衡算仅计一次；内部蒸汽回路配对抵消，不得再列外购蒸汽。每种实际新增燃料、制冷剂或化学品及各物种排放另列原子行，按同一工厂周期计量。

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_configuration | 核对刚性、铰接或紧凑翻斗车主功能、交付货箱及动力架构；道路货运或洒水服务不因底盘而匹配本规则。 | volvo-a40-2025; wacker-dw15e; cat-777f |
| validate_measurement | 同配置同周期 Q 含返工拒收负荷，N 为验收数量，D 为校准验收净质量总和，M = D/N，q_item = Q/N，q_ref = Q/D；排除包装、载荷和拒收质量。 |  |
| validate_utility | 同周期单位核对进口、实际自发电、出口及储存变动；分表加未分配剩余量及实际损失闭合，全厂表不得叠加。负剩余量以实际校准、采样及分配不确定度调查，不截断为零。试验充电核对输入、回收或输出及储能变动。 |  |
| validate_water_species | 各实物或物种条款逐项使用自身含水、含量检测及干湿基准；含输入、产品、废料、污泥、废水、排放、库存和反应；内部返回配对抵消。实测综合不确定度解释闭合，毛质量不等于含元素质量，不设通用容差。 |  |
| validate_solvent | 溶剂保留、回收、捕集介质、库存、真实销毁和非空气残余均须区分；捕集不是销毁，残差不是空气排放。碳闭合不能推出 CO/NOx，须物种试验或适用证据。 |  |
| validate_identity | UUID 仅在直读类型、正式双语名、参考属性单位、状态及供应地域界面一致时采用；模块与内含件不重复。缺失 UUID、配方、工厂或范围证据须披露，不当作零；工厂数据补齐后再审发布。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明配置的制造前景包及其 process/lifecyclemodel 投影 |
| excluded_use | 矿石或工地搬运服务；未经审查跨载荷、寿命或配置替代 |
| required_metadata | 交付物料清单；主功能、货箱或衬板及动力；自制外购；净质量、液体；工厂周期、供应及验收 |
| required_quality_disclosure | UUID 或实证范围缺口；路线或原始工厂证据缺口；不确定度；电池化学体系未知 |
| update_trigger | 动力、货箱、配置、供应商、化学体系、工厂路线或能源界面变化 |


## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| volvo-a40-2025 | handbook | Volvo A40 Product Guide, Ref. No 20064351_C / English-21 / 2025.01, pages 6–7, footer page 12: https://www.volvoce.com/-/media/aprimo/pdf/articulated-haulers/a40/product-guide-a40-stv-en-21-20064351-c.pdf | 铰接柴油传动、焊接车架及 HB450 货箱示例；不作通用牌号、质量或能耗 |
| wacker-dw15e | handbook | Wacker Neuson DW15e Electric Wheel Dumper, original product body and installed charging/recovery, snapshot 2026-10-02: https://www.wackerneuson.com/cemea/products/dumpers/wheel-dumpers/dw15e | 紧凑电动、双驱动系统及充电器；不推断电池化学体系或制造零排放 |
| cat-777f | handbook | Caterpillar Cat 777F, Structures and Truck Body Systems, original HTML snapshot 2026-10-02; edition date unstated: https://h-cpc.cat.com/cmms/v2?cid=406&f=product&gid=307&it=product&lid=en&nc=1&pid=16922003&sc=US | 刚性车架制造及不同货箱衬板；不推广旧型号参数 |
| jrc-metalworking-2020 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN (2020), section 4.1, printed page 190 / PDF page 192, DOI 10.2760/894966: https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | 切削液形式依工艺而定；浓缩液与稀释水分开；无制造默认用量 |
