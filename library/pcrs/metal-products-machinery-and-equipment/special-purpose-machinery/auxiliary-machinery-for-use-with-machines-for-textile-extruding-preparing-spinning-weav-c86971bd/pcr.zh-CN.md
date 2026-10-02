---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.auxiliary-machinery-for-use-with-machines-for-textile-extruding-preparing-spinning-weav-c86971bd
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 纺织挤出、准备、纺纱、织造或针织机械用辅助机械

## 1. 范围与适用性

本候选规则适用于专门服务于纺织挤出、准备、纺纱、织造或针织设备、完整且单独供应的辅助装置制造。旋转多臂机和电子提花开口机为已有证据的实例，而非通用制造配方。自动停机和换梭机构须有实际交付装置规格才能纳入；缩卡、复制、冲孔及组卡辅助机械同样要求证据。不得仅凭锭子、钩、通丝、传感器或控制器名称推断辅助机械身份。

CPC3 将辅助机械与纺织主机及专用零件区分。排除完整挤出、纺纱、络筒主机、织机、针织机、单独销售的替换零件及附件、通用风机和压缩机、纺织产品及后续安装使用。随提花机交付的专用通风系统属于组件，但不能据此纳入独立通用风机。分类对照是佐证，不构成映射接受。来源：`un-cpc3-textile`、`un-hs844811`、`staubli-s3200`、`staubli-sx-pro`、`bonas-ji`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.auxiliary-machinery-for-use-with-machines-for-textile-extruding-preparing-spinning-weav-c86971bd |
| classification_refs | CPC 3.0 44614 |
| covered_products | 完整专用纺织辅助装置；已证实的多臂机及提花机；其他类型须有实际装置边界证据。 |
| excluded_products | 纺织主机；单独交付零件及附件；通用通风设备；纺织产品。 |
| representative_product | 配置明确的电子提花机头，声明控制器及是否包含通丝装置；不能作为类别替代 UUID。 |
| production_route | 按配置控制自制外购、壳体及机构加工、条件性铸造及表面路线、装配、工厂试验、包装。 |
| market_state | 制造厂出厂的新验收辅助机械；净设备不含运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明配置的辅助机械。 |
| How much | 1 千克验收完整辅助机械，按同一配置归一化。 |
| How well | 按实际图纸、控制同步规格及验收试验放行；质量不是不同技术的功能等效指标。 |
| How long or cycle | 一个工厂制造及验收周期；使用寿命不在边界内。 |
| reference_flow_link | finished_auxiliary |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整纺织辅助机械 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 辅助类型；型号配置；主机接口；多臂轴数或提花钩及模块；驱动接口；控制器及通丝是否纳入；净质量；自制外购；工厂及年份；验收条件；电力电压及地理 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| unit_energy | electricity 和 natural_gas | Net calorific value | MJ | 保留原始能源计量基准；1 kWh = 3.6 MJ。燃料质量转 MJ 须有实际燃料热值，不采用机器额定功率。 |
| material_state | 材料、化学品及物种记录 | 实际交换属性 | 声明单位 | 区分配方总质量、所含化学品质量、水分及金属分析；保留空气压力温度及油液供货状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 厂内收货的已核验材料、加工铸件或完整组件；上游生产连接一次。 |
| starting_condition_role | foreground_input |
| product_classification_scope | 完整纺织辅助机械，不含主机或替换组件。 |
| recursive_input_rule | 输出中集成的采购辅助机械作为上游产品；不重建其已包含制造，不把输出身份赋给零件。 |
| upstream_dataset_requirement | 匹配材料牌号、处理、模块配置、交付状态、地理及期间；披露未解决供应方链接。 |
| disclosure | 记录是否纳入机架、支座、通丝、冷却及控制器；区分工厂试验主机与交付装置。 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_gate | 纳入收货、实际厂内制造、装配、工厂试验、返工、处理及包装。排除后续运输、安装、纱线织物生产、维护和报废；采购上游负担仅计一次。 | un-cpc3-textile; bonas-ji |
| boundary_route | 每个总成按实际路线及自制外购矩阵处理。采购电机、控制器及模块包含其金属、绕组、电路板及生产用油，不重复计原料。条件路线不具有通用性，未知也不能记零。 | staubli-s3200; staubli-sx-pro; bonas-ji |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 壳体、支架及机构加工 | conditional | 依据自制外购物料记录选择厂内切割、焊接、机加工或采购已加工铸件。 | foreground | 1 千克参考流 |
| foundry | 条件性壳体铸造 | conditional | 仅当前景实际进行制模、熔炼和铸造时；整体壳体不能证明厂内铸造。 | foreground | 1 千克参考流 |
| surface | 条件性清洗及表面处理 | conditional | 依据实际槽液、粉末或液体涂装、热处理或外包完成表面状态决定纳入。 | foreground | 1 千克参考流 |
| assembly | 按技术配置辅助机械装配 | required | 多臂传动或提花选针及控制系统；电机、冷却、气动和液压回路仅在存在时纳入。 | foreground | 1 千克参考流 |
| test_pack | 工厂验收及包装 | required | 记录实际控制、同步、负载试验及出厂前包装。 | foreground | 1 千克参考流 |

以下原子卡片为条件性的起始清单，不是固定配方。根据合格证、图纸及 SDS 核验实际牌号和配方；不同材料或额外交换各增加专用行。实际路线使用或产生的焊丝、保护气、热处理淬火介质、涂装溶剂、焊料、电路板制造化学品、制冷剂、液压充液、冷却水、粉尘及排放物种必须逐项单列。供应方已完成操作留在上游。不强制通用电机、壳体合金或油品规格。

### 过程：壳体、支架及机构加工 (`fabrication`)

#### 输入

##### 产品流

###### S235JR 热轧钢板 (`plate`)

仅当批准物料表规定支架采用该牌号时。

- 选定流：S235JR 热轧钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### C45 钢圆棒 (`shaft`)

仅用于确认该牌号的厂内加工轴；采购成品轴时不列此原料。

- 选定流：C45 钢圆棒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### EN-GJL-250 已机加工壳体铸件 (`casting`)

仅用于铁牌号及加工状态经核验的采购壳体。

- 选定流：EN-GJL-250 已机加工壳体铸件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 水混合型矿物油切削液浓缩液 (`machining_fluid`)

仅用于实际机加工配方；披露浓度并单列稀释水。

- 选定流：水混合型矿物油切削液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 去离子工艺水 (`water`)

仅当稀释或清洗实际使用时；计量补水而非循环流量。

- 选定流：去离子工艺水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

#### 输出

##### 废物流

###### C45 钢机加工切屑 (`steel_scrap`)

仅用于该牌号；分离油液并计量干金属质量及处理去向。

- 选定流：C45 钢机加工切屑
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_fabrication。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

### 过程：条件性壳体铸造 (`foundry`)

#### 输入

##### 产品流

###### EN-GJL-250 铸铁熔炼炉料 (`iron_charge`)

仅用于核验后的厂内壳体铸造；实际数据集按炉料牌号及添加剂逐项拆分。

- 选定流：EN-GJL-250 铸铁熔炼炉料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 二氧化硅铸造砂 (`sand`)

仅用于砂型路线；计量新增砂，内部再生砂转移成对抵消。

- 选定流：二氧化硅铸造砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 硅酸钠铸造粘结剂 (`binder`)

仅当实际粘结剂有记录时；其他粘结剂须另列化学品行。

- 选定流：硅酸钠铸造粘结剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

#### 输出

##### 废物流

###### 含硅酸钠粘结剂的废二氧化硅铸造砂 (`spent_sand`)

仅用于相应砂型路线；保留废物成分及接收方接口。

- 选定流：含硅酸钠粘结剂的废二氧化硅铸造砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_foundry。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

### 过程：条件性清洗及表面处理 (`surface`)

#### 输入

##### 产品流

###### 环氧聚酯粉末涂料 (`powder`)

仅用于有记录的粉末涂装路线；协调涂膜、飞散粉及回收库存。

- 选定流：环氧聚酯粉末涂料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 碳酸钠 (`cleaner`)

仅当实际水性清洗槽确认含该物质时；活性质量和溶液水分开记录。

- 选定流：碳酸钠
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 管道天然气 (`natural_gas`)

仅用于实际燃气固化或热处理燃烧器；计量燃料及实测热值。

- 选定流：管道天然气
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

#### 输出

##### 废物流

###### 含金属水性清洗污泥 (`sludge`)

仅在实际产生时；记录含水率、金属分析及处置接口。

- 选定流：含金属水性清洗污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

##### 基本流

###### 化石二氧化碳，排入空气 (`co2`)

仅用于现场化石燃烧，根据计量碳量及氧化证据计算；不列外购电力的烟囱排放。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_surface。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

### 过程：按技术配置辅助机械装配 (`assembly`)

#### 输入

##### 产品流

###### 多臂机凸轮传动总成 (`cam_module`)

仅当声明的多臂配置采购完整总成时；内部制造另行建模。

- 选定流：多臂机凸轮传动总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 提花机电子微型选针模块 (`selection_module`)

仅用于配置该采购模块的提花机；记录模块修订号及通道数。

- 选定流：提花机电子微型选针模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 提花机电子控制器 (`controller`)

仅当随参考总成供货时；共用织机控制器除非属于交付配置否则不纳入。

- 选定流：提花机电子控制器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 钢制深沟球轴承 (`bearing`)

仅在实际存在时；按每个轴承规格声明尺寸、密封及润滑状态。

- 选定流：钢制深沟球轴承
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 提花机聚酯绳通丝装置 (`harness`)

仅当该材料的通丝装置纳入交付配置时；单独供应的替换通丝装置排除。

- 选定流：提花机聚酯绳通丝装置
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 三相异步电动机 (`motor`)

仅当辅助机械自带并交付该电机时；由织机驱动的辅助机械不强制列入电机。

- 选定流：三相异步电动机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 气动换向阀 (`pneumatic`)

仅用于有证据的气动执行配置；记录尺寸及供气压力接口。

- 选定流：气动换向阀
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 液压缸 (`hydraulic`)

仅用于有证据的液压配置；记录行程、密封及供货时充液或干态。

- 选定流：液压缸
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### ISO VG 68 矿物润滑油 (`oil`)

仅当实际规格要求时；区分出厂充液、试验损失和回收油。

- 选定流：ISO VG 68 矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_assembly。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

### 过程：工厂验收及包装 (`test_pack`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

仅限中国用户端 1–35 kV 电网电力。依据电表分配制造、组装及工厂试验用电；其他国家或电压须匹配接口。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 工厂供气压力下的压缩空气 (`air`)

仅用于实际试验或装配采购的压缩空气；声明压力、温度及干气体积基准。内部压缩计电一次，不同时列购气及其电力。

- 选定流：工厂供气压力下的压缩空气
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 聚酯长丝纱 (`test_yarn`)

仅用于工厂验收试验实际消耗；声明纱线线密度、损失及回收库存。不属于后续商业纺织生产。

- 选定流：聚酯长丝纱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 窑干松木包装箱 (`pack_wood`)

仅用于实际采用的该包装类型；验收机器净质量排除运输包装。

- 选定流：窑干松木包装箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 低密度聚乙烯拉伸膜 (`pack_film`)

仅当出厂包装实际使用时；其他包装材料另列。

- 选定流：低密度聚乙烯拉伸膜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

#### 输出

##### 产品流

###### 完整纺织辅助机械 (`finished_auxiliary`)

已验收的声明配置，不含运输包装。

- 选定流：完整纺织辅助机械
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

##### 废物流

###### 废 ISO VG 68 矿物润滑油 (`waste_oil`)

仅用于排出的工厂试验废油；随产品交付的油留在产品中，内部回收油不重复计算。

- 选定流：废 ISO VG 68 矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### 废聚酯长丝纱 (`test_waste`)

仅用于实际试验残留；分别记录保留产品、回收和废物。

- 选定流：废聚酯长丝纱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pack。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_pack`
- 来源：`bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation_causal | 优先按配置、路线及计量记录细分。无法细分的共用车间电力、气、热及不合格品按记录的因果机时或负载分配，不仅依额定功率。保留分配前后总量及敏感性。这是前景采集要求。 |  |
| allocation_scrap | 区分钢屑、铸造回炉料、涂料回收及废模块。内部转移成对抵消；按声明回收模型记录外部可回收废料及处理一次，不使用无证据的替代产品抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | reference output | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 各配置及放行 | 制造报告期间 | 声明厂界 | 每台验收净质量 | 校准及称重证据 |
| cp_fabrication | fabrication | atomic exchanges | factory records | row_id；材料规格；总量及所含量；仪表；批次；期初期末库存；验收数量；分配依据；试验负载及时间；接收方 | 核对领退料账、经校准仪表、物料表修订、废物联单及验收序列号。逐项推导同一配置每台验收机器的归属原始数量；保留共用期间总量及因果分配。 | 清单行单位 | 按批次及月度核对 | 同一制造报告期间 | 厂内声明路线 | 归属交换数量 / 验收机器数量 | 采购、SDS 及牌号证书；仪表；库存核对；验收记录 |
| cp_foundry | foundry | atomic exchanges | factory records | row_id；材料规格；总量及所含量；仪表；批次；期初期末库存；验收数量；分配依据；试验负载及时间；接收方 | 核对领退料账、经校准仪表、物料表修订、废物联单及验收序列号。逐项推导同一配置每台验收机器的归属原始数量；保留共用期间总量及因果分配。 | 清单行单位 | 按批次及月度核对 | 同一制造报告期间 | 厂内声明路线 | 归属交换数量 / 验收机器数量 | 采购、SDS 及牌号证书；仪表；库存核对；验收记录 |
| cp_surface | surface | atomic exchanges | factory records | row_id；材料规格；总量及所含量；仪表；批次；期初期末库存；验收数量；分配依据；试验负载及时间；接收方 | 核对领退料账、经校准仪表、物料表修订、废物联单及验收序列号。逐项推导同一配置每台验收机器的归属原始数量；保留共用期间总量及因果分配。 | 清单行单位 | 按批次及月度核对 | 同一制造报告期间 | 厂内声明路线 | 归属交换数量 / 验收机器数量 | 采购、SDS 及牌号证书；仪表；库存核对；验收记录 |
| cp_assembly | assembly | atomic exchanges | factory records | row_id；材料规格；总量及所含量；仪表；批次；期初期末库存；验收数量；分配依据；试验负载及时间；接收方 | 核对领退料账、经校准仪表、物料表修订、废物联单及验收序列号。逐项推导同一配置每台验收机器的归属原始数量；保留共用期间总量及因果分配。 | 清单行单位 | 按批次及月度核对 | 同一制造报告期间 | 厂内声明路线 | 归属交换数量 / 验收机器数量 | 采购、SDS 及牌号证书；仪表；库存核对；验收记录 |
| cp_test_pack | test_pack | atomic exchanges | factory records | row_id；材料规格；总量及所含量；仪表；批次；期初期末库存；验收数量；分配依据；试验负载及时间；接收方 | 核对领退料账、经校准仪表、物料表修订、废物联单及验收序列号。逐项推导同一配置每台验收机器的归属原始数量；保留共用期间总量及因果分配。 | 清单行单位 | 按批次及月度核对 | 同一制造报告期间 | 厂内声明路线 | 归属交换数量 / 验收机器数量 | 采购、SDS 及牌号证书；仪表；库存核对；验收记录 |

同一配置报告期间，N 为验收台数，Q 为归属交换总量，各台验收净质量逐台实测。计算 q_item = Q / N，配置平均 M = 验收净质量之和 / N；因此 q_ref = Q / 验收净质量之和，与 normalize_mass 等价。物料表、制造、计量及试验期间须一致。不合格生产及返工负担计入 Q；不合格质量不进入验收分母。不得平均不同辅助技术、交付选项或模块数量。保留各台测量及因果分配记录。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all inventory rows | 不得未声明便混合多臂机、提花机或不同模块及驱动数量的配置。协调采购总成与自制材料的互斥关系。 | 图纸；批准的自制外购物料表 |
| balances | 材料、化学品及物种记录 | 对每项实际材料及化学物种核对：投入加期初库存，与验收产品、不合格产品、外部废料、处理转移、排放及期末库存闭合，并计入实测反应生成与消耗。每个适用项分别测定水分及相关金属或物种分析：原料、产品、切屑、粉尘、炉渣、污泥及残液；不得强制共用同一分析值，也不得将金属或污泥总质量等同所含元素。内部转移仅在材料、物种、期间及数量匹配时成对抵消。根据实际称重、采样、分析、仪表及分配报告残差和合成不确定度；依据记录的不确定度调查显著不一致，不虚构通用容差。 | 称重；分析；库存记录 |
| water_closure | 水及水分记录 | 核对采购及取用补水、投入水分和期初液体库存，与交付水分、废水、污泥及砂含水、试验排水、蒸发和期末库存闭合；适用时计入反应水生成消耗。内部冷却、稀释及回流水作为成对转移抵消，不作新鲜投入。蒸发须实际测量或独立证据计算，并量化不确定度。 | 水表；水分样品；库存及反应记录 |
| solvent_closure | 实际溶剂或有机涂料记录 | 对每个实际溶剂物种协调投料及期初库存，与保留涂膜、回收溶剂、捕集介质、废水、污泥、空气释放及期末库存闭合；销毁须有实际治理设备销毁证据及反应产物。捕集不等于销毁，非空气残留不能消失。明确流量、成分及治理性能的不确定度。 | SDS；物种分析；治理报告；残留物联单 |
| emissions | 排放物种记录 | 实际物种及空气水土壤受纳环境分别列行。燃料碳平衡不能证明 CO、NOx 或涂料溶剂排放；须有物种特定测量或因子证据及治理记录。不提供默认经验范围。 | 检测报告；SDS；因子来源 |
| coverage | all inventory rows | 分别记录存在、缺失、不适用及未知。未知牌号、UUID、供应方及数量是缺口而非零。纳入实际废料、返工、包装及出厂前试验纺织和公用介质。 | 路线覆盖及缺口登记 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 核验完整辅助交付边界及实际主机接口；拒绝主机、零件或纺织产品替代参考流。 | un-cpc3-textile; un-hs844811 |
| validate_measurement | 要求正值、实测同配置净质量、验收输出链接、逐行协议及明确 q_item/M 换算；M 排除包装。实际工厂计量而非额定功率确定消耗。 |  |
| validate_completeness | 检查完整路线及自制外购覆盖、库存平衡及上游负担仅计一次。具体数据集须核验供应方及物种排放。即使计量契约通过，未解决通用输出身份仍阻止身份定稿及发布。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明完整辅助配置的制造数据及后续 process/lifecyclemodel 投影。 |
| excluded_use | 纺织厂运行、主织机制造、通用附件生产或仅凭质量比较功能。 |
| required_metadata | 类型、型号、接口、模块轴数、所含组件、自制外购路线、工厂年份、实测净质量及验收。 |
| required_quality_disclosure | UUID、供应方及化学牌号缺口、实际测量、分配、排除及证据限制。不虚构寿命及效率。 |
| update_trigger | 物料表配置、路线、供应方、控制选针机构或验收试验变更。 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-textile | official_guidance | UNSD CPC Version 3.0 Explanatory Notes (30 June 2025), pp. 237–238. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 当前辅助机械、主机及零件边界。 |
| un-hs844811 | official_guidance | UNSD HS 2012 844811. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/32/844811 | 多臂、提花及卡片辅助机械实例；对照明确为 CPC2.1，仅作佐证。 |
| staubli-s3200 | handbook | Stäubli Rotary dobby series S3200, public product specification. https://www.staubli.com/global/en/textile/products/dobby-machine/rotary-dobby-series-s3200.html | 壳体、传动、控制及条件性冷却配置；不确定牌号或工厂能源默认值。 |
| staubli-sx-pro | handbook | Stäubli SX PRO, public product specification. https://www.staubli.com/global/en/textile/products/jacquard-machine/flat-terry-technical-fabric-sx-pro.html | 刀架、选针模块、集成供电、控制器、通风及配置通丝；反证通用多臂配方。 |
| bonas-ji | handbook | BONAS Ji Jacquards, Product tour. https://bonas.be/components/ji-jacquards | 独立的电子微型选针、双凸轮驱动、控制器及定制通丝技术。不提供制造质量或能耗因子。 |
