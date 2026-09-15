---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.felt
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 毛毡

## 1. 范围与适用性

本 PCR 适用于工厂门口、归入 CPC 27921 的未制成品毛毡，包括采用湿法毡化/缩绒形成的羊毛或其他动物纤维毛毡，以及作为毛毡销售的干法机械缠结毛毡。范围包括单一纤维或混合纤维产品，可带或不带已声明的粘合剂或整理剂，以卷、片、垫或工业裁切长度交付，并处于进一步加工为另行分类制品之前。

本 PCR 不包括 CPC 27922 非织造物、毛毡地面铺装物、服装、帽坯和成品头饰、已制成技术制品、归入其他类别的涂层或浸渍织物、毡纸，以及加工成最终制品的下游步骤。生产者必须声明纤维组成、成毡路线、单位面积质量、厚度试验条件、粘合剂或整理剂附着量、再生含量、含湿率/调湿基准和包装纳入情况。过程图是数据采集模型；路线不适用的卡片须以证据说明不适用，而不得默认赋零。`unsd-cpc-3-2025`、`us-epa-textile-study-1979` 和 `us-epa-textile-development-1982` 支持类别边界和路线分解。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.felt |
| classification_refs | CPC 3.0: 27921 Felt |
| covered_products | 采用湿法毡化/缩绒或机械针刺制成并作为毛毡销售的卷、片、垫或工业裁切长度未制成品毛毡 |
| excluded_products | CPC 27922 非织造物；毛毡地面铺装物；毛毡服装或头饰；已制成技术制品；毡纸；归入其他类别的涂层或浸渍纺织物 |
| representative_product | 具有已声明纤维组成、成毡路线、单位面积质量、厚度、整理和包装状态的工厂门口成品毛毡 |
| production_route | 纤维接收、开松/混合及成网或成毡胎；条件性针刺或湿法毡化/缩绒；干燥、整理、检验、裁切和包装 |
| market_state | 在厂内交付、已声明调湿或干质量基准的成品毛毡，包装状态按声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应满足已声明纤维组成、结构和性能规格的成品毛毡 |
| How much | 按已声明调湿或干质量基准计的 1 kg 成品毛毡 |
| How well | 符合已声明单位面积质量、规定压力下厚度、纤维组成、路线、粘合剂/整理剂附着量和验收规格 |
| How long or cycle | 工厂门口的一个生产批次；不主张使用寿命等效性 |
| reference_flow_link | 离开最终检验、计入已声明包装状态的成品毛毡净验收质量 |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 kg |
| reference_product_flow | Felt `144717eb-3301-402a-89c8-3ba5a969425a` |
| reference_flow_property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| reference_unit_group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| reference_unit | kg |
| required_qualifiers | 纺织纤维名称及质量百分比; 原生/再生比例; 湿法毡化/缩绒或针刺路线; 单位面积质量 g/m2; 厚度 mm 及施加压力/试验方法; 含湿率/调湿基准; 粘合剂与整理剂身份/附着量; 颜色或染色状态; 卷/片尺寸; 包装纳入情况; 生产地域和参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品毛毡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有前景交换归一化至按已声明调湿或干质量基准计的 1 kg 验收成品毛毡，并说明所用基准。 |
| `basis_weight` | 成品毛毡规格 | 单位面积质量 | g/m2 | 当受试结构适用时，按 ISO 9073-1:2023 测定并报告单位面积质量；否则采用已声明的等效验证方法。 |
| `felt_thickness` | 成品毛毡规格 | 长度 | mm | 报告厚度时同时报告施加压力和试验方法；结构处于非织造物范围内时适用 ISO 9073-2:1995。 |
| `conditioning_basis` | 物理试验和参考质量 | 温度和相对湿度 | degC 和 % RH | 按 ISO 139:2005 调湿和试验纺织试样，或披露双方同意的替代大气；未经换算不得混用调湿质量和烘干质量。 |
| `fibre_composition` | 成品毛毡和纤维投入 | 质量分数 | % by mass | 使用适用法规规定的纺织纤维名称，并保存确定组成所用的取样、分析方法、结果和准确度证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 纺织纤维以及所有粘合剂、加工化学品、包装组件、外购能源载体和水在毛毡制造场址接收，并声明供应商身份和质量状态。 |
| starting_condition_role | 这些接收投入构成前景制造起点；其生产保留在链接的上游数据集中。 |
| product_classification_scope | 前景输出为 CPC 27921 未制成品毛毡，处于加工成地毯、服装、头饰或其他制成品之前。 |
| recursive_input_rule | 厂内生产的毛毡网和毛毡中间品保留为链接的前景交换；外购并用作投入的毛毡记录为独立上游产品，不得重标为纤维。 |
| upstream_dataset_requirement | 每种外购纤维、化学品、供水、燃料、供电和包装材料必须链接与组成和地域相匹配的数据集。 |
| disclosure | 声明纤维组成和来源、再生比例、生产路线、湿加工操作、粘合剂/整理配方、能源供应、水源、废物去向、分配、质量基准、包装边界、地域和参考期。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景毛毡制造 | 纳入投入接收和搬运、纤维准备、成网/成毡胎、适用成毡路线、干燥、整理、检验、裁切、返工、废物处理和包装，直至工厂门口验收毛毡。 | `us-epa-textile-study-1979`; `us-epa-textile-development-1982` |
| `boundary_route_disclosure` | 条件性操作 | 仅在实际实施时纳入湿法缩绒、洗涤、染色、粘合剂施加、热处理和现场燃烧；披露排除的路线步骤及其不适用证据。 | `ec-jrc-textiles-bref-2023`; `us-epa-textile-development-1982` |
| `boundary_upstream_links` | 外购投入 | 在链接数据集中建模上游生产，不在前景过程重复建模，并保持供应商/地域/技术匹配。 | `ec-pef-method-2021`; `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_fibre_web` | 纤维准备及成网或成毡胎 | required | 所有毛毡生产 | 接收、开松、混合、梳理并形成已声明纤维网或毡胎 | 1 kg 验收成品毛毡 |
| `p_needle_felting` | 机械针刺成毡 | conditional | 已声明针刺毛毡路线 | 以带钩刺针对纤维网进行机械缠结 | 1 kg 验收成品毛毡 |
| `p_wet_felting` | 湿法毡化和缩绒 | conditional | 已声明湿法毡化或缩绒路线 | 通过机械作用、水分、热和任何已声明化学助剂使可毡化纤维互锁 | 1 kg 验收成品毛毡 |
| `p_finishing_packing` | 干燥、整理、检验、裁切和包装 | required | 所有毛毡生产；各整理和燃料卡仍为条件性 | 将毛毡加工至已声明销售规格和工厂门口状态 | 1 kg 验收成品毛毡 |

### 过程：纤维准备及成网或成毡胎（`p_fibre_web`）

#### 输入

##### 产品流

###### 毛毡生产接收的羊毛纤维（`raw_wool_fibre`）

仅对声明组成含羊毛的产品记录羊毛纤维，并保留等级、来源、再生比例、净毛/含脂状态和含湿率基准。

- 选定流：Wool fibre
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用羊毛纤维净质量，并按库存变化和退料调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_receipts`
- 来源：`eu-textile-regulation-1007-2011`; `us-epa-textile-study-1979`

###### 毛毡生产接收的聚酯短纤维（`polyester_staple_fibre`）

仅在产品含聚酯短纤维时记录，并保留聚合物等级、纤维尺寸、再生比例和供应商批次。

- 选定流：Polyester staple fibre
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用聚酯短纤维净质量，并按库存变化和退料调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_receipts`
- 来源：`eu-textile-regulation-1007-2011`; `us-epa-textile-study-1979`

###### 毛毡生产接收的粘胶短纤维（`viscose_staple_fibre`）

仅在产品含粘胶短纤维时记录，并保留纤维尺寸、供应商等级及再生或回收含量声明。

- 选定流：Viscose staple fibre
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用粘胶短纤维净质量，并按库存变化和退料调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_receipts`
- 来源：`eu-textile-regulation-1007-2011`; `us-epa-textile-study-1979`

###### 开松、混合和成网用电（`electricity_fibre_prep`）

记录纤维开松、混合、梳理、铺网、除尘和直接相关辅助设备消耗的计量电力。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：分配至生产批次或期间的分表读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_prep_electricity`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备纤维网或毡胎（`prepared_fibre_web`）

记录转入适用成毡路线的实测中间品，并将纤维混合和网结构链接到批次。

- 选定流：Prepared textile fibre web
- 流属性/单位：Mass / kg
- 数量规则：从纤维准备转出的纤维网或毡胎实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_web_output`
- 来源：`us-epa-textile-study-1979`

##### 废物流

###### 纤维准备废物（`fibre_preparation_waste`）

记录开松、梳理、成网、过滤器和清洁产生的纤维损失，并与厂内返回生产的材料分开。

- 选定流：Textile fibre preparation waste
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录厂内再用后的过程外运废物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_prep_waste`
- 来源：`ec-jrc-textiles-bref-2023`

##### 基本流

###### 纤维准备释放的颗粒物（`particulate_matter_fibre_prep`）

仅记录治理后的实测或许可支持颗粒物排放，并注明粒径组分和空气区室。

- 选定流：Particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：生产期间监测或试验得到的颗粒物排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_prep_pm`
- 来源：`ec-jrc-textiles-bref-2023`

### 过程：机械针刺成毡（`p_needle_felting`）

#### 输入

##### 产品流

###### 进入针刺的已准备纤维网（`prepared_web_input`）

记录转入针刺机的具体已准备纤维网，并链接到 `p_fibre_web` 的相应输出。

- 选定流：Prepared textile fibre web
- 流属性/单位：Mass / kg
- 数量规则：进入针刺生产线的纤维网实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_needling_material`
- 来源：`us-epa-needle-punched-filtration-1976`

###### 针刺用电（`electricity_needling`）

记录预针刺、针刺机、输送、除尘和直接相关控制设备的用电。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：分配至针刺生产批次或期间的分表读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_needling_electricity`
- 来源：`us-epa-needle-punched-filtration-1976`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 针刺毛毡中间品（`needle_felt_intermediate`）

记录离开针刺的中间品，并将针刺密度、刺入深度、通过次数、单位面积质量和宽度链接到批次。

- 选定流：Needle-felted textile intermediate
- 流属性/单位：Mass / kg
- 数量规则：转入整理的中间品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_needling_outputs`
- 来源：`us-epa-needle-punched-filtration-1976`

##### 废物流

###### 针刺线裁边和不合格废物（`needle_trim_waste`）

记录扣除有记录厂内再用后的裁边、开机料、断网不合格品和针刺不合格材料。

- 选定流：Needle-felt textile waste
- 流属性/单位：Mass / kg
- 数量规则：从针刺过程外运的废物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_needling_outputs`
- 来源：`us-epa-needle-punched-filtration-1976`

##### 基本流

### 过程：湿法毡化和缩绒（`p_wet_felting`）

#### 输入

##### 产品流

###### 进入湿法毡化的富羊毛毡胎（`wool_batt_input`）

记录转入湿法毡化或缩绒的已声明富羊毛毡胎，包括混合组成、调湿状态和厂内转移身份。

- 选定流：Wool-rich textile fibre batt
- 流属性/单位：Mass / kg
- 数量规则：进入湿法毡化或缩绒的毡胎实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials`
- 来源：`us-epa-textile-study-1979`

###### 湿法毡化和洗涤用工艺水（`process_water_wet_felting`）

记录进入润湿、缩绒、洗涤和漂洗的供水；不得用废水量抵扣进水量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：生产批次工艺分表读数或槽体积记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_water`
- 来源：`us-epa-textile-development-1982`; `ec-jrc-textiles-bref-2023`

###### 湿法毡化助剂碳酸钠（`sodium_carbonate_wet_felting`）

仅在批准产品配方使用碳酸钠时记录，并保留化学品等级、浓度和领用记录。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：湿法毡化批次领用化学品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_materials`
- 来源：`us-epa-textile-study-1979`

###### 湿法毡化外购蒸汽（`steam_wet_felting`）

仅在外购蒸汽跨越场址边界用于浴液加热时记录，并说明压力和冷凝水处理。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：供应至湿法毡化和缩绒的计量蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_steam`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法毡化中间品（`wet_felt_intermediate`）

记录离开湿法毡化/缩绒的毛毡，并将收缩、含湿率、洗涤状态和质量基准链接到批次。

- 选定流：Wet-felted textile intermediate
- 流属性/单位：Mass / kg
- 数量规则：转入干燥和整理的中间品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_outputs_waste`
- 来源：`us-epa-textile-study-1979`; `us-epa-textile-development-1982`

##### 废物流

###### 湿法毡化废水（`wet_felting_wastewater`）

记录润湿、缩绒、洗涤和漂洗转入场内或场外处理的废水。

- 选定流：Wet-felting wastewater
- 流属性/单位：Volume / m3
- 数量规则：与湿法毡化生产期间关联的实测排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_outputs_waste`
- 来源：`us-epa-textile-development-1982`; `ec-jrc-textiles-bref-2023`

###### 湿加工羊毛纤维污泥（`wool_fibre_sludge`）

将捕集纤维固体和处理污泥与液态废水分开记录，并说明去向。

- 选定流：Wool-fibre wet-processing sludge
- 流属性/单位：Mass / kg
- 数量规则：外运湿污泥和干固体的实测质量，并说明质量基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_outputs_waste`
- 来源：`ec-jrc-textiles-bref-2023`

##### 基本流

### 过程：干燥、整理、检验、裁切和包装（`p_finishing_packing`）

#### 输入

##### 产品流

###### 进入整理的针刺毛毡中间品（`needle_felt_input_finishing`）

仅对针刺路线记录此投入，并链接到相应过程输出。

- 选定流：Needle-felted textile intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入整理的中间品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`us-epa-textile-study-1979`

###### 进入整理的湿法毛毡中间品（`wet_felt_input_finishing`）

仅对湿法路线记录此投入，并链接到相应过程输出。

- 选定流：Wet-felted textile intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入干燥和整理的中间品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`us-epa-textile-development-1982`

###### 干燥、整理和包装用电（`electricity_finishing`）

记录干燥机、压光机、压机、裁切机、抽风、检验和包装设备的计量用电。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：分配至整理生产批次或期间的分表读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：`ec-jrc-textiles-bref-2023`

###### 干燥燃烧天然气（`natural_gas_drying`）

仅在前景边界内为干燥或热定型燃烧天然气时记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：按已记录低位或高位热值基准计量的燃气消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：`ec-jrc-textiles-bref-2023`

###### 整理施加的丙烯酸乳胶粘合剂（`acrylic_latex_binder`）

仅在产品含丙烯酸乳胶粘合剂时记录，并使用供应湿质量且单独声明固含量。

- 选定流：Acrylic latex binder
- 流属性/单位：Mass / kg
- 数量规则：批次领用湿粘合剂净质量，并保留固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`us-epa-textile-study-1979`

###### 毛毡用瓦楞纸板箱（`corrugated_paperboard_box`）

仅在已声明工厂门口包装状态含瓦楞纸箱时记录。

- 选定流：Corrugated paperboard box
- 流属性/单位：Mass / kg
- 数量规则：用于验收成品毛毡的包装实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021`

###### 毛毡用低密度聚乙烯包装膜（`ldpe_packaging_film`）

仅在已声明工厂门口包装状态含 LDPE 膜时记录。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：用于验收成品毛毡的薄膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收成品毛毡（`finished_felt`）

仅记录通过最终检验的可销售毛毡；不合格材料进入独立废物或返工记录。

- 选定流：毛毡 `144717eb-3301-402a-89c8-3ba5a969425a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明调湿基准计的验收净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_felt`
- 来源：`unsd-cpc-3-2025`; `iso-9073-1-2023`; `iso-139-2005`

##### 废物流

###### 毛毡裁切边角料和不合格成品（`felt_offcuts`）

记录扣除有记录厂内返工后从过程外运的裁切边角料和不合格成品毛毡。

- 选定流：Felt offcut waste
- 流属性/单位：Mass / kg
- 数量规则：按去向计量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`ec-jrc-textiles-bref-2023`

###### 整理废水（`finishing_wastewater`）

仅在本过程发生湿整理或粘合剂清洗时记录整理和设备清洗废水。

- 选定流：Textile finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：整理生产期间转入处理的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`ec-jrc-textiles-bref-2023`

##### 基本流

###### 现场天然气干燥产生的化石二氧化碳（`carbon_dioxide_fossil_drying`）

当前景边界内燃烧天然气时记录烟道实测化石二氧化碳。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：生产期间烟道实测排放；不得替换为无来源通用因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combustion_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

###### 现场天然气干燥产生的氮氧化物（`nitrogen_oxides_drying`）

发生现场燃烧时，按报告的物种约定和空气区室记录氮氧化物监测值。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：生产期间烟道监测排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收成品毛毡
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combustion_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用设备、公用工程和处理 | 优先按生产线、过程、批次、计量表、时间记录或处理批次细分，在可行范围内避免分配。 | `iso-14044-2006`; `ec-pef-method-2021` |
| `allocation_physical` | 无法避免的共用前景交换 | 无法细分时，使用机器时间、计量能源、浴液体积或处理质量等有记录的物理因果驱动量；无正当理由不得默认经济分配。 | `iso-14044-2006`; `ec-pef-method-2021` |
| `allocation_rework` | 厂内回用纤维网、裁边和不合格毛毡 | 厂内返工保留在前景系统内，分别报告总产生量和返回质量；前景清单内不计避免产品收益。 | `ec-pef-method-2021` |
| `allocation_external_recycling` | 离场回收材料 | 记录实际废物流和去向；任何生命周期末端或再生含量处理仅按下游研究方法应用，并与前景实测质量分开披露。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fibre_receipts` | `p_fibre_web` | `raw_wool_fibre`; `polyester_staple_fibre`; `viscose_staple_fibre` | 地磅、秤、领用和库存记录 | 材料身份；供应商批次；毛/皮/净质量；含湿率基准；期初库存；期末库存；退料；再生比例 | 校准称量和库存核对 | kg | 每次接收和领用 | 代表性生产期，至少一个完整批次 | 供应已声明产品的全部纤维库 | 净领用量 = 领用 + 期初库存 - 期末库存 - 有记录退料 | 校准证书；供应商规格；组成分析；库存核对 |
| `cp_fibre_prep_electricity` | `p_fibre_web` | `electricity_fibre_prep` | 分表记录 | 表号；起止读数；倍率；停机；加工产品和质量 | 专用电表或有记录共表分配 | kWh | 班次或批次 | 与产品质量同期间 | 纤维准备线及相关抽风 | 汇总修正读数，仅分配有记录共用负荷 | 电表校准；读数导出；分配日志 |
| `cp_fibre_web_output` | `p_fibre_web` | `prepared_fibre_web` | 中间品转移记录 | 批号；混合组成；网取向；单位面积质量；宽度；调湿质量 | 校准在线或批次称量 | kg | 每次转移 | 完整批次 | 纤维准备输出 | 汇总转入各成毡路线的验收转移量 | 秤检查；批次谱系；操作员签字 |
| `cp_fibre_prep_waste` | `p_fibre_web` | `fibre_preparation_waste` | 废物容器记录 | 废物类型；纤维组成；毛/皮/净质量；厂内返回；去向 | 容器称量和外运核对 | kg | 每个容器 | 与产品质量同期间 | 开松、梳理、铺网、过滤器和清洁 | 外运质量减有记录厂内返回 | 秤校准；废物联单；回用日志 |
| `cp_fibre_prep_pm` | `p_fibre_web` | `particulate_matter_fibre_prep` | 烟道或工作区排风监测 | 取样点；粒径组分；浓度；气体体积；运行小时；治理状态 | 适用验证监测方法 | kg | 许可或监测活动频率 | 代表性运行 | 全部相关排风点 | 浓度乘修正气体体积并按区室汇总 | 实验室报告；方法；检出限；运行日志 |
| `cp_needling_material` | `p_needle_felting` | `prepared_web_input` | 转移和秤记录 | 批号；纤维网质量；混合组成；宽度；单位面积质量 | 校准称量 | kg | 每批 | 完整针刺批次 | 针刺线投入 | 汇总转移纤维网质量 | 秤检查；批次谱系 |
| `cp_needling_electricity` | `p_needle_felting` | `electricity_needling` | 分表记录 | 表读数；倍率；运行时间；产品质量 | 专用电表或有记录共表分配 | kWh | 班次或批次 | 与产品质量同期间 | 针刺机和相关设备 | 汇总修正读数 | 校准；读数导出；分配日志 |
| `cp_needling_outputs` | `p_needle_felting` | `needle_felt_intermediate`; `needle_trim_waste` | 生产和废物记录 | 合格中间品质量；针刺密度；刺入深度；通过次数；裁边/不合格质量；厂内返工；去向 | 校准称量和批次核对 | kg | 每批 | 完整针刺批次 | 针刺线 | 分别报告合格输出、总不合格和厂内返回 | 秤检查；机器配方；废物联单；批次核对 |
| `cp_wet_materials` | `p_wet_felting` | `wool_batt_input`; `sodium_carbonate_wet_felting` | 秤、配方和领用记录 | 批号；毡胎质量；化学品身份；等级；浓度；领用/退回质量 | 校准称量和批准配方核对 | kg | 每批 | 完整湿法毡化批次 | 湿法毡化/缩绒设备 | 按原子材料记录净领用质量 | 秤校准；SDS/规格；签字配方和批记录 |
| `cp_wet_water` | `p_wet_felting` | `process_water_wet_felting` | 水分表或槽记录 | 水源；起止读数；槽体积；批号；漂洗次数 | 校准分表或经核验槽体积计算 | m3 | 批次或班次 | 与产品质量同期间 | 润湿、缩绒、洗涤和漂洗 | 记录总进水，不以废水抵扣 | 校准；表计导出；批记录 |
| `cp_wet_steam` | `p_wet_felting` | `steam_wet_felting` | 蒸汽表记录 | 质量/能量读数；压力；冷凝水回收；供应商边界 | 校准蒸汽表 | MJ | 批次或班次 | 与产品质量同期间 | 湿法毡化用热设备 | 按已声明能量基准汇总供汽 | 校准；压力记录；供应商账单 |
| `cp_wet_outputs_waste` | `p_wet_felting` | `wet_felt_intermediate`; `wet_felting_wastewater`; `wool_fibre_sludge` | 输出秤、废水表和废物记录 | 中间品质量/含湿率；废水体积；污泥湿/干质量；去向 | 校准称量、流量计量和外运核对 | kg 或 m3 | 每批或每次排放 | 完整湿法批次及匹配处理期 | 湿过程及处理交接 | 分别报告每个原子输出并说明湿/干基准 | 校准；实验室固含量结果；废物联单；批次核对 |
| `cp_finishing_materials` | `p_finishing_packing` | `needle_felt_input_finishing`; `wet_felt_input_finishing`; `acrylic_latex_binder` | 转移、秤、配方和领用记录 | 中间品身份/质量；粘合剂身份；湿质量；固含量；退料 | 校准称量和配方核对 | kg | 每批 | 完整理批次 | 整理线 | 按原子材料记录净领用质量 | 秤校准；供应商规格；签字配方；批次谱系 |
| `cp_finishing_energy` | `p_finishing_packing` | `electricity_finishing`; `natural_gas_drying` | 电力和燃气表记录 | 读数；倍率；热值基准；运行时间；产品质量 | 校准表计和有记录共表分配 | kWh 或 MJ | 班次或批次 | 与产品质量同期间 | 干燥、压光、裁切和包装设备 | 按能源载体汇总修正读数 | 校准；表计导出；账单；分配日志 |
| `cp_packaging` | `p_finishing_packing` | `corrugated_paperboard_box`; `ldpe_packaging_film` | 包装领用记录 | 材料身份；供应商批次；单位质量；领用数量；退料；对应产品质量 | 数量乘核验单位质量或直接称量 | kg | 每包装批 | 完整产品批次 | 包装区 | 按包装组件记录净领用质量 | 单位质量检查；供应商规格；领退记录 |
| `cp_finished_felt` | `p_finishing_packing` | `finished_felt` | 最终秤和检验记录 | 批号；毛/皮/净质量；调湿基准；单位面积质量；厚度/压力；组成；路线；整理；合格/不合格状态 | 校准称量和规格试验 | kg | 每验收批 | 完整生产批次 | 最终检验和出厂边界 | 仅汇总验收净质量 | 校准；ISO/等效试验报告；分析证书；检验放行 |
| `cp_finishing_wastes` | `p_finishing_packing` | `felt_offcuts`; `finishing_wastewater` | 废物秤、废水表和外运记录 | 废物身份；质量/体积；厂内返工；处理去向；排放期间 | 校准称量或流量计量 | kg 或 m3 | 每容器或每次排放 | 与产品质量同期间 | 裁切、整理和清洗 | 扣除有记录厂内返回后报告外运废物 | 校准；废物联单；废水记录；返工日志 |
| `cp_combustion_emissions` | `p_finishing_packing` | `carbon_dioxide_fossil_drying`; `nitrogen_oxides_drying` | 烟道监测记录 | 污染物种类；浓度；气体体积；氧校正；运行小时；燃料用量 | 适用验证烟气试验或连续监测 | kg | 许可或监测活动频率 | 代表性燃烧运行 | 现场天然气排气点 | 仅以实测浓度和修正气体体积计算 | 试验报告；方法；校准气；检出限；运行日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 期间或批次数量 / 同一已声明质量基准的验收成品毛毡质量 | 原子流数量；验收 `finished_felt` 质量 | 每 1 kg 成品毛毡数量 | `iso-14044-2006`; `ec-pef-method-2021` |
| `calc_fibre_issue` | 纤维投入 | 净纤维领用 = 领用 + 期初库存 - 期末库存 - 供应商退料；厂内返回纤维另行记录 | 领用、库存和退料记录 | 纤维净投入 kg | `ec-pef-method-2021` |
| `calc_fibre_composition` | 成品毛毡组成 | 使用已声明法规或验证分析方法计算质量百分比，并报告约定水分公定回潮率和准确度 | 试验结果；样品预处理；水分公定回潮率；组分质量 | 纤维质量百分比 | `eu-textile-regulation-1007-2011` |
| `calc_mass_reconciliation` | 各过程和完整前景系统 | 将原子质量投入与产品输出、单独实测废物、库存变化和实测排放比较；调查重大未解释残差，不将其赋给通用流 | 投入/输出质量；库存变化；水分变化；排放 | 签字质量核对记录 | `iso-14044-2006`; `ec-pef-method-2021` |
| `calc_shared_resource` | 共用表计和处理 | 仅在无法细分后，使用 `allocation_physical` 选定且有记录的物理因果驱动量分配 | 共用总量；因果驱动量 | 分配后的原子流数量 | `iso-14044-2006`; `ec-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品、中间品和外购投入 | 保留每个使用流的供应商/批次身份、纤维组成、路线、再生比例、粘合剂/整理、含湿率基准和 Tiangong UUID 决策。 | 供应商规格；批次谱系；组成试验；manifest UUID 决策 |
| `dq_measurement` | 前景数量 | 使用校准表计或秤，并保留读数区间、倍率、校正、检出限和分配记录。 | 校准证书；原始导出；实验室报告；签字计算 |
| `dq_temporal` | 前景数据集 | 覆盖包含所有已声明路线且至少一个完整生产批次的代表性期间，并披露停机、开机和异常事件处理。 | 生产日历；批次清单；异常日志 |
| `dq_completeness` | 清单 | 核对所有适用过程卡并记录不适用性；纤维、能源载体、包装组件、废物和排放均保持为各自的具体交换。 | 完成的适用性矩阵；质量核对；清单审查 |
| `dq_testing` | 单位面积质量、厚度和组成 | 说明试验方法、试样调湿、样本量、适用时施加压力、结果和不确定度/准确度。 | ISO 139、ISO 9073-1/2 或已声明等效试验报告；组成分析 |
| `dq_uuid` | 带 UUID 和无 UUID 行 | 仅在 hybrid 候选发现和公共 state100 直读确认准确名称、类型、CPC 或角色、流属性和单位后使用 UUID；否则保留逐行拒绝原因。 | Tiangong 回读证据；manifest 查找决策 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求已接受的 state100 Felt 产品流 UUID、CPC 27921 身份、Mass 属性 UUID、1 kg 单位和全部必需限定信息。 | `unsd-cpc-3-2025` |
| `validate_scope` | 产品分类 | 本 PCR 拒绝非织造物、地面铺装物、服装、头饰、毡纸和其他另行分类的制成品。 | `unsd-cpc-3-2025` |
| `validate_route` | 过程完整性 | 必须纳入 `p_fibre_web` 和 `p_finishing_packing`；`p_needle_felting` 与 `p_wet_felting` 至少纳入一个，并为每个省略的条件性操作提供证据。 | `us-epa-textile-study-1979`; `us-epa-textile-development-1982` |
| `validate_atomic_flows` | 清单 | 拒绝集合标签、组合能源载体、未明确纤维混合物、组合包装、组合废物，以及选定流并非单个原子交换的卡片。 | `iso-14044-2006` |
| `validate_mass_basis` | 归一化 | 所有分子记录和验收产品质量必须使用同一期间及已声明调湿/干质量基准。 | `iso-139-2005`; `iso-14044-2006` |
| `validate_quality_tests` | 产品规格 | 要求单位面积质量、厚度、调湿和组成方法及适用结果元数据；ISO 9073 范围不适用时须声明替代方法。 | `iso-9073-1-2023`; `iso-9073-2-1995`; `iso-139-2005`; `eu-textile-regulation-1007-2011` |
| `validate_allocation` | 共用资源和废物 | 要求有记录的细分尝试、仍需分配时的物理因果驱动量，以及总废物/厂内返工独立记录。 | `iso-14044-2006`; `ec-pef-method-2021` |
| `validate_uuid_status` | 所有清单行 | 以 hybrid 和 state100 直读确认已接受 UUID；要求每个无 UUID 行在 manifest 审查元数据中保留具体拒绝原因。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 可供审查并随后发布为二手或背景数据集的前景毛毡制造数据集 |
| downstream_use | 需要工厂门口 CPC 27921 毛毡的 LCA 过程数据集和生命周期模型 |
| allowed_use | 已声明纤维组成、成毡路线、单位面积质量、厚度、整理、地域、技术、质量基准和包装状态与下游系统匹配 |
| excluded_use | 非织造物、毛毡地面铺装物、毛毡制成品、毡纸，或纤维化学、路线、整理、性能、地域或包装边界显著不同的产品 |
| required_metadata | PCR id/version；CPC 27921；UUID 决策；纤维组成和再生比例；湿法/针刺路线；单位面积质量；厚度和压力；调湿基准；粘合剂/整理；包装；地域；技术；参考期；分配；数据质量；废物去向 |
| required_quality_disclosure | 原始数据比例、表计和试验覆盖、取样和调湿方法、组成方法、质量核对、分配、缺失 UUID、代理上游数据集、异常事件和审查状态 |
| update_trigger | 纤维混合或再生比例、成毡路线、粘合剂/整理、单位面积质量或厚度等级、能源/水系统、废物处理、包装、场址/技术、分配方法、Tiangong 身份、来源标准或代表期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | 联合国统计司，CPC Version 3.0 结构和解释性说明，2025-06-30 更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 27921 身份、相邻排除项和产品边界 |
| `us-epa-textile-study-1979` | official_guidance | US EPA, Technical Study Report: Textile Mills Point Source Category, NEPIS 9101NAZP, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101NAZP.TXT | 毛毡材料身份；成网；机械、水分、热和化学作用；纤维准备、固结、干燥和整理分解 |
| `us-epa-textile-development-1982` | official_guidance | US EPA, Development Document for Effluent Limitations Guidelines and Standards for the Textile Mills Point Source Category, 1982, https://19january2021snapshot.epa.gov/sites/static/files/2016-04/documents/textile-mills_dd_1982.pdf | 毛毡织物路线、缩绒/洗涤用水、废水和过程边界完整性 |
| `us-epa-needle-punched-filtration-1976` | official_guidance | US EPA, Efficient Use of Fibrous Structures in Filtration, NEPIS 91015XYA, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=91015XYA.TXT | 针刺机制、纤维网通过次数、针刺参数和针刺毛毡过程记录 |
| `ec-jrc-textiles-bref-2023` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, EUR 31392 EN, DOI 10.2760/355887, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874 | 纤维准备、羊毛缩绒、整理、水/废水、能源、排放监测和数据质量控制 |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation C(2021) 9332 and Annexes on Environmental Footprint methods, https://environment.ec.europa.eu/document/download/cb899bd7-bb06-491d-9989-c856a401fcd0_en | 系统建模、前景数据质量、分配、回收披露和包装边界 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | 清单、目标/范围、分配、报告、质量和校验原则 |
| `iso-9073-1-2023` | standard | ISO 9073-1:2023, Nonwovens — Test methods — Part 1: Determination of mass per unit area, https://www.iso.org/standard/83590.html | 适用的单位面积质量测定和报告 |
| `iso-9073-2-1995` | standard | ISO 9073-2:1995, Textiles — Test methods for nonwovens — Part 2: Determination of thickness, https://www.iso.org/standard/16652.html | 规定压力下适用厚度测定 |
| `iso-139-2005` | standard | ISO 139:2005, Textiles — Standard atmospheres for conditioning and testing, https://www.iso.org/standard/35179.html | 调湿和物理试验大气 |
| `eu-textile-regulation-1007-2011` | standard | Regulation (EU) No 1007/2011 on textile fibre names, labelling and quantitative analysis, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011R1007 | 纤维命名、质量组成、取样/分析和准确度证据 |
